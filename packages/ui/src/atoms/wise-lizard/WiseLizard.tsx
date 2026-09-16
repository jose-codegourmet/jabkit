"use client";

// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { cn } from "@/lib/cn";
import type { WiseLizardProps } from "./WiseLizard.types";

const sizes = {
  sm: "jk-wise-lizard-sm",
  md: "jk-wise-lizard-md",
  lg: "jk-wise-lizard-lg",
} as const;

function UserMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
  );
}

export function WiseLizard({
  className,
  size = "md",
  badge = "USERNAME",
  placeholder = "Enter username",
  disabled,
  id,
  name,
  ...props
}: WiseLizardProps) {
  const generatedId = React.useId();
  const fieldId = id ?? generatedId;
  const fieldRef = React.useRef<HTMLInputElement>(null);

  return (
    <div
      className={cn(
        "jk-wise-lizard",
        sizes[size],
        disabled && "jk-wise-lizard-disabled",
        className,
      )}
      data-disabled={disabled ? "true" : "false"}
      data-size={size}
      data-slot="wise-lizard"
    >
      <style href="jk-wise-lizard" precedence="default">{`
        .jk-wise-lizard {
          --jk-wise-lizard-ink: var(--jk-foreground);
          --jk-wise-lizard-paper: var(--jk-muted);
          --jk-wise-lizard-field: var(--jk-card);
          --jk-wise-lizard-field-ink: var(--jk-card-foreground);
          --jk-wise-lizard-hint: var(--jk-muted-foreground);
          --jk-wise-lizard-accent: var(--jk-warning);
          --jk-wise-lizard-glow: color-mix(
            in oklab,
            var(--jk-destructive) 40%,
            transparent
          );
          --jk-wise-lizard-glow-soft: color-mix(
            in oklab,
            var(--jk-destructive) 10%,
            transparent
          );
          position: relative;
          display: inline-block;
          max-width: 100%;
          isolation: isolate;
        }
        .jk-wise-lizard-md {
          width: 350px;
        }
        .jk-wise-lizard-sm {
          width: 280px;
        }
        .jk-wise-lizard-lg {
          width: 420px;
        }
        .jk-wise-lizard-disabled {
          cursor: not-allowed;
          opacity: 0.5;
        }
        .jk-wise-lizard-stage,
        .jk-wise-lizard-mark,
        .jk-wise-lizard-field,
        .jk-wise-lizard-badge {
          border-radius: 0;
        }
        .jk-wise-lizard-stage {
          position: relative;
          display: flex;
          width: 100%;
          max-width: 350px;
          align-items: center;
          justify-content: flex-start;
          gap: 15px;
          padding: 20px;
          background: var(--jk-wise-lizard-paper);
          border: 4px solid var(--jk-wise-lizard-ink);
          box-shadow: 10px 10px 0 0 var(--jk-wise-lizard-ink);
          transform: rotateX(10deg) rotateY(-10deg);
          transform-style: preserve-3d;
          perspective: 1000px;
        }
        .jk-wise-lizard-sm .jk-wise-lizard-stage {
          max-width: 280px;
          gap: 10px;
          padding: 14px;
        }
        .jk-wise-lizard-lg .jk-wise-lizard-stage {
          max-width: 420px;
          gap: 18px;
          padding: 24px;
        }
        .jk-wise-lizard:hover .jk-wise-lizard-stage,
        .jk-wise-lizard:focus-within .jk-wise-lizard-stage {
          transform: rotateX(5deg) rotateY(1deg) scale(1.05);
          box-shadow:
            25px 25px 0 -5px var(--jk-wise-lizard-accent),
            25px 25px 0 0 var(--jk-wise-lizard-ink);
        }
        .jk-wise-lizard-glow {
          position: absolute;
          left: 0;
          bottom: 0;
          z-index: -1;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            45deg,
            var(--jk-wise-lizard-glow) 0%,
            var(--jk-wise-lizard-glow-soft) 100%
          );
          filter: blur(20px);
          transform: translateZ(-50px);
        }
        .jk-wise-lizard-mark {
          position: relative;
          z-index: 3;
          display: flex;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;
          padding: 10px;
          border: 3px solid var(--jk-wise-lizard-ink);
          background: var(--jk-wise-lizard-accent);
          color: var(--jk-wise-lizard-ink);
          font-weight: 700;
          text-transform: uppercase;
          transform: translateZ(20px);
        }
        .jk-wise-lizard-sm .jk-wise-lizard-mark {
          padding: 8px;
        }
        .jk-wise-lizard-lg .jk-wise-lizard-mark {
          padding: 12px;
        }
        .jk-wise-lizard-mark:hover,
        .jk-wise-lizard-mark:focus-visible {
          background: var(--jk-wise-lizard-accent);
          transform: translateZ(10px) translateX(-5px) translateY(-5px);
          box-shadow: 5px 5px 0 0 var(--jk-wise-lizard-ink);
        }
        .jk-wise-lizard-mark:focus-visible {
          outline: 2px solid var(--jk-ring);
          outline-offset: 3px;
        }
        .jk-wise-lizard-mark svg {
          display: block;
          width: 25px;
          height: 25px;
          fill: currentColor;
        }
        .jk-wise-lizard-sm .jk-wise-lizard-mark svg {
          width: 20px;
          height: 20px;
        }
        .jk-wise-lizard-lg .jk-wise-lizard-mark svg {
          width: 30px;
          height: 30px;
        }
        .jk-wise-lizard-field {
          position: relative;
          z-index: 3;
          width: 100%;
          min-width: 0;
          appearance: none;
          border: 3px solid var(--jk-wise-lizard-ink);
          padding: 15px;
          background: var(--jk-wise-lizard-field);
          color: var(--jk-wise-lizard-field-ink);
          font-family: Arial, sans-serif;
          font-size: 18px;
          letter-spacing: -0.5px;
          outline: none;
          transform: translateZ(10px);
        }
        .jk-wise-lizard-sm .jk-wise-lizard-field {
          padding: 10px;
          font-size: 14px;
        }
        .jk-wise-lizard-lg .jk-wise-lizard-field {
          padding: 18px;
          font-size: 20px;
        }
        .jk-wise-lizard-field::placeholder {
          color: var(--jk-wise-lizard-hint);
          font-weight: 700;
          text-transform: uppercase;
        }
        .jk-wise-lizard-field:hover,
        .jk-wise-lizard-field:focus {
          background: var(--jk-wise-lizard-paper);
          transform: translateZ(20px) translateX(-5px) translateY(-5px);
          box-shadow: 5px 5px 0 0 var(--jk-wise-lizard-ink);
        }
        .jk-wise-lizard-field:focus-visible {
          outline: 2px solid var(--jk-ring);
          outline-offset: 3px;
        }
        .jk-wise-lizard-disabled .jk-wise-lizard-field,
        .jk-wise-lizard-disabled .jk-wise-lizard-mark {
          pointer-events: none;
        }
        .jk-wise-lizard-badge {
          position: absolute;
          top: -15px;
          left: 20px;
          z-index: 4;
          border: 2px solid var(--jk-wise-lizard-ink);
          background: var(--jk-wise-lizard-accent);
          padding: 5px 10px;
          color: var(--jk-wise-lizard-ink);
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          transform: translateZ(50px);
        }
        .jk-wise-lizard-sm .jk-wise-lizard-badge {
          top: -12px;
          left: 14px;
          padding: 4px 8px;
          font-size: 12px;
        }
        .jk-wise-lizard-lg .jk-wise-lizard-badge {
          top: -16px;
          left: 24px;
          padding: 6px 12px;
          font-size: 16px;
        }
        @media (prefers-reduced-motion: no-preference) {
          .jk-wise-lizard-stage,
          .jk-wise-lizard-mark,
          .jk-wise-lizard-field {
            transition: all 400ms cubic-bezier(0.23, 1, 0.32, 1);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-wise-lizard-stage,
          .jk-wise-lizard-mark,
          .jk-wise-lizard-field,
          .jk-wise-lizard-badge,
          .jk-wise-lizard-glow {
            transition: none;
            transform: none;
            filter: none;
          }
          .jk-wise-lizard:hover .jk-wise-lizard-stage,
          .jk-wise-lizard:focus-within .jk-wise-lizard-stage {
            transform: none;
            box-shadow: 10px 10px 0 0 var(--jk-wise-lizard-ink);
          }
          .jk-wise-lizard-mark:hover,
          .jk-wise-lizard-mark:focus-visible,
          .jk-wise-lizard-field:hover,
          .jk-wise-lizard-field:focus {
            transform: none;
            box-shadow: none;
          }
        }
      `}</style>
      <div className="jk-wise-lizard-stage">
        <span aria-hidden="true" className="jk-wise-lizard-glow" />
        <label className="jk-wise-lizard-badge" htmlFor={fieldId}>
          {badge}
        </label>
        <button
          aria-hidden="true"
          className="jk-wise-lizard-mark"
          disabled={disabled}
          onClick={() => fieldRef.current?.focus()}
          tabIndex={-1}
          type="button"
        >
          <UserMark />
        </button>
        <input
          className="jk-wise-lizard-field"
          disabled={disabled}
          id={fieldId}
          name={name ?? "username"}
          placeholder={placeholder}
          ref={fieldRef}
          type="text"
          {...props}
        />
      </div>
    </div>
  );
}
