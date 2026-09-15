import { Slot } from "@radix-ui/react-slot";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { cn } from "@/lib/cn";
import type { SeriousStingrayProps } from "./SeriousStingray.types";

const sizes = {
  sm: "gap-1 text-sm",
  md: "gap-1.5 text-xl",
  lg: "gap-2 text-2xl",
} as const;

export function SeriousStingray({
  className,
  children,
  label = "Button",
  size = "md",
  accent = "primary",
  asChild = false,
  type,
  ...props
}: SeriousStingrayProps) {
  const Component = asChild ? Slot : "button";
  const content = children ?? label;

  return (
    <Component
      className={cn(
        "jk-serious-stingray inline-flex shrink-0 flex-col items-stretch bg-transparent font-semibold text-foreground whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
        sizes[size],
        className,
      )}
      data-accent={accent}
      data-size={size}
      data-slot="serious-stingray"
      type={asChild ? undefined : (type ?? "button")}
      {...props}
    >
      <style href="jk-serious-stingray" precedence="default">{`
        .jk-serious-stingray-rail {
          display: block;
          height: 2px;
          width: 0;
          background: var(--jk-primary);
        }
        .jk-serious-stingray[data-accent="destructive"] .jk-serious-stingray-rail {
          background: var(--jk-destructive);
        }
        .jk-serious-stingray-rail-start {
          margin-inline-start: auto;
        }
        @media (prefers-reduced-motion: no-preference) {
          .jk-serious-stingray-rail {
            transition: width 500ms ease;
          }
          .jk-serious-stingray:hover .jk-serious-stingray-rail,
          .jk-serious-stingray:focus-visible .jk-serious-stingray-rail {
            width: 100%;
          }
          .jk-serious-stingray:active {
            transform: translateY(1px);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-serious-stingray-rail {
            width: 100%;
            transition: none;
          }
        }
      `}</style>
      <span
        aria-hidden="true"
        className="jk-serious-stingray-rail jk-serious-stingray-rail-start"
      />
      <span className="text-center">{content}</span>
      <span aria-hidden="true" className="jk-serious-stingray-rail" />
    </Component>
  );
}
