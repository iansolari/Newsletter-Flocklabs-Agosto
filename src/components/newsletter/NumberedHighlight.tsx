type NumberedHighlightProps = {
  number: number;
  title: string;
  body: string;
};

export function NumberedHighlight({ number, title, body }: NumberedHighlightProps) {
  return (
    <div className="flex items-start gap-6 border-t border-white/10 pt-8 first:border-t-0 first:pt-0">
      <span className="w-16 shrink-0 font-serif text-[56px] leading-[48px] font-light italic text-white md:w-20 md:text-[72px] md:leading-[56px]">
        {number}
      </span>
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-medium tracking-[-0.02em] md:text-[32px] md:leading-[36px]">
          {title}
        </h3>
        <p className="max-w-3xl text-base leading-[20px] text-white/90">{body}</p>
      </div>
    </div>
  );
}
