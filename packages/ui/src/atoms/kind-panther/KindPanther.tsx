// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { cn } from "@/lib/cn";
import type { KindPantherProps } from "./KindPanther.types";

const frameSizes = {
  sm: "size-36",
  md: "size-56",
  lg: "size-72",
} as const;

const tiles = {
  sm: "64px",
  md: "100px",
  lg: "140px",
} as const;

export function KindPanther({
  className,
  children,
  label = "Wave field",
  size = "md",
  tone = "retro",
  animated = false,
  style,
  ...props
}: KindPantherProps) {
  return (
    <div
      aria-label={children ? undefined : label}
      className={cn(
        "jk-kind-panther relative overflow-hidden",
        !children && frameSizes[size],
        children && "min-h-56 w-full",
        className,
      )}
      data-animated={animated ? "true" : "false"}
      data-size={size}
      data-slot="kind-panther"
      data-tone={tone}
      role={children ? undefined : "img"}
      style={
        {
          "--jk-kind-s": tiles[size],
          ...style,
        } as React.CSSProperties
      }
      {...props}
    >
      <style href="jk-kind-panther" precedence="default">{`
        .jk-kind-panther {
          box-sizing: border-box;
          --jk-kind-shade: color-mix(in oklab, var(--jk-foreground) 50%, transparent);
          --jk-kind-bands: var(--jk-kind-cool) 4% 14%, var(--jk-kind-warm) 14% 24%,
            var(--jk-kind-cool) 22% 34%, var(--jk-kind-warm) 34% 44%,
            var(--jk-kind-cool) 44% 56%, var(--jk-kind-warm) 56% 66%,
            var(--jk-kind-cool) 66% 76%, var(--jk-kind-warm) 76% 86%,
            var(--jk-kind-cool) 86% 96%;
          background-color: var(--jk-kind-warm);
          background-image:
            radial-gradient(
              100% 100% at 100% 0,
              var(--jk-kind-warm) 4%,
              var(--jk-kind-bands),
              var(--jk-kind-shade) 96%,
              transparent
            ),
            radial-gradient(
              100% 100% at 0 100%,
              transparent,
              var(--jk-kind-shade) 4%,
              var(--jk-kind-bands),
              var(--jk-kind-warm) 96%
            );
          background-size: var(--jk-kind-s) var(--jk-kind-s);
        }
        @media (prefers-reduced-motion: no-preference) {
          .jk-kind-panther[data-animated="true"] {
            animation: jk-kind-panther-drift 18s linear infinite;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-kind-panther {
            animation: none;
          }
        }
        @keyframes jk-kind-panther-drift {
          to {
            background-position: var(--jk-kind-s) var(--jk-kind-s);
          }
        }
        .jk-kind-panther[data-tone="retro"] {
          --jk-kind-warm: color-mix(in oklab, var(--jk-chart-3) 70%, var(--jk-background));
          --jk-kind-cool: color-mix(in oklab, var(--jk-primary) 78%, var(--jk-foreground));
        }
        .jk-kind-panther[data-tone="primary"] {
          --jk-kind-warm: var(--jk-accent);
          --jk-kind-cool: var(--jk-primary);
        }
        .jk-kind-panther[data-tone="muted"] {
          --jk-kind-warm: var(--jk-muted);
          --jk-kind-cool: var(--jk-muted-foreground);
        }
        .dark .jk-kind-panther {
          --jk-kind-shade: color-mix(in oklab, var(--jk-background) 65%, transparent);
        }
        .dark .jk-kind-panther[data-tone="retro"] {
          --jk-kind-warm: color-mix(in oklab, var(--jk-chart-3) 72%, var(--jk-card));
          --jk-kind-cool: color-mix(in oklab, var(--jk-primary) 38%, var(--jk-background));
        }
        .dark .jk-kind-panther[data-tone="primary"] {
          --jk-kind-warm: color-mix(in oklab, var(--jk-primary) 28%, var(--jk-card));
          --jk-kind-cool: color-mix(in oklab, var(--jk-primary) 55%, var(--jk-background));
        }
        .dark .jk-kind-panther[data-tone="muted"] {
          --jk-kind-warm: color-mix(in oklab, var(--jk-muted-foreground) 38%, var(--jk-card));
          --jk-kind-cool: color-mix(in oklab, var(--jk-foreground) 28%, var(--jk-background));
        }
      `}</style>
      {children ? (
        <div className="relative z-10 flex h-full items-end p-4 text-sm font-medium text-card-foreground">
          {children}
        </div>
      ) : null}
    </div>
  );
}
