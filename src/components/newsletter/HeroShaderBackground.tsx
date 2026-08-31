"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ShaderLabComposition, type ShaderLabConfig } from "@basementstudio/shader-lab";

const config: ShaderLabConfig = {
  layers: [
    {
      blendMode: "normal",
      compositeMode: "filter",
      maskConfig: {
        invert: false,
        mode: "multiply",
        source: "luminance",
      },
      hue: 0,
      id: "28624252-a15b-47c8-8e0d-0fca7241d55b",
      kind: "source",
      name: "Gradient",
      opacity: 0.6,
      params: {
        preset: "custom",
        activePoints: 3,
        point1Color: "#0E0C0C",
        point1Position: [-0.53, -0.040000000000000036],
        point1Weight: 0.42,
        point2Color: "#A4A4A4",
        point2Position: [1.0899999999999999, 0],
        point2Weight: 1.2,
        point3Color: "#000000",
        point3Position: [0.88, -0.26],
        point3Weight: 2.16,
        point4Color: "#3B4148",
        point4Position: [-0.34, 0.52],
        point4Weight: 0.82,
        point5Color: "#F3E7D0",
        point5Position: [0.58, -0.76],
        point5Weight: 0.48,
        noiseType: "ridge",
        noiseSeed: 78.5,
        warpAmount: 0.1,
        warpScale: 2.59,
        warpIterations: 1,
        warpDecay: 2.02,
        warpBias: 0.53,
        vortexAmount: 0.69,
        animate: true,
        motionAmount: 0.21,
        motionSpeed: 0.49,
        falloff: 2.55,
        tonemapMode: "cinematic",
        glowStrength: 0,
        glowThreshold: 0,
        grainAmount: 0.08,
        vignetteStrength: 0.32,
        vignetteRadius: 0,
        vignetteSoftness: 1,
      },
      saturation: 1,
      type: "gradient",
      visible: true,
    },
  ],
  timeline: {
    duration: 5.041667,
    loop: false,
    tracks: [],
  },
};

const FALLBACK_IMAGE = "/images/shader-1930-21-3.png";

export function HeroShaderBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = useState(1);
  // "checking" renders the static fallback so there's no blank/black flash
  // while we probe WebGPU; "ready" mounts the live shader; "unsupported"
  // stays on the fallback for good.
  const [status, setStatus] = useState<"checking" | "ready" | "unsupported">("checking");
  const unsupported = status !== "ready";

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const updateOpacity = () => {
      const rect = el.getBoundingClientRect();
      const progress = Math.min(Math.max(-rect.top / rect.height, 0), 1);
      setOpacity(1 - progress);
    };

    updateOpacity();
    window.addEventListener("scroll", updateOpacity, { passive: true });
    window.addEventListener("resize", updateOpacity);
    return () => {
      window.removeEventListener("scroll", updateOpacity);
      window.removeEventListener("resize", updateOpacity);
    };
  }, []);

  // `"gpu" in navigator` only means the API exists, not that a GPU adapter
  // and device can actually be created (older drivers, disabled flags,
  // virtualized environments, some sandboxed browsers). Probe for a real
  // adapter/device before ever mounting the composition, mirroring what the
  // renderer does internally, so unsupported environments never try.
  useEffect(() => {
    let cancelled = false;
    async function probe() {
      try {
        const gpu = (navigator as Navigator & { gpu?: unknown }).gpu as
          | { requestAdapter: () => Promise<{ requestDevice: () => Promise<{ destroy: () => void } | null> } | null> }
          | undefined;
        if (!gpu) throw new Error("WebGPU not available");
        const adapter = await gpu.requestAdapter();
        if (!adapter) throw new Error("No WebGPU adapter");
        // Only probe that a device *can* be created, then release it right
        // away — holding onto it would compete with the real device the
        // renderer creates next and can trigger spurious device-lost errors.
        const device = await adapter.requestDevice();
        if (!device) throw new Error("No WebGPU device");
        device.destroy();
        if (!cancelled) setStatus("ready");
      } catch {
        if (!cancelled) setStatus("unsupported");
      }
    }
    void probe();
    return () => {
      cancelled = true;
    };
  }, []);

  // Defense in depth: if the probe above succeeds but the runtime still
  // fails during actual init (real-world flakiness), three.js's internal
  // WebGL2 fallback can throw an unhandled rejection that never reaches
  // `onRuntimeError`. Catch it here so we still recover instead of showing
  // a crash overlay and a black hero.
  useEffect(() => {
    const handleRejection = (event: PromiseRejectionEvent) => {
      const reason = event.reason;
      const message = reason instanceof Error ? reason.message : String(reason);
      const stack = reason instanceof Error ? (reason.stack ?? "") : "";
      const looksLikeShaderLabFailure =
        message.includes("getSupportedExtensions") ||
        stack.includes("three_webgpu") ||
        stack.includes("shader-lab");
      if (looksLikeShaderLabFailure) {
        event.preventDefault();
        setStatus("unsupported");
      }
    };
    window.addEventListener("unhandledrejection", handleRejection);
    return () => window.removeEventListener("unhandledrejection", handleRejection);
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0"
      style={{ opacity }}
    >
      {unsupported ? (
        <Image
          src={FALLBACK_IMAGE}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-bottom"
        />
      ) : (
        <ShaderLabComposition
          config={config}
          onRuntimeError={(message) => {
            if (message) setStatus("unsupported");
          }}
          style={{ width: "100%", height: "100%" }}
        />
      )}
    </div>
  );
}
