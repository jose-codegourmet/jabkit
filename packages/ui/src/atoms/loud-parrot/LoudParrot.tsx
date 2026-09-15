// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { cn } from "@/lib/cn";
import type { LoudParrotProps } from "./LoudParrot.types";

const unitSizes = {
  sm: "3px",
  md: "5px",
  lg: "8px",
} as const;

const frameSizes = {
  sm: "h-36 w-36",
  md: "h-52 w-52",
  lg: "h-72 w-72",
} as const;

const tones = {
  default: {
    c1: "var(--jk-card)",
    c2: "var(--jk-foreground)",
    c3: "color-mix(in oklab, var(--jk-foreground) 92%, var(--jk-muted))",
  },
  muted: {
    c1: "var(--jk-muted)",
    c2: "var(--jk-secondary-foreground)",
    c3: "color-mix(in oklab, var(--jk-foreground) 78%, var(--jk-background))",
  },
  chart: {
    c1: "var(--jk-card)",
    c2: "var(--jk-chart-1)",
    c3: "var(--jk-chart-4)",
  },
} as const;

export function LoudParrot({
  className,
  children,
  label = "Isometric cube field",
  size = "md",
  tone = "default",
  ...props
}: LoudParrotProps) {
  const triad = tones[tone];

  return (
    <div
      aria-label={children ? undefined : label}
      className={cn(
        "jk-loud-parrot relative overflow-hidden rounded-none",
        !children && frameSizes[size],
        children && "min-h-52 w-full",
        className,
      )}
      data-size={size}
      data-slot="loud-parrot"
      data-tone={tone}
      role={children ? undefined : "img"}
      style={
        {
          "--jk-loud-parrot-u": unitSizes[size],
          "--jk-loud-parrot-c1": triad.c1,
          "--jk-loud-parrot-c2": triad.c2,
          "--jk-loud-parrot-c3": triad.c3,
        } as React.CSSProperties
      }
      {...props}
    >
      <style href="jk-loud-parrot" precedence="default">{`
        .jk-loud-parrot-field {
          --u: var(--jk-loud-parrot-u);
          --c1: var(--jk-loud-parrot-c1);
          --c2: var(--jk-loud-parrot-c2);
          --c3: var(--jk-loud-parrot-c3);
          --gp: 50% / calc(var(--u) * 16.9) calc(var(--u) * 12.8);
          width: 100%;
          height: 100%;
          background:
            conic-gradient(
              from 122deg at 50% 85.15%,
              var(--c2) 0 58deg,
              var(--c3) 0 116deg,
              transparent 0 100%
            )
              var(--gp),
            conic-gradient(
              from 122deg at 50% 72.5%,
              var(--c1) 0 116deg,
              transparent 0 100%
            )
              var(--gp),
            conic-gradient(
              from 58deg at 82.85% 50%,
              var(--c3) 0 64deg,
              transparent 0 100%
            )
              var(--gp),
            conic-gradient(
              from 58deg at 66.87% 50%,
              var(--c1) 0 64deg,
              var(--c2) 0 130deg,
              transparent 0 100%
            )
              var(--gp),
            conic-gradient(
              from 238deg at 17.15% 50%,
              var(--c2) 0 64deg,
              transparent 0 100%
            )
              var(--gp),
            conic-gradient(
              from 172deg at 33.13% 50%,
              var(--c3) 0 66deg,
              var(--c1) 0 130deg,
              transparent 0 100%
            )
              var(--gp),
            linear-gradient(
              98deg,
              var(--c3) 0 15%,
              transparent calc(15% + 1px) 100%
            )
              var(--gp),
            linear-gradient(
              -98deg,
              var(--c2) 0 15%,
              transparent calc(15% + 1px) 100%
            )
              var(--gp),
            conic-gradient(
              from -58deg at 50.25% 14.85%,
              var(--c3) 0 58deg,
              var(--c2) 0 116deg,
              transparent 0 100%
            )
              var(--gp),
            conic-gradient(
              from -58deg at 50% 28.125%,
              var(--c1) 0 116deg,
              transparent 0 100%
            )
              var(--gp),
            linear-gradient(90deg, var(--c2) 0 50%, var(--c3) 0 100%) var(--gp);
        }
      `}</style>
      <span
        aria-hidden="true"
        className="jk-loud-parrot-field pointer-events-none absolute inset-0"
      />
      {children ? (
        <div className="relative z-10 p-6 text-card-foreground">{children}</div>
      ) : null}
    </div>
  );
}
