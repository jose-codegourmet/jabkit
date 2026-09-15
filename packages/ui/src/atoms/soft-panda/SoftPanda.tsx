// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { cn } from "@/lib/cn";
import type { SoftPandaProps } from "./SoftPanda.types";

const frameSizes = {
  sm: "size-36",
  md: "size-56",
  lg: "size-72",
} as const;

const cells = {
  sm: { size: "3.75rem", shift: "5.625rem" },
  md: { size: "5.625rem", shift: "8.4375rem" },
  lg: { size: "7.5rem", shift: "11.25rem" },
} as const;

const tones = {
  default: {
    ink: "color-mix(in oklab, var(--jk-foreground) 92%, var(--jk-primary))",
    tile: "color-mix(in oklab, var(--jk-warning) 68%, var(--jk-background))",
  },
  muted: {
    ink: "var(--jk-muted-foreground)",
    tile: "var(--jk-muted)",
  },
  chart: {
    ink: "var(--jk-chart-2)",
    tile: "var(--jk-chart-4)",
  },
} as const;

export function SoftPanda({
  className,
  children,
  label = "Dual-tone mosaic",
  size = "md",
  tone = "default",
  animate = false,
  style,
  ...props
}: SoftPandaProps) {
  const pair = tones[tone];
  const grain = cells[size];

  return (
    <div
      aria-label={children ? undefined : label}
      className={cn(
        "jk-soft-panda relative overflow-hidden rounded-none",
        !children && frameSizes[size],
        children && "min-h-56 w-full",
        animate && "jk-soft-panda-live",
        className,
      )}
      data-size={size}
      data-slot="soft-panda"
      data-tone={tone}
      role={children ? undefined : "img"}
      style={
        {
          "--jk-soft-panda-ink": pair.ink,
          "--jk-soft-panda-tile": pair.tile,
          "--jk-soft-panda-cell": grain.size,
          "--jk-soft-panda-shift": grain.shift,
          ...style,
        } as React.CSSProperties
      }
      {...props}
    >
      <style href="jk-soft-panda" precedence="default">{`
        .jk-soft-panda {
          border-radius: 0;
          background-image:
            linear-gradient(
              45deg,
              var(--jk-soft-panda-tile) 25%,
              transparent 25%,
              transparent 75%,
              var(--jk-soft-panda-tile) 75%,
              var(--jk-soft-panda-tile)
            ),
            linear-gradient(
              135deg,
              var(--jk-soft-panda-tile) 25%,
              var(--jk-soft-panda-ink) 25%,
              var(--jk-soft-panda-ink) 75%,
              var(--jk-soft-panda-tile) 75%,
              var(--jk-soft-panda-tile)
            );
          background-position: 0 0, var(--jk-soft-panda-shift) var(--jk-soft-panda-shift);
          background-size: var(--jk-soft-panda-cell) var(--jk-soft-panda-cell);
        }
        @keyframes jk-soft-panda-drift {
          to {
            background-position:
              var(--jk-soft-panda-cell) var(--jk-soft-panda-cell),
              calc(var(--jk-soft-panda-shift) + var(--jk-soft-panda-cell))
                calc(var(--jk-soft-panda-shift) + var(--jk-soft-panda-cell));
          }
        }
        @media (prefers-reduced-motion: no-preference) {
          .jk-soft-panda-live {
            animation: jk-soft-panda-drift 18s linear infinite;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-soft-panda-live {
            animation: none;
          }
        }
      `}</style>
      {children ? (
        <div className="relative z-10 p-6 text-card-foreground">{children}</div>
      ) : null}
    </div>
  );
}
