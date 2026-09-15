// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { cn } from "@/lib/cn";
import type { OddFishProps } from "./OddFish.types";

const sizes = {
  sm: "max-w-[16rem] gap-2 p-4",
  md: "max-w-[20rem] gap-2.5 p-5",
  lg: "max-w-[24rem] gap-3 p-6",
} as const;

const titleSizes = {
  sm: "text-base",
  md: "text-lg",
  lg: "text-xl",
} as const;

export function OddFish({
  className,
  children,
  eyebrow = "Note",
  title = "OddFish",
  description = "A compact card for a single idea, still on semantic tokens.",
  action,
  size = "md",
  tone = "default",
  ...props
}: OddFishProps) {
  return (
    <article
      className={cn(
        "jk-odd-fish relative isolate flex flex-col overflow-hidden rounded-[--radius] border border-border text-card-foreground shadow-[var(--jk-shadow-control)]",
        sizes[size],
        className,
      )}
      data-size={size}
      data-slot="odd-fish"
      data-tone={tone}
      {...props}
    >
      <style href="jk-odd-fish" precedence="default">{`
        .jk-odd-fish {
          background: var(--jk-card);
        }
        .jk-odd-fish[data-tone="muted"] {
          background: color-mix(in oklab, var(--jk-muted) 72%, var(--jk-card));
        }
        .jk-odd-fish[data-tone="accent"] {
          background: color-mix(in oklab, var(--jk-accent) 64%, var(--jk-card));
        }
        .jk-odd-fish-fin {
          background: linear-gradient(
            90deg,
            var(--jk-primary),
            var(--jk-chart-5),
            var(--jk-chart-1)
          );
        }
        .jk-odd-fish-sheen {
          background: linear-gradient(
            115deg,
            transparent 28%,
            color-mix(in oklab, var(--jk-primary-foreground) 28%, transparent) 46%,
            transparent 64%
          );
          opacity: 0;
        }
        .jk-odd-fish:hover .jk-odd-fish-sheen,
        .jk-odd-fish:focus-within .jk-odd-fish-sheen {
          opacity: 1;
        }
        .jk-odd-fish-action {
          color: var(--jk-primary);
        }
        @media (prefers-reduced-motion: no-preference) {
          .jk-odd-fish {
            transition:
              transform 220ms cubic-bezier(0.22, 1, 0.36, 1),
              box-shadow 220ms ease,
              background-color 220ms ease;
          }
          .jk-odd-fish:hover,
          .jk-odd-fish:focus-within {
            transform: translateY(-3px);
          }
          .jk-odd-fish-sheen {
            transform: translateX(-40%);
            transition:
              opacity 280ms ease,
              transform 520ms cubic-bezier(0.22, 1, 0.36, 1);
          }
          .jk-odd-fish:hover .jk-odd-fish-sheen,
          .jk-odd-fish:focus-within .jk-odd-fish-sheen {
            transform: translateX(28%);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-odd-fish,
          .jk-odd-fish-sheen {
            transition: none;
            transform: none;
          }
          .jk-odd-fish-sheen {
            opacity: 0.18;
          }
        }
      `}</style>
      <span
        aria-hidden="true"
        className="jk-odd-fish-fin pointer-events-none absolute inset-x-0 top-0 h-1"
      />
      <span
        aria-hidden="true"
        className="jk-odd-fish-sheen pointer-events-none absolute inset-0"
      />
      {children ?? (
        <div className="relative z-10 flex flex-col gap-[inherit]">
          {eyebrow ? (
            <p className="text-xs font-medium text-muted-foreground">{eyebrow}</p>
          ) : null}
          {title ? (
            <h3
              className={cn(
                "font-semibold tracking-tight text-card-foreground",
                titleSizes[size],
              )}
            >
              {title}
            </h3>
          ) : null}
          {description ? (
            <p className="text-sm leading-relaxed text-muted-foreground">
              {description}
            </p>
          ) : null}
          {action ? (
            <p className="jk-odd-fish-action pt-1 text-sm font-medium">{action}</p>
          ) : null}
        </div>
      )}
    </article>
  );
}
