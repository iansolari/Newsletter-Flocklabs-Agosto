import Image from "next/image";
import { CATEGORY_ACCENT_IMAGE } from "./categoryAccent";

type AccentTextBlockProps = {
  category: string;
  /** Eyebrow text, when it differs from the category used to pick the accent color */
  label?: string;
  title: string;
  paragraphs: string[];
};

export function AccentTextBlock({ category, label, title, paragraphs }: AccentTextBlockProps) {
  const accent = CATEGORY_ACCENT_IMAGE[category];

  return (
    <div className="flex gap-4">
      {accent && (
        <div className="relative w-[70px] shrink-0 self-stretch overflow-hidden">
          <Image src={accent} alt="" fill sizes="70px" quality={90} className="object-cover" />
        </div>
      )}
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <p className="text-sm tracking-[0.12em] text-text-secondary uppercase">
            {label ?? category}
          </p>
          <h3 className="text-2xl font-medium tracking-[-0.02em] md:text-[40px] md:leading-[44px]">
            {title}
          </h3>
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
