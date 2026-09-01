import { AccentTextBlock } from "./AccentTextBlock";
import { GradientPhoto } from "./GradientPhoto";

const GUTTER_LEFT = "pl-6 md:pl-16 lg:pl-32";
const GUTTER_RIGHT = "pr-6 md:pr-16 lg:pr-32";

type CommercialEntryProps = {
  image: string;
  imageAlt: string;
  category: string;
  title: string;
  paragraphs: string[];
  /** true = text on the left, image on the right (bleeding to the right edge) */
  reverse?: boolean;
};

export function CommercialEntry({
  image,
  imageAlt,
  category,
  title,
  paragraphs,
  reverse = false,
}: CommercialEntryProps) {
  return (
    <div
      className={`flex flex-col items-stretch gap-10 py-8 md:h-[500px] md:gap-16 md:py-12 ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <GradientPhoto
        image={image}
        imageAlt={imageAlt}
        reverse={reverse}
        className="relative h-[500px] w-full shrink-0 md:h-full md:w-1/2"
      />
      <div
        className={`flex flex-1 items-center ${reverse ? GUTTER_LEFT : GUTTER_RIGHT}`}
      >
        <AccentTextBlock category={category} title={title} paragraphs={paragraphs} hideAccent />
      </div>
    </div>
  );
}
