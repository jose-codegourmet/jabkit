// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { cn } from "@/lib/cn";
import type { JollyParrotProps } from "./JollyParrot.types";

const sizes = {
  sm: "h-32 w-48",
  md: "h-44 w-64",
  lg: "h-56 w-80",
} as const;

const tile = {
  sm: "1.5rem",
  md: "2rem",
  lg: "2.5rem",
} as const;

const toneVars = {
  plum: {
    field: "var(--jk-chart-4)",
    mark: "color-mix(in oklab, var(--jk-primary) 55%, var(--jk-chart-4))",
  },
  primary: {
    field: "var(--jk-primary)",
    mark: "color-mix(in oklab, var(--jk-chart-4) 70%, var(--jk-primary))",
  },
  chart: {
    field: "var(--jk-chart-1)",
    mark: "color-mix(in oklab, var(--jk-chart-4) 65%, var(--jk-chart-1))",
  },
} as const;

export function JollyParrot({
  className,
  children,
  label = "Diamond field",
  size = "md",
  tone = "plum",
  animated = true,
  style,
  ...props
}: JollyParrotProps) {
  const palette = toneVars[tone];

  return (
    <div
      aria-label={label}
      className={cn(
        "jk-jolly-parrot relative overflow-hidden rounded-[--radius] border border-border shadow-sm",
        sizes[size],
        className,
      )}
      data-animated={animated ? "true" : "false"}
      data-size={size}
      data-slot="jolly-parrot"
      data-tone={tone}
      role="img"
      style={
        {
          "--jk-jolly-field": palette.field,
          "--jk-jolly-mark": palette.mark,
          "--jk-jolly-tile": tile[size],
          ...style,
        } as React.CSSProperties
      }
      {...props}
    >
      <style href="jk-jolly-parrot" precedence="default">{`
        .jk-jolly-parrot-field {
          background-color: var(--jk-jolly-field);
          background-image:
            linear-gradient(
              60deg,
              var(--jk-jolly-mark) 25%,
              transparent 25.5%
            ),
            linear-gradient(
              120deg,
              var(--jk-jolly-mark) 25%,
              transparent 25.5%
            ),
            linear-gradient(
              60deg,
              transparent 74.5%,
              var(--jk-jolly-mark) 75%
            ),
            linear-gradient(
              120deg,
              transparent 74.5%,
              var(--jk-jolly-mark) 75%
            );
          background-size: var(--jk-jolly-tile) var(--jk-jolly-tile);
          background-position:
            0 0,
            0 calc(var(--jk-jolly-tile) / 2),
            calc(var(--jk-jolly-tile) / 2) calc(var(--jk-jolly-tile) / -2),
            calc(var(--jk-jolly-tile) / -2) 0;
        }
        @media (prefers-reduced-motion: no-preference) {
          .jk-jolly-parrot[data-animated="true"] .jk-jolly-parrot-field {
            animation: jk-jolly-parrot-drift 18s linear infinite;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-jolly-parrot-field {
            animation: none;
          }
        }
        @keyframes jk-jolly-parrot-drift {
          to {
            background-position:
              var(--jk-jolly-tile) var(--jk-jolly-tile),
              var(--jk-jolly-tile) calc(var(--jk-jolly-tile) * 1.5),
              calc(var(--jk-jolly-tile) * 1.5) calc(var(--jk-jolly-tile) / 2),
              calc(var(--jk-jolly-tile) / 2) var(--jk-jolly-tile);
          }
        }
      `}</style>
      <span
        aria-hidden="true"
        className="jk-jolly-parrot-field pointer-events-none absolute inset-0"
      />
      {children ? (
        <div className="relative z-10 flex h-full items-end p-4 text-sm font-medium text-primary-foreground">
          {children}
        </div>
      ) : null}
    </div>
  );
}
