// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { cn } from "@/lib/cn";
import type { TinyFishProps } from "./TinyFish.types";

const sizes = {
  sm: "jk-tiny-fish-sm",
  md: "jk-tiny-fish-md",
  lg: "jk-tiny-fish-lg",
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
  name,
  htmlFor,
  ...props
}: TinyFishProps) {
  const caption = children ?? label;

  return (
    <label
      className={cn(
        "jk-tiny-fish-root",
        sizes[size],
        disabled && "pointer-events-none opacity-50",
        className,
      )}
      data-animate={animate ? "true" : "false"}
      data-size={size}
      data-slot="tiny-fish"
      htmlFor={htmlFor}
      {...props}
    >
      <style href="jk-tiny-fish" precedence="default">{`
        .jk-tiny-fish-root {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--jk-foreground);
          font-family: var(--jk-font-label);
          font-size: 0.875rem;
          line-height: 1.25;
          cursor: pointer;
        }
        .jk-tiny-fish {
          --jk-tiny-fish-focus: var(--jk-primary);
          --jk-tiny-fish-ink: var(--jk-foreground);
          --jk-tiny-fish-face: var(--jk-card);
          position: relative;
          display: flex;
          flex-shrink: 0;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 20px;
          margin: 0 4px 4px 0;
          gap: 30px;
        }
        .jk-tiny-fish-sm .jk-tiny-fish {
          transform: scale(0.8);
          transform-origin: left center;
        }
        .jk-tiny-fish-lg .jk-tiny-fish {
          transform: scale(1.25);
          transform-origin: left center;
        }
        .jk-tiny-fish-toggle {
          width: 0;
          height: 0;
          margin: 0;
          opacity: 0;
        }
        .jk-tiny-fish-slider {
          position: absolute;
          inset: 0;
          box-sizing: border-box;
          cursor: pointer;
          border: 2px solid var(--jk-tiny-fish-ink);
          border-radius: 5px;
          background-color: var(--jk-tiny-fish-face);
          box-shadow: 4px 4px var(--jk-tiny-fish-ink);
        }
        .jk-tiny-fish-slider::before {
          content: "";
          position: absolute;
          box-sizing: border-box;
          left: -2px;
          bottom: 2px;
          width: 20px;
          height: 20px;
          border: 2px solid var(--jk-tiny-fish-ink);
          border-radius: 5px;
          background-color: var(--jk-tiny-fish-face);
          box-shadow: 0 3px 0 var(--jk-tiny-fish-ink);
        }
        .jk-tiny-fish-toggle:checked + .jk-tiny-fish-slider {
          background-color: var(--jk-tiny-fish-focus);
        }
        .jk-tiny-fish-toggle:checked + .jk-tiny-fish-slider::before {
          transform: translateX(30px);
        }
        .jk-tiny-fish-toggle:focus-visible + .jk-tiny-fish-slider {
          outline: 2px solid var(--jk-ring);
          outline-offset: 4px;
        }
        .jk-tiny-fish-card-side {
          display: none;
        }
        .jk-tiny-fish-caption {
          min-width: 0;
        }
        @media (prefers-reduced-motion: no-preference) {
          .jk-tiny-fish-root[data-animate="true"] .jk-tiny-fish-slider,
          .jk-tiny-fish-root[data-animate="true"] .jk-tiny-fish-slider::before {
            transition: 0.3s;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-tiny-fish-slider,
          .jk-tiny-fish-slider::before {
            transition: none;
          }
        }
      `}</style>
      <span className="jk-tiny-fish">
        <input
          aria-label={caption ? undefined : "Toggle"}
          checked={checked}
          className="jk-tiny-fish-toggle"
          defaultChecked={checked === undefined ? defaultChecked : undefined}
          disabled={disabled}
          name={name}
          onChange={(event) => onCheckedChange?.(event.target.checked)}
          type="checkbox"
        />
        <span aria-hidden="true" className="jk-tiny-fish-slider" />
        <span aria-hidden="true" className="jk-tiny-fish-card-side" />
      </span>
      {caption ? <span className="jk-tiny-fish-caption">{caption}</span> : null}
    </label>
  );
}
