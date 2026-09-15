import { Slot } from "@radix-ui/react-slot";
import { ArrowRightIcon } from "lucide-react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { cn } from "@/lib/cn";
import type { ButtonColorfulProps } from "./ButtonColorful.types";

const sizes = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-5 text-base",
} as const;

export function ButtonColorful({
  className,
  children,
  label = "Explore components",
  size = "md",
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
        "jk-button-colorful group relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-[--radius] bg-foreground font-medium whitespace-nowrap text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
        sizes[size],
        className,
      )}
      data-size={size}
      data-slot="button-colorful"
      type={asChild ? undefined : (type ?? "button")}
      {...props}
    >
      <style href="jk-button-colorful" precedence="default">{`
        .jk-button-colorful-wash {
          background: linear-gradient(
            105deg,
            var(--jk-chart-1),
            var(--jk-chart-4),
            var(--jk-chart-3)
          );
          opacity: 0.72;
        }
        @media (prefers-reduced-motion: no-preference) {
          .jk-button-colorful-wash {
            transition: opacity 400ms ease;
          }
          .jk-button-colorful:hover .jk-button-colorful-wash,
          .jk-button-colorful:focus-visible .jk-button-colorful-wash {
            opacity: 1;
          }
          .jk-button-colorful-icon {
            transition: transform 200ms ease;
          }
          .jk-button-colorful:hover .jk-button-colorful-icon,
          .jk-button-colorful:focus-visible .jk-button-colorful-icon {
            transform: translateX(0.2rem);
          }
          .jk-button-colorful:active {
            transform: translateY(1px);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-button-colorful-wash,
          .jk-button-colorful-icon {
            transition: none;
          }
          .jk-button-colorful-icon {
            transform: none;
          }
        }
      `}</style>
      <span
        aria-hidden="true"
        className="jk-button-colorful-wash pointer-events-none absolute inset-0"
      />
      <span className="relative z-10 inline-flex items-center justify-center gap-2">
        <span>{content}</span>
        {showIcon ? (
          <ArrowRightIcon
            aria-hidden="true"
            className="jk-button-colorful-icon size-3.5 shrink-0 opacity-90"
          />
        ) : null}
      </span>
    </Component>
  );
}
