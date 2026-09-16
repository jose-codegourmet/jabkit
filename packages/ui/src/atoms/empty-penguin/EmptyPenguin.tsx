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
  name,
  offText = "off",
  onText = "on",
  ...props
}: EmptyPenguinProps) {
  return (
    <label
      className={cn(
        "jk-empty-penguin",
        size === "sm" && "jk-empty-penguin-sm",
        disabled && "jk-empty-penguin-disabled",
        className,
      )}
      data-size={size}
      data-slot="empty-penguin"
      {...props}
    >
      <style href="jk-empty-penguin" precedence="default">{`
        .jk-empty-penguin {
          --jk-empty-penguin-focus: var(--jk-primary);
          --jk-empty-penguin-face: var(--jk-card);
          --jk-empty-penguin-ink: var(--jk-foreground);
          --jk-empty-penguin-track: color-mix(
            in oklab,
            var(--jk-muted-foreground) 42%,
            var(--jk-muted)
          );
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 70px;
          height: 36px;
          transform: translateX(calc(50% - 10px));
          cursor: pointer;
        }
        .jk-empty-penguin-sm {
          transform: translateX(calc(50% - 10px)) scale(0.75);
          transform-origin: center;
        }
        .jk-empty-penguin-disabled {
          cursor: not-allowed;
          opacity: 0.5;
        }
        .jk-empty-penguin-disabled .jk-empty-penguin-input {
          cursor: not-allowed;
          pointer-events: none;
        }
        .jk-empty-penguin-input {
          position: absolute;
          inset: 0;
          z-index: 1;
          width: 100%;
          height: 100%;
          margin: 0;
          cursor: pointer;
          opacity: 0;
        }
        .jk-empty-penguin-slider {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          box-sizing: border-box;
          border: 2px solid var(--jk-empty-penguin-ink);
          border-radius: 100px;
          background-color: var(--jk-empty-penguin-track);
          box-shadow: 4px 4px var(--jk-empty-penguin-ink);
        }
        .jk-empty-penguin-slider::before {
          content: attr(data-off);
          position: absolute;
          left: 2px;
          bottom: 1px;
          box-sizing: border-box;
          width: 30px;
          height: 30px;
          border: 2px solid var(--jk-empty-penguin-ink);
          border-radius: 100px;
          background-color: var(--jk-empty-penguin-face);
          color: var(--jk-empty-penguin-ink);
          font-size: 14px;
          font-weight: 600;
          line-height: 25px;
          text-align: center;
        }
        .jk-empty-penguin-input:checked + .jk-empty-penguin-slider {
          background-color: var(--jk-empty-penguin-focus);
          transform: translateX(-32px);
        }
        .jk-empty-penguin-input:checked + .jk-empty-penguin-slider::before {
          content: attr(data-on);
          transform: translateX(32px);
        }
        .jk-empty-penguin-input:focus-visible + .jk-empty-penguin-slider {
          outline: 2px solid var(--jk-ring);
          outline-offset: 4px;
        }
        @media (prefers-reduced-motion: no-preference) {
          .jk-empty-penguin-slider,
          .jk-empty-penguin-slider::before {
            transition: 0.3s;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-empty-penguin-slider,
          .jk-empty-penguin-slider::before {
            transition: none;
          }
        }
      `}</style>
      <input
        aria-label={label}
        checked={checked}
        className="jk-empty-penguin-input"
        defaultChecked={checked === undefined ? defaultChecked : undefined}
        disabled={disabled}
        name={name}
        onChange={(event) => onCheckedChange?.(event.target.checked)}
        type="checkbox"
      />
      <span
        aria-hidden="true"
        className="jk-empty-penguin-slider"
        data-off={offText}
        data-on={onText}
      />
    </label>
  );
}
