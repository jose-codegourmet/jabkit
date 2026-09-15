"use client";

// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { cn } from "@/lib/cn";
import type { QuickPantherOption, QuickPantherProps } from "./QuickPanther.types";

const DEFAULT_OPTIONS: readonly QuickPantherOption[] = [
  { value: "soon", title: "Soon" },
  { value: "now", title: "Now" },
  { value: "lock-in", title: "Lock in" },
];

export function QuickPanther({
  className,
  options = DEFAULT_OPTIONS,
  value,
  defaultValue,
  name,
  onValueChange,
  legend = "Choose when",
  disabled = false,
  style,
  ...props
}: QuickPantherProps) {
  const generatedName = React.useId();
  const optionIdPrefix = React.useId();
  const groupName = name ?? generatedName;
  const fallback = defaultValue ?? options[0]?.value ?? "";
  const [uncontrolled, setUncontrolled] = React.useState(fallback);
  const selected = value ?? uncontrolled;

  const commit = (next: string) => {
    if (value === undefined) setUncontrolled(next);
    onValueChange?.(next);
  };

  return (
    <fieldset
      className={cn("jk-quick-panther", className)}
      data-slot="quick-panther"
      disabled={disabled}
      style={
        {
          "--jk-quick-panther-total": String(Math.max(options.length, 1)),
          ...style,
        } as React.CSSProperties
      }
      {...props}
    >
      <style href="jk-quick-panther" precedence="default">{`
        .jk-quick-panther {
          --jk-quick-panther-accent: var(--jk-warning);
          --jk-quick-panther-accent-soft: color-mix(
            in oklch,
            var(--jk-warning) 11%,
            transparent
          );
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: stretch;
          min-inline-size: 0;
          min-width: 9.5rem;
          margin: 0;
          padding: 0 0 0 0.5rem;
          overflow: hidden;
          border: 0;
          border-radius: 10px;
          background: transparent;
        }
        .jk-quick-panther-legend {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
        .jk-quick-panther-input {
          position: absolute;
          width: 1px;
          height: 1px;
          margin: -1px;
          padding: 0;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          appearance: none;
          border: 0;
        }
        .jk-quick-panther-label {
          position: relative;
          z-index: 1;
          padding: 1rem;
          color: var(--jk-muted-foreground);
          cursor: pointer;
        }
        .jk-quick-panther-input:checked + .jk-quick-panther-label {
          color: var(--jk-quick-panther-accent);
        }
        .jk-quick-panther-input:disabled + .jk-quick-panther-label {
          cursor: not-allowed;
          opacity: 0.5;
        }
        .jk-quick-panther-input:focus-visible + .jk-quick-panther-label {
          outline: 2px solid var(--jk-ring);
          outline-offset: -2px;
        }
        .jk-quick-panther-glider-track {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          width: 1px;
          background: linear-gradient(
            0deg,
            transparent 0%,
            var(--jk-border) 50%,
            transparent 100%
          );
          pointer-events: none;
        }
        .jk-quick-panther-glider {
          position: relative;
          width: 100%;
          height: calc(100% / var(--jk-quick-panther-total));
          background: linear-gradient(
            0deg,
            transparent 0%,
            var(--jk-quick-panther-accent) 50%,
            transparent 100%
          );
        }
        .jk-quick-panther-glider::before {
          content: "";
          position: absolute;
          top: 50%;
          width: 300%;
          height: 60%;
          background: var(--jk-quick-panther-accent);
          filter: blur(10px);
          transform: translateY(-50%);
        }
        .jk-quick-panther-glider::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 150px;
          height: 100%;
          background: linear-gradient(
            90deg,
            var(--jk-quick-panther-accent-soft) 0%,
            transparent 100%
          );
        }
        .jk-quick-panther-input:nth-of-type(1):checked ~ .jk-quick-panther-glider-track .jk-quick-panther-glider {
          transform: translateY(0);
        }
        .jk-quick-panther-input:nth-of-type(2):checked ~ .jk-quick-panther-glider-track .jk-quick-panther-glider {
          transform: translateY(100%);
        }
        .jk-quick-panther-input:nth-of-type(3):checked ~ .jk-quick-panther-glider-track .jk-quick-panther-glider {
          transform: translateY(200%);
        }
        .jk-quick-panther-input:nth-of-type(4):checked ~ .jk-quick-panther-glider-track .jk-quick-panther-glider {
          transform: translateY(300%);
        }
        .jk-quick-panther-input:nth-of-type(5):checked ~ .jk-quick-panther-glider-track .jk-quick-panther-glider {
          transform: translateY(400%);
        }
        .jk-quick-panther-input:nth-of-type(6):checked ~ .jk-quick-panther-glider-track .jk-quick-panther-glider {
          transform: translateY(500%);
        }
        .jk-quick-panther-input:nth-of-type(7):checked ~ .jk-quick-panther-glider-track .jk-quick-panther-glider {
          transform: translateY(600%);
        }
        .jk-quick-panther-input:nth-of-type(8):checked ~ .jk-quick-panther-glider-track .jk-quick-panther-glider {
          transform: translateY(700%);
        }
        .jk-quick-panther-input:nth-of-type(9):checked ~ .jk-quick-panther-glider-track .jk-quick-panther-glider {
          transform: translateY(800%);
        }
        @media (prefers-reduced-motion: no-preference) {
          .jk-quick-panther-label {
            transition: color 0.3s ease-in-out;
          }
          .jk-quick-panther-glider {
            transition: transform 0.5s cubic-bezier(0.37, 1.95, 0.66, 0.56);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-quick-panther-label,
          .jk-quick-panther-glider {
            transition: none;
          }
        }
      `}</style>
      <legend className="jk-quick-panther-legend">{legend}</legend>
      {options.map((option) => {
        const optionId = `${optionIdPrefix}-${option.value}`;
        const optionDisabled = disabled || option.disabled;
        return (
          <React.Fragment key={option.value}>
            <input
              checked={option.value === selected}
              className="jk-quick-panther-input"
              disabled={optionDisabled}
              id={optionId}
              name={groupName}
              onChange={() => commit(option.value)}
              type="radio"
              value={option.value}
            />
            <label className="jk-quick-panther-label" htmlFor={optionId}>
              {option.title}
            </label>
          </React.Fragment>
        );
      })}
      <div aria-hidden="true" className="jk-quick-panther-glider-track">
        <div className="jk-quick-panther-glider" />
      </div>
    </fieldset>
  );
}
