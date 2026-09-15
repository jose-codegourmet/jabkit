// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { cn } from "@/lib/cn";
import type { JollyChickenProps } from "./JollyChicken.types";

const sizes = {
  sm: "h-8 w-[4.5rem]",
  md: "h-10 w-[5.75rem]",
  lg: "h-12 w-[7rem]",
} as const;

export function JollyChicken({
  className,
  size = "md",
  label = "Toggle night mode",
  disabled,
  ...props
}: JollyChickenProps) {
  return (
    <label
      className={cn(
        "jk-jolly-chicken relative inline-flex shrink-0 cursor-pointer items-center",
        disabled && "cursor-not-allowed opacity-50",
        sizes[size],
        className,
      )}
      data-size={size}
      data-slot="jolly-chicken"
    >
      <style href="jk-jolly-chicken" precedence="default">{`
        .jk-jolly-chicken-track {
          background: color-mix(in oklab, var(--jk-chart-1) 55%, var(--jk-card));
          box-shadow: inset 0 0 0 1px
            color-mix(in oklab, var(--jk-border), transparent 20%);
        }
        .jk-jolly-chicken-input:checked + .jk-jolly-chicken-track {
          background: color-mix(in oklab, var(--jk-foreground) 82%, var(--jk-primary));
        }
        .jk-jolly-chicken-thumb {
          background: var(--jk-warning);
          box-shadow:
            0 0 0 0.35rem color-mix(in oklab, var(--jk-warning), transparent 62%),
            0 4px 10px color-mix(in oklab, var(--jk-foreground), transparent 82%);
        }
        .jk-jolly-chicken-input:checked + .jk-jolly-chicken-track .jk-jolly-chicken-thumb {
          background: var(--jk-card);
          box-shadow:
            0 0 0 0.28rem color-mix(in oklab, var(--jk-card), transparent 70%),
            0 4px 10px color-mix(in oklab, var(--jk-foreground), transparent 70%);
          left: calc(100% - 0.28rem);
          transform: translateX(-100%);
        }
        .jk-jolly-chicken-crater {
          background: color-mix(in oklab, var(--jk-muted-foreground), transparent 55%);
          opacity: 0;
        }
        .jk-jolly-chicken-input:checked + .jk-jolly-chicken-track .jk-jolly-chicken-crater {
          opacity: 1;
        }
        .jk-jolly-chicken-cloud {
          background: color-mix(in oklab, var(--jk-card) 88%, var(--jk-primary));
        }
        .jk-jolly-chicken-input:checked + .jk-jolly-chicken-track .jk-jolly-chicken-cloud {
          opacity: 0;
          transform: translateX(0.5rem);
        }
        .jk-jolly-chicken-star {
          background: var(--jk-card);
          opacity: 0;
        }
        .jk-jolly-chicken-input:checked + .jk-jolly-chicken-track .jk-jolly-chicken-star {
          opacity: 1;
        }
        @media (prefers-reduced-motion: no-preference) {
          .jk-jolly-chicken-track,
          .jk-jolly-chicken-thumb,
          .jk-jolly-chicken-cloud,
          .jk-jolly-chicken-crater,
          .jk-jolly-chicken-star {
            transition:
              background-color 280ms ease,
              box-shadow 280ms ease,
              left 320ms cubic-bezier(0.22, 1, 0.36, 1),
              transform 320ms cubic-bezier(0.22, 1, 0.36, 1),
              opacity 220ms ease;
          }
          .jk-jolly-chicken-input:checked + .jk-jolly-chicken-track .jk-jolly-chicken-star {
            animation: jk-jolly-chicken-twinkle 1.8s ease-in-out infinite;
          }
          .jk-jolly-chicken-input:checked + .jk-jolly-chicken-track .jk-jolly-chicken-star:nth-child(2) {
            animation-delay: 0.35s;
          }
          .jk-jolly-chicken-input:checked + .jk-jolly-chicken-track .jk-jolly-chicken-star:nth-child(3) {
            animation-delay: 0.7s;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-jolly-chicken-track,
          .jk-jolly-chicken-thumb,
          .jk-jolly-chicken-cloud,
          .jk-jolly-chicken-crater,
          .jk-jolly-chicken-star {
            transition: none;
            animation: none;
          }
        }
        @keyframes jk-jolly-chicken-twinkle {
          50% { opacity: 0.35; }
        }
      `}</style>
      <input
        aria-label={label}
        className="jk-jolly-chicken-input peer sr-only"
        disabled={disabled}
        type="checkbox"
        {...props}
      />
      <span
        aria-hidden="true"
        className="jk-jolly-chicken-track relative h-full w-full overflow-hidden rounded-full peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-background"
      >
        <span className="jk-jolly-chicken-cloud absolute top-[55%] left-[46%] h-[38%] w-[28%] rounded-full" />
        <span className="jk-jolly-chicken-cloud absolute top-[62%] left-[58%] h-[30%] w-[22%] rounded-full" />
        <span className="jk-jolly-chicken-star absolute top-[22%] left-[18%] size-1 rounded-full" />
        <span className="jk-jolly-chicken-star absolute top-[42%] left-[28%] size-0.5 rounded-full" />
        <span className="jk-jolly-chicken-star absolute top-[18%] left-[34%] size-[3px] rounded-full" />
        <span className="jk-jolly-chicken-thumb absolute top-[12%] left-[0.28rem] flex aspect-square h-[76%] items-center justify-center rounded-full">
          <span className="jk-jolly-chicken-crater absolute top-[28%] left-[22%] size-[28%] rounded-full" />
          <span className="jk-jolly-chicken-crater absolute top-[52%] left-[48%] size-[18%] rounded-full" />
        </span>
      </span>
    </label>
  );
}
