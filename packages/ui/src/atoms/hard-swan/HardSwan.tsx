// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { cn } from "@/lib/cn";
import type { HardSwanProps } from "./HardSwan.types";

const scales = {
  fine: { x: "47.5px", y: "7.5px", shift: "67.5px" },
  regular: { x: "95px", y: "15px", shift: "135px" },
  coarse: { x: "142.5px", y: "22.5px", shift: "202.5px" },
} as const;

const palettes = {
  field: {
    a: "color-mix(in oklab, var(--jk-chart-2) 34%, var(--jk-card))",
    b: "color-mix(in oklab, var(--jk-chart-4) 78%, var(--jk-primary))",
  },
  dusk: {
    a: "color-mix(in oklab, var(--jk-chart-5) 36%, var(--jk-card))",
    b: "color-mix(in oklab, var(--jk-chart-1) 72%, var(--jk-primary))",
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
      aria-label={children ? undefined : label}
      className={cn("jk-hard-swan", animated && "jk-hard-swan-live", className)}
      data-palette={palette}
      data-scale={scale}
      data-slot="hard-swan"
      role={children ? undefined : "img"}
      style={
        {
          "--jk-hard-swan-a": tones.a,
          "--jk-hard-swan-b": tones.b,
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
          position: relative;
          isolation: isolate;
          width: 100%;
          height: 100%;
          min-height: 10rem;
          overflow: hidden;
          border: 0;
          border-radius: 0;
          background-image:
            linear-gradient(
              45deg,
              var(--jk-hard-swan-a) 25%,
              transparent 25%,
              transparent 75%,
              var(--jk-hard-swan-a) 75%,
              var(--jk-hard-swan-a)
            ),
            linear-gradient(
              45deg,
              var(--jk-hard-swan-b) 25%,
              var(--jk-hard-swan-a) 25%,
              var(--jk-hard-swan-a) 75%,
              var(--jk-hard-swan-b) 75%,
              var(--jk-hard-swan-b)
            );
          background-size: var(--jk-hard-swan-x) var(--jk-hard-swan-y);
          background-position: 0 0, var(--jk-hard-swan-shift) var(--jk-hard-swan-shift);
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
        <div className="relative z-10 flex h-full min-h-40 items-center justify-center p-6 text-card-foreground">
          {children}
        </div>
      ) : null}
    </div>
  );
}
