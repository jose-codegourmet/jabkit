// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { cn } from "@/lib/cn";
import type { KindPantherProps } from "./KindPanther.types";

const sizes = {
  sm: "jk-kind-panther-sm",
  md: "jk-kind-panther-md",
  lg: "jk-kind-panther-lg",
} as const;

const toneVars = {
  honey: {
    cell: "var(--jk-chart-5)",
    field: "var(--jk-warning)",
  },
  primary: {
    cell: "var(--jk-primary)",
    field: "var(--jk-accent)",
  },
  muted: {
    cell: "color-mix(in oklab, var(--jk-muted-foreground) 72%, var(--jk-foreground))",
    field: "var(--jk-muted)",
  },
} as const;

export function KindPanther({
  className,
  children,
  label = "Honeycomb field",
  size = "md",
  tone = "honey",
  animated = false,
  style,
  ...props
}: KindPantherProps) {
  const palette = toneVars[tone];

  return (
    <div
      aria-label={label}
      className={cn("jk-kind-panther relative", sizes[size], className)}
      data-animated={animated ? "true" : "false"}
      data-size={size}
      data-slot="kind-panther"
      data-tone={tone}
      role="img"
      style={
        {
          "--jk-kind-cell": palette.cell,
          "--jk-kind-field": palette.field,
          ...style,
        } as React.CSSProperties
      }
      {...props}
    >
      <style href="jk-kind-panther" precedence="default">{`
        .jk-kind-panther {
          --jk-kind-s: 37px;
          box-sizing: border-box;
          width: 14rem;
          height: 14rem;
          overflow: hidden;
          border: 0;
          border-radius: 0;
          --jk-kind-stroke: transparent, var(--jk-kind-cell) 0.5deg 119.5deg, transparent 120deg;
          --jk-kind-g1: conic-gradient(
            from 60deg at 56.25% calc(425% / 6),
            var(--jk-kind-stroke)
          );
          --jk-kind-g2: conic-gradient(
            from 180deg at 43.75% calc(425% / 6),
            var(--jk-kind-stroke)
          );
          --jk-kind-g3: conic-gradient(
            from -60deg at 50% calc(175% / 12),
            var(--jk-kind-stroke)
          );
          background-color: var(--jk-kind-field);
          background-image:
            var(--jk-kind-g1),
            var(--jk-kind-g1),
            var(--jk-kind-g2),
            var(--jk-kind-g2),
            var(--jk-kind-g3),
            var(--jk-kind-g3);
          background-position:
            0 0,
            var(--jk-kind-s) calc(1.73 * var(--jk-kind-s)),
            0 0,
            var(--jk-kind-s) calc(1.73 * var(--jk-kind-s)),
            var(--jk-kind-s) 0,
            0 calc(1.73 * var(--jk-kind-s));
          background-size: calc(2 * var(--jk-kind-s)) calc(3.46 * var(--jk-kind-s));
        }
        .jk-kind-panther-sm {
          --jk-kind-s: 28px;
          width: 10rem;
          height: 10rem;
        }
        .jk-kind-panther-lg {
          --jk-kind-s: 52px;
          width: 18rem;
          height: 18rem;
        }
        @media (prefers-reduced-motion: no-preference) {
          .jk-kind-panther[data-animated="true"] {
            animation: jk-kind-panther-drift 18s linear infinite;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-kind-panther {
            animation: none;
          }
        }
        @keyframes jk-kind-panther-drift {
          to {
            background-position:
              calc(2 * var(--jk-kind-s)) 0,
              calc(3 * var(--jk-kind-s)) calc(1.73 * var(--jk-kind-s)),
              calc(2 * var(--jk-kind-s)) 0,
              calc(3 * var(--jk-kind-s)) calc(1.73 * var(--jk-kind-s)),
              calc(3 * var(--jk-kind-s)) 0,
              calc(2 * var(--jk-kind-s)) calc(1.73 * var(--jk-kind-s));
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
