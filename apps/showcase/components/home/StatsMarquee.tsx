export type MarqueeStat = { value: string; label: string };

function StatRun({
  stats,
  hidden,
}: {
  stats: MarqueeStat[];
  hidden?: boolean;
}) {
  return (
    <ul
      aria-hidden={hidden || undefined}
      className={`flex items-center ${hidden ? "motion-reduce:hidden" : "motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-y-3"}`}
    >
      {stats.map((stat) => (
        <li key={stat.label} className="flex items-center">
          <span className="inline-flex items-baseline gap-2.5">
            <b className="font-display text-[30px] leading-none font-normal text-mustard">
              {stat.value}
            </b>
            <span className="text-[15px] tracking-[0.06em] uppercase">
              {stat.label}
            </span>
          </span>
          <span aria-hidden="true" className="px-7 text-lg text-mustard">
            ✦
          </span>
        </li>
      ))}
    </ul>
  );
}

/** Ink band of registry numbers. Scrolls infinitely; pauses on hover. */
export function StatsMarquee({ stats }: { stats: MarqueeStat[] }) {
  return (
    <section
      aria-label="Registry at a glance"
      className="overflow-hidden border-y-3 border-ink bg-ink text-cream shadow-[inset_0_4px_0_var(--vd-mustard),inset_0_-4px_0_var(--vd-mustard)]"
    >
      <div className="vd-marquee py-[22px] whitespace-nowrap motion-reduce:w-full motion-reduce:px-5">
        <StatRun stats={stats} />
        <StatRun stats={stats} hidden />
      </div>
    </section>
  );
}
