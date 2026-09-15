// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { cn } from "@/lib/cn";
import type { HorribleShrimpProps } from "./HorribleShrimp.types";

const sizes = {
  sm: "text-[13px]",
  md: "text-[17px]",
  lg: "text-[21px]",
} as const;

export function HorribleShrimp({
  className,
  label = "Notifications",
  size = "md",
  disabled,
  id,
  ...props
}: HorribleShrimpProps) {
  const generatedId = React.useId();
  const inputId = id ?? generatedId;

  return (
    <div
      className={cn(
        "jk-horrible-shrimp inline-flex items-center gap-3 text-foreground",
        sizes[size],
        className,
      )}
      data-disabled={disabled ? "true" : "false"}
      data-size={size}
      data-slot="horrible-shrimp"
    >
      <style href="jk-horrible-shrimp" precedence="default">{`
        .jk-horrible-shrimp-track {
          width: 2em;
          height: 1em;
          border-radius: 999px;
          border: 2px solid var(--jk-foreground);
          background: var(--jk-muted);
        }
        .jk-horrible-shrimp-thumb {
          width: 1em;
          height: 1em;
          border-radius: 999px;
          border: 2px solid var(--jk-foreground);
          background: var(--jk-card);
          box-shadow: 0 0.22em 0 var(--jk-foreground);
          transform: translate(-2px, calc(-0.22em - 2px));
        }
        .jk-horrible-shrimp-input:checked + .jk-horrible-shrimp-track {
          background: var(--jk-primary);
        }
        .jk-horrible-shrimp-input:checked + .jk-horrible-shrimp-track .jk-horrible-shrimp-thumb {
          transform: translate(calc(1em - 2px), calc(-0.22em - 2px));
        }
        .jk-horrible-shrimp-input:focus-visible + .jk-horrible-shrimp-track {
          outline: 2px solid var(--jk-ring);
          outline-offset: 3px;
        }
        .jk-horrible-shrimp[data-disabled="true"] {
          opacity: 0.5;
        }
        @media (prefers-reduced-motion: no-preference) {
          .jk-horrible-shrimp-track,
          .jk-horrible-shrimp-thumb {
            transition:
              background-color 160ms ease,
              transform 160ms ease,
              box-shadow 160ms ease;
          }
          .jk-horrible-shrimp:hover .jk-horrible-shrimp-input:not(:disabled) + .jk-horrible-shrimp-track .jk-horrible-shrimp-thumb {
            transform: translate(-2px, calc(-0.32em - 2px));
            box-shadow: 0 0.32em 0 var(--jk-foreground);
          }
          .jk-horrible-shrimp:hover .jk-horrible-shrimp-input:checked:not(:disabled) + .jk-horrible-shrimp-track .jk-horrible-shrimp-thumb {
            transform: translate(calc(1em - 2px), calc(-0.32em - 2px));
          }
          .jk-horrible-shrimp-input:active:not(:disabled) + .jk-horrible-shrimp-track .jk-horrible-shrimp-thumb {
            transform: translate(-2px, calc(-0.12em - 2px));
            box-shadow: 0 0.12em 0 var(--jk-foreground);
          }
          .jk-horrible-shrimp-input:checked:active:not(:disabled) + .jk-horrible-shrimp-track .jk-horrible-shrimp-thumb {
            transform: translate(calc(1em - 2px), calc(-0.12em - 2px));
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-horrible-shrimp-track,
          .jk-horrible-shrimp-thumb {
            transition: none;
          }
        }
      `}</style>
      <label
        className={cn(
          "inline-flex cursor-pointer items-center gap-3",
          disabled && "cursor-not-allowed",
        )}
        htmlFor={inputId}
      >
        <span className="relative inline-flex pb-[0.34em]">
          <input
            className="jk-horrible-shrimp-input peer sr-only"
            disabled={disabled}
            id={inputId}
            role="switch"
            type="checkbox"
            {...props}
          />
          <span
            aria-hidden="true"
            className="jk-horrible-shrimp-track relative inline-block shrink-0"
          >
            <span className="jk-horrible-shrimp-thumb absolute left-0 top-0 block" />
          </span>
        </span>
        <span className="text-[0.85em] font-medium leading-none">{label}</span>
      </label>
    </div>
  );
}
