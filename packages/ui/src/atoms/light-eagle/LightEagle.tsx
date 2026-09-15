// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { cn } from "@/lib/cn";
import type { LightEagleProps } from "./LightEagle.types";

const cellSizes = {
  sm: "140px",
  md: "200px",
  lg: "260px",
} as const;

const palettes = {
  frost: {
    a: "color-mix(in oklab, var(--jk-foreground) 72%, var(--jk-muted))",
    b: "color-mix(in oklab, var(--jk-muted-foreground) 38%, var(--jk-card))",
    c: "var(--jk-card)",
  },
  slate: {
    a: "color-mix(in oklab, var(--jk-foreground) 58%, var(--jk-secondary))",
    b: "color-mix(in oklab, var(--jk-muted) 42%, var(--jk-muted-foreground))",
    c: "color-mix(in oklab, var(--jk-card) 86%, var(--jk-background))",
  },
  ink: {
    a: "color-mix(in oklab, var(--jk-foreground) 88%, var(--jk-primary))",
    b: "color-mix(in oklab, var(--jk-muted-foreground) 64%, var(--jk-secondary))",
    c: "color-mix(in oklab, var(--jk-background) 70%, var(--jk-card))",
  },
} as const;

export function LightEagle({
  className,
  children,
  cellSize = "md",
  tone = "frost",
  animated = false,
  label = "Isometric cube field",
  style,
  ...props
}: LightEagleProps) {
  const faces = palettes[tone];

  return (
    <div
      aria-label={children ? undefined : label}
      className={cn("jk-light-eagle", animated && "jk-light-eagle-live", className)}
      data-slot="light-eagle"
      data-tone={tone}
      role={children ? undefined : "img"}
      style={
        {
          "--jk-light-eagle-a": faces.a,
          "--jk-light-eagle-b": faces.b,
          "--jk-light-eagle-c": faces.c,
          "--jk-light-eagle-cell": cellSizes[cellSize],
          ...style,
        } as React.CSSProperties
      }
      {...props}
    >
      <style href="jk-light-eagle" precedence="default">{`
        .jk-light-eagle {
          --jk-light-eagle-s: var(--jk-light-eagle-cell);
          position: relative;
          isolation: isolate;
          width: 100%;
          height: 100%;
          min-height: 10rem;
          overflow: hidden;
          border: 0;
          border-radius: 0;
          background:
            repeating-conic-gradient(
              from 30deg,
              transparent 0 120deg,
              var(--jk-light-eagle-c) 0 180deg
            )
            calc(0.5 * var(--jk-light-eagle-s))
            calc(0.5 * var(--jk-light-eagle-s) * 0.577),
            repeating-conic-gradient(
              from 30deg,
              var(--jk-light-eagle-a) 0 60deg,
              var(--jk-light-eagle-b) 0 120deg,
              var(--jk-light-eagle-c) 0 180deg
            );
          background-size: var(--jk-light-eagle-s) calc(var(--jk-light-eagle-s) * 0.577);
        }
        @media (prefers-reduced-motion: no-preference) {
          .jk-light-eagle-live {
            animation: jk-light-eagle-drift 22s linear infinite;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-light-eagle-live {
            animation: none;
          }
        }
        @keyframes jk-light-eagle-drift {
          to {
            background-position:
              calc(var(--jk-light-eagle-s) * 1.5)
                calc(var(--jk-light-eagle-s) * 0.577),
              var(--jk-light-eagle-s) calc(var(--jk-light-eagle-s) * 0.577);
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
