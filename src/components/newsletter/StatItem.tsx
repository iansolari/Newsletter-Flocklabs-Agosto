type StatItemProps = {
  value: string;
  label: string;
};

export function StatItem({ value, label }: StatItemProps) {
  return (
    <div className="flex flex-col">
      <span className="font-serif text-[64px] leading-none font-light italic md:text-[88px]">
        {value}
      </span>
      <span className="mt-2 max-w-[260px] text-sm tracking-[0.12em] text-text-secondary uppercase">
        {label}
      </span>
    </div>
  );
}
