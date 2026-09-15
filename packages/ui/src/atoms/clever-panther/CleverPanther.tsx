// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { cn } from "@/lib/cn";
import type { CleverPantherProps } from "./CleverPanther.types";

const sizes = {
  sm: "jk-clever-panther-sm",
  md: "jk-clever-panther-md",
  lg: "jk-clever-panther-lg",
} as const;

const toneVars = {
  field: "var(--jk-background)",
  raised: "var(--jk-card)",
} as const;

export function CleverPanther({
  className,
  children,
  label = "Neumorphic slab",
  size = "md",
  tone = "field",
  style,
  ...props
}: CleverPantherProps) {
  return (
    <div
      aria-label={children ? undefined : label}
      className={cn("jk-clever-panther", sizes[size], className)}
      data-size={size}
      data-slot="clever-panther"
      data-tone={tone}
      role={children ? undefined : "img"}
      style={
        {
          "--jk-clever-face": toneVars[tone],
          ...style,
        } as React.CSSProperties
      }
      {...props}
    >
      <style href="jk-clever-panther" precedence="default">{`
        .jk-clever-panther {
          --jk-clever-w: 190px;
          --jk-clever-h: 254px;
          --jk-clever-r: 30px;
          --jk-clever-s: 15px;
          --jk-clever-blur: 30px;
          box-sizing: border-box;
          position: relative;
          isolation: isolate;
          width: var(--jk-clever-w);
          height: var(--jk-clever-h);
          overflow: hidden;
          border: 0;
          border-radius: var(--jk-clever-r);
          background: var(--jk-clever-face);
          box-shadow:
            var(--jk-clever-s) var(--jk-clever-s) var(--jk-clever-blur)
              oklch(from var(--jk-clever-face) calc(l - 0.05) c h),
            calc(var(--jk-clever-s) * -1) calc(var(--jk-clever-s) * -1)
              var(--jk-clever-blur)
              oklch(from var(--jk-clever-face) calc(l + 0.14) c h);
        }
        .jk-clever-panther-sm {
          --jk-clever-w: 142.5px;
          --jk-clever-h: 190.5px;
          --jk-clever-r: 22.5px;
          --jk-clever-s: 11.25px;
          --jk-clever-blur: 22.5px;
        }
        .jk-clever-panther-lg {
          --jk-clever-w: 237.5px;
          --jk-clever-h: 317.5px;
          --jk-clever-r: 37.5px;
          --jk-clever-s: 18.75px;
          --jk-clever-blur: 37.5px;
        }
      `}</style>
      {children ? (
        <div className="relative z-10 flex h-full items-end p-5 text-sm leading-snug text-foreground">
          {children}
        </div>
      ) : null}
    </div>
  );
}
