// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { cn } from "@/lib/cn";
import type { SoftPandaProps } from "./SoftPanda.types";

const frameSizes = {
  sm: "h-24 w-36",
  md: "h-40 w-64",
  lg: "h-56 w-80",
} as const;

const cellSizes = {
  sm: "2.25rem",
  md: "3.5rem",
  lg: "4.5rem",
} as const;

const tones = {
  default: {
    a: "var(--jk-accent)",
    b: "var(--jk-foreground)",
  },
  muted: {
    a: "var(--jk-muted)",
    b: "var(--jk-muted-foreground)",
  },
  chart: {
    a: "var(--jk-chart-4)",
    b: "var(--jk-chart-2)",
  },
} as const;

export function SoftPanda({
  className,
  children,
  label = "Decorative mosaic",
  size = "md",
  tone = "default",
  animate = true,
  ...props
}: SoftPandaProps) {
  const pair = tones[tone];

  return (
    <div
      aria-label={children ? undefined : label}
      className={cn(
        "jk-soft-panda relative overflow-hidden rounded-[--radius] border border-border",
        !children && frameSizes[size],
        children && "min-h-40 w-full",
        className,
      )}
      data-animate={animate ? "true" : "false"}
      data-size={size}
      data-slot="soft-panda"
      data-tone={tone}
      role={children ? undefined : "img"}
      style={
        {
          "--jk-soft-panda-a": pair.a,
          "--jk-soft-panda-b": pair.b,
          "--jk-soft-panda-cell": cellSizes[size],
        } as React.CSSProperties
      }
      {...props}
    >
      <style href="jk-soft-panda" precedence="default">{`
        .jk-soft-panda-field {
          background-color: var(--jk-soft-panda-b);
          background-image:
            linear-gradient(
              45deg,
              var(--jk-soft-panda-a) 0 25%,
              transparent 25% 75%,
              var(--jk-soft-panda-a) 75% 100%
            ),
            linear-gradient(
              135deg,
              var(--jk-soft-panda-a) 0 25%,
              var(--jk-soft-panda-b) 25% 75%,
              var(--jk-soft-panda-a) 75% 100%
            );
          background-size:
            var(--jk-soft-panda-cell) var(--jk-soft-panda-cell),
            var(--jk-soft-panda-cell) var(--jk-soft-panda-cell);
          background-position: 0 0, calc(var(--jk-soft-panda-cell) * 0.5) calc(var(--jk-soft-panda-cell) * 0.5);
        }
        @keyframes jk-soft-panda-drift {
          to {
            background-position:
              var(--jk-soft-panda-cell) var(--jk-soft-panda-cell),
              calc(var(--jk-soft-panda-cell) * 1.5) calc(var(--jk-soft-panda-cell) * 1.5);
          }
        }
        @media (prefers-reduced-motion: no-preference) {
          .jk-soft-panda[data-animate="true"] .jk-soft-panda-field {
            animation: jk-soft-panda-drift 18s linear infinite;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-soft-panda-field {
            animation: none;
          }
        }
      `}</style>
      <span
        aria-hidden="true"
        className="jk-soft-panda-field pointer-events-none absolute inset-0"
      />
      {children ? (
        <div className="relative z-10 p-6 text-card-foreground">{children}</div>
      ) : null}
    </div>
  );
}
