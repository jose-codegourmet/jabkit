import { useId } from "react";
import { Badge } from "@/atoms/badge";
import { cn } from "@/lib/cn";
import type {
  Bento19Alert,
  Bento19Aspect,
  Bento19Card,
  Bento19Integration,
  Bento19Props,
} from "./Bento19.types";

const DEFAULT_KICKER = "Model ops";
const DEFAULT_TITLE = "The six jobs the board actually runs.";
const DEFAULT_DESCRIPTION =
  "A masonry of live tiles — integrations, charts, and alerts — sized for an AI operations platform that has to look like work, not a mood board.";

const DEFAULT_INTEGRATIONS: Bento19Integration[] = [
  { name: "Quickbooks", initial: "Qb" },
  { name: "Instagram", initial: "Ig" },
  { name: "Slack", initial: "Sl" },
  { name: "Linear", initial: "Ln" },
  { name: "Stripe", initial: "St" },
  { name: "Notion", initial: "No" },
];

const DEFAULT_CARDS: Bento19Card[] = [
  {
    id: "predictive",
    title: "Predictive performance",
    description:
      "Forecast load before the queue tips, then route work while the window is still open.",
    visual: "pills",
    aspect: "compact",
    integrations: DEFAULT_INTEGRATIONS,
  },
  {
    id: "analysis",
    title: "Intelligent data analysis",
    description:
      "Read the same ledger the ops room uses — not a slide, a live cut of the last cycle.",
    visual: "chart",
    aspect: "standard",
    series: [38, 52, 44, 71, 63, 86, 78, 94],
  },
  {
    id: "optimization",
    title: "Automated task optimization",
    description:
      "Hand off the busywork: assign, retry, and close the loop without another standup.",
    visual: "dashboard",
    aspect: "portrait",
    metric: "12m saved",
    metricLabel: "This week",
  },
  {
    id: "learning",
    title: "Adaptive AI learning",
    description:
      "The model tightens on the outcomes you keep, not the prompts you typed once.",
    visual: "spark",
    aspect: "compact",
    series: [22, 28, 25, 36, 41, 39, 54, 61, 58, 72],
    metric: "+18%",
    metricLabel: "Accuracy",
  },
  {
    id: "decisions",
    title: "Smart decision support",
    description:
      "A short stack of options with the constraint attached, ready to pick in the room.",
    visual: "chart",
    aspect: "standard",
    series: [48, 61, 55, 70, 66, 82, 77],
  },
  {
    id: "anomalies",
    title: "Anomaly detection alerts",
    description:
      "Surface the spike, name the source, and keep the rest of the board quiet.",
    visual: "alerts",
    aspect: "compact",
    alerts: [
      { label: "Latency spike", detail: "Checkout p95 · 2m", tone: "warning" },
      {
        label: "Failed retry storm",
        detail: "Billing worker · now",
        tone: "destructive",
      },
      { label: "Recovered", detail: "Search replica · 4m", tone: "success" },
    ],
  },
];

const COLUMN_SHIFT = [
  "lg:translate-y-0",
  "lg:translate-y-10",
  "lg:translate-y-4",
] as const;

const ASPECT: Record<Bento19Aspect, string> = {
  compact: "aspect-[5/4]",
  standard: "aspect-[4/3]",
  portrait: "aspect-[9/10]",
};

const CHART_BARS = [
  "bg-chart-1",
  "bg-chart-2",
  "bg-chart-3",
  "bg-chart-4",
  "bg-chart-5",
] as const;

function chunkColumns(cards: Bento19Card[]) {
  const columns: Bento19Card[][] = [];
  for (let index = 0; index < cards.length; index += 2) {
    columns.push(cards.slice(index, index + 2));
  }
  return columns;
}

function IntegrationPill({ item }: { item: Bento19Integration }) {
  return (
    <Badge
      variant="outline"
      className="h-8 gap-2 rounded-full border-border bg-card px-2.5 text-foreground"
    >
      <span className="grid size-5 place-items-center rounded-full bg-primary/15 text-[9px] font-semibold tracking-tight text-primary">
        {item.initial}
      </span>
      {item.name}
    </Badge>
  );
}

function PillMarquee({
  items,
  reverse,
}: {
  items: Bento19Integration[];
  reverse?: boolean;
}) {
  const copies = [
    { suffix: "lead", items },
    { suffix: "loop", items },
  ] as const;

  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,var(--jk-foreground)_8%,var(--jk-foreground)_92%,transparent)]">
      <div
        className={cn(
          "flex w-max gap-2 py-0.5",
          reverse ? "jk-bento19-marquee-rev" : "jk-bento19-marquee",
        )}
      >
        {copies.flatMap((copy) =>
          copy.items.map((item) => (
            <div key={`${copy.suffix}-${item.name}`} className="shrink-0">
              <IntegrationPill item={item} />
            </div>
          )),
        )}
      </div>
    </div>
  );
}

function PillsVisual({ items }: { items: Bento19Integration[] }) {
  const second = [...items].reverse();
  return (
    <div className="flex h-full flex-col justify-center gap-3 py-2">
      <PillMarquee items={items} />
      <PillMarquee items={second} reverse />
      <PillMarquee items={items} />
    </div>
  );
}

function ChartVisual({ series }: { series: number[] }) {
  const max = Math.max(...series, 1);
  const bars: Array<{ id: string; height: number; fill: string }> = [];
  for (const value of series) {
    const height = Math.round((value / max) * 100);
    const fill = CHART_BARS[bars.length % CHART_BARS.length];
    bars.push({
      id: `bar-${bars.length}-${value}-${height}`,
      height,
      fill,
    });
  }
  return (
    <div className="flex h-full items-end gap-1.5 px-1 pb-1">
      {bars.map((bar) => (
        <div
          key={bar.id}
          className={cn(
            "jk-bento19-bar min-h-4 flex-1 rounded-t-[0.3rem]",
            bar.fill,
          )}
          style={{ height: `${bar.height}%` }}
        />
      ))}
    </div>
  );
}

function DashboardVisual({
  metric,
  metricLabel,
}: {
  metric?: string;
  metricLabel?: string;
}) {
  const rows = [
    { name: "Assign retry", state: "Queued" },
    { name: "Close ticket", state: "Running" },
    { name: "Notify owner", state: "Done" },
  ];
  return (
    <div className="flex h-full flex-col justify-between gap-3">
      <div className="rounded-[calc(var(--radius)-0.15rem)] border border-border bg-muted/60 p-3">
        <p className="text-[11px] font-medium tracking-wide text-muted-foreground uppercase">
          {metricLabel ?? "Throughput"}
        </p>
        <p className="mt-1 text-2xl font-semibold tracking-[-0.04em]">
          {metric ?? "94%"}
        </p>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-secondary">
          <div className="h-full w-[72%] rounded-full bg-primary" />
        </div>
      </div>
      <ul className="space-y-2">
        {rows.map((row) => (
          <li
            key={row.name}
            className="flex items-center justify-between rounded-[calc(var(--radius)-0.25rem)] border border-border bg-card px-3 py-2 text-xs"
          >
            <span className="font-medium">{row.name}</span>
            <span className="text-muted-foreground">{row.state}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SparkVisual({
  series,
  metric,
  metricLabel,
}: {
  series: number[];
  metric?: string;
  metricLabel?: string;
}) {
  const max = Math.max(...series, 1);
  const min = Math.min(...series, 0);
  const span = Math.max(max - min, 1);
  const points = series
    .map((value, index) => {
      const x = (index / Math.max(series.length - 1, 1)) * 100;
      const y = 100 - ((value - min) / span) * 100;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <div className="flex h-full flex-col justify-between gap-3">
      <div>
        <p className="text-[11px] font-medium tracking-wide text-muted-foreground uppercase">
          {metricLabel ?? "Trend"}
        </p>
        <p className="mt-1 text-2xl font-semibold tracking-[-0.04em] text-primary">
          {metric ?? "+12%"}
        </p>
      </div>
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="h-24 w-full text-chart-1"
        aria-hidden="true"
      >
        <polyline
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinejoin="round"
          strokeLinecap="round"
          points={points}
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}

function toneClass(tone: Bento19Alert["tone"]) {
  if (tone === "destructive") return "bg-destructive";
  if (tone === "success") return "bg-success";
  return "bg-warning";
}

function AlertsVisual({ alerts }: { alerts: Bento19Alert[] }) {
  return (
    <ul className="flex h-full flex-col justify-center gap-2">
      {alerts.map((alert) => (
        <li
          key={alert.label}
          className="flex items-start gap-2.5 rounded-[calc(var(--radius)-0.2rem)] border border-border bg-card px-3 py-2.5"
        >
          <span
            className={cn(
              "mt-1 size-2 shrink-0 rounded-full",
              toneClass(alert.tone),
            )}
            aria-hidden="true"
          />
          <span className="min-w-0">
            <span className="block text-xs font-semibold tracking-tight">
              {alert.label}
            </span>
            <span className="block text-[11px] text-muted-foreground">
              {alert.detail}
            </span>
          </span>
        </li>
      ))}
    </ul>
  );
}

function CardVisual({ card }: { card: Bento19Card }) {
  switch (card.visual) {
    case "pills":
      return <PillsVisual items={card.integrations ?? []} />;
    case "chart":
      return <ChartVisual series={card.series ?? [40, 55, 48, 70, 62]} />;
    case "dashboard":
      return (
        <DashboardVisual metric={card.metric} metricLabel={card.metricLabel} />
      );
    case "spark":
      return (
        <SparkVisual
          series={card.series ?? [20, 28, 24, 40, 48, 44, 60]}
          metric={card.metric}
          metricLabel={card.metricLabel}
        />
      );
    case "alerts":
      return <AlertsVisual alerts={card.alerts ?? []} />;
    default:
      return null;
  }
}

function BentoCard({ card }: { card: Bento19Card }) {
  const aspect = ASPECT[card.aspect ?? "standard"];

  return (
    <article className="overflow-hidden rounded-[calc(var(--radius)+0.35rem)] border border-border bg-card text-card-foreground">
      <div
        className={cn(
          "jk-bento19-fade relative overflow-hidden bg-muted/40 p-4 sm:p-5",
          aspect,
        )}
      >
        <CardVisual card={card} />
      </div>
      <div className="space-y-1.5 border-t border-border px-4 py-4 sm:px-5 sm:py-5">
        <h3 className="text-sm font-semibold tracking-[-0.03em] text-balance sm:text-base">
          {card.title}
        </h3>
        <p className="text-xs leading-5 text-muted-foreground sm:text-sm sm:leading-6">
          {card.description}
        </p>
      </div>
    </article>
  );
}

export function Bento19({
  className,
  kicker = DEFAULT_KICKER,
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  cards = DEFAULT_CARDS,
  ...props
}: Bento19Props) {
  const headingId = useId();
  const columns = chunkColumns(cards);

  return (
    <section
      data-slot="bento19"
      aria-labelledby={headingId}
      className={cn("bg-background text-foreground", className)}
      {...props}
    >
      <style href="jk-bento19" precedence="default">{`
        @keyframes jk-bento19-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes jk-bento19-marquee-rev {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        @keyframes jk-bento19-fade {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: none; }
        }
        @keyframes jk-bento19-bar {
          from { transform: scaleY(0.2); }
          to { transform: scaleY(1); }
        }
        .jk-bento19-marquee {
          animation: jk-bento19-marquee 28s linear infinite;
        }
        .jk-bento19-marquee-rev {
          animation: jk-bento19-marquee-rev 32s linear infinite;
        }
        .jk-bento19-marquee:hover,
        .jk-bento19-marquee-rev:hover {
          animation-play-state: paused;
        }
        .jk-bento19-fade {
          animation: jk-bento19-fade 0.7s ease-out both;
        }
        .jk-bento19-bar {
          transform-origin: bottom;
          animation: jk-bento19-bar 0.8s ease-out both;
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-bento19-marquee,
          .jk-bento19-marquee-rev,
          .jk-bento19-fade,
          .jk-bento19-bar { animation: none; }
        }
      `}</style>

      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <header className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
          {kicker ? (
            <Badge variant="outline" className="mb-4">
              {kicker}
            </Badge>
          ) : null}
          <h2
            id={headingId}
            className="text-3xl font-semibold tracking-[-0.05em] text-balance sm:text-4xl lg:text-5xl"
          >
            {title}
          </h2>
          {description ? (
            <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
              {description}
            </p>
          ) : null}
        </header>

        <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-3">
          {columns.map((column, index) => (
            <div
              key={`column-${column.map((card) => card.id).join("-") || index}`}
              className={cn(
                "flex flex-col gap-4 sm:gap-5",
                COLUMN_SHIFT[index],
              )}
            >
              {column.map((card) => (
                <BentoCard key={card.id} card={card} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
