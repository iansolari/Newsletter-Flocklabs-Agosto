import Image from "next/image";

type InitiativeCardProps = {
  accent: string;
  category: string;
  title: string;
  paragraphs: string[];
};

export function InitiativeCard({ accent, category, title, paragraphs }: InitiativeCardProps) {
  return (
    <div className="flex gap-6">
      <div className="relative h-auto w-[6px] shrink-0 overflow-hidden rounded-full">
        <Image src={accent} alt="" fill sizes="6px" className="object-cover" />
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
