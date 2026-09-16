"use client";

// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { cn } from "@/lib/cn";
import type { AverageSwanProps } from "./AverageSwan.types";

export function AverageSwan({
  className,
  size = "md",
  caption = "Teenage Engineering [EP-133 K.O. II] - Buttons",
  minusLabel = "Minus",
  plusLabel = "Plus",
  recordLabel = "RECORD",
  playLabel = "PLAY",
  onMinus,
  onPlus,
  onRecord,
  onPlay,
  disabled,
  ...props
}: AverageSwanProps) {
  return (
    <fieldset
      aria-label="Sampler pad"
      className={cn("jk-average-swan", className)}
      data-size={size}
      data-slot="average-swan"
      {...props}
    >
      <style href="jk-average-swan" precedence="default">{`
        .jk-average-swan {
          min-inline-size: 0;
          margin: 0;
          padding: 0;
          border: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          row-gap: 1.25em;
          font-family: var(--jk-font-label);
          font-size: 1rem;
          color: var(--jk-foreground);
        }
        .jk-average-swan[data-size="sm"] {
          font-size: 0.75rem;
        }
        .jk-average-swan[data-size="lg"] {
          font-size: 1.25rem;
        }
        .jk-average-swan-grid {
          display: flex;
          flex-direction: column;
          row-gap: 1.5em;
        }
        .jk-average-swan-row {
          display: flex;
          column-gap: 1.5em;
        }
        .jk-average-swan-well {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 5em;
          height: 5em;
          border-radius: 5px;
          background: color-mix(in oklab, var(--jk-foreground) 92%, var(--jk-background));
        }
        .jk-average-swan-key {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 5.7em;
          height: 5.7em;
          flex-shrink: 0;
          font-size: calc(1em * 5 / 6);
          line-height: normal;
          padding: 0;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          color: var(--jk-muted-foreground);
        }
        .jk-average-swan-key:focus-visible {
          outline: 2px solid var(--jk-ring);
          outline-offset: 4px;
        }
        .jk-average-swan-key:disabled {
          cursor: not-allowed;
          opacity: 0.5;
        }
        .jk-average-swan-key-plastic {
          background: color-mix(in oklab, var(--jk-muted-foreground) 22%, var(--jk-card));
          box-shadow:
            color-mix(in oklab, var(--jk-foreground) 38%, transparent) 10px 10px 8px,
            var(--jk-card) 1.5px 1.5px 2px 0 inset,
            color-mix(in oklab, var(--jk-muted-foreground) 22%, var(--jk-card)) -3.2px -3.2px 8px 0 inset;
        }
        .jk-average-swan-key-record {
          align-items: flex-start;
          justify-content: center;
          background: var(--jk-destructive);
          color: var(--jk-destructive-foreground);
          box-shadow:
            color-mix(in oklab, var(--jk-foreground) 38%, transparent) 10px 10px 8px,
            color-mix(in oklab, var(--jk-warning) 70%, var(--jk-destructive)) 2px 2px 10px 0 inset,
            var(--jk-destructive) -4px -4px 1px 0 inset;
        }
        .jk-average-swan-key-play {
          align-items: flex-start;
          justify-content: center;
          background: color-mix(in oklab, var(--jk-foreground) 64%, var(--jk-muted));
          color: var(--jk-background);
          box-shadow:
            color-mix(in oklab, var(--jk-foreground) 38%, transparent) 10px 10px 8px,
            color-mix(in oklab, var(--jk-muted-foreground) 45%, var(--jk-card)) 1.5px 1.5px 1px 0 inset,
            color-mix(in oklab, var(--jk-foreground) 64%, var(--jk-muted)) -3.2px -3.2px 8px 0 inset;
        }
        .jk-average-swan-glyph {
          position: relative;
          display: block;
          width: 1.875em;
          height: 1.875em;
        }
        .jk-average-swan-glyph::before,
        .jk-average-swan-glyph::after {
          content: "";
          position: absolute;
          background: currentColor;
        }
        .jk-average-swan-glyph-minus::before {
          top: 50%;
          left: 20.833333%;
          width: 58.333333%;
          height: 0.15625em;
          transform: translateY(-50%);
        }
        .jk-average-swan-glyph-plus::before {
          top: 50%;
          left: 20.833333%;
          width: 58.333333%;
          height: 0.15625em;
          transform: translateY(-50%);
        }
        .jk-average-swan-glyph-plus::after {
          left: 50%;
          top: 20.833333%;
          width: 0.15625em;
          height: 58.333333%;
          transform: translateX(-50%);
        }
        .jk-average-swan-label {
          padding-top: 0.9em;
          font-size: 0.85em;
          letter-spacing: 0.075em;
        }
        .jk-average-swan-caption {
          margin: 0;
          text-align: center;
          font-size: 0.65em;
          color: var(--jk-muted-foreground);
        }
        .jk-average-swan-key-plastic:active:not(:disabled) {
          box-shadow:
            color-mix(in oklab, var(--jk-foreground) 38%, transparent) 0 0 0,
            inset 0.5px 0.5px 4px var(--jk-foreground),
            color-mix(in oklab, var(--jk-muted-foreground) 22%, var(--jk-card)) -3.2px -3.2px 8px 0 inset;
        }
        .jk-average-swan-key-plastic:active:not(:disabled) .jk-average-swan-glyph {
          scale: 0.95;
        }
        .jk-average-swan-key-record:active:not(:disabled) {
          box-shadow:
            color-mix(in oklab, var(--jk-foreground) 38%, transparent) 0 0 0,
            inset 0.5px 0.5px 4px var(--jk-foreground),
            var(--jk-destructive) -3.2px -3.2px 8px 0 inset;
        }
        .jk-average-swan-key-play:active:not(:disabled) {
          box-shadow:
            color-mix(in oklab, var(--jk-foreground) 38%, transparent) 0 0 0,
            inset 0.5px 0.5px 4px var(--jk-foreground),
            color-mix(in oklab, var(--jk-foreground) 64%, var(--jk-muted)) -3.2px -3.2px 8px 0 inset;
        }
        .jk-average-swan-key-record:active:not(:disabled) .jk-average-swan-label,
        .jk-average-swan-key-play:active:not(:disabled) .jk-average-swan-label {
          transform: translateY(0.5px);
        }
        @media (prefers-reduced-motion: no-preference) {
          .jk-average-swan-key,
          .jk-average-swan-glyph,
          .jk-average-swan-label {
            transition: 0.1s ease-in-out;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-average-swan-key,
          .jk-average-swan-glyph,
          .jk-average-swan-label {
            transition: none;
          }
        }
      `}</style>
      <div className="jk-average-swan-grid">
        <div className="jk-average-swan-row">
          <div className="jk-average-swan-well">
            <button
              aria-label={minusLabel}
              className="jk-average-swan-key jk-average-swan-key-plastic"
              disabled={disabled}
              onClick={onMinus}
              type="button"
            >
              <span
                aria-hidden="true"
                className="jk-average-swan-glyph jk-average-swan-glyph-minus"
              />
            </button>
          </div>
          <div className="jk-average-swan-well">
            <button
              aria-label={plusLabel}
              className="jk-average-swan-key jk-average-swan-key-plastic"
              disabled={disabled}
              onClick={onPlus}
              type="button"
            >
              <span
                aria-hidden="true"
                className="jk-average-swan-glyph jk-average-swan-glyph-plus"
              />
            </button>
          </div>
        </div>
        <div className="jk-average-swan-row">
          <div className="jk-average-swan-well">
            <button
              className="jk-average-swan-key jk-average-swan-key-record"
              disabled={disabled}
              onClick={onRecord}
              type="button"
            >
              <span className="jk-average-swan-label">{recordLabel}</span>
            </button>
          </div>
          <div className="jk-average-swan-well">
            <button
              className="jk-average-swan-key jk-average-swan-key-play"
              disabled={disabled}
              onClick={onPlay}
              type="button"
            >
              <span className="jk-average-swan-label">{playLabel}</span>
            </button>
          </div>
        </div>
      </div>
      {caption ? <p className="jk-average-swan-caption">{caption}</p> : null}
    </fieldset>
  );
}
