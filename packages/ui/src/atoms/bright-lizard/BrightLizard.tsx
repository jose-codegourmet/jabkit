// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { cn } from "@/lib/cn";
import type { BrightLizardProps } from "./BrightLizard.types";

const sizes = {
  sm: "gap-2 text-xs",
  md: "gap-3 text-sm",
  lg: "gap-3.5 text-base",
} as const;

const orbSizes = {
  sm: "1.5rem",
  md: "2.5rem",
  lg: "3.25rem",
} as const;

export function BrightLizard({
  className,
  label = "Loading",
  size = "md",
  showLabel = false,
  ...props
}: BrightLizardProps) {
  return (
    <div
      aria-busy="true"
      aria-live="polite"
      className={cn(
        "jk-bright-lizard inline-flex flex-col items-center justify-center text-muted-foreground",
        sizes[size],
        className,
      )}
      data-size={size}
      data-slot="bright-lizard"
      role="status"
      style={
        {
          "--jk-bright-lizard-size": orbSizes[size],
        } as React.CSSProperties
      }
      {...props}
    >
      <style href="jk-bright-lizard" precedence="default">{`
        .jk-bright-lizard-orb {
          position: relative;
          width: var(--jk-bright-lizard-size);
          height: var(--jk-bright-lizard-size);
        }
        .jk-bright-lizard-track,
        .jk-bright-lizard-arc,
        .jk-bright-lizard-core {
          position: absolute;
          inset: 0;
          border-radius: 999px;
        }
        .jk-bright-lizard-track {
          border: 3px solid color-mix(in oklab, var(--jk-border) 80%, transparent);
        }
        .jk-bright-lizard-arc {
          inset: 1px;
          border: 3px solid transparent;
          border-top-color: var(--jk-primary);
          border-right-color: var(--jk-chart-1);
          filter: drop-shadow(
            0 0 0.45rem color-mix(in oklab, var(--jk-primary), transparent 45%)
          );
        }
        .jk-bright-lizard-core {
          inset: 32%;
          background: color-mix(in oklab, var(--jk-primary) 55%, var(--jk-background));
          box-shadow:
            0 0 0.55rem color-mix(in oklab, var(--jk-primary), transparent 35%);
        }
        @media (prefers-reduced-motion: no-preference) {
          .jk-bright-lizard-arc {
            animation: jk-bright-lizard-spin 0.85s linear infinite;
          }
          .jk-bright-lizard-core {
            animation: jk-bright-lizard-pulse 1.2s ease-in-out infinite;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-bright-lizard-arc {
            transform: rotate(42deg);
            animation: none;
          }
          .jk-bright-lizard-core {
            animation: none;
            opacity: 0.85;
          }
        }
        @keyframes jk-bright-lizard-spin {
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes jk-bright-lizard-pulse {
          0%,
          100% {
            transform: scale(0.72);
            opacity: 0.55;
          }
          50% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
      <span aria-hidden="true" className="jk-bright-lizard-orb">
        <span className="jk-bright-lizard-track" />
        <span className="jk-bright-lizard-arc" />
        <span className="jk-bright-lizard-core" />
      </span>
      <span className={showLabel ? "font-medium" : "sr-only"}>{label}</span>
    </div>
  );
}
