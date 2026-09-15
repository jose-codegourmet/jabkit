// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { cn } from "@/lib/cn";
import { lovelyYakMocks } from "./LovelyYak.mocks";
import type { LovelyYakBar, LovelyYakProps, LovelyYakStat } from "./LovelyYak.types";

const widths = {
  sm: "w-64",
  md: "w-80",
  lg: "w-96",
} as const;

const defaultStats = lovelyYakMocks.default.stats;
const defaultBars = lovelyYakMocks.default.bars;

function TrendMark({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function ChevronMark({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        d="M19 9l-7 7-7-7"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function ArrowMark({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        d="M9 5l7 7-7 7"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

export function LovelyYak({
  className,
  children,
  title = "Performance Analytics",
  liveLabel = "Live",
  stats = defaultStats,
  bars = defaultBars,
  periodLabel = "Last 7 days",
  actionLabel = "View Details",
  size = "md",
  animate = true,
  onAction,
  ...props
}: LovelyYakProps) {
  return (
    <article
      className={cn(
        "jk-lovely-yak group relative flex flex-col p-4 shadow-2xl",
        widths[size],
        className,
      )}
      data-animate={animate ? "true" : "false"}
      data-size={size}
      data-slot="lovely-yak"
      {...props}
    >
      <style href="jk-lovely-yak" precedence="default">{`
        .jk-lovely-yak {
          border-radius: 0.75rem;
        }
        .jk-lovely-yak-glow {
          background: linear-gradient(
            to right,
            var(--jk-chart-1),
            var(--jk-chart-4),
            color-mix(in oklab, var(--jk-chart-4), var(--jk-destructive) 42%)
          );
          opacity: 0.2;
        }
        .jk-lovely-yak-shell {
          border-radius: 11px;
          background: var(--jk-card);
        }
        .jk-lovely-yak-icon {
          background: linear-gradient(
            to bottom right,
            var(--jk-chart-1),
            var(--jk-chart-4)
          );
          color: var(--jk-primary-foreground);
        }
        .jk-lovely-yak-live {
          background: color-mix(in oklab, var(--jk-success) 10%, transparent);
          color: var(--jk-success);
        }
        .jk-lovely-yak-live-dot {
          background: var(--jk-success);
        }
        .jk-lovely-yak-tile,
        .jk-lovely-yak-chart {
          background: color-mix(in oklab, var(--jk-muted) 50%, var(--jk-card));
        }
        .jk-lovely-yak-bar {
          background: color-mix(in oklab, var(--jk-chart-1) 30%, transparent);
        }
        .jk-lovely-yak-bar-fill {
          background: var(--jk-chart-1);
        }
        .jk-lovely-yak-action {
          border-radius: 0.5rem;
          background: linear-gradient(
            to right,
            var(--jk-chart-1),
            var(--jk-chart-4)
          );
          color: var(--jk-primary-foreground);
        }
        .jk-lovely-yak-action:hover {
          background: linear-gradient(
            to right,
            color-mix(in oklab, var(--jk-chart-1), var(--jk-foreground) 12%),
            color-mix(in oklab, var(--jk-chart-4), var(--jk-foreground) 12%)
          );
        }
        .jk-lovely-yak-action:focus-visible {
          outline: 2px solid var(--jk-ring);
          outline-offset: 2px;
        }
        @media (prefers-reduced-motion: no-preference) {
          .jk-lovely-yak[data-animate="true"] {
            transition:
              transform 300ms,
              box-shadow 300ms;
          }
          .jk-lovely-yak-glow,
          .jk-lovely-yak-bar-fill,
          .jk-lovely-yak-action {
            transition: all 300ms;
          }
          .jk-lovely-yak[data-animate="true"]:hover {
            transform: scale(1.02);
            box-shadow:
              0 25px 50px -12px color-mix(in oklab, var(--jk-foreground), transparent 75%),
              0 18px 40px color-mix(in oklab, var(--jk-chart-1), transparent 80%);
          }
          .jk-lovely-yak[data-animate="true"]:hover .jk-lovely-yak-glow {
            opacity: 0.3;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-lovely-yak,
          .jk-lovely-yak-glow,
          .jk-lovely-yak-bar-fill,
          .jk-lovely-yak-action {
            transition: none;
            transform: none;
          }
        }
      `}</style>
      <div
        aria-hidden="true"
        className="jk-lovely-yak-glow pointer-events-none absolute inset-0 rounded-[0.75rem] blur-sm"
      />
      <div
        aria-hidden="true"
        className="jk-lovely-yak-shell pointer-events-none absolute inset-px"
      />
      <div className="relative">
        {children ?? (
          <>
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="jk-lovely-yak-icon flex h-8 w-8 items-center justify-center rounded-lg">
                  <TrendMark className="h-4 w-4" />
                </div>
                <h3 className="text-sm font-semibold text-card-foreground">
                  {title}
                </h3>
              </div>
              {liveLabel ? (
                <span className="jk-lovely-yak-live flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium">
                  <span className="jk-lovely-yak-live-dot h-1.5 w-1.5 rounded-full" />
                  {liveLabel}
                </span>
              ) : null}
            </div>
            <div className="mb-4 grid grid-cols-2 gap-4">
              {stats.slice(0, 2).map((stat: LovelyYakStat) => (
                <div
                  className="jk-lovely-yak-tile rounded-lg p-3"
                  key={stat.label}
                >
                  <p className="text-xs font-medium text-muted-foreground">
                    {stat.label}
                  </p>
                  <p className="text-lg font-semibold text-card-foreground">
                    {stat.value}
                  </p>
                  {stat.delta ? (
                    <span className="text-xs font-medium text-success">
                      {stat.delta}
                    </span>
                  ) : null}
                </div>
              ))}
            </div>
            <div className="jk-lovely-yak-chart mb-4 h-24 w-full overflow-hidden rounded-lg p-3">
              <div className="flex h-full w-full items-end justify-between gap-1">
                {bars.map((bar: LovelyYakBar, index: number) => (
                  <div
                    className="jk-lovely-yak-bar w-3 rounded-sm"
                    key={`${bar.track}-${bar.fill}-${index}`}
                    style={{ height: `${bar.track}%` }}
                  >
                    <div
                      className="jk-lovely-yak-bar-fill w-full rounded-sm"
                      style={{ height: `${bar.fill}%` }}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-muted-foreground">
                  {periodLabel}
                </span>
                <ChevronMark className="h-4 w-4 text-muted-foreground" />
              </div>
              {actionLabel ? (
                <button
                  className="jk-lovely-yak-action flex items-center gap-1 px-3 py-1 text-xs font-medium"
                  type="button"
                  onClick={onAction}
                >
                  {actionLabel}
                  <ArrowMark className="h-3 w-3" />
                </button>
              ) : null}
            </div>
          </>
        )}
      </div>
    </article>
  );
}
