// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { cn } from "@/lib/cn";
import type { StrongSquidProps } from "./StrongSquid.types";

const sizes = {
  sm: "jk-strong-squid-sm",
  md: "jk-strong-squid-md",
} as const;

export function StrongSquid({
  className,
  size = "md",
  label = "Toggle night mode",
  disabled,
  ...props
}: StrongSquidProps) {
  return (
    <label
      className={cn(
        "jk-strong-squid relative inline-block cursor-pointer select-none",
        sizes[size],
        disabled && "cursor-not-allowed opacity-50",
        className,
      )}
      data-size={size}
      data-slot="strong-squid"
    >
      <style href="jk-strong-squid" precedence="default">{`
        .jk-strong-squid {
          --jk-ss-size: 30px;
          --jk-ss-width: 5.625em;
          --jk-ss-height: 2.5em;
          --jk-ss-radius: 6.25em;
          --jk-ss-halo-size: 3.375em;
          --jk-ss-orb: 2.125em;
          --jk-ss-offset: calc(
            (var(--jk-ss-halo-size) - var(--jk-ss-height)) / 2 * -1
          );
          --jk-ss-day: var(--jk-chart-1);
          --jk-ss-night: var(--jk-foreground);
          --jk-ss-sun: var(--jk-warning);
          --jk-ss-moon: color-mix(
            in oklab,
            var(--jk-muted-foreground) 28%,
            var(--jk-card)
          );
          --jk-ss-spot: var(--jk-muted-foreground);
          --jk-ss-stars: var(--jk-card);
          --jk-ss-clouds: var(--jk-card);
          --jk-ss-back-clouds: var(--jk-accent);
          --jk-ss-halo: color-mix(in oklab, var(--jk-card) 10%, transparent);
          --jk-ss-highlight: color-mix(in oklab, var(--jk-card) 61%, transparent);
          --jk-ss-sun-shade: color-mix(
            in oklab,
            var(--jk-warning-foreground) 45%,
            var(--jk-warning)
          );
          --jk-ss-moon-shade: var(--jk-muted-foreground);
          --jk-ss-shade: color-mix(in oklab, var(--jk-foreground) 25%, transparent);
          --jk-ss-rim: color-mix(in oklab, var(--jk-card) 94%, transparent);
          --jk-ss-move: 0.5s cubic-bezier(0, -0.02, 0.4, 1.25);
          --jk-ss-slide: 0.3s cubic-bezier(0, -0.02, 0.35, 1.17);
        }
        .jk-strong-squid-sm {
          --jk-ss-size: 22.5px;
        }
        .jk-strong-squid-md {
          --jk-ss-size: 30px;
        }
        .dark .jk-strong-squid {
          --jk-ss-night: var(--jk-background);
          --jk-ss-moon: color-mix(
            in oklab,
            var(--jk-muted-foreground) 42%,
            var(--jk-secondary)
          );
          --jk-ss-stars: var(--jk-foreground);
          --jk-ss-clouds: var(--jk-foreground);
          --jk-ss-back-clouds: color-mix(
            in oklab,
            var(--jk-accent) 70%,
            var(--jk-chart-1)
          );
          --jk-ss-halo: color-mix(in oklab, var(--jk-foreground) 10%, transparent);
          --jk-ss-highlight: color-mix(
            in oklab,
            var(--jk-foreground) 61%,
            transparent
          );
          --jk-ss-rim: color-mix(in oklab, var(--jk-foreground) 28%, transparent);
        }
        .jk-strong-squid,
        .jk-strong-squid *,
        .jk-strong-squid *::before,
        .jk-strong-squid *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          font-size: var(--jk-ss-size);
        }
        .jk-strong-squid-input {
          position: absolute;
          width: 1px;
          height: 1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
        .jk-strong-squid-track {
          position: relative;
          display: block;
          width: var(--jk-ss-width);
          height: var(--jk-ss-height);
          overflow: hidden;
          border-radius: var(--jk-ss-radius);
          background: var(--jk-ss-day);
          box-shadow:
            0em -0.062em 0.062em var(--jk-ss-shade),
            0em 0.062em 0.125em var(--jk-ss-rim);
          cursor: pointer;
        }
        .jk-strong-squid-track::before {
          content: "";
          position: absolute;
          z-index: 1;
          inset: 0;
          border-radius: var(--jk-ss-radius);
          box-shadow:
            0em 0.05em 0.187em var(--jk-ss-shade) inset,
            0em 0.05em 0.187em var(--jk-ss-shade) inset;
          pointer-events: none;
        }
        .jk-strong-squid-clouds {
          position: absolute;
          bottom: -0.625em;
          left: 0.312em;
          width: 1.25em;
          height: 1.25em;
          border-radius: var(--jk-ss-radius);
          background: var(--jk-ss-clouds);
          box-shadow:
            0.937em 0.312em var(--jk-ss-clouds),
            -0.312em -0.312em var(--jk-ss-back-clouds),
            1.437em 0.375em var(--jk-ss-clouds),
            0.5em -0.125em var(--jk-ss-back-clouds),
            2.187em 0 var(--jk-ss-clouds),
            1.25em -0.062em var(--jk-ss-back-clouds),
            2.937em 0.312em var(--jk-ss-clouds),
            2em -0.312em var(--jk-ss-back-clouds),
            3.625em -0.062em var(--jk-ss-clouds),
            2.625em 0em var(--jk-ss-back-clouds),
            4.5em -0.312em var(--jk-ss-clouds),
            3.375em -0.437em var(--jk-ss-back-clouds),
            4.625em -1.75em 0 0.437em var(--jk-ss-clouds),
            4em -0.625em var(--jk-ss-back-clouds),
            4.125em -2.125em 0 0.437em var(--jk-ss-back-clouds);
          pointer-events: none;
        }
        .jk-strong-squid-stars {
          position: absolute;
          top: -100%;
          left: 0.312em;
          width: 2.75em;
          height: auto;
          color: var(--jk-ss-stars);
          pointer-events: none;
        }
        .jk-strong-squid-stars svg {
          display: block;
          width: 100%;
          height: auto;
        }
        .jk-strong-squid-halo {
          position: absolute;
          top: var(--jk-ss-offset);
          left: var(--jk-ss-offset);
          display: flex;
          width: var(--jk-ss-halo-size);
          height: var(--jk-ss-halo-size);
          border-radius: var(--jk-ss-radius);
          background: var(--jk-ss-halo);
          box-shadow:
            inset 0 0 0 3.375em var(--jk-ss-halo),
            inset 0 0 0 3.375em var(--jk-ss-halo),
            0 0 0 0.625em var(--jk-ss-halo),
            0 0 0 1.25em var(--jk-ss-halo);
          pointer-events: none;
        }
        .jk-strong-squid-orb {
          position: relative;
          z-index: 2;
          width: var(--jk-ss-orb);
          height: var(--jk-ss-orb);
          margin: auto;
          overflow: hidden;
          border-radius: var(--jk-ss-radius);
          background: var(--jk-ss-sun);
          box-shadow:
            0.062em 0.062em 0.062em 0em var(--jk-ss-highlight) inset,
            0em -0.062em 0.062em 0em var(--jk-ss-sun-shade) inset;
          filter:
            drop-shadow(0.062em 0.125em 0.125em var(--jk-ss-shade))
            drop-shadow(0em 0.062em 0.125em var(--jk-ss-shade));
          pointer-events: auto;
        }
        .jk-strong-squid-moon {
          position: relative;
          display: block;
          width: 100%;
          height: 100%;
          border-radius: inherit;
          background: var(--jk-ss-moon);
          transform: translateX(100%);
          box-shadow:
            0.062em 0.062em 0.062em 0em var(--jk-ss-highlight) inset,
            0em -0.062em 0.062em 0em var(--jk-ss-moon-shade) inset;
        }
        .jk-strong-squid-spot {
          position: absolute;
          top: 0.75em;
          left: 0.312em;
          width: 0.75em;
          height: 0.75em;
          border-radius: var(--jk-ss-radius);
          background: var(--jk-ss-spot);
          box-shadow: 0em 0.0312em 0.062em var(--jk-ss-shade) inset;
        }
        .jk-strong-squid-spot:nth-of-type(2) {
          top: 0.937em;
          left: 1.375em;
          width: 0.375em;
          height: 0.375em;
        }
        .jk-strong-squid-spot:nth-last-of-type(3) {
          top: 0.312em;
          left: 0.812em;
          width: 0.25em;
          height: 0.25em;
        }
        .jk-strong-squid-input:checked + .jk-strong-squid-track {
          background: var(--jk-ss-night);
        }
        .jk-strong-squid-input:checked + .jk-strong-squid-track .jk-strong-squid-halo {
          left: calc(100% - var(--jk-ss-offset) - var(--jk-ss-halo-size));
        }
        .jk-strong-squid-input:checked + .jk-strong-squid-track .jk-strong-squid-moon {
          transform: translate(0);
        }
        .jk-strong-squid-input:checked + .jk-strong-squid-track .jk-strong-squid-clouds {
          bottom: -4.062em;
        }
        .jk-strong-squid-input:checked + .jk-strong-squid-track .jk-strong-squid-stars {
          top: 50%;
          transform: translateY(-50%);
        }
        .jk-strong-squid-input:focus-visible + .jk-strong-squid-track {
          outline: 2px solid var(--jk-ring);
          outline-offset: 0.15em;
        }
        .jk-strong-squid:has(.jk-strong-squid-input:disabled) {
          pointer-events: none;
        }
        @media (prefers-reduced-motion: no-preference) {
          .jk-strong-squid-track,
          .jk-strong-squid-clouds,
          .jk-strong-squid-stars,
          .jk-strong-squid-orb,
          .jk-strong-squid-moon {
            transition: var(--jk-ss-move);
          }
          .jk-strong-squid-halo {
            transition: var(--jk-ss-slide);
          }
          .jk-strong-squid:hover
            .jk-strong-squid-input:not(:checked)
            + .jk-strong-squid-track
            .jk-strong-squid-halo {
            left: calc(var(--jk-ss-offset) + 0.187em);
          }
          .jk-strong-squid:hover
            .jk-strong-squid-input:checked
            + .jk-strong-squid-track
            .jk-strong-squid-halo {
            left: calc(
              100% - var(--jk-ss-offset) - var(--jk-ss-halo-size) - 0.187em
            );
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-strong-squid-track,
          .jk-strong-squid-clouds,
          .jk-strong-squid-stars,
          .jk-strong-squid-halo,
          .jk-strong-squid-orb,
          .jk-strong-squid-moon {
            transition: none;
          }
        }
      `}</style>
      <input
        className="jk-strong-squid-input"
        disabled={disabled}
        role="switch"
        type="checkbox"
        {...props}
        aria-checked={props.checked ?? props.defaultChecked ?? false}
      />
      <span aria-hidden="true" className="jk-strong-squid-track">
        <span className="jk-strong-squid-clouds" />
        <span className="jk-strong-squid-stars">
          <svg
            aria-hidden="true"
            fill="none"
            viewBox="0 0 144 55"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M135.831 3.00688C135.055 3.85027 134.111 4.29946 133 4.35447C134.111 4.40947 135.055 4.85867 135.831 5.71123C136.607 6.55462 136.996 7.56303 136.996 8.72727C136.996 7.95722 137.172 7.25134 137.525 6.59129C137.886 5.93124 138.372 5.39954 138.98 5.00535C139.598 4.60199 140.268 4.39114 141 4.35447C139.88 4.2903 138.936 3.85027 138.16 3.00688C137.384 2.16348 136.996 1.16425 136.996 0C136.996 1.16425 136.607 2.16348 135.831 3.00688ZM31 23.3545C32.1114 23.2995 33.0551 22.8503 33.8313 22.0069C34.6075 21.1635 34.9956 20.1642 34.9956 19C34.9956 20.1642 35.3837 21.1635 36.1599 22.0069C36.9361 22.8503 37.8798 23.2903 39 23.3545C38.2679 23.3911 37.5976 23.602 36.9802 24.0053C36.3716 24.3995 35.8864 24.9312 35.5248 25.5913C35.172 26.2513 34.9956 26.9572 34.9956 27.7273C34.9956 26.563 34.6075 25.5546 33.8313 24.7112C33.0551 23.8587 32.1114 23.4095 31 23.3545ZM0 36.3545C1.11136 36.2995 2.05513 35.8503 2.83131 35.0069C3.6075 34.1635 3.99559 33.1642 3.99559 32C3.99559 33.1642 4.38368 34.1635 5.15987 35.0069C5.93605 35.8503 6.87982 36.2903 8 36.3545C7.26792 36.3911 6.59757 36.602 5.98015 37.0053C5.37155 37.3995 4.88644 37.9312 4.52481 38.5913C4.172 39.2513 3.99559 39.9572 3.99559 40.7273C3.99559 39.563 3.6075 38.5546 2.83131 37.7112C2.05513 36.8587 1.11136 36.4095 0 36.3545ZM56.8313 24.0069C56.0551 24.8503 55.1114 25.2995 54 25.3545C55.1114 25.4095 56.0551 25.8587 56.8313 26.7112C57.6075 27.5546 57.9956 28.563 57.9956 29.7273C57.9956 28.9572 58.172 28.2513 58.5248 27.5913C58.8864 26.9312 59.3716 26.3995 59.9802 26.0053C60.5976 25.602 61.2679 25.3911 62 25.3545C60.8798 25.2903 59.9361 24.8503 59.1599 24.0069C58.3837 23.1635 57.9956 22.1642 57.9956 21C57.9956 22.1642 57.6075 23.1635 56.8313 24.0069ZM81 25.3545C82.1114 25.2995 83.0551 24.8503 83.8313 24.0069C84.6075 23.1635 84.9956 22.1642 84.9956 21C84.9956 22.1642 85.3837 23.1635 86.1599 24.0069C86.9361 24.8503 87.8798 25.2903 89 25.3545C88.2679 25.3911 87.5976 25.602 86.9802 26.0053C86.3716 26.3995 85.8864 26.9312 85.5248 27.5913C85.172 28.2513 84.9956 28.9572 84.9956 29.7273C84.9956 28.563 84.6075 27.5546 83.8313 26.7112C83.0551 25.8587 82.1114 25.4095 81 25.3545ZM136 36.3545C137.111 36.2995 138.055 35.8503 138.831 35.0069C139.607 34.1635 139.996 33.1642 139.996 32C139.996 33.1642 140.384 34.1635 141.16 35.0069C141.936 35.8503 142.88 36.2903 144 36.3545C143.268 36.3911 142.598 36.602 141.98 37.0053C141.372 37.3995 140.886 37.9312 140.525 38.5913C140.172 39.2513 139.996 39.9572 139.996 40.7273C139.996 39.563 139.607 38.5546 138.831 37.7112C138.055 36.8587 137.111 36.4095 136 36.3545ZM101.831 49.0069C101.055 49.8503 100.111 50.2995 99 50.3545C100.111 50.4095 101.055 50.8587 101.831 51.7112C102.607 52.5546 102.996 53.563 102.996 54.7273C102.996 53.9572 103.172 53.2513 103.525 52.5913C103.886 51.9312 104.372 51.3995 104.98 51.0053C105.598 50.602 106.268 50.3911 107 50.3545C105.88 50.2903 104.936 49.8503 104.16 49.0069C103.384 48.1635 102.996 47.1642 102.996 46C102.996 47.1642 102.607 48.1635 101.831 49.0069Z"
              fill="currentColor"
              fillRule="evenodd"
            />
          </svg>
        </span>
        <span className="jk-strong-squid-halo">
          <span className="jk-strong-squid-orb">
            <span className="jk-strong-squid-moon">
              <span className="jk-strong-squid-spot" />
              <span className="jk-strong-squid-spot" />
              <span className="jk-strong-squid-spot" />
            </span>
          </span>
        </span>
      </span>
      <span className="sr-only">{label}</span>
    </label>
  );
}
