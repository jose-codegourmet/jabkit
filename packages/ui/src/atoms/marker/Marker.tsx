"use client";

import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { cn } from "@/lib/cn";
import type {
  MarkerContentProps,
  MarkerIconProps,
  MarkerProps,
  MarkerVariant,
} from "./Marker.types";

const markerShimmerStyles = `@keyframes jk-marker-shimmer{0%{background-position:200% center}100%{background-position:-200% center}}[data-slot=marker-content].shimmer{background-image:linear-gradient(90deg,currentColor 0%,color-mix(in oklab,currentColor 35%,transparent) 45%,currentColor 90%);background-size:200% 100%;background-clip:text;-webkit-background-clip:text;color:transparent;animation:jk-marker-shimmer 2s linear infinite}@media (prefers-reduced-motion:reduce){[data-slot=marker-content].shimmer{animation:none;background-image:none;color:inherit}}`;

const markerVariantClasses: Record<MarkerVariant, string> = {
  default: "",
  separator:
    "before:mr-1 before:h-px before:min-w-0 before:flex-1 before:bg-border after:ml-1 after:h-px after:min-w-0 after:flex-1 after:bg-border",
  border: "border-b border-border pb-2",
};

function markerVariants({
  variant = "default",
}: {
  variant?: MarkerVariant | null;
} = {}) {
  return cn(
    "group/marker relative flex min-h-4 w-full items-center gap-2 text-left text-sm text-muted-foreground [&_svg:not([class*='size-'])]:size-4 [a]:underline [a]:underline-offset-3 [a]:hover:text-foreground",
    markerVariantClasses[variant ?? "default"],
  );
}

function Marker({
  className,
  variant = "default",
  render,
  ...props
}: MarkerProps) {
  return useRender({
    defaultTagName: "div",
    props: mergeProps<"div">(
      {
        className: cn(markerVariants({ variant }), className),
      },
      props,
    ),
    render,
    state: {
      slot: "marker",
      variant,
    },
  });
}

function MarkerIcon({ className, ...props }: MarkerIconProps) {
  return (
    <span
      data-slot="marker-icon"
      aria-hidden="true"
      className={cn(
        "size-4 shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    />
  );
}

function MarkerContent({ className, children, ...props }: MarkerContentProps) {
  return (
    <span
      data-slot="marker-content"
      className={cn(
        "min-w-0 wrap-break-word group-data-[variant=separator]/marker:flex-none group-data-[variant=separator]/marker:text-center *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground",
        className,
      )}
      {...props}
    >
      <style>{markerShimmerStyles}</style>
      {children}
    </span>
  );
}

export { Marker, MarkerContent, MarkerIcon, markerVariants };
