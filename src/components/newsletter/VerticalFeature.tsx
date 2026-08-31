import Image from "next/image";
import { CATEGORY_ACCENT_IMAGE } from "./categoryAccent";

type VerticalFeatureProps = {
  image: string;
  imageAlt: string;
  category: string;
  title: string;
  paragraphs: string[];
  /** true = text on the left, image on the right */
  reverse?: boolean;
};

export function VerticalFeature({
  image,
  imageAlt,
  category,
  title,
  paragraphs,
  reverse = false,
}: VerticalFeatureProps) {
  const accent = CATEGORY_ACCENT_IMAGE[category];

  return (
    <div
      className={`flex flex-col items-center gap-10 md:gap-16 ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div className="relative aspect-[4/3] w-full shrink-0 md:w-1/2">
        <Image src={image} alt={imageAlt} fill sizes="50vw" className="object-cover" />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, black, transparent 22%, transparent 78%, black)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: reverse
              ? "linear-gradient(to right, black, transparent 45%)"
              : "linear-gradient(to left, black, transparent 45%)",
          }}
        />
      </div>
      <div className="flex flex-1 flex-col gap-3">
        <div className="flex items-start gap-4">
          {accent && (
            <div className="relative h-[64px] w-3 shrink-0 overflow-hidden rounded-sm">
              <Image src={accent} alt="" fill sizes="12px" className="object-cover" />
            </div>
          )}
          <div className="flex flex-col gap-2">
            <p className="text-sm tracking-[0.12em] text-text-secondary uppercase">{category}</p>
            <h3 className="text-2xl font-medium tracking-[-0.02em] md:text-[40px] md:leading-[44px]">
              {title}
            </h3>
          </div>
        </div>
        <div className="flex flex-col gap-3 text-base leading-[20px] text-white/90">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
