// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { cn } from "@/lib/cn";
import type { StupidInsectProps } from "./StupidInsect.types";

const cellSizes = {
  sm: "100px",
  md: "150px",
  lg: "200px",
} as const;

const palettes = {
  sand: {
    a: "color-mix(in oklab, var(--jk-warning) 58%, var(--jk-card))",
    b: "color-mix(in oklab, var(--jk-chart-1) 38%, var(--jk-foreground))",
  },
  dusk: {
    a: "color-mix(in oklab, var(--jk-chart-3) 42%, var(--jk-card))",
    b: "color-mix(in oklab, var(--jk-chart-1) 62%, var(--jk-primary))",
  },
} as const;

export function StupidInsect({
  className,
  children,
  cellSize = "md",
  tone = "sand",
  animated = false,
  label = "Concentric ring field",
  style,
  ...props
}: StupidInsectProps) {
  const inks = palettes[tone];

  return (
    <div
      aria-label={children ? undefined : label}
      className={cn("jk-stupid-insect", animated && "jk-stupid-insect-live", className)}
      data-slot="stupid-insect"
      data-tone={tone}
      role={children ? undefined : "img"}
      style={
        {
          "--jk-stupid-insect-a": inks.a,
          "--jk-stupid-insect-b": inks.b,
          "--jk-stupid-insect-cell": cellSizes[cellSize],
          ...style,
        } as React.CSSProperties
      }
      {...props}
    >
      <style href="jk-stupid-insect" precedence="default">{`
        .jk-stupid-insect {
          --jk-stupid-insect-rings:
            var(--jk-stupid-insect-a) 0% 5%,
            var(--jk-stupid-insect-b) 6% 15%,
            var(--jk-stupid-insect-a) 16% 25%,
            var(--jk-stupid-insect-b) 26% 35%,
            var(--jk-stupid-insect-a) 36% 45%,
            var(--jk-stupid-insect-b) 46% 55%,
            var(--jk-stupid-insect-a) 56% 65%,
            var(--jk-stupid-insect-b) 66% 75%,
            var(--jk-stupid-insect-a) 76% 85%,
            var(--jk-stupid-insect-b) 86% 95%,
            transparent 96%;
          position: relative;
          isolation: isolate;
          width: 100%;
          height: 100%;
          min-height: 10rem;
          overflow: hidden;
          border: 0;
          border-radius: 0;
          background:
            radial-gradient(50% 50% at 100% 0, var(--jk-stupid-insect-rings)),
            radial-gradient(50% 50% at 0 100%, var(--jk-stupid-insect-rings)),
            radial-gradient(50% 50%, var(--jk-stupid-insect-rings)),
            radial-gradient(50% 50%, var(--jk-stupid-insect-rings))
              calc(var(--jk-stupid-insect-cell) / 2)
              calc(var(--jk-stupid-insect-cell) / 2)
              var(--jk-stupid-insect-a);
          background-size: var(--jk-stupid-insect-cell) var(--jk-stupid-insect-cell);
        }
        @media (prefers-reduced-motion: no-preference) {
          .jk-stupid-insect-live {
            animation: jk-stupid-insect-drift 18s linear infinite;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-stupid-insect-live {
            animation: none;
          }
        }
        @keyframes jk-stupid-insect-drift {
          to {
            background-position:
              var(--jk-stupid-insect-cell) 0,
              calc(var(--jk-stupid-insect-cell) * -1) 0,
              0 var(--jk-stupid-insect-cell),
              calc(var(--jk-stupid-insect-cell) * 1.5)
                calc(var(--jk-stupid-insect-cell) * 1.5);
          }
        }
      `}</style>
      {children ? (
        <div className="relative z-10 flex h-full min-h-40 items-center justify-center p-6 text-card-foreground">
          {children}
        </div>
      ) : null}
    </div>
  );
}
