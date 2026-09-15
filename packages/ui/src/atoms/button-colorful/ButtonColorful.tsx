import { Slot } from "@radix-ui/react-slot";
import { ArrowRight } from "lucide-react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { cn } from "@/lib/cn";
import type { ButtonColorfulProps } from "./ButtonColorful.types";

export function ButtonColorful({
  className,
  children,
  label = "Explore Components",
  showIcon = true,
  asChild = false,
  type,
  ...props
}: ButtonColorfulProps) {
  const Component = asChild ? Slot : "button";
  const content = children ?? label;

  return (
    <Component
      className={cn(
        "jk-button-colorful group relative inline-flex h-10 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-md bg-foreground px-4 py-2 font-medium text-sm whitespace-nowrap text-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
        className,
      )}
      data-slot="button-colorful"
      type={asChild ? undefined : (type ?? "button")}
      {...props}
    >
      <style href="jk-button-colorful" precedence="default">{`
        .jk-button-colorful-wash {
          background: linear-gradient(
            to right,
            var(--jk-chart-1),
            var(--jk-chart-4),
            color-mix(in oklab, var(--jk-chart-4), var(--jk-destructive) 55%)
          );
          filter: blur(2px);
          opacity: 0.4;
        }
        .jk-button-colorful:hover .jk-button-colorful-wash,
        .jk-button-colorful:focus-visible .jk-button-colorful-wash {
          opacity: 0.8;
        }
        @media (prefers-reduced-motion: no-preference) {
          .jk-button-colorful-wash {
            transition: opacity 500ms ease;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-button-colorful,
          .jk-button-colorful-wash {
            transition: none;
          }
        }
      `}</style>
      <span
        aria-hidden="true"
        className="jk-button-colorful-wash pointer-events-none absolute inset-0"
      />
      <span className="relative flex items-center justify-center gap-2">
        <span>{content}</span>
        {showIcon ? (
          <ArrowRight
            aria-hidden="true"
            className="size-3.5 shrink-0 text-background/90"
          />
        ) : null}
      </span>
    </Component>
  );
}
