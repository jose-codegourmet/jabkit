// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { cn } from "@/lib/cn";
import type { LoudParrotProps } from "./LoudParrot.types";

const frameSizes = {
  sm: "h-24 w-36",
  md: "h-40 w-64",
  lg: "h-56 w-80",
} as const;

const cellSizes = {
  sm: "2.5rem",
  md: "3.75rem",
  lg: "5rem",
} as const;

const tones = {
  default: {
    hi: "var(--jk-card)",
    mid: "var(--jk-muted)",
    lo: "var(--jk-foreground)",
  },
  muted: {
    hi: "var(--jk-background)",
    mid: "var(--jk-secondary)",
    lo: "var(--jk-muted-foreground)",
  },
  chart: {
    hi: "var(--jk-chart-5)",
    mid: "var(--jk-chart-1)",
    lo: "var(--jk-chart-4)",
  },
} as const;

export function LoudParrot({
  className,
  children,
  label = "Decorative isometric field",
  size = "md",
  tone = "default",
  animate = true,
  ...props
}: LoudParrotProps) {
  const triad = tones[tone];

  return (
    <div
      aria-label={children ? undefined : label}
      className={cn(
        "jk-loud-parrot relative overflow-hidden rounded-[--radius] border border-border",
        !children && frameSizes[size],
        children && "min-h-40 w-full",
        className,
      )}
      data-animate={animate ? "true" : "false"}
      data-size={size}
      data-slot="loud-parrot"
      data-tone={tone}
      role={children ? undefined : "img"}
      style={
        {
          "--jk-loud-parrot-hi": triad.hi,
          "--jk-loud-parrot-mid": triad.mid,
          "--jk-loud-parrot-lo": triad.lo,
          "--jk-loud-parrot-cell": cellSizes[size],
        } as React.CSSProperties
      }
      {...props}
    >
      <style href="jk-loud-parrot" precedence="default">{`
        .jk-loud-parrot-field {
          --lp-cell: var(--jk-loud-parrot-cell);
          --lp-span-x: calc(var(--lp-cell) * 1.85);
          --lp-span-y: calc(var(--lp-cell) * 1.6);
          background-color: var(--jk-loud-parrot-mid);
          background-image:
            repeating-conic-gradient(
              from 30deg at 50% 50%,
              var(--jk-loud-parrot-hi) 0deg 60deg,
              var(--jk-loud-parrot-mid) 60deg 120deg,
              var(--jk-loud-parrot-lo) 120deg 180deg
            ),
            repeating-linear-gradient(
              90deg,
              transparent 0 calc(var(--lp-cell) * 0.92),
              color-mix(in oklab, var(--jk-border), transparent 35%)
                calc(var(--lp-cell) * 0.92) var(--lp-cell)
            );
          background-size: var(--lp-span-x) var(--lp-span-y), var(--lp-cell) 100%;
          background-position: 0 0, 0 0;
        }
        @keyframes jk-loud-parrot-drift {
          to {
            background-position:
              var(--lp-span-x) var(--lp-span-y),
              var(--lp-cell) 0;
          }
        }
        @media (prefers-reduced-motion: no-preference) {
          .jk-loud-parrot[data-animate="true"] .jk-loud-parrot-field {
            animation: jk-loud-parrot-drift 22s linear infinite;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-loud-parrot-field {
            animation: none;
          }
        }
      `}</style>
      <span
        aria-hidden="true"
        className="jk-loud-parrot-field pointer-events-none absolute inset-0"
      />
      {children ? (
        <div className="relative z-10 p-6 text-card-foreground">{children}</div>
      ) : null}
    </div>
  );
}
