// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { cn } from "@/lib/cn";
import type { JollyParrotProps } from "./JollyParrot.types";

const sizes = {
  sm: "jk-jolly-parrot-sm",
  md: "jk-jolly-parrot-md",
  lg: "jk-jolly-parrot-lg",
} as const;

const toneVars = {
  plum: {
    field: "color-mix(in oklab, var(--jk-chart-4) 82%, var(--jk-primary))",
    mark: "color-mix(in oklab, var(--jk-primary) 34%, var(--jk-chart-4))",
  },
  primary: {
    field: "var(--jk-primary)",
    mark: "color-mix(in oklab, var(--jk-chart-4) 62%, var(--jk-primary))",
  },
  chart: {
    field: "var(--jk-chart-1)",
    mark: "color-mix(in oklab, var(--jk-chart-4) 58%, var(--jk-chart-1))",
  },
} as const;

export function JollyParrot({
  className,
  children,
  label = "Diamond field",
  size = "md",
  tone = "plum",
  animated = false,
  style,
  ...props
}: JollyParrotProps) {
  const palette = toneVars[tone];

  return (
    <div
      aria-label={label}
      className={cn("jk-jolly-parrot relative", sizes[size], className)}
      data-animated={animated ? "true" : "false"}
      data-size={size}
      data-slot="jolly-parrot"
      data-tone={tone}
      role="img"
      style={
        {
          "--jk-jolly-field": palette.field,
          "--jk-jolly-mark": palette.mark,
          ...style,
        } as React.CSSProperties
      }
      {...props}
    >
      <style href="jk-jolly-parrot" precedence="default">{`
        .jk-jolly-parrot {
          --jk-jolly-tile: 40px;
          --jk-jolly-shift: -50px;
          box-sizing: border-box;
          width: 16rem;
          height: 11rem;
          overflow: hidden;
          border: 0;
          border-radius: 0;
          background-color: var(--jk-jolly-field);
          background-image:
            linear-gradient(95deg, var(--jk-jolly-mark) 25%, transparent 25%),
            linear-gradient(-15deg, var(--jk-jolly-mark) 25%, transparent 25%),
            linear-gradient(25deg, transparent 75%, var(--jk-jolly-mark) 75%),
            linear-gradient(-45deg, transparent 75%, var(--jk-jolly-mark) 75%),
            linear-gradient(-15deg, transparent 75%, var(--jk-jolly-mark) 75%);
          background-position:
            var(--jk-jolly-shift) 0,
            var(--jk-jolly-shift) 0,
            var(--jk-jolly-shift) 0,
            var(--jk-jolly-shift) 0,
            var(--jk-jolly-shift) 0;
          background-size: var(--jk-jolly-tile) var(--jk-jolly-tile);
        }
        .jk-jolly-parrot-sm {
          --jk-jolly-tile: 28px;
          --jk-jolly-shift: -35px;
          width: 12rem;
          height: 8rem;
        }
        .jk-jolly-parrot-lg {
          --jk-jolly-tile: 56px;
          --jk-jolly-shift: -70px;
          width: 20rem;
          height: 14rem;
        }
        @media (prefers-reduced-motion: no-preference) {
          .jk-jolly-parrot[data-animated="true"] {
            animation: jk-jolly-parrot-drift 18s linear infinite;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-jolly-parrot {
            animation: none;
          }
        }
        @keyframes jk-jolly-parrot-drift {
          to {
            background-position:
              calc(var(--jk-jolly-shift) + var(--jk-jolly-tile)) 0,
              calc(var(--jk-jolly-shift) + var(--jk-jolly-tile)) 0,
              calc(var(--jk-jolly-shift) + var(--jk-jolly-tile)) 0,
              calc(var(--jk-jolly-shift) + var(--jk-jolly-tile)) 0,
              calc(var(--jk-jolly-shift) + var(--jk-jolly-tile)) 0;
          }
        }
      `}</style>
      {children ? (
        <div className="relative z-10 flex h-full items-end p-4 text-sm font-medium text-primary-foreground">
          {children}
        </div>
      ) : null}
    </div>
  );
}
