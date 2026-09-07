// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/atoms/avatar/Avatar";
import { cn } from "@/lib/cn";
import type { AvatarBorderProps } from "./AvatarBorder.types";

const avatarSizeClass = {
  sm: "size-6",
  default: "size-10",
  lg: "size-16",
} as const;

export function AvatarBorder({
  className,
  src,
  alt = "",
  fallback,
  size = "default",
  animate = true,
  children,
  ...props
}: AvatarBorderProps) {
  return (
    <div
      className={cn(
        "jk-avatar-border relative inline-flex shrink-0 rounded-full p-[2px]",
        size === "sm" && "p-px",
        size === "lg" && "p-[3px]",
        className,
      )}
      data-animate={animate ? "true" : "false"}
      data-size={size}
      data-slot="avatar-border"
      {...props}
    >
      <style href="jk-avatar-border" precedence="default">{`
        .jk-avatar-border-ring {
          background: conic-gradient(
            from 0deg,
            var(--jk-chart-1),
            var(--jk-chart-5),
            var(--jk-chart-2),
            var(--jk-primary),
            var(--jk-chart-4),
            var(--jk-chart-3),
            var(--jk-chart-1)
          );
        }
        @keyframes jk-avatar-border-spin {
          to { transform: rotate(1turn); }
        }
        @media (prefers-reduced-motion: no-preference) {
          .jk-avatar-border[data-animate="true"] .jk-avatar-border-ring {
            animation: jk-avatar-border-spin 8s linear infinite;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-avatar-border-ring {
            animation: none;
          }
        }
      `}</style>
      <span
        aria-hidden="true"
        className="jk-avatar-border-ring pointer-events-none absolute inset-0 rounded-full"
      />
      {children ? (
        <div className="relative z-10">{children}</div>
      ) : (
        <Avatar
          className={cn("relative z-10 bg-background", avatarSizeClass[size])}
          size={size === "sm" ? "sm" : "lg"}
        >
          {src ? <AvatarImage alt={alt} src={src} /> : null}
          <AvatarFallback>{fallback}</AvatarFallback>
        </Avatar>
      )}
    </div>
  );
}
