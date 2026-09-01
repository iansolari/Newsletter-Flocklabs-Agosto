type SectionTitleProps = {
  eyebrow?: string;
  lead: string;
  italic: string;
  size?: "hero" | "large";
  align?: "left" | "center";
  /** Force the sans and italic parts onto separate lines instead of wrapping naturally */
  stacked?: boolean;
};

export function SectionTitle({
  eyebrow,
  lead,
  italic,
  size = "hero",
  align = "left",
  stacked = false,
}: SectionTitleProps) {
  const sansSize =
    size === "hero"
      ? "text-[56px] leading-[56px] md:text-[80px] md:leading-[80px]"
      : "text-[40px] leading-[40px] md:text-[56px] md:leading-[56px]";
  const serifSize =
    size === "hero"
      ? "text-[64px] leading-[64px] md:text-[88px] md:leading-[64px]"
      : "text-[48px] leading-[48px] md:text-[64px] md:leading-[56px]";
  // The inline serif leading is intentionally tighter than its font size (it
  // sits on the same baseline as the sans text next to it). Stacked on its
  // own line, that tightness reads as crowding the line above — give it
  // room proportional to its own font size instead.
  const stackedSerifSize =
    size === "hero" ? "text-[64px] leading-[72px] md:text-[88px] md:leading-[96px]" : "text-[48px] leading-[56px] md:text-[64px] md:leading-[72px]";

  return (
    <div className={align === "center" ? "text-center" : ""}>
      {eyebrow && (
        <p className="mb-2 text-sm tracking-[0.12em] text-text-secondary uppercase">
          {eyebrow}
        </p>
      )}
      {stacked ? (
        <h2>
          <span className={`block font-sans font-medium tracking-[-0.03em] ${sansSize}`}>
            {lead}
          </span>
          <span className={`block font-serif font-light italic ${stackedSerifSize}`}>{italic}</span>
        </h2>
      ) : (
        <h2 className={`font-sans font-medium tracking-[-0.03em] ${sansSize}`}>
          {lead}{" "}
          <span className={`font-serif font-light italic ${serifSize}`}>
            {italic}
          </span>
        </h2>
      )}
    </div>
  );
}
