// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { cn } from "@/lib/cn";
import type { KindPantherProps } from "./KindPanther.types";

const sizes = {
  sm: "h-28 w-44",
  md: "h-40 w-64",
  lg: "h-52 w-80",
} as const;

export function KindPanther({
  className,
  children,
  label = "Kind tessellation",
  size = "md",
  density = "regular",
  animate = true,
  ...props
}: KindPantherProps) {
  const content = children ?? label;

  return (
    <div
      className={cn(
        "jk-kind-panther relative overflow-hidden rounded-[--radius] border border-border bg-card text-card-foreground shadow-[var(--jk-shadow-control)]",
        sizes[size],
        className,
      )}
      data-animate={animate ? "true" : "false"}
      data-density={density}
      data-size={size}
      data-slot="kind-panther"
      {...props}
    >
      <style href="jk-kind-panther" precedence="default">{`
        .jk-kind-panther-field {
          --kp-s: 1.85rem;
          background:
            repeating-conic-gradient(
              from 30deg,
              transparent 0 120deg,
              color-mix(in oklab, var(--jk-primary), transparent 78%) 0 180deg
            )
              calc(var(--kp-s) * 0.5) calc(var(--kp-s) * 0.2885),
            repeating-conic-gradient(
              from 30deg,
              color-mix(in oklab, var(--jk-card), var(--jk-muted) 40%) 0 60deg,
              color-mix(in oklab, var(--jk-muted), var(--jk-background) 15%) 0 120deg,
              color-mix(in oklab, var(--jk-secondary), var(--jk-accent) 35%) 0 180deg
            );
          background-size: var(--kp-s) calc(var(--kp-s) * 0.577);
        }
        .jk-kind-panther[data-density="dense"] .jk-kind-panther-field {
          --kp-s: 1.15rem;
        }
        .jk-kind-panther-veil {
          background: linear-gradient(
            180deg,
            color-mix(in oklab, var(--jk-card), transparent 55%) 0%,
            color-mix(in oklab, var(--jk-card), transparent 88%) 42%,
            color-mix(in oklab, var(--jk-card), transparent 28%) 100%
          );
        }
        @keyframes jk-kind-panther-drift {
          to {
            background-position:
              calc(var(--kp-s) * 0.5) calc(var(--kp-s) * 0.2885),
              var(--kp-s) calc(var(--kp-s) * 0.577);
          }
        }
        @media (prefers-reduced-motion: no-preference) {
          .jk-kind-panther[data-animate="true"] .jk-kind-panther-field {
            animation: jk-kind-panther-drift 18s linear infinite;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-kind-panther-field {
            animation: none;
          }
        }
      `}</style>
      <span
        aria-hidden="true"
        className="jk-kind-panther-field pointer-events-none absolute inset-0"
      />
      <span
        aria-hidden="true"
        className="jk-kind-panther-veil pointer-events-none absolute inset-0"
      />
      <p className="relative z-10 flex h-full items-end px-4 pb-3 text-sm font-medium tracking-tight">
        {content}
      </p>
    </div>
  );
}
