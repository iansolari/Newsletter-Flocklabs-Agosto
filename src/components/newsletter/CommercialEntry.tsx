import Image from "next/image";

type CommercialEntryProps = {
  image: string;
  imageAlt: string;
  category: string;
  title: string;
  paragraphs: string[];
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
      className={`flex flex-col items-center gap-8 py-8 md:gap-16 md:py-12 ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div className="relative aspect-[2/1] w-full shrink-0 overflow-hidden rounded-sm md:w-1/2">
        <Image src={image} alt={imageAlt} fill sizes="50vw" className="object-cover" />
      </div>
      <div className="flex flex-col gap-3">
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
