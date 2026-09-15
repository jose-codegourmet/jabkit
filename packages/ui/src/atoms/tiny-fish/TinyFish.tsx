"use client";

// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { cn } from "@/lib/cn";
import type { TinyFishProps } from "./TinyFish.types";

const sizes = {
  sm: "h-6 w-12",
  md: "h-8 w-16",
  lg: "h-10 w-20",
} as const;

export function TinyFish({
  className,
  checked,
  defaultChecked = false,
  onCheckedChange,
  disabled,
  size = "md",
  animate = true,
  label,
  children,
  type,
  ...props
}: TinyFishProps) {
  const [uncontrolled, setUncontrolled] = React.useState(defaultChecked);
  const isOn = checked ?? uncontrolled;
  const caption = children ?? label;

  const toggle = () => {
    if (disabled) return;
    const next = !isOn;
    if (checked === undefined) setUncontrolled(next);
    onCheckedChange?.(next);
  };

  return (
    <button
      aria-checked={isOn}
      className={cn(
        "jk-tiny-fish inline-flex items-center gap-3 text-left text-sm text-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      data-animate={animate ? "true" : "false"}
      data-checked={isOn ? "true" : "false"}
      data-size={size}
      data-slot="tiny-fish"
      disabled={disabled}
      onClick={toggle}
      role="switch"
      type={type ?? "button"}
      {...props}
    >
      <style href="jk-tiny-fish" precedence="default">{`
        .jk-tiny-fish-track {
          background: var(--jk-input);
          box-shadow: inset 0 0 0 1px var(--jk-border);
        }
        .jk-tiny-fish[data-checked="true"] .jk-tiny-fish-track {
          background: var(--jk-primary);
          box-shadow: inset 0 0 0 1px color-mix(in oklch, var(--jk-primary) 70%, var(--jk-border));
        }
        .jk-tiny-fish-body,
        .jk-tiny-fish-tail,
        .jk-tiny-fish-fin {
          background: var(--jk-foreground);
        }
        .jk-tiny-fish[data-checked="true"] .jk-tiny-fish-body,
        .jk-tiny-fish[data-checked="true"] .jk-tiny-fish-tail,
        .jk-tiny-fish[data-checked="true"] .jk-tiny-fish-fin {
          background: var(--jk-primary-foreground);
        }
        .jk-tiny-fish-eye {
          background: var(--jk-background);
        }
        .jk-tiny-fish[data-checked="true"] .jk-tiny-fish-eye {
          background: var(--jk-primary);
        }
        .jk-tiny-fish-pupil {
          background: var(--jk-foreground);
        }
        .jk-tiny-fish-fish {
          left: 0.2rem;
        }
        .jk-tiny-fish[data-checked="true"] .jk-tiny-fish-fish {
          left: calc(100% - 1.55rem);
        }
        .jk-tiny-fish[data-size="sm"][data-checked="true"] .jk-tiny-fish-fish {
          left: calc(100% - 1.2rem);
        }
        .jk-tiny-fish[data-size="lg"][data-checked="true"] .jk-tiny-fish-fish {
          left: calc(100% - 1.85rem);
        }
        @keyframes jk-tiny-fish-wag {
          50% { transform: rotate(-18deg); }
        }
        @keyframes jk-tiny-fish-drift {
          50% { transform: translateY(-8%); }
        }
        @media (prefers-reduced-motion: no-preference) {
          .jk-tiny-fish-track,
          .jk-tiny-fish-fish {
            transition: background-color 220ms ease, box-shadow 220ms ease, left 320ms cubic-bezier(0.22, 1, 0.36, 1);
          }
          .jk-tiny-fish[data-animate="true"] .jk-tiny-fish-fish {
            animation: jk-tiny-fish-drift 1.6s ease-in-out infinite;
          }
          .jk-tiny-fish[data-animate="true"] .jk-tiny-fish-tail {
            transform-origin: 100% 50%;
            animation: jk-tiny-fish-wag 0.55s ease-in-out infinite;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-tiny-fish-track,
          .jk-tiny-fish-fish,
          .jk-tiny-fish-tail {
            transition: none;
            animation: none;
          }
        }
      `}</style>
      <span
        className={cn(
          "jk-tiny-fish-track relative inline-flex shrink-0 items-center overflow-hidden rounded-full",
          sizes[size],
        )}
      >
        <span
          aria-hidden="true"
          className="jk-tiny-fish-fish pointer-events-none absolute top-1/2 flex -translate-y-1/2 items-center"
        >
          <span className="jk-tiny-fish-tail mr-px block h-2 w-1.5 [clip-path:polygon(0_0,100%_50%,0_100%)]" />
          <span className="jk-tiny-fish-fin absolute top-0 left-1/2 h-1.5 w-1.5 -translate-y-[40%] [clip-path:polygon(50%_0,0_100%,100%_100%)]" />
          <span className="jk-tiny-fish-body relative block h-2.5 w-3.5 rounded-[100%]">
            <span className="jk-tiny-fish-eye absolute top-1/2 right-[0.2rem] size-1.5 -translate-y-1/2 rounded-full">
              <span className="jk-tiny-fish-pupil absolute top-1/2 right-[1px] size-[3px] -translate-y-1/2 rounded-full" />
            </span>
          </span>
        </span>
      </span>
      {caption ? <span className="min-w-0">{caption}</span> : null}
    </button>
  );
}
