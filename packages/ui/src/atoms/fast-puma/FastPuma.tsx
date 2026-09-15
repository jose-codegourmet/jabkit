import { Slot } from "@radix-ui/react-slot";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { cn } from "@/lib/cn";
import type { FastPumaProps } from "./FastPuma.types";

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
} as const;

const tones = {
  solid: "bg-primary text-primary-foreground",
  outline:
    "border border-border bg-card text-card-foreground hover:bg-accent hover:text-accent-foreground",
} as const;

const PARTICLE_COUNT = 12;

export function FastPuma({
  className,
  children,
  label = "Launch",
  size = "md",
  tone = "solid",
  asChild = false,
  type,
  ...props
}: FastPumaProps) {
  const Component = asChild ? Slot : "button";
  const content = children ?? label;

  return (
    <Component
      className={cn(
        "jk-fast-puma group relative inline-flex shrink-0 items-center justify-center overflow-visible rounded-full font-medium whitespace-nowrap shadow-[var(--jk-shadow-control)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
        sizes[size],
        tones[tone],
        className,
      )}
      data-size={size}
      data-slot="fast-puma"
      data-tone={tone}
      type={asChild ? undefined : (type ?? "button")}
      {...props}
    >
      <style href="jk-fast-puma" precedence="default">{`
        .jk-fast-puma-dot {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 0.375rem;
          height: 0.375rem;
          margin: -0.1875rem 0 0 -0.1875rem;
          border-radius: 999px;
          background: var(--jk-chart-1);
          opacity: 0;
          pointer-events: none;
          transform: rotate(calc(var(--jk-fast-puma-i) * 30deg)) translateY(0)
            scale(0.35);
        }
        .jk-fast-puma-dot:nth-child(5n + 2) { background: var(--jk-chart-2); }
        .jk-fast-puma-dot:nth-child(5n + 3) { background: var(--jk-chart-3); }
        .jk-fast-puma-dot:nth-child(5n + 4) { background: var(--jk-chart-4); }
        .jk-fast-puma-dot:nth-child(5n + 5) { background: var(--jk-chart-5); }
        @media (prefers-reduced-motion: no-preference) {
          .jk-fast-puma-dot {
            transition:
              transform 420ms cubic-bezier(0.16, 1, 0.3, 1),
              opacity 280ms ease;
          }
          .jk-fast-puma:hover .jk-fast-puma-dot,
          .jk-fast-puma:focus-visible .jk-fast-puma-dot {
            opacity: 1;
            transform: rotate(calc(var(--jk-fast-puma-i) * 30deg))
              translateY(-1.65rem) scale(1);
          }
          .jk-fast-puma:active {
            transform: translateY(1px) scale(0.98);
          }
          .jk-fast-puma:active .jk-fast-puma-dot {
            transform: rotate(calc(var(--jk-fast-puma-i) * 30deg))
              translateY(-2.15rem) scale(0.85);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-fast-puma-dot {
            opacity: 0.55;
            transform: rotate(calc(var(--jk-fast-puma-i) * 30deg))
              translateY(-1.15rem) scale(0.7);
            transition: none;
          }
        }
      `}</style>
      <span aria-hidden="true" className="jk-fast-puma-burst pointer-events-none absolute inset-0">
        {Array.from({ length: PARTICLE_COUNT }, (_, index) => (
          <span
            className="jk-fast-puma-dot"
            key={index}
            style={
              {
                "--jk-fast-puma-i": index,
              } as React.CSSProperties
            }
          />
        ))}
      </span>
      <span className="relative z-10">{content}</span>
    </Component>
  );
}
