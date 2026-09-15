// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { cn } from "@/lib/cn";
import type { LovelyYakProps } from "./LovelyYak.types";

const sizes = {
  sm: "w-56",
  md: "w-72",
  lg: "w-80",
} as const;

export function LovelyYak({
  className,
  children,
  title = "Field notes",
  description = "A compact card for a name, a short brief, and one next step.",
  kicker = "Profile",
  actionLabel,
  size = "md",
  animate = true,
  onAction,
  ...props
}: LovelyYakProps) {
  return (
    <article
      className={cn(
        "jk-lovely-yak relative overflow-hidden rounded-[1.35rem] border border-border bg-card text-card-foreground shadow-[var(--jk-shadow-control)]",
        sizes[size],
        className,
      )}
      data-animate={animate ? "true" : "false"}
      data-size={size}
      data-slot="lovely-yak"
      {...props}
    >
      <style href="jk-lovely-yak" precedence="default">{`
        .jk-lovely-yak-banner {
          background:
            linear-gradient(
              135deg,
              color-mix(in oklab, var(--jk-primary), var(--jk-accent) 28%) 0%,
              color-mix(in oklab, var(--jk-chart-2), var(--jk-primary) 35%) 100%
            );
        }
        .jk-lovely-yak-mark {
          background: color-mix(in oklab, var(--jk-card) 88%, var(--jk-primary));
          box-shadow:
            0 0 0 0.35rem color-mix(in oklab, var(--jk-card), transparent 12%),
            0 10px 24px color-mix(in oklab, var(--jk-foreground), transparent 86%);
        }
        .jk-lovely-yak-horn {
          background: color-mix(in oklab, var(--jk-primary), var(--jk-accent) 40%);
        }
        .jk-lovely-yak-action {
          background: var(--jk-primary);
          color: var(--jk-primary-foreground);
        }
        .jk-lovely-yak-action:hover {
          background: color-mix(in oklab, var(--jk-primary), var(--jk-foreground) 10%);
        }
        .jk-lovely-yak-action:focus-visible {
          outline: 2px solid var(--jk-ring);
          outline-offset: 2px;
        }
        @media (prefers-reduced-motion: no-preference) {
          .jk-lovely-yak[data-animate="true"] {
            transition:
              transform 220ms ease,
              box-shadow 220ms ease;
          }
          .jk-lovely-yak[data-animate="true"]:hover {
            transform: translateY(-0.35rem);
            box-shadow:
              0 18px 36px color-mix(in oklab, var(--jk-foreground), transparent 86%),
              var(--jk-shadow-control);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-lovely-yak {
            transition: none;
            transform: none;
          }
        }
      `}</style>
      <div aria-hidden="true" className="jk-lovely-yak-banner h-20" />
      <div
        aria-hidden="true"
        className="jk-lovely-yak-mark relative z-10 mx-auto -mt-8 flex size-16 items-center justify-center rounded-full"
      >
        <span className="jk-lovely-yak-horn absolute top-2 left-3 h-3 w-2 -rotate-25 rounded-t-full" />
        <span className="jk-lovely-yak-horn absolute top-2 right-3 h-3 w-2 rotate-25 rounded-t-full" />
        <span className="size-2 rounded-full bg-foreground" />
      </div>
      <div className="flex flex-col gap-2 px-5 pt-3 pb-5 text-center">
        {children ?? (
          <>
            {kicker ? (
              <p className="text-xs font-medium tracking-wide text-muted-foreground">
                {kicker}
              </p>
            ) : null}
            <h3 className="text-lg font-semibold tracking-tight text-card-foreground">
              {title}
            </h3>
            {description ? (
              <p className="text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            ) : null}
          </>
        )}
        {actionLabel ? (
          <button
            className="jk-lovely-yak-action mt-2 inline-flex h-9 items-center justify-center rounded-full px-4 text-sm font-medium"
            type="button"
            onClick={onAction}
          >
            {actionLabel}
          </button>
        ) : null}
      </div>
    </article>
  );
}
