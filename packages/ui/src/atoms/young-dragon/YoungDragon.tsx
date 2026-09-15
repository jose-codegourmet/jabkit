// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { cn } from "@/lib/cn";
import type { YoungDragonProps } from "./YoungDragon.types";

const sizes = {
  sm: "gap-2 text-xs",
  md: "gap-3 text-sm",
  lg: "gap-3.5 text-base",
} as const;

const cubeSizes = {
  sm: "1.35rem",
  md: "2.1rem",
  lg: "2.85rem",
} as const;

const FACES = ["front", "back", "left", "right", "top", "bottom"] as const;

export function YoungDragon({
  className,
  label = "Loading",
  size = "md",
  showLabel = false,
  ...props
}: YoungDragonProps) {
  return (
    <div
      aria-busy="true"
      aria-live="polite"
      className={cn(
        "jk-young-dragon inline-flex flex-col items-center justify-center text-muted-foreground",
        sizes[size],
        className,
      )}
      data-size={size}
      data-slot="young-dragon"
      role="status"
      style={
        {
          "--jk-young-dragon-size": cubeSizes[size],
        } as React.CSSProperties
      }
      {...props}
    >
      <style href="jk-young-dragon" precedence="default">{`
        .jk-young-dragon-scene {
          width: calc(var(--jk-young-dragon-size) * 1.7);
          height: calc(var(--jk-young-dragon-size) * 1.7);
          perspective: calc(var(--jk-young-dragon-size) * 4.2);
        }
        .jk-young-dragon-cube {
          position: relative;
          width: var(--jk-young-dragon-size);
          height: var(--jk-young-dragon-size);
          margin: calc(var(--jk-young-dragon-size) * 0.35) auto 0;
          transform-style: preserve-3d;
          transform: rotateX(-28deg) rotateY(38deg);
        }
        .jk-young-dragon-face {
          position: absolute;
          inset: 0;
          border: 2px solid color-mix(in oklab, var(--jk-primary) 78%, var(--jk-border));
          background: color-mix(in oklab, var(--jk-primary) 10%, transparent);
          backface-visibility: visible;
        }
        .jk-young-dragon-face[data-face="front"] {
          transform: translateZ(calc(var(--jk-young-dragon-size) / 2));
        }
        .jk-young-dragon-face[data-face="back"] {
          border-color: color-mix(in oklab, var(--jk-chart-1) 70%, var(--jk-border));
          transform: rotateY(180deg) translateZ(calc(var(--jk-young-dragon-size) / 2));
        }
        .jk-young-dragon-face[data-face="right"] {
          border-color: color-mix(in oklab, var(--jk-primary) 92%, var(--jk-foreground));
          transform: rotateY(90deg) translateZ(calc(var(--jk-young-dragon-size) / 2));
        }
        .jk-young-dragon-face[data-face="left"] {
          border-color: color-mix(in oklab, var(--jk-chart-5) 55%, var(--jk-primary));
          transform: rotateY(-90deg) translateZ(calc(var(--jk-young-dragon-size) / 2));
        }
        .jk-young-dragon-face[data-face="top"] {
          border-color: color-mix(in oklab, var(--jk-primary) 55%, var(--jk-card));
          transform: rotateX(90deg) translateZ(calc(var(--jk-young-dragon-size) / 2));
        }
        .jk-young-dragon-face[data-face="bottom"] {
          border-color: color-mix(in oklab, var(--jk-muted-foreground) 40%, var(--jk-primary));
          transform: rotateX(-90deg) translateZ(calc(var(--jk-young-dragon-size) / 2));
        }
        @media (prefers-reduced-motion: no-preference) {
          .jk-young-dragon-cube {
            animation: jk-young-dragon-tumble 2.4s linear infinite;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-young-dragon-cube {
            animation: none;
          }
        }
        @keyframes jk-young-dragon-tumble {
          to {
            transform: rotateX(332deg) rotateY(398deg);
          }
        }
      `}</style>
      <span aria-hidden="true" className="jk-young-dragon-scene">
        <span className="jk-young-dragon-cube">
          {FACES.map((face) => (
            <span className="jk-young-dragon-face" data-face={face} key={face} />
          ))}
        </span>
      </span>
      <span className={showLabel ? "font-medium" : "sr-only"}>{label}</span>
    </div>
  );
}
