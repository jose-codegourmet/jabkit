// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { cn } from "@/lib/cn";
import type { HorribleShrimpProps } from "./HorribleShrimp.types";

export function HorribleShrimp({
  className,
  label,
  size = "md",
  disabled,
  id,
  ...props
}: HorribleShrimpProps) {
  const generatedId = React.useId();
  const inputId = id ?? generatedId;

  return (
    <span
      className={cn("jk-horrible-shrimp", className)}
      data-disabled={disabled ? "true" : "false"}
      data-size={size}
      data-slot="horrible-shrimp"
    >
      <style href="jk-horrible-shrimp" precedence="default">{`
        .jk-horrible-shrimp {
          --jk-hs-width: 2em;
          --jk-hs-height: 1em;
          --jk-hs-thumb: var(--jk-secondary);
          --jk-hs-track: var(--jk-secondary);
          --jk-hs-track-on: var(--jk-muted-foreground);
          --jk-hs-outline: var(--jk-foreground);
          display: inline-flex;
          align-items: center;
          gap: 0.75em;
          font-size: 17px;
          color: var(--jk-foreground);
          font-family: var(--jk-font-label);
        }
        .jk-horrible-shrimp[data-size="sm"] {
          font-size: 13px;
        }
        .jk-horrible-shrimp[data-size="lg"] {
          font-size: 21px;
        }
        .jk-horrible-shrimp-switch {
          position: relative;
          display: inline-block;
          width: var(--jk-hs-width);
          height: var(--jk-hs-height);
          flex-shrink: 0;
        }
        .jk-horrible-shrimp-input {
          position: absolute;
          inset: 0;
          z-index: 1;
          width: 100%;
          height: 100%;
          margin: 0;
          opacity: 0;
          cursor: pointer;
        }
        .jk-horrible-shrimp-input:disabled {
          cursor: not-allowed;
        }
        .jk-horrible-shrimp-slider {
          box-sizing: border-box;
          border: 2px solid var(--jk-hs-outline);
          position: absolute;
          cursor: pointer;
          inset: 0;
          background-color: var(--jk-hs-track);
          border-radius: var(--jk-hs-height);
        }
        .jk-horrible-shrimp-slider::before {
          box-sizing: border-box;
          position: absolute;
          content: "";
          height: var(--jk-hs-height);
          width: var(--jk-hs-height);
          border: 2px solid var(--jk-hs-outline);
          border-radius: 100%;
          left: -2px;
          bottom: -2px;
          background-color: var(--jk-hs-thumb);
          transform: translateY(-0.2em);
          box-shadow: 0 0.2em 0 var(--jk-hs-outline);
        }
        .jk-horrible-shrimp-input:checked + .jk-horrible-shrimp-slider {
          background-color: var(--jk-hs-track-on);
        }
        .jk-horrible-shrimp-input:focus-visible + .jk-horrible-shrimp-slider {
          box-shadow: 0 0 0 2px var(--jk-hs-track-on);
        }
        .jk-horrible-shrimp-input:hover:not(:disabled) + .jk-horrible-shrimp-slider::before {
          transform: translateY(-0.3em);
          box-shadow: 0 0.3em 0 var(--jk-hs-outline);
        }
        .jk-horrible-shrimp-input:checked + .jk-horrible-shrimp-slider::before {
          transform: translateX(calc(var(--jk-hs-width) - var(--jk-hs-height)))
            translateY(-0.2em);
        }
        .jk-horrible-shrimp-input:hover:checked:not(:disabled) + .jk-horrible-shrimp-slider::before {
          transform: translateX(calc(var(--jk-hs-width) - var(--jk-hs-height)))
            translateY(-0.3em);
          box-shadow: 0 0.3em 0 var(--jk-hs-outline);
        }
        .jk-horrible-shrimp-caption {
          font-size: 0.85em;
          font-weight: 500;
          line-height: 1;
          cursor: pointer;
        }
        .jk-horrible-shrimp[data-disabled="true"] {
          opacity: 0.5;
        }
        .jk-horrible-shrimp[data-disabled="true"] .jk-horrible-shrimp-caption,
        .jk-horrible-shrimp[data-disabled="true"] .jk-horrible-shrimp-slider {
          cursor: not-allowed;
        }
        @media (prefers-reduced-motion: no-preference) {
          .jk-horrible-shrimp-slider,
          .jk-horrible-shrimp-slider::before {
            transition: 0.15s;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-horrible-shrimp-slider,
          .jk-horrible-shrimp-slider::before {
            transition: none;
          }
        }
      `}</style>
      <label className="jk-horrible-shrimp-switch" htmlFor={inputId}>
        <input
          aria-label={label ? undefined : "Toggle"}
          className="jk-horrible-shrimp-input"
          disabled={disabled}
          id={inputId}
          role="switch"
          type="checkbox"
          {...props}
        />
        <span aria-hidden="true" className="jk-horrible-shrimp-slider" />
      </label>
      {label ? (
        <label className="jk-horrible-shrimp-caption" htmlFor={inputId}>
          {label}
        </label>
      ) : null}
    </span>
  );
}
