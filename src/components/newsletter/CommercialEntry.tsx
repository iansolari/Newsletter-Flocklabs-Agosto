import Image from "next/image";

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
      className={`flex flex-col items-stretch gap-10 py-8 md:gap-16 md:py-12 ${
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
        className={`flex flex-1 flex-col justify-center gap-3 ${reverse ? GUTTER_LEFT : GUTTER_RIGHT}`}
      >
        <div className="flex flex-col gap-2">
          <p className="text-sm tracking-[0.12em] text-text-secondary uppercase">{category}</p>
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
