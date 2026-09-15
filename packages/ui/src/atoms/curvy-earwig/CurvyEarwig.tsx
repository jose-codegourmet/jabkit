// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { cn } from "@/lib/cn";
import type { CurvyEarwigProps } from "./CurvyEarwig.types";

const sizes = {
  sm: {
    box: "2.25rem",
    open: "13.5rem",
    text: "0.8125rem",
  },
  md: {
    box: "2.75rem",
    open: "16.5rem",
    text: "0.875rem",
  },
  lg: {
    box: "3.25rem",
    open: "19.5rem",
    text: "1rem",
  },
} as const;

export function CurvyEarwig({
  className,
  size = "md",
  expanded = false,
  animate = true,
  label = "Search",
  disabled,
  type = "search",
  style,
  ...props
}: CurvyEarwigProps) {
  const metrics = sizes[size];

  return (
    <label
      className={cn(
        "jk-curvy-earwig relative inline-flex shrink-0 items-center",
        disabled && "cursor-not-allowed opacity-50",
        className,
      )}
      data-animate={animate ? "true" : "false"}
      data-expanded={expanded ? "true" : "false"}
      data-size={size}
      data-slot="curvy-earwig"
      style={
        {
          "--jk-curvy-earwig-box": metrics.box,
          "--jk-curvy-earwig-open": metrics.open,
          "--jk-curvy-earwig-text": metrics.text,
          ...style,
        } as React.CSSProperties
      }
    >
      <style href="jk-curvy-earwig" precedence="default">{`
        .jk-curvy-earwig {
          width: var(--jk-curvy-earwig-box);
          height: var(--jk-curvy-earwig-box);
        }
        .jk-curvy-earwig:hover,
        .jk-curvy-earwig:focus-within,
        .jk-curvy-earwig[data-expanded="true"] {
          width: var(--jk-curvy-earwig-open);
        }
        .jk-curvy-earwig-shell {
          background: color-mix(in oklab, var(--jk-card) 88%, var(--jk-muted));
          box-shadow:
            inset 0 0 0 1px var(--jk-border),
            0 8px 22px color-mix(in oklab, var(--jk-foreground), transparent 88%);
        }
        .jk-curvy-earwig:hover .jk-curvy-earwig-shell,
        .jk-curvy-earwig:focus-within .jk-curvy-earwig-shell,
        .jk-curvy-earwig[data-expanded="true"] .jk-curvy-earwig-shell {
          box-shadow:
            inset 0 0 0 1px color-mix(in oklab, var(--jk-ring) 55%, var(--jk-border)),
            0 10px 26px color-mix(in oklab, var(--jk-foreground), transparent 84%);
        }
        .jk-curvy-earwig-field {
          color: var(--jk-foreground);
          font-size: var(--jk-curvy-earwig-text);
          opacity: 0;
        }
        .jk-curvy-earwig-field::placeholder {
          color: var(--jk-muted-foreground);
        }
        .jk-curvy-earwig:hover .jk-curvy-earwig-field,
        .jk-curvy-earwig:focus-within .jk-curvy-earwig-field,
        .jk-curvy-earwig[data-expanded="true"] .jk-curvy-earwig-field {
          opacity: 1;
        }
        .jk-curvy-earwig-lens {
          border: 2px solid var(--jk-muted-foreground);
        }
        .jk-curvy-earwig-handle {
          background: var(--jk-muted-foreground);
        }
        .jk-curvy-earwig:hover .jk-curvy-earwig-lens,
        .jk-curvy-earwig:focus-within .jk-curvy-earwig-lens,
        .jk-curvy-earwig[data-expanded="true"] .jk-curvy-earwig-lens {
          border-color: var(--jk-primary);
        }
        .jk-curvy-earwig:hover .jk-curvy-earwig-handle,
        .jk-curvy-earwig:focus-within .jk-curvy-earwig-handle,
        .jk-curvy-earwig[data-expanded="true"] .jk-curvy-earwig-handle {
          background: var(--jk-primary);
        }
        .jk-curvy-earwig:focus-within .jk-curvy-earwig-shell {
          outline: 2px solid transparent;
          box-shadow:
            inset 0 0 0 1px var(--jk-ring),
            0 0 0 3px color-mix(in oklab, var(--jk-ring), transparent 62%),
            0 10px 26px color-mix(in oklab, var(--jk-foreground), transparent 84%);
        }
        @media (prefers-reduced-motion: no-preference) {
          .jk-curvy-earwig[data-animate="true"] {
            transition: width 320ms cubic-bezier(0.22, 1, 0.36, 1);
          }
          .jk-curvy-earwig[data-animate="true"] .jk-curvy-earwig-shell {
            transition: box-shadow 220ms ease;
          }
          .jk-curvy-earwig[data-animate="true"] .jk-curvy-earwig-field {
            transition: opacity 180ms ease;
          }
          .jk-curvy-earwig[data-animate="true"] .jk-curvy-earwig-lens,
          .jk-curvy-earwig[data-animate="true"] .jk-curvy-earwig-handle {
            transition:
              border-color 180ms ease,
              background-color 180ms ease;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-curvy-earwig,
          .jk-curvy-earwig-shell,
          .jk-curvy-earwig-field,
          .jk-curvy-earwig-lens,
          .jk-curvy-earwig-handle {
            transition: none;
          }
        }
      `}</style>
      <span
        aria-hidden="true"
        className="jk-curvy-earwig-shell pointer-events-none absolute inset-0 overflow-hidden rounded-full"
      />
      <input
        aria-label={label}
        className="jk-curvy-earwig-field relative z-10 h-full w-full min-w-0 appearance-none border-0 bg-transparent pr-[var(--jk-curvy-earwig-box)] pl-3.5 outline-none disabled:cursor-not-allowed"
        disabled={disabled}
        type={type}
        {...props}
      />
      <span
        aria-hidden="true"
        className="jk-curvy-earwig-glyph pointer-events-none absolute top-0 right-0 z-20 block h-[var(--jk-curvy-earwig-box)] w-[var(--jk-curvy-earwig-box)]"
      >
        <span className="jk-curvy-earwig-lens absolute top-[26%] left-[24%] block size-[38%] rounded-full" />
        <span className="jk-curvy-earwig-handle absolute top-[62%] left-[54%] block h-0.5 w-[28%] origin-left rotate-45 rounded-full" />
      </span>
    </label>
  );
}
