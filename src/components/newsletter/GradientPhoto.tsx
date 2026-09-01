import Image from "next/image";

type GradientPhotoProps = {
  image: string;
  imageAlt: string;
  /** true = photo bleeds to the right edge, fades toward the left (text side) */
  reverse?: boolean;
  /** Sizing/position classes for the wrapper (aspect ratio vs fixed height, width) */
  className: string;
};

export function GradientPhoto({ image, imageAlt, reverse = false, className }: GradientPhotoProps) {
  return (
    <div className={className}>
      <Image
        src={image}
        alt={imageAlt}
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        quality={90}
        className="object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, black 0%, transparent 35%, transparent 65%, black 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: reverse
            ? "linear-gradient(to right, black 0%, transparent 55%)"
            : "linear-gradient(to left, black 0%, transparent 55%)",
        }}
      />
    </div>
  );
}
