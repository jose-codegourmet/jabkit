import { PaperclipIcon, SendIcon } from "lucide-react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { cn } from "@/lib/cn";
import type { GoodDonkeyProps } from "./GoodDonkey.types";

const sizes = {
  sm: "h-9 text-xs",
  md: "h-10 text-sm",
  lg: "h-12 text-base",
} as const;

export function GoodDonkey({
  className,
  size = "md",
  placeholder = "Write a message",
  defaultValue,
  disabled,
  attachLabel = "Attach a file",
  sendLabel = "Send message",
  accept,
  ...props
}: GoodDonkeyProps) {
  return (
    <form
      className={cn(
        "jk-good-donkey inline-flex max-w-full items-center rounded-[--radius] border border-border bg-card px-3 text-card-foreground shadow-[var(--jk-shadow-control)]",
        sizes[size],
        disabled && "pointer-events-none opacity-50",
        className,
      )}
      data-size={size}
      data-slot="good-donkey"
      {...props}
    >
      <style href="jk-good-donkey" precedence="default">{`
        .jk-good-donkey {
          outline: none;
        }
        .jk-good-donkey:focus-within {
          border-color: color-mix(in oklab, var(--jk-ring), var(--jk-border) 35%);
          box-shadow:
            var(--jk-shadow-control),
            0 0 0 1px color-mix(in oklab, var(--jk-ring), transparent 55%);
        }
        .jk-good-donkey-attach {
          position: relative;
          display: inline-flex;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;
          color: var(--jk-muted-foreground);
        }
        .jk-good-donkey-attach input {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          cursor: pointer;
        }
        .jk-good-donkey-attach svg {
          width: 1.05em;
          height: 1.05em;
        }
        .jk-good-donkey-tooltip {
          position: absolute;
          bottom: calc(100% + 0.55rem);
          left: 50%;
          z-index: 1;
          padding: 0.3rem 0.5rem;
          border: 1px solid var(--jk-border);
          border-radius: calc(var(--radius) - 2px);
          background: var(--jk-popover);
          color: var(--jk-popover-foreground);
          font-size: 0.625rem;
          line-height: 1;
          letter-spacing: 0.01em;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transform: translateX(-50%) translateY(0.2rem);
        }
        .jk-good-donkey-field {
          min-width: 0;
          height: 100%;
          flex: 1 1 auto;
          border: 0;
          background: transparent;
          padding-inline: 0.65rem;
          color: var(--jk-foreground);
          outline: none;
        }
        .jk-good-donkey[data-size="sm"] .jk-good-donkey-field {
          width: 10.5rem;
        }
        .jk-good-donkey[data-size="md"] .jk-good-donkey-field {
          width: 13.5rem;
        }
        .jk-good-donkey[data-size="lg"] .jk-good-donkey-field {
          width: 16.5rem;
        }
        .jk-good-donkey-field::placeholder {
          color: var(--jk-muted-foreground);
        }
        .jk-good-donkey-send {
          display: inline-flex;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;
          height: 100%;
          border: 0;
          background: transparent;
          padding: 0;
          color: var(--jk-muted-foreground);
          cursor: pointer;
        }
        .jk-good-donkey-send svg {
          width: 1.05em;
          height: 1.05em;
        }
        .jk-good-donkey-send:focus-visible,
        .jk-good-donkey-attach:focus-within {
          color: var(--jk-foreground);
          outline: none;
          border-radius: calc(var(--radius) - 2px);
          box-shadow: 0 0 0 2px var(--jk-background), 0 0 0 4px var(--jk-ring);
        }
        .jk-good-donkey-attach:hover,
        .jk-good-donkey-send:hover,
        .jk-good-donkey:focus-within .jk-good-donkey-send,
        .jk-good-donkey-field:valid ~ .jk-good-donkey-send {
          color: var(--jk-foreground);
        }
        .jk-good-donkey-field:valid ~ .jk-good-donkey-send svg {
          fill: color-mix(in oklab, var(--jk-primary), transparent 70%);
        }
        @media (prefers-reduced-motion: no-preference) {
          .jk-good-donkey,
          .jk-good-donkey-attach,
          .jk-good-donkey-send,
          .jk-good-donkey-tooltip {
            transition:
              border-color 180ms ease,
              box-shadow 180ms ease,
              color 180ms ease,
              opacity 180ms ease,
              transform 180ms ease;
          }
          .jk-good-donkey-attach:hover .jk-good-donkey-tooltip,
          .jk-good-donkey-attach:focus-within .jk-good-donkey-tooltip {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-good-donkey,
          .jk-good-donkey-attach,
          .jk-good-donkey-send,
          .jk-good-donkey-tooltip {
            transition: none;
          }
          .jk-good-donkey-attach:hover .jk-good-donkey-tooltip,
          .jk-good-donkey-attach:focus-within .jk-good-donkey-tooltip {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }
      `}</style>
      <label className="jk-good-donkey-attach">
        <span className="jk-good-donkey-tooltip">{attachLabel}</span>
        <PaperclipIcon aria-hidden="true" />
        <input
          accept={accept}
          aria-label={attachLabel}
          disabled={disabled}
          type="file"
        />
      </label>
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
        <SendIcon aria-hidden="true" />
      </button>
    </form>
  );
}
