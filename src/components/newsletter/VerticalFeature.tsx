import Image from "next/image";
import { AccentTextBlock } from "./AccentTextBlock";

const GUTTER_LEFT = "pl-6 md:pl-16 lg:pl-32";
const GUTTER_RIGHT = "pr-6 md:pr-16 lg:pr-32";

type VerticalFeatureProps = {
  image: string;
  imageAlt: string;
  category: string;
  title: string;
  paragraphs: string[];
  /** true = text on the left, image on the right (bleeding to the right edge) */
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
  return (
    <div
      className={`flex flex-col items-stretch gap-10 md:gap-16 ${
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
      <div
        className={`flex flex-1 items-center ${reverse ? GUTTER_LEFT : GUTTER_RIGHT}`}
      >
        <AccentTextBlock category={category} title={title} paragraphs={paragraphs} />
      </div>
    </div>
  );
}
