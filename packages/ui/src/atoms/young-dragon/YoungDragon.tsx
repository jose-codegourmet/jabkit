// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { cn } from "@/lib/cn";
import type { YoungDragonProps } from "./YoungDragon.types";

const cubeSizes = {
  sm: "32px",
  md: "44px",
  lg: "66px",
} as const;

const labelSizes = {
  sm: "gap-2 text-xs",
  md: "gap-3 text-sm",
  lg: "gap-3.5 text-base",
} as const;

const FACES = [0, 1, 2, 3, 4, 5] as const;

export function YoungDragon({
  className,
  label = "Loading",
  size = "md",
  showLabel = false,
  style,
  ...props
}: YoungDragonProps) {
  return (
    <div
      aria-busy="true"
      aria-live="polite"
      className={cn(
        "jk-young-dragon inline-flex flex-col items-center justify-center text-muted-foreground",
        labelSizes[size],
        className,
      )}
      data-size={size}
      data-slot="young-dragon"
      role="status"
      style={
        {
          "--jk-young-dragon-size": cubeSizes[size],
          "--jk-young-dragon-half": `calc(${cubeSizes[size]} / 2)`,
          ...style,
        } as React.CSSProperties
      }
      {...props}
    >
      <style href="jk-young-dragon" precedence="default">{`
        .jk-young-dragon-cube {
          position: relative;
          width: var(--jk-young-dragon-size);
          height: var(--jk-young-dragon-size);
          transform: rotate(45deg) rotateX(-25deg) rotateY(25deg);
          transform-style: preserve-3d;
        }
        .jk-young-dragon-cube > span {
          position: absolute;
          width: 100%;
          height: 100%;
          box-sizing: content-box;
          border: 2px solid var(--jk-primary);
          border-radius: 0;
          background: color-mix(in oklab, var(--jk-primary) 20%, transparent);
        }
        .jk-young-dragon-cube > span:nth-of-type(1) {
          transform: translateZ(calc(var(--jk-young-dragon-half) * -1)) rotateY(180deg);
        }
        .jk-young-dragon-cube > span:nth-of-type(2) {
          transform: rotateY(-270deg) translateX(50%);
          transform-origin: top right;
        }
        .jk-young-dragon-cube > span:nth-of-type(3) {
          transform: rotateY(270deg) translateX(-50%);
          transform-origin: center left;
        }
        .jk-young-dragon-cube > span:nth-of-type(4) {
          transform: rotateX(90deg) translateY(-50%);
          transform-origin: top center;
        }
        .jk-young-dragon-cube > span:nth-of-type(5) {
          transform: rotateX(-90deg) translateY(50%);
          transform-origin: bottom center;
        }
        .jk-young-dragon-cube > span:nth-of-type(6) {
          transform: translateZ(var(--jk-young-dragon-half));
        }
        @media (prefers-reduced-motion: no-preference) {
          .jk-young-dragon-cube {
            animation: jk-young-dragon-tumble 2s infinite ease;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-young-dragon-cube {
            animation: none;
          }
        }
        @keyframes jk-young-dragon-tumble {
          0% {
            transform: rotate(45deg) rotateX(-25deg) rotateY(25deg);
          }
          50% {
            transform: rotate(45deg) rotateX(-385deg) rotateY(25deg);
          }
          100% {
            transform: rotate(45deg) rotateX(-385deg) rotateY(385deg);
          }
        }
      `}</style>
      <span aria-hidden="true" className="jk-young-dragon-cube">
        {FACES.map((face) => (
          <span key={face} />
        ))}
      </span>
      <span className={showLabel ? "font-medium" : "sr-only"}>{label}</span>
    </div>
  );
}
