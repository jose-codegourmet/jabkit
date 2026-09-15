// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { cn } from "@/lib/cn";
import type { BrightLizardProps } from "./BrightLizard.types";

const faceSizes = {
  sm: "7.5rem",
  md: "11.25rem",
  lg: "13.75rem",
} as const;

const fontSizes = {
  sm: "0.95em",
  md: "1.2em",
  lg: "1.45em",
} as const;

export function BrightLizard({
  className,
  label = "LOADING",
  size = "md",
  ...props
}: BrightLizardProps) {
  const glyphs = Array.from(label);

  return (
    <div
      aria-busy="true"
      aria-live="polite"
      className={cn("jk-bright-lizard inline-flex", className)}
      data-size={size}
      data-slot="bright-lizard"
      role="status"
      style={
        {
          "--jk-bright-lizard-face": faceSizes[size],
          "--jk-bright-lizard-type": fontSizes[size],
        } as React.CSSProperties
      }
      {...props}
    >
      <style href="jk-bright-lizard" precedence="default">{`
        .jk-bright-lizard-face {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: var(--jk-bright-lizard-face);
          height: var(--jk-bright-lizard-face);
          overflow: hidden;
          border: none;
          border-radius: 50%;
          background-color: transparent;
          color: var(--jk-foreground);
          font-family: var(--jk-font-label);
          font-size: var(--jk-bright-lizard-type);
          font-weight: 300;
          letter-spacing: 0;
          user-select: none;
        }
        .jk-bright-lizard-ring {
          position: absolute;
          top: 0;
          left: 0;
          z-index: 0;
          width: 100%;
          aspect-ratio: 1 / 1;
          border: none;
          border-radius: 50%;
          background-color: transparent;
          box-shadow:
            0 10px 20px 0 var(--jk-card) inset,
            0 20px 30px 0 var(--jk-chart-4) inset,
            0 60px 60px 0 var(--jk-primary) inset;
        }
        .jk-bright-lizard-letter {
          position: relative;
          z-index: 1;
          display: inline-block;
          border: none;
          border-radius: 50ch;
          opacity: 0.4;
          transform: translateY(0);
        }
        @media (prefers-reduced-motion: no-preference) {
          .jk-bright-lizard-ring {
            animation: jk-bright-lizard-rotate 2s linear infinite;
          }
          .jk-bright-lizard-letter {
            animation: jk-bright-lizard-letter 2s infinite;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-bright-lizard-ring {
            transform: rotate(90deg);
            animation: none;
          }
          .jk-bright-lizard-letter {
            opacity: 1;
            animation: none;
          }
        }
        @keyframes jk-bright-lizard-rotate {
          0% {
            transform: rotate(90deg);
            box-shadow:
              0 10px 20px 0 var(--jk-card) inset,
              0 20px 30px 0 var(--jk-chart-4) inset,
              0 60px 60px 0 var(--jk-primary) inset;
          }
          50% {
            transform: rotate(270deg);
            box-shadow:
              0 10px 20px 0 var(--jk-card) inset,
              0 20px 10px 0 var(--jk-destructive) inset,
              0 40px 60px 0 var(--jk-ring) inset;
          }
          100% {
            transform: rotate(450deg);
            box-shadow:
              0 10px 20px 0 var(--jk-card) inset,
              0 20px 30px 0 var(--jk-chart-4) inset,
              0 60px 60px 0 var(--jk-primary) inset;
          }
        }
        @keyframes jk-bright-lizard-letter {
          0%,
          100% {
            opacity: 0.4;
            transform: translateY(0);
          }
          20% {
            opacity: 1;
            transform: scale(1.15);
          }
          40% {
            opacity: 0.7;
            transform: translateY(0);
          }
        }
      `}</style>
      <span aria-hidden="true" className="jk-bright-lizard-face">
        {glyphs.map((glyph, index) => (
          <span
            className="jk-bright-lizard-letter"
            key={`${glyph}-${String(index)}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {glyph === " " ? "\u00a0" : glyph}
          </span>
        ))}
        <span className="jk-bright-lizard-ring" />
      </span>
      <span className="sr-only">{label}</span>
    </div>
  );
}
