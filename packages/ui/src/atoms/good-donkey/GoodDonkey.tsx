// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { cn } from "@/lib/cn";
import type { GoodDonkeyProps } from "./GoodDonkey.types";

const sizes = {
  sm: "jk-good-donkey-sm",
  md: "jk-good-donkey-md",
  lg: "jk-good-donkey-lg",
} as const;

function AttachMark() {
  return (
    <svg
      aria-hidden="true"
      className="jk-good-donkey-attach-mark"
      fill="none"
      viewBox="0 0 337 337"
    >
      <circle
        className="jk-good-donkey-attach-ring"
        cx="168.5"
        cy="168.5"
        r="158.5"
        strokeWidth="20"
      />
      <path
        className="jk-good-donkey-attach-plus"
        d="M167.759 79V259"
        strokeLinecap="round"
        strokeWidth="25"
      />
      <path
        className="jk-good-donkey-attach-plus"
        d="M79 167.138H259"
        strokeLinecap="round"
        strokeWidth="25"
      />
    </svg>
  );
}

function SendMark() {
  const plane =
    "M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888";

  return (
    <svg
      aria-hidden="true"
      className="jk-good-donkey-send-mark"
      fill="none"
      viewBox="0 0 664 663"
    >
      <path d={plane} fill="none" />
      <path
        d={plane}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="33.67"
      />
    </svg>
  );
}

export function GoodDonkey({
  className,
  size = "md",
  placeholder = "Message...",
  defaultValue,
  disabled,
  attachLabel = "Add an image",
  sendLabel = "Send",
  accept,
  ...props
}: GoodDonkeyProps) {
  return (
    <form
      className={cn(
        "jk-good-donkey",
        sizes[size],
        disabled && "jk-good-donkey-disabled",
        className,
      )}
      data-size={size}
      data-slot="good-donkey"
      {...props}
    >
      <style href="jk-good-donkey" precedence="default">{`
        .jk-good-donkey {
          --jk-good-donkey-face: var(--jk-card);
          --jk-good-donkey-ink: var(--jk-card-foreground);
          --jk-good-donkey-line: var(--jk-border);
          --jk-good-donkey-line-focus: color-mix(
            in oklab,
            var(--jk-muted-foreground) 55%,
            var(--jk-border)
          );
          --jk-good-donkey-icon: var(--jk-muted-foreground);
          --jk-good-donkey-icon-active: var(--jk-foreground);
          --jk-good-donkey-icon-fill: var(--jk-muted);
          --jk-good-donkey-tip-face: var(--jk-foreground);
          --jk-good-donkey-tip-ink: var(--jk-background);
          --jk-good-donkey-tip-line: var(--jk-border);
          --jk-good-donkey-tip-shadow: 0 5px 10px
            color-mix(in oklab, var(--jk-foreground) 60%, transparent);
          box-sizing: border-box;
          display: flex;
          width: fit-content;
          max-width: 100%;
          height: 40px;
          align-items: center;
          justify-content: center;
          padding: 0 15px;
          border: 1px solid var(--jk-good-donkey-line);
          border-radius: 10px;
          background: var(--jk-good-donkey-face);
          color: var(--jk-good-donkey-ink);
          outline: none;
        }
        .jk-good-donkey-sm {
          transform: scale(0.8);
          transform-origin: center center;
        }
        .jk-good-donkey-lg {
          transform: scale(1.25);
          transform-origin: center center;
        }
        .jk-good-donkey-disabled {
          pointer-events: none;
          opacity: 0.5;
        }
        .jk-good-donkey:focus-within {
          border: 1px solid var(--jk-good-donkey-line-focus);
        }
        .jk-good-donkey-upload {
          display: flex;
          width: fit-content;
          height: 100%;
          align-items: center;
          justify-content: center;
          font-family: var(--jk-font-label);
        }
        .jk-good-donkey-file {
          display: none;
        }
        .jk-good-donkey-attach {
          position: relative;
          display: flex;
          width: fit-content;
          height: fit-content;
          cursor: pointer;
          align-items: center;
          justify-content: center;
        }
        .jk-good-donkey-attach-mark {
          height: 18px;
          width: auto;
        }
        .jk-good-donkey-attach-ring,
        .jk-good-donkey-attach-plus {
          fill: none;
          stroke: var(--jk-good-donkey-icon);
        }
        .jk-good-donkey-attach:hover .jk-good-donkey-attach-plus,
        .jk-good-donkey-attach:focus-within .jk-good-donkey-attach-plus {
          stroke: var(--jk-good-donkey-icon-active);
        }
        .jk-good-donkey-attach:hover .jk-good-donkey-attach-ring,
        .jk-good-donkey-attach:focus-within .jk-good-donkey-attach-ring {
          fill: var(--jk-good-donkey-icon-fill);
          stroke: var(--jk-good-donkey-icon-active);
        }
        .jk-good-donkey-tooltip {
          position: absolute;
          top: -40px;
          left: 50%;
          z-index: 1;
          display: none;
          padding: 6px 10px;
          border: 1px solid var(--jk-good-donkey-tip-line);
          border-radius: 5px;
          background: var(--jk-good-donkey-tip-face);
          box-shadow: var(--jk-good-donkey-tip-shadow);
          color: var(--jk-good-donkey-tip-ink);
          font-size: 10px;
          line-height: 1;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          text-wrap: nowrap;
          transform: translateX(-50%);
        }
        .jk-good-donkey-attach:hover .jk-good-donkey-tooltip,
        .jk-good-donkey-attach:focus-within .jk-good-donkey-tooltip {
          display: block;
          opacity: 1;
        }
        .jk-good-donkey-field {
          width: 200px;
          min-width: 0;
          max-width: 100%;
          height: 100%;
          border: none;
          background: transparent;
          padding-left: 10px;
          color: var(--jk-good-donkey-ink);
          outline: none;
        }
        .jk-good-donkey-field::placeholder {
          color: var(--jk-good-donkey-icon);
        }
        .jk-good-donkey-send {
          display: flex;
          width: fit-content;
          height: 100%;
          cursor: pointer;
          align-items: center;
          justify-content: center;
          border: none;
          background: transparent;
          padding: 0;
          outline: none;
        }
        .jk-good-donkey-send-mark {
          height: 18px;
          width: auto;
        }
        .jk-good-donkey-send-mark path {
          fill: none;
          stroke: var(--jk-good-donkey-icon);
        }
        .jk-good-donkey-field:focus ~ .jk-good-donkey-send .jk-good-donkey-send-mark path,
        .jk-good-donkey-field:valid ~ .jk-good-donkey-send .jk-good-donkey-send-mark path,
        .jk-good-donkey-send:hover .jk-good-donkey-send-mark path {
          fill: var(--jk-good-donkey-icon-fill);
          stroke: var(--jk-good-donkey-icon-active);
        }
        .jk-good-donkey-send:focus-visible,
        .jk-good-donkey-attach:focus-within {
          border-radius: 5px;
          box-shadow: 0 0 0 2px var(--jk-background), 0 0 0 4px var(--jk-ring);
        }
        @media (prefers-reduced-motion: no-preference) {
          .jk-good-donkey-attach-ring,
          .jk-good-donkey-attach-plus,
          .jk-good-donkey-tooltip,
          .jk-good-donkey-send,
          .jk-good-donkey-send-mark,
          .jk-good-donkey-send-mark path {
            transition: all 0.3s;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-good-donkey-attach-ring,
          .jk-good-donkey-attach-plus,
          .jk-good-donkey-tooltip,
          .jk-good-donkey-send,
          .jk-good-donkey-send-mark,
          .jk-good-donkey-send-mark path {
            transition: none;
          }
        }
      `}</style>
      <div className="jk-good-donkey-upload">
        <label className="jk-good-donkey-attach">
          <AttachMark />
          <span className="jk-good-donkey-tooltip">{attachLabel}</span>
          <input
            accept={accept}
            aria-label={attachLabel}
            className="jk-good-donkey-file"
            disabled={disabled}
            type="file"
          />
        </label>
      </div>
      <input
        className="jk-good-donkey-field"
        defaultValue={defaultValue}
        disabled={disabled}
        placeholder={placeholder}
        required
        type="text"
      />
      <button
        aria-label={sendLabel}
        className="jk-good-donkey-send"
        disabled={disabled}
        type="submit"
      >
        <SendMark />
      </button>
    </form>
  );
}
