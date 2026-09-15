import { Slot } from "@radix-ui/react-slot";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { cn } from "@/lib/cn";
import type { AverageSwanProps } from "./AverageSwan.types";

const sizes = {
  sm: "h-9 px-4 text-xs tracking-[0.16em]",
  md: "h-11 px-7 text-sm tracking-[0.18em]",
  lg: "h-12 px-9 text-base tracking-[0.2em]",
} as const;

export function AverageSwan({
  className,
  children,
  label = "Press",
  size = "md",
  asChild = false,
  type,
  ...props
}: AverageSwanProps) {
  const Component = asChild ? Slot : "button";
  const content = children ?? label;

  return (
    <Component
      className={cn(
        "jk-average-swan inline-flex shrink-0 items-center justify-center rounded-[0.5em] font-medium uppercase whitespace-nowrap text-secondary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
        sizes[size],
        className,
      )}
      data-size={size}
      data-slot="average-swan"
      type={asChild ? undefined : (type ?? "button")}
      {...props}
    >
      <style href="jk-average-swan" precedence="default">{`
        .jk-average-swan {
          background: var(--jk-secondary);
          border: 1px solid var(--jk-secondary);
          box-shadow:
            6px 6px 12px color-mix(in oklch, var(--jk-foreground) 16%, transparent),
            -6px -6px 12px color-mix(in oklch, var(--jk-background) 92%, var(--jk-card));
        }
        .jk-average-swan:hover:not(:disabled) {
          color: var(--jk-foreground);
        }
        .jk-average-swan:active:not(:disabled) {
          color: var(--jk-muted-foreground);
          box-shadow:
            inset 4px 4px 12px color-mix(in oklch, var(--jk-foreground) 16%, transparent),
            inset -4px -4px 12px color-mix(in oklch, var(--jk-background) 92%, var(--jk-card));
        }
        @media (prefers-reduced-motion: no-preference) {
          .jk-average-swan {
            transition:
              box-shadow 200ms ease,
              color 200ms ease,
              transform 200ms ease;
          }
          .jk-average-swan:active:not(:disabled) {
            transform: translateY(1px);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-average-swan {
            transition: none;
          }
        }
      `}</style>
      {content}
    </Component>
  );
}
