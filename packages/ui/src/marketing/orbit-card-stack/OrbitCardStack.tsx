"use client";

import { ArrowUpRightIcon } from "lucide-react";
// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import {
  type CSSProperties,
  type FocusEvent,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { cn } from "@/lib/cn";
import { orbitCardStackItems } from "./OrbitCardStack.mocks";
import type {
  OrbitCardStackAccent,
  OrbitCardStackItem,
  OrbitCardStackProps,
} from "./OrbitCardStack.types";

const OPEN_ARC = 8.5;
const CLOSED_ARC = 2.8;
const OPEN_DROP = 30;
const OPEN_DROP_TAIL = 10;
const CLOSED_SLIDE = 10;
const CLOSED_DROP = 5;
const OPEN_SCALE = 0.985;
const CLOSED_SCALE = 0.97;
const MOTION_MS = 420;

const ACCENT_WASH: Record<OrbitCardStackAccent, string> = {
  primary: "bg-primary/30",
  secondary: "bg-secondary",
  accent: "bg-accent",
  muted: "bg-muted",
  warning: "bg-warning/35",
  success: "bg-success/30",
  destructive: "bg-destructive/25",
};

function clampIndex(index: number, length: number) {
  return Math.min(Math.max(0, index), Math.max(0, length - 1));
}

function initialsFor(item: OrbitCardStackItem) {
  if (item.initials) return item.initials;
  return item.name
    .split(/\s+/)
    .map((part) => part.at(0))
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function subscribeReducedMotion(onChange: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}

function getReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotion,
    () => false,
  );
}

function Portrait({ item }: { item: OrbitCardStackItem }) {
  const initials = initialsFor(item);
  const wash = ACCENT_WASH[item.accent ?? "muted"];

  return (
    <div
      className={cn(
        "relative flex aspect-[1.36] w-full overflow-hidden rounded-[1.45rem] border border-border bg-muted",
        !item.image && wash,
      )}
    >
      {item.image ? (
        <img
          alt={item.imageAlt ?? item.name}
          className="size-full object-cover"
          src={item.image}
        />
      ) : (
        <span className="m-auto text-5xl font-semibold tracking-tight text-foreground/70">
          {initials}
        </span>
      )}
      <span className="absolute right-4 bottom-4 rounded-full bg-foreground px-3 py-1 text-xs font-semibold tracking-[0.18em] text-background">
        {initials}
      </span>
    </div>
  );
}

export function OrbitCardStack({
  className,
  items,
  defaultActiveIndex = 2,
  spread = 168,
  lift = 34,
  onActiveChange,
  cardClassName,
  label = "Profile card stack",
  showCaption = false,
  ...props
}: OrbitCardStackProps) {
  const reduceMotion = usePrefersReducedMotion();
  const cards = items && items.length > 0 ? items : orbitCardStackItems;
  const restingIndex = clampIndex(defaultActiveIndex, cards.length);
  const [activeIndex, setActiveIndex] = useState(restingIndex);
  const [open, setOpen] = useState(false);
  const stageRef = useRef<HTMLUListElement>(null);
  const midpoint = (cards.length - 1) / 2;

  const layouts = useMemo(
    () =>
      cards.map((_, index) => {
        const orbit = index - midpoint;
        const stack = index - restingIndex;
        return {
          open: {
            x: orbit * spread,
            y:
              Math.abs(orbit) * OPEN_DROP +
              Math.max(0, Math.abs(orbit) - 1) * OPEN_DROP_TAIL,
            rotate: orbit * OPEN_ARC,
          },
          closed: {
            x: stack * CLOSED_SLIDE,
            y: Math.abs(stack) * CLOSED_DROP,
            rotate: stack * CLOSED_ARC,
          },
        };
      }),
    [cards, midpoint, restingIndex, spread],
  );

  const activate = (index: number) => {
    const next = clampIndex(index, cards.length);
    const item = cards[next];
    if (!item) return;
    setOpen(true);
    setActiveIndex(next);
    onActiveChange?.(item, next);
  };

  const collapse = () => {
    setOpen(false);
    setActiveIndex(restingIndex);
  };

  const leaveStage = (event: FocusEvent<HTMLUListElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) collapse();
  };

  const active = cards[activeIndex] ?? cards[restingIndex];

  return (
    <section
      className={cn(
        "relative w-full bg-background px-6 py-16 text-foreground",
        className,
      )}
      data-slot="orbit-card-stack"
      {...props}
    >
      {showCaption && active ? (
        <div className="mx-auto mb-8 max-w-[980px] text-center">
          <p className="text-sm font-medium text-muted-foreground">
            Currently viewing
          </p>
          <h2 className="mt-1 text-2xl font-semibold tracking-tight text-foreground">
            {active.name}
          </h2>
        </div>
      ) : null}

      <div className="relative flex min-h-[32rem] w-full items-center justify-center overflow-hidden">
        <ul
          aria-label={label}
          className="relative m-0 h-[470px] w-full max-w-[980px] list-none p-0"
          onBlur={leaveStage}
          onMouseLeave={collapse}
          ref={stageRef}
        >
          {cards.map((item, index) => {
            const pose = open ? layouts[index]?.open : layouts[index]?.closed;
            const selected = index === activeIndex;
            const rise = open && selected ? lift : 0;
            const style: CSSProperties = {
              zIndex: selected ? 80 : 50 - Math.abs(index - activeIndex),
              transform: `translate(calc(-50% + ${pose?.x ?? 0}px), calc(-50% + ${
                (pose?.y ?? 0) - rise
              }px)) rotate(${pose?.rotate ?? 0}deg) scale(${
                open ? OPEN_SCALE : CLOSED_SCALE
              })`,
              transitionDuration: reduceMotion ? "0ms" : `${MOTION_MS}ms`,
            };

            return (
              <li
                className="absolute top-1/2 left-1/2 w-[min(78vw,21rem)] origin-bottom transition-[transform] ease-[cubic-bezier(.2,.8,.2,1)]"
                key={item.name}
                style={style}
              >
                <button
                  aria-current={selected ? "true" : undefined}
                  className={cn(
                    "w-full cursor-pointer rounded-[1.9rem] border border-border bg-card p-4 text-left text-card-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                    cardClassName,
                  )}
                  onClick={() => activate(index)}
                  onFocus={() => activate(index)}
                  onKeyDown={(event) => {
                    if (
                      event.key === "ArrowRight" ||
                      event.key === "ArrowDown"
                    ) {
                      event.preventDefault();
                      const next = (index + 1) % cards.length;
                      activate(next);
                      stageRef.current
                        ?.querySelectorAll<HTMLButtonElement>("button")
                        [next]?.focus();
                    }
                    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
                      event.preventDefault();
                      const next = (index - 1 + cards.length) % cards.length;
                      activate(next);
                      stageRef.current
                        ?.querySelectorAll<HTMLButtonElement>("button")
                        [next]?.focus();
                    }
                    if (event.key === "Escape") {
                      event.currentTarget.blur();
                      collapse();
                    }
                  }}
                  onMouseEnter={() => activate(index)}
                  type="button"
                >
                  <div className="relative">
                    <Portrait item={item} />
                    <span
                      aria-hidden="true"
                      className="absolute top-3 right-3 grid size-11 place-items-center rounded-full bg-foreground text-background shadow-lg"
                    >
                      <ArrowUpRightIcon className="size-4" />
                    </span>
                  </div>
                  <div className="px-2 pt-6 pb-2">
                    <p className="text-[0.72rem] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                      {item.role}
                    </p>
                    <p className="mt-2 text-[2rem] leading-none font-semibold tracking-[-0.04em] text-foreground">
                      {item.name}
                    </p>
                    <p className="mt-4 max-w-[17rem] text-[0.98rem] leading-[1.42] font-medium tracking-[-0.01em] text-muted-foreground">
                      {item.description}
                    </p>
                    <div className="mt-5 border-t border-border pt-4 text-[0.68rem] font-bold tracking-[0.2em] text-muted-foreground uppercase">
                      {item.stat ?? "Profile"}
                    </div>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
