import { UserIcon } from "lucide-react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { cn } from "@/lib/cn";
import type { WiseLizardProps } from "./WiseLizard.types";

const sizes = {
  sm: "max-w-64 gap-2 p-3 text-sm",
  md: "max-w-[22rem] gap-3.5 p-5 text-base",
  lg: "max-w-md gap-4 p-6 text-lg",
} as const;

const fieldPadding = {
  sm: "px-3 py-2.5",
  md: "px-4 py-3.5",
  lg: "px-5 py-4",
} as const;

const iconBox = {
  sm: "p-2",
  md: "p-2.5",
  lg: "p-3",
} as const;

const iconSize = {
  sm: 18,
  md: 22,
  lg: 26,
} as const;

export function WiseLizard({
  className,
  size = "md",
  badge = "Username",
  placeholder = "Enter username",
  disabled,
  id,
  ...props
}: WiseLizardProps) {
  const fieldId = id ?? "wise-lizard-field";

  return (
    <div
      className={cn(
        "jk-wise-lizard relative inline-flex w-full items-center",
        disabled && "cursor-not-allowed opacity-50",
        sizes[size],
        className,
      )}
      data-disabled={disabled ? "true" : "false"}
      data-size={size}
      data-slot="wise-lizard"
    >
      <style href="jk-wise-lizard" precedence="default">{`
        .jk-wise-lizard {
          isolation: isolate;
          perspective: 64rem;
        }
        .jk-wise-lizard-stage {
          transform-style: preserve-3d;
          background: color-mix(in oklab, var(--jk-muted) 72%, var(--jk-card));
          border: 4px solid var(--jk-foreground);
          box-shadow: 0.625rem 0.625rem 0 0 var(--jk-foreground);
        }
        .jk-wise-lizard-glow {
          background: linear-gradient(
            45deg,
            color-mix(in oklab, var(--jk-destructive), transparent 60%),
            color-mix(in oklab, var(--jk-destructive), transparent 88%)
          );
          transform: translateZ(-3rem);
          filter: blur(1.25rem);
        }
        .jk-wise-lizard-badge {
          background: var(--jk-warning);
          color: var(--jk-foreground);
          border: 2px solid var(--jk-foreground);
          transform: translateZ(3rem);
        }
        .jk-wise-lizard-mark,
        .jk-wise-lizard-field {
          border: 3px solid var(--jk-foreground);
          transform: translateZ(0.75rem);
        }
        .jk-wise-lizard-mark {
          background: var(--jk-warning);
          color: var(--jk-foreground);
        }
        .jk-wise-lizard-field {
          background: var(--jk-card);
          color: var(--jk-card-foreground);
        }
        .jk-wise-lizard-field::placeholder {
          color: var(--jk-muted-foreground);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }
        .jk-wise-lizard-field:focus-visible {
          outline: none;
          box-shadow:
            0 0 0 3px var(--jk-background),
            0 0 0 6px var(--jk-ring);
        }
        .jk-wise-lizard[data-disabled="true"] .jk-wise-lizard-field {
          background: color-mix(in oklab, var(--jk-input), var(--jk-card) 40%);
        }
        @media (prefers-reduced-motion: no-preference) {
          .jk-wise-lizard-stage,
          .jk-wise-lizard-mark,
          .jk-wise-lizard-field {
            transition:
              transform 400ms cubic-bezier(0.23, 1, 0.32, 1),
              box-shadow 400ms cubic-bezier(0.23, 1, 0.32, 1),
              background-color 240ms ease;
          }
          .jk-wise-lizard-stage {
            transform: rotateX(10deg) rotateY(-10deg);
          }
          .jk-wise-lizard:hover .jk-wise-lizard-stage,
          .jk-wise-lizard:focus-within .jk-wise-lizard-stage {
            transform: rotateX(5deg) rotateY(1deg) scale(1.04);
            box-shadow:
              1.5rem 1.5rem 0 -0.3rem var(--jk-warning),
              1.5rem 1.5rem 0 0 var(--jk-foreground);
          }
          .jk-wise-lizard:hover .jk-wise-lizard-mark,
          .jk-wise-lizard:hover .jk-wise-lizard-field,
          .jk-wise-lizard:focus-within .jk-wise-lizard-field {
            transform: translateZ(1.25rem) translate(-0.3rem, -0.3rem);
            box-shadow: 0.3rem 0.3rem 0 0 var(--jk-foreground);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-wise-lizard-stage,
          .jk-wise-lizard-mark,
          .jk-wise-lizard-field {
            transition: none;
            transform: none;
          }
        }
      `}</style>
      <div className="jk-wise-lizard-stage relative flex w-full items-center gap-[inherit] p-[inherit]">
        <span
          aria-hidden="true"
          className="jk-wise-lizard-glow pointer-events-none absolute inset-0 -z-10"
        />
        <label
          className="jk-wise-lizard-badge absolute -top-3.5 left-5 z-10 px-2.5 py-1 font-bold text-xs uppercase tracking-wide"
          htmlFor={fieldId}
        >
          {badge}
        </label>
        <span
          aria-hidden="true"
          className={cn(
            "jk-wise-lizard-mark relative z-10 inline-flex shrink-0 items-center justify-center",
            iconBox[size],
          )}
        >
          <UserIcon size={iconSize[size]} strokeWidth={2.4} />
        </span>
        <input
          className={cn(
            "jk-wise-lizard-field relative z-10 min-w-0 flex-1 font-medium tracking-tight disabled:cursor-not-allowed",
            fieldPadding[size],
          )}
          disabled={disabled}
          id={fieldId}
          placeholder={placeholder}
          type="text"
          {...props}
        />
      </div>
    </div>
  );
}
