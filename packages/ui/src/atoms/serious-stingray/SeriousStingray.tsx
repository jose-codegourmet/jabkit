import { Slot } from "@radix-ui/react-slot";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { cn } from "@/lib/cn";
import type { SeriousStingrayProps } from "./SeriousStingray.types";

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
      className={cn("jk-serious-stingray", className)}
      data-accent={accent}
      data-size={size}
      data-slot="serious-stingray"
      type={asChild ? undefined : (type ?? "button")}
      {...props}
    >
      <style href="jk-serious-stingray" precedence="default">{`
        .jk-serious-stingray {
          --jk-ss-ink: var(--jk-primary);
          --jk-ss-on: var(--jk-primary-foreground);
          position: relative;
          z-index: 1;
          display: inline-block;
          width: 6em;
          height: 2.6em;
          padding: 0;
          overflow: hidden;
          border: 2px solid var(--jk-ss-ink);
          border-radius: 6px;
          background: transparent;
          color: var(--jk-ss-ink);
          font-family: inherit;
          font-size: 17px;
          font-weight: 500;
          line-height: 2.5em;
          text-align: center;
          white-space: nowrap;
          cursor: pointer;
        }
        .jk-serious-stingray[data-size="sm"] {
          font-size: 13px;
        }
        .jk-serious-stingray[data-size="lg"] {
          font-size: 21px;
        }
        .jk-serious-stingray[data-accent="destructive"] {
          --jk-ss-ink: var(--jk-destructive);
          --jk-ss-on: var(--jk-destructive-foreground);
        }
        .jk-serious-stingray:disabled {
          pointer-events: none;
          cursor: not-allowed;
          opacity: 0.5;
        }
        .jk-serious-stingray:focus-visible {
          outline: 2px solid var(--jk-ring);
          outline-offset: 2px;
        }
        .jk-serious-stingray::before {
          position: absolute;
          top: 100%;
          left: 100%;
          z-index: -1;
          width: 150px;
          height: 200px;
          border-radius: 50%;
          background: var(--jk-ss-ink);
          content: "";
        }
        .jk-serious-stingray:hover,
        .jk-serious-stingray:focus-visible {
          color: var(--jk-ss-on);
        }
        .jk-serious-stingray:hover::before,
        .jk-serious-stingray:focus-visible::before {
          top: -30px;
          left: -30px;
        }
        @media (prefers-reduced-motion: no-preference) {
          .jk-serious-stingray::before {
            transition: 0.3s all;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-serious-stingray::before {
            transition: none;
          }
        }
      `}</style>
      {content}
    </Component>
  );
}
