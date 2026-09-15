// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { cn } from "@/lib/cn";
import type { LightEagleProps } from "./LightEagle.types";

const sizes = {
  sm: "h-28 w-44",
  md: "h-40 w-64",
  lg: "h-52 w-80",
} as const;

const tile = {
  sm: "1.35rem",
  md: "1.75rem",
  lg: "2.15rem",
} as const;

const tones = {
  dawn: {
    field: "color-mix(in oklab, var(--jk-card) 82%, var(--jk-warning))",
    bar: "color-mix(in oklab, var(--jk-warning) 42%, var(--jk-card))",
    lift: "color-mix(in oklab, var(--jk-primary) 28%, var(--jk-card))",
  },
  sky: {
    field: "color-mix(in oklab, var(--jk-card) 78%, var(--jk-chart-2))",
    bar: "color-mix(in oklab, var(--jk-chart-2) 48%, var(--jk-muted))",
    lift: "color-mix(in oklab, var(--jk-primary) 36%, var(--jk-card))",
  },
  chart: {
    field: "color-mix(in oklab, var(--jk-muted) 70%, var(--jk-chart-1))",
    bar: "color-mix(in oklab, var(--jk-chart-1) 55%, var(--jk-card))",
    lift: "color-mix(in oklab, var(--jk-chart-4) 40%, var(--jk-card))",
  },
} as const;

export function LightEagle({
  className,
  children,
  label = "Wing field",
  size = "md",
  tone = "dawn",
  animate = true,
  style,
  ...props
}: LightEagleProps) {
  const palette = tones[tone];
  const content = children ?? label;

  return (
    <div
      aria-label={children ? undefined : label}
      className={cn(
        "jk-light-eagle relative overflow-hidden rounded-[--radius] border border-border bg-card text-card-foreground shadow-[var(--jk-shadow-control)]",
        sizes[size],
        className,
      )}
      data-animate={animate ? "true" : "false"}
      data-size={size}
      data-slot="light-eagle"
      data-tone={tone}
      role={children ? undefined : "img"}
      style={
        {
          "--jk-light-eagle-field": palette.field,
          "--jk-light-eagle-bar": palette.bar,
          "--jk-light-eagle-lift": palette.lift,
          "--jk-light-eagle-tile": tile[size],
          ...style,
        } as React.CSSProperties
      }
      {...props}
    >
      <style href="jk-light-eagle" precedence="default">{`
        .jk-light-eagle-field {
          --le-s: var(--jk-light-eagle-tile);
          background-color: var(--jk-light-eagle-field);
          background-image:
            linear-gradient(
              180deg,
              color-mix(in oklab, var(--jk-light-eagle-lift), transparent 42%) 0%,
              transparent 46%,
              color-mix(in oklab, var(--jk-card), transparent 35%) 100%
            ),
            repeating-linear-gradient(
              135deg,
              var(--jk-light-eagle-bar) 0 calc(var(--le-s) * 0.22),
              transparent calc(var(--le-s) * 0.22) calc(var(--le-s) * 0.5)
            ),
            repeating-linear-gradient(
              45deg,
              color-mix(in oklab, var(--jk-light-eagle-bar), transparent 28%) 0
                calc(var(--le-s) * 0.18),
              transparent calc(var(--le-s) * 0.18) calc(var(--le-s) * 0.5)
            );
          background-size:
            100% 100%,
            calc(var(--le-s) * 1.4) calc(var(--le-s) * 1.4),
            calc(var(--le-s) * 1.4) calc(var(--le-s) * 1.4);
          background-position: 0 0, 0 0, calc(var(--le-s) * 0.35) 0;
        }
        @keyframes jk-light-eagle-glide {
          to {
            background-position:
              0 0,
              calc(var(--le-s) * 1.4) calc(var(--le-s) * 1.4),
              calc(var(--le-s) * 1.75) calc(var(--le-s) * 1.4);
          }
        }
        @media (prefers-reduced-motion: no-preference) {
          .jk-light-eagle[data-animate="true"] .jk-light-eagle-field {
            animation: jk-light-eagle-glide 22s linear infinite;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-light-eagle-field {
            animation: none;
          }
        }
      `}</style>
      <span
        aria-hidden="true"
        className="jk-light-eagle-field pointer-events-none absolute inset-0"
      />
      <p className="relative z-10 flex h-full items-end px-4 pb-3 text-sm font-medium tracking-tight">
        {content}
      </p>
    </div>
  );
}
