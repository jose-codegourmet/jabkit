// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { cn } from "@/lib/cn";
import type { CleverPantherProps } from "./CleverPanther.types";

const sizes = {
  sm: "w-56 gap-2 p-4 text-sm",
  md: "w-72 gap-2.5 p-5 text-sm",
  lg: "w-80 gap-3 p-6 text-base",
} as const;

export function CleverPanther({
  className,
  children,
  eyebrow = "Night brief",
  title = "Clever panther",
  description = "A compact note card with a token-tinted sheen that stays readable in light and dark.",
  actionLabel,
  size = "md",
  tone = "ink",
  animate = true,
  ...props
}: CleverPantherProps) {
  return (
    <article
      className={cn(
        "jk-clever-panther relative isolate flex flex-col overflow-hidden rounded-[--radius] border border-border text-card-foreground shadow-[var(--jk-shadow-control)]",
        sizes[size],
        className,
      )}
      data-animate={animate ? "true" : "false"}
      data-size={size}
      data-slot="clever-panther"
      data-tone={tone}
      {...props}
    >
      <style href="jk-clever-panther" precedence="default">{`
        .jk-clever-panther {
          background: color-mix(in oklab, var(--jk-card) 88%, var(--jk-foreground) 12%);
        }
        .jk-clever-panther[data-tone="muted"] {
          background: color-mix(in oklab, var(--jk-muted) 70%, var(--jk-card) 30%);
        }
        .jk-clever-panther-spot {
          background:
            radial-gradient(
              18rem 10rem at 12% -10%,
              color-mix(in oklab, var(--jk-primary), transparent 78%),
              transparent 58%
            ),
            radial-gradient(
              1.1rem 1.1rem at 82% 18%,
              color-mix(in oklab, var(--jk-foreground), transparent 88%),
              transparent 70%
            ),
            radial-gradient(
              0.7rem 0.7rem at 74% 28%,
              color-mix(in oklab, var(--jk-foreground), transparent 90%),
              transparent 68%
            );
        }
        .jk-clever-panther-sheen {
          background: linear-gradient(
            115deg,
            transparent 28%,
            color-mix(in oklab, var(--jk-primary-foreground), transparent 78%) 46%,
            transparent 62%
          );
          opacity: 0;
          transform: translateX(-36%);
        }
        .jk-clever-panther-rim {
          box-shadow: inset 0 1px 0 color-mix(in oklab, var(--jk-primary-foreground), transparent 82%);
        }
        @media (prefers-reduced-motion: no-preference) {
          .jk-clever-panther {
            transition:
              transform 220ms ease,
              box-shadow 220ms ease;
          }
          .jk-clever-panther-sheen {
            transition:
              opacity 280ms ease,
              transform 520ms cubic-bezier(0.22, 1, 0.36, 1);
          }
          .jk-clever-panther[data-animate="true"]:hover,
          .jk-clever-panther[data-animate="true"]:focus-visible {
            transform: translateY(-2px);
            box-shadow:
              var(--jk-shadow-control),
              0 16px 32px color-mix(in oklab, var(--jk-foreground), transparent 88%);
          }
          .jk-clever-panther[data-animate="true"]:hover .jk-clever-panther-sheen,
          .jk-clever-panther[data-animate="true"]:focus-visible .jk-clever-panther-sheen {
            opacity: 1;
            transform: translateX(18%);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-clever-panther,
          .jk-clever-panther-sheen {
            transition: none;
            transform: none;
          }
          .jk-clever-panther-sheen {
            opacity: 0.28;
          }
        }
      `}</style>
      <span
        aria-hidden="true"
        className="jk-clever-panther-spot pointer-events-none absolute inset-0"
      />
      <span
        aria-hidden="true"
        className="jk-clever-panther-sheen pointer-events-none absolute inset-0"
      />
      <span
        aria-hidden="true"
        className="jk-clever-panther-rim pointer-events-none absolute inset-0 rounded-[inherit]"
      />
      {children ?? (
        <div className="relative z-10 flex flex-col gap-[inherit]">
          <p className="text-[0.7em] font-medium tracking-[0.16em] text-muted-foreground uppercase">
            {eyebrow}
          </p>
          <h3 className="text-[1.15em] leading-tight font-semibold tracking-tight">
            {title}
          </h3>
          <p className="text-[0.92em] leading-relaxed text-muted-foreground">
            {description}
          </p>
          {actionLabel ? (
            <p className="pt-1 text-[0.85em] font-medium text-primary">
              {actionLabel}
            </p>
          ) : null}
        </div>
      )}
    </article>
  );
}
