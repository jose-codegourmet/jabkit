// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { cn } from "@/lib/cn";
import type { CurvyEarwigProps } from "./CurvyEarwig.types";

const searchPath =
  "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z";

export function CurvyEarwig({
  className,
  size = "md",
  expanded = false,
  animate = true,
  label = "Search",
  toggleLabel = "Toggle search field",
  disabled,
  type = "text",
  id,
  ...props
}: CurvyEarwigProps) {
  const reactId = React.useId();
  const toggleId = `${reactId}-toggle`;
  const fieldId = id ?? `${reactId}-field`;

  return (
    <div
      className={cn("jk-curvy-earwig", className)}
      data-animate={animate ? "true" : "false"}
      data-size={size}
      data-slot="curvy-earwig"
    >
      <style href="jk-curvy-earwig" precedence="default">{`
        .jk-curvy-earwig {
          position: relative;
          box-sizing: border-box;
          width: fit-content;
          color: var(--jk-background);
        }
        .jk-curvy-earwig *,
        .jk-curvy-earwig *::before,
        .jk-curvy-earwig *::after {
          box-sizing: border-box;
        }
        .jk-curvy-earwig-toggle {
          position: absolute;
          z-index: 9;
          width: 30px;
          height: 30px;
          margin: 0;
          appearance: none;
          cursor: pointer;
          border: none;
          background: transparent;
          right: 17px;
          top: 10px;
        }
        .jk-curvy-earwig[data-size="sm"] .jk-curvy-earwig-toggle {
          width: 24px;
          height: 24px;
          right: 13px;
          top: 8px;
        }
        .jk-curvy-earwig[data-size="lg"] .jk-curvy-earwig-toggle {
          width: 36px;
          height: 36px;
          right: 20px;
          top: 12px;
        }
        .jk-curvy-earwig-toggle:focus,
        .jk-curvy-earwig-toggle:focus-visible {
          border: none;
          outline: none;
        }
        .jk-curvy-earwig-toggle:disabled {
          cursor: not-allowed;
        }
        .jk-curvy-earwig-shell {
          position: relative;
          display: flex;
          flex-direction: row-reverse;
          align-items: center;
          justify-content: center;
          width: 230px;
          height: 50px;
          border: none;
          border-radius: 160px;
          background: var(--jk-foreground);
        }
        .jk-curvy-earwig[data-size="sm"] .jk-curvy-earwig-shell {
          width: 184px;
          height: 40px;
        }
        .jk-curvy-earwig[data-size="lg"] .jk-curvy-earwig-shell {
          width: 276px;
          height: 60px;
        }
        .jk-curvy-earwig-toggle:checked {
          right: 10px;
        }
        .jk-curvy-earwig[data-size="sm"] .jk-curvy-earwig-toggle:checked {
          right: 8px;
        }
        .jk-curvy-earwig[data-size="lg"] .jk-curvy-earwig-toggle:checked {
          right: 12px;
        }
        .jk-curvy-earwig-toggle:checked ~ .jk-curvy-earwig-shell {
          width: 50px;
        }
        .jk-curvy-earwig[data-size="sm"] .jk-curvy-earwig-toggle:checked ~ .jk-curvy-earwig-shell {
          width: 40px;
        }
        .jk-curvy-earwig[data-size="lg"] .jk-curvy-earwig-toggle:checked ~ .jk-curvy-earwig-shell {
          width: 60px;
        }
        .jk-curvy-earwig-toggle:checked ~ .jk-curvy-earwig-shell .jk-curvy-earwig-field {
          width: 0;
          height: 0;
          padding: 0;
        }
        .jk-curvy-earwig-icon {
          width: fit-content;
          padding-top: 5px;
          color: var(--jk-background);
        }
        .jk-curvy-earwig-toggle:checked ~ .jk-curvy-earwig-shell .jk-curvy-earwig-icon {
          padding-right: 8px;
        }
        .jk-curvy-earwig[data-size="sm"] .jk-curvy-earwig-toggle:checked ~ .jk-curvy-earwig-shell .jk-curvy-earwig-icon {
          padding-right: 6px;
        }
        .jk-curvy-earwig[data-size="lg"] .jk-curvy-earwig-toggle:checked ~ .jk-curvy-earwig-shell .jk-curvy-earwig-icon {
          padding-right: 10px;
        }
        .jk-curvy-earwig-glyph {
          display: block;
          width: 1.3em;
          height: 1.3em;
          fill: currentColor;
        }
        .jk-curvy-earwig-field {
          width: 170px;
          height: 100%;
          padding-bottom: 4px;
          padding-left: 10px;
          border: none;
          outline: none;
          background: transparent;
          color: var(--jk-background);
          font-family: var(--jk-font-body);
          font-size: 1.2em;
        }
        .jk-curvy-earwig[data-size="sm"] .jk-curvy-earwig-field {
          width: 136px;
          font-size: 1em;
        }
        .jk-curvy-earwig[data-size="lg"] .jk-curvy-earwig-field {
          width: 204px;
          font-size: 1.3em;
        }
        .jk-curvy-earwig-field::placeholder {
          color: color-mix(in oklab, var(--jk-background) 78%, transparent);
        }
        .jk-curvy-earwig-field:disabled {
          cursor: not-allowed;
        }
        .jk-curvy-earwig:focus-within .jk-curvy-earwig-shell {
          box-shadow:
            0 0 0 2px var(--jk-background),
            0 0 0 4px var(--jk-ring);
        }
        @media (prefers-reduced-motion: no-preference) {
          .jk-curvy-earwig[data-animate="true"] .jk-curvy-earwig-shell,
          .jk-curvy-earwig[data-animate="true"] .jk-curvy-earwig-field,
          .jk-curvy-earwig[data-animate="true"] .jk-curvy-earwig-icon,
          .jk-curvy-earwig[data-animate="true"] .jk-curvy-earwig-toggle {
            transition: all 0.3s ease;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-curvy-earwig-shell,
          .jk-curvy-earwig-field,
          .jk-curvy-earwig-icon,
          .jk-curvy-earwig-toggle {
            transition: none;
          }
        }
      `}</style>
      <input
        aria-controls={fieldId}
        aria-label={toggleLabel}
        className="jk-curvy-earwig-toggle"
        defaultChecked={!expanded}
        disabled={disabled}
        id={toggleId}
        type="checkbox"
      />
      <div className="jk-curvy-earwig-shell">
        <div aria-hidden="true" className="jk-curvy-earwig-icon">
          <svg
            className="jk-curvy-earwig-glyph"
            height="1em"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d={searchPath} />
          </svg>
        </div>
        <input
          {...props}
          aria-label={label}
          className="jk-curvy-earwig-field"
          disabled={disabled}
          id={fieldId}
          type={type}
        />
      </div>
    </div>
  );
}
