// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { cn } from "@/lib/cn";
import type { StupidInsectProps } from "./StupidInsect.types";

const cellSizes = {
  sm: "6.5rem",
  md: "9.5rem",
  lg: "12.5rem",
} as const;

export function StupidInsect({
  className,
  children,
  cellSize = "md",
  tone = "primary",
  animated = true,
  ...props
}: StupidInsectProps) {
  return (
    <div
      className={cn(
        "jk-stupid-insect relative isolate overflow-hidden rounded-[--radius] border border-border",
        className,
      )}
      data-animated={animated ? "true" : "false"}
      data-slot="stupid-insect"
      data-tone={tone}
      style={{
        ["--jk-stupid-insect-cell" as string]: cellSizes[cellSize],
      }}
      {...props}
    >
      <style href="jk-stupid-insect" precedence="default">{`
        .jk-stupid-insect {
          min-height: 12rem;
          min-width: 12rem;
        }
        .jk-stupid-insect-field {
          --jk-stupid-insect-a: var(--jk-card);
          --jk-stupid-insect-b: var(--jk-primary);
          --jk-stupid-insect-rings:
            var(--jk-stupid-insect-a) 0 7%,
            var(--jk-stupid-insect-b) 8% 17%,
            var(--jk-stupid-insect-a) 18% 27%,
            var(--jk-stupid-insect-b) 28% 37%,
            var(--jk-stupid-insect-a) 38% 47%,
            var(--jk-stupid-insect-b) 48% 57%,
            var(--jk-stupid-insect-a) 58% 67%,
            var(--jk-stupid-insect-b) 68% 77%,
            var(--jk-stupid-insect-a) 78% 87%,
            var(--jk-stupid-insect-b) 88% 94%,
            transparent 95%;
          background-color: var(--jk-stupid-insect-a);
          background-image:
            radial-gradient(50% 50% at 100% 0, var(--jk-stupid-insect-rings)),
            radial-gradient(50% 50% at 0 100%, var(--jk-stupid-insect-rings)),
            radial-gradient(50% 50% at 50% 50%, var(--jk-stupid-insect-rings)),
            radial-gradient(50% 50% at 50% 50%, var(--jk-stupid-insect-rings));
          background-position:
            0 0,
            0 0,
            0 0,
            calc(var(--jk-stupid-insect-cell) / 2) calc(var(--jk-stupid-insect-cell) / 2);
          background-size: var(--jk-stupid-insect-cell) var(--jk-stupid-insect-cell);
        }
        .jk-stupid-insect[data-tone="chart"] .jk-stupid-insect-field {
          --jk-stupid-insect-a: var(--jk-chart-3);
          --jk-stupid-insect-b: var(--jk-chart-1);
        }
        @media (prefers-reduced-motion: no-preference) {
          .jk-stupid-insect[data-animated="true"] .jk-stupid-insect-field {
            animation: jk-stupid-insect-drift 18s linear infinite;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-stupid-insect-field {
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
      <div
        aria-hidden="true"
        className="jk-stupid-insect-field pointer-events-none absolute inset-0"
      />
      {children ? (
        <div className="relative z-10 flex h-full min-h-12 w-full items-end p-4">
          <div className="rounded-[--radius] bg-background/80 px-3 py-2 text-sm text-foreground shadow-[var(--jk-shadow-control)] ring-1 ring-border backdrop-blur-sm">
            {children}
          </div>
        </div>
      ) : null}
    </div>
  );
}
