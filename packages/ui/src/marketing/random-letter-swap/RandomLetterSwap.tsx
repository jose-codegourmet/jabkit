"use client";

import {
  type CSSProperties,
  useCallback,
  useEffect,
  useId,
  useState,
} from "react";
import { cn } from "@/lib/cn";
import type {
  RandomLetterSwapItem,
  RandomLetterSwapProps,
} from "./RandomLetterSwap.types";

const defaults = {
  brand: "Fieldline",
  brandHref: "#top",
  reverse: true,
  staggerMs: 28,
  durationMs: 620,
  cta: { label: "Start a brief", href: "#brief" },
  items: [
    { label: "Work", href: "#work" },
    { label: "Studio", href: "#studio" },
    { label: "Journal", href: "#journal" },
    { label: "Visit", href: "#visit" },
  ],
} satisfies {
  brand: string;
  brandHref: string;
  reverse: boolean;
  staggerMs: number;
  durationMs: number;
  cta: { label: string; href: string };
  items: RandomLetterSwapItem[];
};

function splitGraphemes(value: string): string[] {
  if (typeof Intl !== "undefined" && "Segmenter" in Intl) {
    const segmenter = new Intl.Segmenter(undefined, {
      granularity: "grapheme",
    });
    return [...segmenter.segment(value)].map((part) => part.segment);
  }
  return Array.from(value);
}

function toGlyphs(label: string) {
  const glyphs: Array<{ key: string; value: string }> = [];
  let order = 0;
  for (const value of splitGraphemes(label)) {
    glyphs.push({
      key: `${label}:${order}:${value.codePointAt(0) ?? 0}`,
      value,
    });
    order += 1;
  }
  return glyphs;
}

function sequentialOrder(length: number) {
  return Array.from({ length }, (_, index) => index);
}

function shuffledOrder(length: number) {
  const order = sequentialOrder(length);
  for (let index = length - 1; index > 0; index -= 1) {
    const swapWith = Math.floor(Math.random() * (index + 1));
    const current = order[index];
    order[index] = order[swapWith];
    order[swapWith] = current;
  }
  return order;
}

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  return reduced;
}

function SwapNavLink({
  item,
  reverse,
  staggerMs,
  durationMs,
  reducedMotion,
}: {
  item: RandomLetterSwapItem;
  reverse: boolean;
  staggerMs: number;
  durationMs: number;
  reducedMotion: boolean;
}) {
  const glyphs = toGlyphs(item.label);
  const [order, setOrder] = useState(() => sequentialOrder(glyphs.length));

  const reshuffle = useCallback(() => {
    if (reducedMotion) return;
    setOrder(shuffledOrder(glyphs.length));
  }, [glyphs.length, reducedMotion]);

  return (
    <a
      className="jk-rls-link text-sm font-medium tracking-tight text-muted-foreground outline-none transition-colors duration-200 motion-reduce:transition-none hover:text-foreground focus-visible:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      href={item.href}
      onFocus={reshuffle}
      onPointerEnter={reshuffle}
    >
      <span className="sr-only">{item.label}</span>
      {reducedMotion ? (
        <span aria-hidden="true" className="whitespace-nowrap">
          {item.label}
        </span>
      ) : (
        <span aria-hidden="true" className="jk-rls-label inline-flex">
          {glyphs.map((glyph, slot) => {
            const value = glyph.value === " " ? "\u00a0" : glyph.value;
            const isSpace = glyph.value === " ";
            return (
              <span
                className={cn(
                  "jk-rls-cell relative inline-block h-[1.15em] overflow-hidden align-bottom leading-[1.15]",
                  isSpace && "w-[0.35em]",
                )}
                key={glyph.key}
                style={
                  {
                    "--jk-rls-i": isSpace ? 0 : (order[slot] ?? slot),
                    "--jk-rls-stagger": `${staggerMs}ms`,
                    "--jk-rls-duration": `${durationMs}ms`,
                  } as CSSProperties
                }
              >
                {isSpace ? (
                  value
                ) : (
                  <span
                    className="jk-rls-stack inline-flex flex-col"
                    data-reverse={reverse ? "true" : "false"}
                  >
                    <span className="block h-[1.15em]">{value}</span>
                    <span className="block h-[1.15em]">{value}</span>
                  </span>
                )}
              </span>
            );
          })}
        </span>
      )}
    </a>
  );
}

export function RandomLetterSwap({
  className,
  brand = defaults.brand,
  brandHref = defaults.brandHref,
  items = defaults.items,
  cta = defaults.cta,
  reverse = defaults.reverse,
  staggerMs = defaults.staggerMs,
  durationMs = defaults.durationMs,
  ...props
}: RandomLetterSwapProps) {
  const titleId = useId();
  const reducedMotion = useReducedMotion();

  return (
    <header
      className={cn(
        "relative w-full bg-background px-5 py-6 text-foreground sm:px-8",
        className,
      )}
      data-slot="random-letter-swap"
      {...props}
    >
      <style href="jk-random-letter-swap" precedence="default">{`
        .jk-rls-stack[data-reverse="true"] {
          transform: translate3d(0, -50%, 0);
        }
        @media (prefers-reduced-motion: no-preference) {
          .jk-rls-link:is(:hover, :focus-visible) .jk-rls-stack[data-reverse="false"] {
            animation: jk-rls-up var(--jk-rls-duration) cubic-bezier(0.16, 1, 0.3, 1) both;
            animation-delay: calc(var(--jk-rls-i) * var(--jk-rls-stagger));
          }
          .jk-rls-link:is(:hover, :focus-visible) .jk-rls-stack[data-reverse="true"] {
            animation: jk-rls-down var(--jk-rls-duration) cubic-bezier(0.16, 1, 0.3, 1) both;
            animation-delay: calc(var(--jk-rls-i) * var(--jk-rls-stagger));
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-rls-stack {
            animation: none;
            transform: none;
          }
        }
        @keyframes jk-rls-up {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(0, -50%, 0); }
        }
        @keyframes jk-rls-down {
          from { transform: translate3d(0, -50%, 0); }
          to { transform: translate3d(0, 0, 0); }
        }
      `}</style>

      <div className="mx-auto flex max-w-6xl flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <a
          className="w-fit text-sm font-medium tracking-[0.2em] text-foreground uppercase outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          href={brandHref}
        >
          {brand}
        </a>

        <nav aria-labelledby={titleId} className="min-w-0">
          <h2 className="sr-only" id={titleId}>
            {brand} navigation
          </h2>
          <ul className="flex flex-wrap items-center gap-x-7 gap-y-3">
            {items.map((item) => (
              <li key={`${item.href}-${item.label}`}>
                <SwapNavLink
                  durationMs={durationMs}
                  item={item}
                  reducedMotion={reducedMotion}
                  reverse={reverse}
                  staggerMs={staggerMs}
                />
              </li>
            ))}
          </ul>
        </nav>

        {cta ? (
          <a
            className="inline-flex w-fit items-center rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background outline-none transition-[transform,filter] duration-200 motion-reduce:transition-none hover:brightness-110 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98]"
            href={cta.href}
          >
            {cta.label}
          </a>
        ) : null}
      </div>
    </header>
  );
}
