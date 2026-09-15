// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { cn } from "@/lib/cn";
import type { FastPumaProps } from "./FastPuma.types";

const sizes = {
  sm: "jk-fast-puma-sm",
  md: "jk-fast-puma-md",
  lg: "jk-fast-puma-lg",
} as const;

export function FastPuma({
  className,
  size = "md",
  plusLabel = "+",
  minusLabel = "–",
  plusAriaLabel = "Increase",
  minusAriaLabel = "Decrease",
  defaultPlusPressed = false,
  defaultMinusPressed = true,
  plusPressed,
  minusPressed,
  onPlusPressedChange,
  onMinusPressedChange,
  disabled,
  name = "fast-puma",
  ...props
}: FastPumaProps) {
  return (
    <div
      className={cn(
        "jk-fast-puma inline-flex items-center justify-center",
        sizes[size],
        disabled && "pointer-events-none opacity-50",
        className,
      )}
      data-size={size}
      data-slot="fast-puma"
      {...props}
    >
      <style href="jk-fast-puma" precedence="default">{`
        .jk-fast-puma {
          --jk-fast-puma-well: 8.75rem;
          --jk-fast-puma-knob: 6.02rem;
          --jk-fast-puma-glow: 6.3rem;
          --jk-fast-puma-type: 2.625rem;
          --jk-fast-puma-type-press: 2.5rem;
          --jk-fast-puma-face: color-mix(in oklab, var(--jk-muted) 58%, var(--jk-secondary));
          --jk-fast-puma-ink: color-mix(in oklab, var(--jk-foreground) 42%, transparent);
          --jk-fast-puma-hi: color-mix(in oklab, var(--jk-card) 88%, var(--jk-primary-foreground));
          --jk-fast-puma-shade: color-mix(in oklab, var(--jk-foreground) 48%, transparent);
          gap: 0.5rem;
          transform: scale(0.9);
          transform-origin: center;
        }
        .jk-fast-puma-sm {
          --jk-fast-puma-well: 6.25rem;
          --jk-fast-puma-knob: 4.08rem;
          --jk-fast-puma-glow: 4.5rem;
          --jk-fast-puma-type: 1.875rem;
          --jk-fast-puma-type-press: 1.75rem;
        }
        .jk-fast-puma-lg {
          --jk-fast-puma-well: 10.5rem;
          --jk-fast-puma-knob: 7.22rem;
          --jk-fast-puma-glow: 7.56rem;
          --jk-fast-puma-type: 3.125rem;
          --jk-fast-puma-type-press: 2.875rem;
        }
        .jk-fast-puma-toggle {
          position: relative;
          display: inline-block;
          width: var(--jk-fast-puma-well);
          height: var(--jk-fast-puma-well);
          border-radius: 8px;
          background: var(--jk-fast-puma-face);
          box-shadow:
            inset 0 0 35px 5px color-mix(in oklab, var(--jk-foreground), transparent 75%),
            inset 0 2px 1px 1px color-mix(in oklab, var(--jk-fast-puma-hi), transparent 10%),
            inset 0 -2px 1px 0 color-mix(in oklab, var(--jk-foreground), transparent 75%);
        }
        .jk-fast-puma-toggle::before {
          content: "";
          position: absolute;
          left: 50%;
          top: 50%;
          width: var(--jk-fast-puma-glow);
          height: var(--jk-fast-puma-glow);
          margin: calc(var(--jk-fast-puma-glow) / -2) 0 0 calc(var(--jk-fast-puma-glow) / -2);
          border-radius: 118.3px;
          background: var(--jk-fast-puma-hi);
          opacity: 0.2;
          box-shadow: 0 0 17.5px 8.75px var(--jk-fast-puma-hi);
          pointer-events: none;
        }
        .jk-fast-puma-input {
          position: absolute;
          inset: 0;
          z-index: 1;
          width: 100%;
          height: 100%;
          margin: 0;
          cursor: pointer;
          opacity: 0;
        }
        .jk-fast-puma-knob {
          position: absolute;
          left: 50%;
          top: 50%;
          display: block;
          width: var(--jk-fast-puma-knob);
          height: var(--jk-fast-puma-knob);
          margin: calc(var(--jk-fast-puma-knob) / -2) 0 0 calc(var(--jk-fast-puma-knob) / -2);
          border-radius: 96.32px;
          background: var(--jk-fast-puma-face);
          filter: blur(1px);
          box-shadow:
            0 15px 25px -4px color-mix(in oklab, var(--jk-foreground), transparent 50%),
            inset 0 -3px 4px -1px color-mix(in oklab, var(--jk-foreground), transparent 80%),
            0 -10px 15px -1px color-mix(in oklab, var(--jk-fast-puma-hi), transparent 40%),
            inset 0 3px 4px -1px color-mix(in oklab, var(--jk-fast-puma-hi), transparent 80%),
            inset 0 0 5px 1px color-mix(in oklab, var(--jk-fast-puma-hi), transparent 20%),
            inset 0 20px 30px 0 color-mix(in oklab, var(--jk-fast-puma-hi), transparent 80%);
        }
        .jk-fast-puma-mark {
          position: absolute;
          inset: 0;
          display: block;
          height: 100%;
          width: 100%;
          text-align: center;
          font-size: var(--jk-fast-puma-type);
          font-weight: 700;
          line-height: var(--jk-fast-puma-well);
          color: var(--jk-fast-puma-ink);
          opacity: 0.9;
          text-shadow:
            1px 1px 3px var(--jk-fast-puma-face),
            0 0 0 var(--jk-fast-puma-shade),
            1px 1px 4px var(--jk-fast-puma-hi);
          pointer-events: none;
        }
        .jk-fast-puma-input:focus-visible + .jk-fast-puma-knob {
          outline: 2px solid var(--jk-ring);
          outline-offset: 6px;
        }
        .jk-fast-puma-input:active + .jk-fast-puma-knob {
          box-shadow:
            0 15px 25px -4px color-mix(in oklab, var(--jk-foreground), transparent 60%),
            inset 0 -8px 30px 1px color-mix(in oklab, var(--jk-fast-puma-hi), transparent 10%),
            0 -10px 15px -1px color-mix(in oklab, var(--jk-fast-puma-hi), transparent 40%),
            inset 0 8px 25px 0 color-mix(in oklab, var(--jk-foreground), transparent 60%),
            inset 0 0 10px 1px color-mix(in oklab, var(--jk-fast-puma-hi), transparent 40%);
        }
        .jk-fast-puma-input:active ~ .jk-fast-puma-mark {
          font-size: var(--jk-fast-puma-type-press);
          color: color-mix(in oklab, var(--jk-foreground) 45%, transparent);
        }
        .jk-fast-puma-input:checked + .jk-fast-puma-knob {
          box-shadow:
            0 15px 25px -4px color-mix(in oklab, var(--jk-foreground), transparent 60%),
            inset 0 -8px 25px -1px color-mix(in oklab, var(--jk-fast-puma-hi), transparent 10%),
            0 -10px 15px -1px color-mix(in oklab, var(--jk-fast-puma-hi), transparent 40%),
            inset 0 8px 20px 0 color-mix(in oklab, var(--jk-foreground), transparent 80%),
            inset 0 0 5px 1px color-mix(in oklab, var(--jk-fast-puma-hi), transparent 40%);
        }
        .jk-fast-puma-input:checked ~ .jk-fast-puma-mark {
          font-size: var(--jk-fast-puma-type-press);
        }
        @media (prefers-reduced-motion: no-preference) {
          .jk-fast-puma-knob {
            transition: box-shadow 300ms cubic-bezier(0.23, 1, 0.32, 1),
              filter 300ms cubic-bezier(0.23, 1, 0.32, 1);
          }
          .jk-fast-puma-mark {
            transition: color 300ms ease-out, font-size 300ms ease-out;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-fast-puma-knob,
          .jk-fast-puma-mark {
            transition: none;
          }
        }
      `}</style>
      <span className="jk-fast-puma-toggle">
        <input
          aria-label={plusAriaLabel}
          checked={plusPressed}
          className="jk-fast-puma-input"
          defaultChecked={plusPressed === undefined ? defaultPlusPressed : undefined}
          disabled={disabled}
          name={`${name}-plus`}
          onChange={(event) => onPlusPressedChange?.(event.target.checked)}
          type="checkbox"
        />
        <span aria-hidden="true" className="jk-fast-puma-knob" />
        <span aria-hidden="true" className="jk-fast-puma-mark">
          {plusLabel}
        </span>
      </span>
      <span className="jk-fast-puma-toggle">
        <input
          aria-label={minusAriaLabel}
          checked={minusPressed}
          className="jk-fast-puma-input"
          defaultChecked={
            minusPressed === undefined ? defaultMinusPressed : undefined
          }
          disabled={disabled}
          name={`${name}-minus`}
          onChange={(event) => onMinusPressedChange?.(event.target.checked)}
          type="checkbox"
        />
        <span aria-hidden="true" className="jk-fast-puma-knob" />
        <span aria-hidden="true" className="jk-fast-puma-mark">
          {minusLabel}
        </span>
      </span>
    </div>
  );
}
