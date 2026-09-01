"use client";

import * as React from "react";
import { Button } from "@/atoms/button";
import { cn } from "@/lib/cn";
import type {
  Hero307Action,
  Hero307Activity,
  Hero307Bar,
  Hero307Dashboard,
  Hero307Metric,
  Hero307NavItem,
  Hero307Panel,
  Hero307Props,
  Hero307Row,
  Hero307Sale,
} from "./Hero307.types";

const defaultDashboard: Hero307Dashboard = {
  brand: "Northline",
  nav: [
    { label: "Overview" },
    { label: "Sales" },
    { label: "Customers" },
    { label: "Activity" },
    { label: "Settings" },
  ],
  metrics: [
    { label: "Revenue", value: "$48.2k", delta: "+12.4%", trend: "up" },
    { label: "Customers", value: "1,284", delta: "+6.1%", trend: "up" },
    { label: "Conversion", value: "3.8%", delta: "+0.4%", trend: "up" },
    { label: "Churn", value: "1.2%", delta: "-0.3%", trend: "down" },
  ],
  bars: [
    { label: "Mon", value: 42 },
    { label: "Tue", value: 58 },
    { label: "Wed", value: 51 },
    { label: "Thu", value: 73 },
    { label: "Fri", value: 66 },
    { label: "Sat", value: 38 },
    { label: "Sun", value: 29 },
  ],
  sales: [
    { name: "Helio Labs", amount: "$2,400", when: "2m ago" },
    { name: "Fieldwork", amount: "$1,180", when: "14m ago" },
    { name: "Orbit", amount: "$860", when: "1h ago" },
    { name: "Kite & Co", amount: "$640", when: "3h ago" },
  ],
  rows: [
    { product: "Studio seat", status: "Paid", amount: "$120" },
    { product: "Usage add-on", status: "Open", amount: "$48" },
    { product: "Annual plan", status: "Paid", amount: "$960" },
    { product: "Support pack", status: "Refund", amount: "-$36" },
  ],
  activity: [
    { actor: "Amara Cole", action: "exported the weekly ledger", time: "4m" },
    { actor: "Julian Hart", action: "invited two operators", time: "21m" },
    { actor: "Noor Elamin", action: "closed the Harbor deal", time: "1h" },
    { actor: "Mateo Ruiz", action: "updated billing rules", time: "3h" },
  ],
  areaValues: [18, 24, 22, 31, 28, 36, 34, 41, 39, 48, 46, 54],
};

const defaults = {
  kicker: "Operations console",
  title: "See the whole workspace in one frame.",
  description:
    "A fullscreen hero for product teams who want the offer up front and a living admin preview underneath — metrics, charts, and activity, all built in CSS.",
  primaryAction: { label: "Start free", href: "#start" },
  secondaryAction: { label: "View the docs", href: "#docs" },
} as const;

const panels: Array<{ id: Hero307Panel; label: string }> = [
  { id: "overview", label: "Overview" },
  { id: "sales", label: "Sales" },
  { id: "activity", label: "Activity" },
];

function usePrefersReducedMotion() {
  const [reduced, setReduced] = React.useState(false);
  React.useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  return reduced;
}

function sparkPath(values: number[], width = 100, height = 36) {
  if (values.length < 2) {
    return { line: "", area: "" };
  }
  const max = Math.max(...values);
  const min = Math.min(...values);
  const range = max - min || 1;
  const step = width / (values.length - 1);
  const points = values.map((value, index) => {
    const x = index * step;
    const y = height - ((value - min) / range) * (height - 6) - 3;
    return `${x.toFixed(2)},${y.toFixed(2)}`;
  });
  const line = `M${points.join(" L")}`;
  return { line, area: `${line} L${width},${height} L0,${height} Z` };
}

function HeroAction({
  action,
  variant,
}: {
  action: Hero307Action;
  variant: "primary" | "secondary";
}) {
  if (action.href) {
    return (
      <Button variant={variant} size="lg" asChild>
        <a href={action.href}>{action.label}</a>
      </Button>
    );
  }
  return (
    <Button variant={variant} size="lg" onClick={action.onClick}>
      {action.label}
    </Button>
  );
}

function MetricCard({ metric }: { metric: Hero307Metric }) {
  return (
    <div className="rounded-[calc(var(--radius)-0.25rem)] border border-border bg-card p-3">
      <p className="font-mono text-[10px] tracking-[0.14em] text-muted-foreground uppercase">
        {metric.label}
      </p>
      <div className="mt-2 flex items-end justify-between gap-2">
        <p className="text-lg font-semibold tracking-[-0.03em]">{metric.value}</p>
        <p
          className={cn(
            "font-mono text-[10px]",
            metric.trend === "up" ? "text-success" : "text-destructive",
          )}
        >
          {metric.delta}
        </p>
      </div>
    </div>
  );
}

function AreaChart({ values }: { values: number[] }) {
  const gradientId = React.useId();
  const { line, area } = sparkPath(values);
  return (
    <div className="rounded-[calc(var(--radius)-0.25rem)] border border-border bg-card p-3">
      <p className="font-mono text-[10px] tracking-[0.14em] text-muted-foreground uppercase">
        Revenue
      </p>
      <svg
        viewBox="0 0 100 36"
        className="mt-3 h-24 w-full"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--jk-chart-1)" stopOpacity="0.4" />
            <stop
              offset="100%"
              stopColor="var(--jk-chart-1)"
              stopOpacity="0"
            />
          </linearGradient>
        </defs>
        <path d={area} fill={`url(#${gradientId})`} />
        <path
          d={line}
          fill="none"
          stroke="var(--jk-chart-1)"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function BarChart({ bars }: { bars: Hero307Bar[] }) {
  return (
    <div className="rounded-[calc(var(--radius)-0.25rem)] border border-border bg-card p-3">
      <p className="font-mono text-[10px] tracking-[0.14em] text-muted-foreground uppercase">
        Weekly volume
      </p>
      <div
        className="mt-3 flex h-24 items-end gap-1.5"
        aria-hidden="true"
      >
        {bars.map((bar) => (
          <div
            key={bar.label}
            className="group flex min-w-0 flex-1 flex-col items-center gap-1"
          >
            <div
              className="w-full rounded-t-sm bg-chart-1/70 transition-colors hover:bg-chart-1"
              style={{ height: `${Math.max(bar.value, 8)}%` }}
            />
            <span className="truncate font-mono text-[8px] text-muted-foreground">
              {bar.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SalesList({ sales }: { sales: Hero307Sale[] }) {
  return (
    <div className="rounded-[calc(var(--radius)-0.25rem)] border border-border bg-card p-3">
      <p className="font-mono text-[10px] tracking-[0.14em] text-muted-foreground uppercase">
        Latest sales
      </p>
      <ul className="mt-3 space-y-2.5">
        {sales.map((sale) => (
          <li
            key={`${sale.name}-${sale.when}`}
            className="flex items-center justify-between gap-3 text-xs"
          >
            <span className="truncate font-medium">{sale.name}</span>
            <span className="flex shrink-0 items-center gap-2 font-mono text-muted-foreground">
              <span className="text-foreground">{sale.amount}</span>
              {sale.when}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function DataTable({ rows }: { rows: Hero307Row[] }) {
  return (
    <div className="overflow-hidden rounded-[calc(var(--radius)-0.25rem)] border border-border bg-card">
      <p className="px-3 pt-3 font-mono text-[10px] tracking-[0.14em] text-muted-foreground uppercase">
        Ledger
      </p>
      <table className="mt-2 w-full text-left text-xs">
        <thead className="text-muted-foreground">
          <tr className="border-b border-border">
            <th className="px-3 py-2 font-medium">Product</th>
            <th className="px-3 py-2 font-medium">Status</th>
            <th className="px-3 py-2 text-right font-medium">Amount</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={`${row.product}-${row.amount}`} className="border-b border-border last:border-0">
              <td className="px-3 py-2 font-medium">{row.product}</td>
              <td className="px-3 py-2">
                <span className="rounded-full border border-border bg-muted px-2 py-0.5 font-mono text-[10px]">
                  {row.status}
                </span>
              </td>
              <td className="px-3 py-2 text-right font-mono">{row.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ActivityFeed({ items }: { items: Hero307Activity[] }) {
  return (
    <div className="rounded-[calc(var(--radius)-0.25rem)] border border-border bg-card p-3">
      <p className="font-mono text-[10px] tracking-[0.14em] text-muted-foreground uppercase">
        Activity
      </p>
      <ul className="mt-3 space-y-3">
        {items.map((item) => (
          <li key={`${item.actor}-${item.time}`} className="flex gap-3 text-xs">
            <span
              aria-hidden="true"
              className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full border border-border bg-muted font-mono text-[10px]"
            >
              {item.actor.slice(0, 1)}
            </span>
            <div className="min-w-0">
              <p>
                <span className="font-medium">{item.actor}</span>{" "}
                <span className="text-muted-foreground">{item.action}</span>
              </p>
              <p className="mt-0.5 font-mono text-[10px] text-muted-foreground">
                {item.time} ago
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Sidebar({
  brand,
  nav,
}: {
  brand: string;
  nav: Hero307NavItem[];
}) {
  return (
    <aside className="hidden w-40 shrink-0 flex-col border-r border-border bg-muted/40 p-3 sm:flex">
      <div className="flex items-center gap-2 px-1">
        <span
          aria-hidden="true"
          className="grid size-6 place-items-center rounded-md bg-primary text-[10px] font-semibold text-primary-foreground"
        >
          {brand.slice(0, 1)}
        </span>
        <p className="truncate text-xs font-semibold tracking-[-0.02em]">
          {brand}
        </p>
      </div>
      <nav className="mt-5 space-y-1" aria-label="Preview navigation">
        {nav.map((item, index) => (
          <div
            key={item.label}
            className={cn(
              "rounded-md px-2 py-1.5 font-mono text-[11px]",
              index === 0
                ? "bg-background text-foreground shadow-[0_0_0_1px_var(--jk-border)]"
                : "text-muted-foreground",
            )}
          >
            {item.label}
          </div>
        ))}
      </nav>
    </aside>
  );
}

function DashboardPreview({
  dashboard,
  panel,
  onPanelChange,
  tilt,
  reducedMotion,
}: {
  dashboard: Hero307Dashboard;
  panel: Hero307Panel;
  onPanelChange: (panel: Hero307Panel) => void;
  tilt: { x: number; y: number };
  reducedMotion: boolean;
}) {
  return (
    <div
      className="relative mx-auto w-full max-w-5xl [perspective:1400px]"
      aria-label="Dashboard preview"
    >
      <div
        className={cn(
          "origin-top overflow-hidden rounded-[calc(var(--radius)+0.2rem)] border border-border bg-card shadow-[0_40px_80px_-40px_color-mix(in_oklab,var(--jk-foreground),transparent_55%)]",
          reducedMotion
            ? "scale-[0.92] sm:scale-100"
            : "transition-transform duration-200 ease-out motion-reduce:transition-none max-sm:scale-[0.78] sm:scale-[0.9] lg:scale-100",
        )}
        style={
          reducedMotion
            ? undefined
            : {
                transform: `rotateX(${12 + tilt.x}deg) rotateY(${tilt.y}deg)`,
              }
        }
      >
        <div className="flex min-h-[28rem] bg-background">
          <Sidebar brand={dashboard.brand} nav={dashboard.nav} />
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-3 border-b border-border px-3 py-2.5 sm:px-4">
              <div
                className="flex gap-1"
                role="tablist"
                aria-label="Preview panels"
              >
                {panels.map((item) => {
                  const selected = panel === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      role="tab"
                      aria-selected={selected}
                      onClick={() => onPanelChange(item.id)}
                      className={cn(
                        "rounded-md px-2.5 py-1 font-mono text-[11px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                        selected
                          ? "bg-secondary text-secondary-foreground"
                          : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                      )}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
              <div className="hidden items-center gap-2 sm:flex">
                <span className="h-7 w-28 rounded-md border border-input bg-muted/60" />
                <span
                  aria-hidden="true"
                  className="grid size-7 place-items-center rounded-full border border-border bg-muted font-mono text-[10px]"
                >
                  AC
                </span>
              </div>
            </div>
            <div className="space-y-3 p-3 sm:p-4">
              {panel === "overview" ? (
                <>
                  <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
                    {dashboard.metrics.map((metric) => (
                      <MetricCard key={metric.label} metric={metric} />
                    ))}
                  </div>
                  <div className="grid gap-3 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)]">
                    <AreaChart values={dashboard.areaValues} />
                    <SalesList sales={dashboard.sales} />
                  </div>
                  <div className="grid gap-3 lg:grid-cols-2">
                    <BarChart bars={dashboard.bars} />
                    <DataTable rows={dashboard.rows} />
                  </div>
                </>
              ) : null}
              {panel === "sales" ? (
                <div className="grid gap-3 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
                  <DataTable rows={dashboard.rows} />
                  <div className="space-y-3">
                    <BarChart bars={dashboard.bars} />
                    <SalesList sales={dashboard.sales} />
                  </div>
                </div>
              ) : null}
              {panel === "activity" ? (
                <div className="grid gap-3 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
                  <ActivityFeed items={dashboard.activity} />
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-2">
                      {dashboard.metrics.slice(0, 2).map((metric) => (
                        <MetricCard key={metric.label} metric={metric} />
                      ))}
                    </div>
                    <AreaChart values={dashboard.areaValues} />
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero307({
  className,
  kicker = defaults.kicker,
  title = defaults.title,
  description = defaults.description,
  primaryAction = defaults.primaryAction,
  secondaryAction = defaults.secondaryAction,
  dashboard = defaultDashboard,
}: Hero307Props) {
  const headingId = React.useId();
  const reducedMotion = usePrefersReducedMotion();
  const sceneRef = React.useRef<HTMLElement>(null);
  const [panel, setPanel] = React.useState<Hero307Panel>("overview");
  const [tilt, setTilt] = React.useState({ x: 0, y: 0 });

  const onPointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (reducedMotion || !sceneRef.current) return;
    const rect = sceneRef.current.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    setTilt({
      x: Math.max(-6, Math.min(6, py * -10)),
      y: Math.max(-8, Math.min(8, px * 12)),
    });
  };

  return (
    <section
      ref={sceneRef}
      data-slot="hero307"
      aria-labelledby={headingId}
      onPointerMove={onPointerMove}
      onPointerLeave={() => setTilt({ x: 0, y: 0 })}
      className={cn(
        "relative isolate min-h-dvh overflow-hidden bg-background text-foreground",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,color-mix(in_oklab,var(--jk-primary),transparent_78%),transparent_52%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-1/3 size-[28rem] rounded-full bg-chart-4/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-1/2 size-[24rem] rounded-full bg-chart-1/10 blur-3xl"
      />
      <div className="relative mx-auto flex max-w-6xl flex-col px-5 pt-16 sm:px-8 lg:pt-20">
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          {kicker ? (
            <p className="mb-5 font-mono text-xs font-medium tracking-[0.16em] text-primary uppercase">
              {kicker}
            </p>
          ) : null}
          <h1
            id={headingId}
            className="max-w-4xl text-4xl font-semibold tracking-[-0.07em] text-balance sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            {title}
          </h1>
          {description ? (
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              {description}
            </p>
          ) : null}
          <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
            {primaryAction ? (
              <HeroAction action={primaryAction} variant="primary" />
            ) : null}
            {secondaryAction ? (
              <HeroAction action={secondaryAction} variant="secondary" />
            ) : null}
          </div>
        </div>
        <div className="relative mt-12 pb-0 sm:mt-16">
          <DashboardPreview
            dashboard={dashboard}
            panel={panel}
            onPanelChange={setPanel}
            tilt={tilt}
            reducedMotion={reducedMotion}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-background via-background/70 to-transparent"
          />
        </div>
      </div>
    </section>
  );
}
