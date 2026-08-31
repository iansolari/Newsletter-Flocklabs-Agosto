import Image from "next/image";

type StoryBannerProps = {
  image: string;
  imageAlt: string;
  category: string;
  title: string;
  paragraphs: string[];
};

export function StoryBanner({ image, imageAlt, category, title, paragraphs }: StoryBannerProps) {
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden md:aspect-[21/9]">
      <Image
        src={image}
        alt={imageAlt}
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-8 md:max-w-2xl md:p-16">
        <p className="text-sm tracking-[0.12em] text-text-secondary uppercase">{category}</p>
        <h3 className="text-2xl font-medium tracking-[-0.02em] md:text-[40px] md:leading-[44px]">
          {title}
        </h3>
        <div className="mt-2 flex flex-col gap-3 text-base leading-[20px] text-white/90">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
