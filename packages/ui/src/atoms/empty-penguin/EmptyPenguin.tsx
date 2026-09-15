"use client";

// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { cn } from "@/lib/cn";
import type { EmptyPenguinProps } from "./EmptyPenguin.types";

export function EmptyPenguin({
  className,
  checked,
  defaultChecked = false,
  onCheckedChange,
  disabled = false,
  label = "Toggle setting",
  size = "md",
  type,
  onClick,
  ...props
}: EmptyPenguinProps) {
  const [uncontrolled, setUncontrolled] = React.useState(defaultChecked);
  const isOn = checked ?? uncontrolled;

  const commit = (next: boolean) => {
    if (checked === undefined) setUncontrolled(next);
    onCheckedChange?.(next);
  };

  return (
    <button
      aria-checked={isOn}
      aria-label={label}
      className={cn("jk-empty-penguin", className)}
      data-size={size}
      data-slot="empty-penguin"
      data-state={isOn ? "on" : "off"}
      disabled={disabled}
      role="switch"
      type={type ?? "button"}
      {...props}
      onClick={(event) => {
        onClick?.(event);
        if (event.defaultPrevented || disabled) return;
        commit(!isOn);
      }}
    >
      <style href="jk-empty-penguin" precedence="default">{`
        .jk-empty-penguin {
          position: relative;
          display: inline-flex;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;
          padding: 0;
          border: 0;
          background: transparent;
          font-size: 1.0625rem;
          line-height: 1;
          cursor: pointer;
        }
        .jk-empty-penguin[data-size="sm"] {
          font-size: 0.8125rem;
        }
        .jk-empty-penguin:focus-visible {
          outline: none;
        }
        .jk-empty-penguin:focus-visible .jk-empty-penguin-track {
          box-shadow: 0 0 0 2px var(--jk-background), 0 0 0 4px var(--jk-ring);
        }
        .jk-empty-penguin:disabled {
          cursor: not-allowed;
          opacity: 0.5;
        }
        .jk-empty-penguin-track {
          position: relative;
          display: block;
          width: 3.5em;
          height: 2em;
          overflow: hidden;
          border: 1px solid var(--jk-input);
          border-radius: 999px;
          background: var(--jk-background);
        }
        .jk-empty-penguin[data-state="on"] .jk-empty-penguin-track {
          border-color: var(--jk-primary);
          background: var(--jk-primary);
        }
        .jk-empty-penguin-thumb {
          position: absolute;
          top: 0.25em;
          left: 0.25em;
          width: 1.4em;
          height: 1.4em;
          border-radius: 999px;
          background: var(--jk-muted-foreground);
        }
        .jk-empty-penguin[data-state="on"] .jk-empty-penguin-thumb {
          background: var(--jk-primary-foreground);
          transform: translateX(1.5em);
        }
        @media (prefers-reduced-motion: no-preference) {
          .jk-empty-penguin-track,
          .jk-empty-penguin-thumb {
            transition:
              background-color 400ms ease,
              border-color 400ms ease,
              transform 400ms ease;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-empty-penguin-track,
          .jk-empty-penguin-thumb {
            transition: none;
          }
        }
      `}</style>
      <span aria-hidden="true" className="jk-empty-penguin-track">
        <span className="jk-empty-penguin-thumb" />
      </span>
    </button>
  );
}
