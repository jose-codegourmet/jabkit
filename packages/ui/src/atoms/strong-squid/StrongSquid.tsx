// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { cn } from "@/lib/cn";
import type { StrongSquidProps } from "./StrongSquid.types";

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
        disabled && "cursor-not-allowed opacity-50",
        className,
      )}
      data-size={size}
      data-slot="strong-squid"
    >
      <style href="jk-strong-squid" precedence="default">{`
        .jk-strong-squid {
          --jk-ss-unit: 1rem;
          --jk-ss-track-w: calc(var(--jk-ss-unit) * 5.6);
          --jk-ss-track-h: calc(var(--jk-ss-unit) * 2.5);
          --jk-ss-orb: calc(var(--jk-ss-unit) * 2.1);
          --jk-ss-pad: calc((var(--jk-ss-track-h) - var(--jk-ss-orb)) / 2);
        }
        .jk-strong-squid[data-size="sm"] {
          --jk-ss-unit: 0.75rem;
        }
        .jk-strong-squid-input {
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
        .jk-strong-squid-track {
          position: relative;
          display: block;
          width: var(--jk-ss-track-w);
          height: var(--jk-ss-track-h);
          overflow: hidden;
          border-radius: 999px;
          background: var(--jk-chart-1);
          box-shadow:
            inset 0 calc(var(--jk-ss-unit) * 0.08) calc(var(--jk-ss-unit) * 0.2)
              color-mix(in oklab, var(--jk-foreground) 28%, transparent),
            0 calc(var(--jk-ss-unit) * 0.06) calc(var(--jk-ss-unit) * 0.12)
              color-mix(in oklab, var(--jk-background) 80%, transparent);
        }
        .jk-strong-squid-track::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          box-shadow: inset 0 calc(var(--jk-ss-unit) * 0.05) calc(var(--jk-ss-unit) * 0.18)
            color-mix(in oklab, var(--jk-foreground) 22%, transparent);
          pointer-events: none;
        }
        .jk-strong-squid-clouds,
        .jk-strong-squid-back-clouds {
          position: absolute;
          left: calc(var(--jk-ss-unit) * 0.2);
          bottom: calc(var(--jk-ss-unit) * -0.55);
          width: calc(var(--jk-ss-unit) * 1.2);
          height: calc(var(--jk-ss-unit) * 1.2);
          border-radius: 999px;
          pointer-events: none;
        }
        .jk-strong-squid-clouds {
          background: var(--jk-card);
          box-shadow:
            calc(var(--jk-ss-unit) * 0.95) calc(var(--jk-ss-unit) * 0.28) 0 var(--jk-card),
            calc(var(--jk-ss-unit) * 1.5) calc(var(--jk-ss-unit) * 0.35) 0 var(--jk-card),
            calc(var(--jk-ss-unit) * 2.25) 0 0 var(--jk-card),
            calc(var(--jk-ss-unit) * 2.95) calc(var(--jk-ss-unit) * 0.28) 0 var(--jk-card),
            calc(var(--jk-ss-unit) * 3.7) calc(var(--jk-ss-unit) * -0.08) 0 var(--jk-card),
            calc(var(--jk-ss-unit) * 4.4) calc(var(--jk-ss-unit) * -0.28) 0 var(--jk-card),
            calc(var(--jk-ss-unit) * 4.55) calc(var(--jk-ss-unit) * -1.7) 0
              calc(var(--jk-ss-unit) * 0.42) var(--jk-card);
        }
        .jk-strong-squid-back-clouds {
          background: var(--jk-accent);
          box-shadow:
            calc(var(--jk-ss-unit) * -0.28) calc(var(--jk-ss-unit) * -0.28) 0 var(--jk-accent),
            calc(var(--jk-ss-unit) * 0.55) calc(var(--jk-ss-unit) * -0.1) 0 var(--jk-accent),
            calc(var(--jk-ss-unit) * 1.3) calc(var(--jk-ss-unit) * -0.06) 0 var(--jk-accent),
            calc(var(--jk-ss-unit) * 2.05) calc(var(--jk-ss-unit) * -0.28) 0 var(--jk-accent),
            calc(var(--jk-ss-unit) * 2.7) 0 0 var(--jk-accent),
            calc(var(--jk-ss-unit) * 3.4) calc(var(--jk-ss-unit) * -0.4) 0 var(--jk-accent),
            calc(var(--jk-ss-unit) * 4.05) calc(var(--jk-ss-unit) * -2.05) 0
              calc(var(--jk-ss-unit) * 0.42) var(--jk-accent);
        }
        .jk-strong-squid-stars {
          position: absolute;
          inset: 18% 12% auto auto;
          width: 42%;
          height: 58%;
          opacity: 0;
          pointer-events: none;
        }
        .jk-strong-squid-star {
          position: absolute;
          width: calc(var(--jk-ss-unit) * 0.12);
          height: calc(var(--jk-ss-unit) * 0.12);
          border-radius: 999px;
          background: var(--jk-primary-foreground);
        }
        .jk-strong-squid-star:nth-child(1) { top: 12%; left: 18%; }
        .jk-strong-squid-star:nth-child(2) { top: 38%; left: 62%; width: calc(var(--jk-ss-unit) * 0.18); height: calc(var(--jk-ss-unit) * 0.18); }
        .jk-strong-squid-star:nth-child(3) { top: 8%; left: 72%; }
        .jk-strong-squid-star:nth-child(4) { top: 64%; left: 28%; width: calc(var(--jk-ss-unit) * 0.09); height: calc(var(--jk-ss-unit) * 0.09); }
        .jk-strong-squid-star:nth-child(5) { top: 72%; left: 78%; }
        .jk-strong-squid-halo {
          position: absolute;
          top: 50%;
          left: var(--jk-ss-pad);
          display: grid;
          place-items: center;
          width: var(--jk-ss-orb);
          height: var(--jk-ss-orb);
          transform: translateY(-50%);
          pointer-events: none;
        }
        .jk-strong-squid-halo::before {
          content: "";
          position: absolute;
          inset: calc(var(--jk-ss-unit) * -0.55);
          border-radius: 999px;
          box-shadow:
            0 0 0 calc(var(--jk-ss-unit) * 0.55)
              color-mix(in oklab, var(--jk-card) 18%, transparent),
            0 0 0 calc(var(--jk-ss-unit) * 1.1)
              color-mix(in oklab, var(--jk-card) 12%, transparent);
        }
        .jk-strong-squid-orb {
          position: relative;
          z-index: 1;
          width: var(--jk-ss-orb);
          height: var(--jk-ss-orb);
          overflow: hidden;
          border-radius: 999px;
          background: var(--jk-warning);
          box-shadow:
            inset calc(var(--jk-ss-unit) * 0.06) calc(var(--jk-ss-unit) * 0.06)
              calc(var(--jk-ss-unit) * 0.08)
              color-mix(in oklab, var(--jk-card) 55%, transparent),
            inset 0 calc(var(--jk-ss-unit) * -0.06) calc(var(--jk-ss-unit) * 0.08)
              color-mix(in oklab, var(--jk-warning-foreground) 28%, transparent),
            0 calc(var(--jk-ss-unit) * 0.08) calc(var(--jk-ss-unit) * 0.16)
              color-mix(in oklab, var(--jk-foreground) 22%, transparent);
        }
        .jk-strong-squid-moon {
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: var(--jk-muted);
          transform: translateX(100%);
          box-shadow:
            inset calc(var(--jk-ss-unit) * 0.06) calc(var(--jk-ss-unit) * 0.06)
              calc(var(--jk-ss-unit) * 0.08)
              color-mix(in oklab, var(--jk-card) 40%, transparent),
            inset 0 calc(var(--jk-ss-unit) * -0.06) calc(var(--jk-ss-unit) * 0.08)
              color-mix(in oklab, var(--jk-muted-foreground) 35%, transparent);
        }
        .jk-strong-squid-crater {
          position: absolute;
          border-radius: 999px;
          background: var(--jk-muted-foreground);
          box-shadow: inset 0 calc(var(--jk-ss-unit) * 0.03) calc(var(--jk-ss-unit) * 0.06)
            color-mix(in oklab, var(--jk-foreground) 25%, transparent);
        }
        .jk-strong-squid-crater:nth-child(1) {
          top: 36%;
          left: 18%;
          width: 36%;
          height: 36%;
        }
        .jk-strong-squid-crater:nth-child(2) {
          top: 46%;
          left: 62%;
          width: 18%;
          height: 18%;
        }
        .jk-strong-squid-crater:nth-child(3) {
          top: 16%;
          left: 40%;
          width: 14%;
          height: 14%;
        }
        .jk-strong-squid-input:checked + .jk-strong-squid-track {
          background: var(--jk-foreground);
        }
        .jk-strong-squid-input:checked + .jk-strong-squid-track .jk-strong-squid-halo {
          left: calc(100% - var(--jk-ss-orb) - var(--jk-ss-pad));
        }
        .jk-strong-squid-input:checked + .jk-strong-squid-track .jk-strong-squid-moon {
          transform: translateX(0);
        }
        .jk-strong-squid-input:checked + .jk-strong-squid-track .jk-strong-squid-clouds,
        .jk-strong-squid-input:checked + .jk-strong-squid-track .jk-strong-squid-back-clouds {
          transform: translateY(calc(var(--jk-ss-unit) * 3.4));
        }
        .jk-strong-squid-input:checked + .jk-strong-squid-track .jk-strong-squid-stars {
          opacity: 1;
        }
        .jk-strong-squid-input:focus-visible + .jk-strong-squid-track {
          outline: 2px solid var(--jk-ring);
          outline-offset: 3px;
        }
        @media (prefers-reduced-motion: no-preference) {
          .jk-strong-squid-track,
          .jk-strong-squid-clouds,
          .jk-strong-squid-back-clouds,
          .jk-strong-squid-stars,
          .jk-strong-squid-orb,
          .jk-strong-squid-moon {
            transition:
              background-color 0.5s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.5s cubic-bezier(0.16, 1, 0.3, 1.2),
              opacity 0.45s ease,
              left 0.35s cubic-bezier(0.16, 1, 0.3, 1.15);
          }
          .jk-strong-squid:hover .jk-strong-squid-input:not(:checked) + .jk-strong-squid-track .jk-strong-squid-halo {
            left: calc(var(--jk-ss-pad) + 0.18rem);
          }
          .jk-strong-squid:hover .jk-strong-squid-input:checked + .jk-strong-squid-track .jk-strong-squid-halo {
            left: calc(100% - var(--jk-ss-orb) - var(--jk-ss-pad) - 0.18rem);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-strong-squid-track,
          .jk-strong-squid-clouds,
          .jk-strong-squid-back-clouds,
          .jk-strong-squid-stars,
          .jk-strong-squid-orb,
          .jk-strong-squid-moon,
          .jk-strong-squid-halo {
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
      />
      <span aria-hidden="true" className="jk-strong-squid-track">
        <span className="jk-strong-squid-back-clouds" />
        <span className="jk-strong-squid-clouds" />
        <span className="jk-strong-squid-stars">
          <span className="jk-strong-squid-star" />
          <span className="jk-strong-squid-star" />
          <span className="jk-strong-squid-star" />
          <span className="jk-strong-squid-star" />
          <span className="jk-strong-squid-star" />
        </span>
        <span className="jk-strong-squid-halo">
          <span className="jk-strong-squid-orb">
            <span className="jk-strong-squid-moon">
              <span className="jk-strong-squid-crater" />
              <span className="jk-strong-squid-crater" />
              <span className="jk-strong-squid-crater" />
            </span>
          </span>
        </span>
      </span>
      <span className="sr-only">{label}</span>
    </label>
  );
}
