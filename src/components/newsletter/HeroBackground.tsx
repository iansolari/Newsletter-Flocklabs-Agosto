"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type HeroBackgroundProps = {
  src: string;
};

export function HeroBackground({ src }: HeroBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = useState(1);

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

  return (
    <div ref={containerRef} className="pointer-events-none absolute inset-0" style={{ opacity }}>
      <Image src={src} alt="" fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
    </div>
  );
}
