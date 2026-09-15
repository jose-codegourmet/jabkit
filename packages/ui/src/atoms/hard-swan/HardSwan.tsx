// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { cn } from "@/lib/cn";
import type { HardSwanProps } from "./HardSwan.types";

const scales = {
  fine: { x: "3.4rem", y: "0.62rem", shift: "4.8rem" },
  regular: { x: "5.6rem", y: "0.88rem", shift: "7.6rem" },
  coarse: { x: "8.2rem", y: "1.2rem", shift: "11rem" },
} as const;

const palettes = {
  field: {
    band: "var(--jk-chart-2)",
    ink: "var(--jk-primary)",
  },
  dusk: {
    band: "var(--jk-chart-5)",
    ink: "var(--jk-chart-4)",
  },
} as const;

export function HardSwan({
  className,
  children,
  scale = "regular",
  palette = "field",
  animated = false,
  label = "Hatch field",
  style,
  ...props
}: HardSwanProps) {
  const grain = scales[scale];
  const tones = palettes[palette];

  return (
    <div
      aria-label={label}
      className={cn(
        "jk-hard-swan relative isolate min-h-40 w-full overflow-hidden rounded-[--radius] border border-border",
        animated && "jk-hard-swan-live",
        className,
      )}
      data-palette={palette}
      data-scale={scale}
      data-slot="hard-swan"
      role="img"
      style={
        {
          "--jk-hard-swan-a": tones.band,
          "--jk-hard-swan-b": tones.ink,
          "--jk-hard-swan-x": grain.x,
          "--jk-hard-swan-y": grain.y,
          "--jk-hard-swan-shift": grain.shift,
          ...style,
        } as React.CSSProperties
      }
      {...props}
    >
      <style href="jk-hard-swan" precedence="default">{`
        .jk-hard-swan {
          background-color: var(--jk-hard-swan-a);
          background-image:
            linear-gradient(
              42deg,
              var(--jk-hard-swan-a) 0 22%,
              transparent 22% 78%,
              var(--jk-hard-swan-a) 78% 100%
            ),
            linear-gradient(
              42deg,
              var(--jk-hard-swan-b) 0 22%,
              var(--jk-hard-swan-a) 22% 78%,
              var(--jk-hard-swan-b) 78% 100%
            );
          background-position: 0 0, var(--jk-hard-swan-shift) var(--jk-hard-swan-shift);
          background-size: var(--jk-hard-swan-x) var(--jk-hard-swan-y);
        }
        @media (prefers-reduced-motion: no-preference) {
          .jk-hard-swan-live {
            animation: jk-hard-swan-drift 18s linear infinite;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-hard-swan-live {
            animation: none;
          }
        }
        @keyframes jk-hard-swan-drift {
          to {
            background-position:
              var(--jk-hard-swan-x) 0,
              calc(var(--jk-hard-swan-shift) + var(--jk-hard-swan-x)) var(--jk-hard-swan-shift);
          }
        }
      `}</style>
      {children ? (
        <div className="relative z-10 flex h-full min-h-40 items-center justify-center p-6">
          {children}
        </div>
      ) : null}
    </div>
  );
}
