"use client";

import {
  type PointerEvent,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { cn } from "@/lib/cn";
import type {
  CoverflowCarouselItem,
  CoverflowCarouselProps,
} from "./CoverflowCarousel.types";

const DEFAULT_EYEBROW = "Listening room";
const DEFAULT_HEADING = "Covers that open toward you.";
const DEFAULT_DESCRIPTION =
  "The centre plate sits square. Neighbors swing their outer edges forward so the rack leans in, not away. Drag to change the cut.";

const DEFAULT_ITEMS: CoverflowCarouselItem[] = [
  {
    id: "harbor-cut",
    image: "/assets/d3f9bde61c9a29e7.webp",
    imageAlt: "Glass rooms along an empty daylight corridor",
    title: "Harbor Cut",
    subtitle: "Northline · 2024",
  },
  {
    id: "plant-room",
    image: "/assets/462c849dc9a41e59.webp",
    imageAlt: "Sunlit studio desks with plants and open notebooks",
    title: "Plant Room",
    subtitle: "Fieldwork · 2025",
  },
  {
    id: "arc-study",
    image: "/assets/6cc11e462a9aaded.webp",
    imageAlt: "Arc floor lamp lighting a quiet corner",
    title: "Arc Study",
    subtitle: "Lumen · 2023",
  },
  {
    id: "yard-stairs",
    image: "/assets/97c532d558fa4fbc.webp",
    imageAlt: "Concrete structure photographed from the ground",
    title: "Yard Stairs",
    subtitle: "Helio · 2024",
  },
  {
    id: "oak-hour",
    image: "/assets/462a1be29787cd8e.webp",
    imageAlt: "Low oak lounge chair on a pale floor",
    title: "Oak Hour",
    subtitle: "Harbor · 2025",
  },
  {
    id: "stone-table",
    image: "/assets/488fa5330da1224c.webp",
    imageAlt: "Sculptural stone side table in a sunlit room",
    title: "Stone Table",
    subtitle: "Orbit · 2026",
  },
];

const DRAG_STEP_PX = 72;
const VISIBLE_SPAN = 2;

function subscribeReducedMotion(onChange: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}

function getReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function useReducedMotion() {
  return useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotion,
    () => false,
  );
}

function wrapIndex(index: number, length: number) {
  if (length <= 0) return 0;
  return ((index % length) + length) % length;
}

function shortestOffset(index: number, active: number, length: number) {
  let offset = index - active;
  const half = length / 2;
  if (offset > half) offset -= length;
  if (offset < -half) offset += length;
  return offset;
}

function CoverPlate({
  item,
  offset,
  reducedMotion,
  onSelect,
}: {
  item: CoverflowCarouselItem;
  offset: number;
  reducedMotion: boolean;
  onSelect: () => void;
}) {
  const hidden = Math.abs(offset) > VISIBLE_SPAN;
  const active = offset === 0;

  return (
    <button
      aria-current={active ? "true" : undefined}
      aria-hidden={hidden || undefined}
      aria-label={item.title}
      className={cn(
        "absolute overflow-hidden rounded-[calc(var(--radius)+0.2rem)] border border-border bg-muted text-left shadow-[0_24px_48px_-28px_color-mix(in_oklab,var(--jk-foreground),transparent_42%)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        reducedMotion
          ? "transition-opacity duration-200"
          : "transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
      )}
      data-slot="coverflow-carousel-item"
      onClick={onSelect}
      style={
        reducedMotion
          ? {
              opacity: active ? 1 : 0,
              pointerEvents: active ? "auto" : "none",
              zIndex: active ? 6 : 0,
            }
          : {
              transform: `translate3d(${offset * 7.75}rem, 0, ${Math.abs(offset) * 2.4}rem) rotateY(${offset * -40}deg) scale(${1 - Math.abs(offset) * 0.06})`,
              opacity: hidden ? 0 : 1,
              pointerEvents: hidden ? "none" : "auto",
              zIndex: 8 - Math.abs(offset),
            }
      }
      tabIndex={hidden ? -1 : 0}
      type="button"
    >
      <img
        alt={item.imageAlt}
        className="size-44 object-cover sm:size-52"
        height={208}
        src={item.image}
        width={208}
      />
    </button>
  );
}

export function CoverflowCarousel({
  className,
  eyebrow = DEFAULT_EYEBROW,
  heading = DEFAULT_HEADING,
  description = DEFAULT_DESCRIPTION,
  items,
  autoplay = false,
  autoplayMs = 4000,
  ...props
}: CoverflowCarouselProps) {
  const headingId = useId();
  const stageId = useId();
  const reduceMotion = useReducedMotion();
  const covers = items && items.length > 0 ? items : DEFAULT_ITEMS;
  const count = covers.length;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const dragRef = useRef<{
    pointerId: number;
    startX: number;
    origin: number;
    moved: boolean;
  } | null>(null);
  const current = covers[active];

  const move = useCallback(
    (step: number) => {
      setActive((index) => wrapIndex(index + step, count));
    },
    [count],
  );

  useEffect(() => {
    if (!autoplay || reduceMotion || paused || count < 2) return;
    const timer = window.setInterval(() => move(1), autoplayMs);
    return () => window.clearInterval(timer);
  }, [autoplay, autoplayMs, count, move, paused, reduceMotion]);

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.button !== 0) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      origin: active,
      moved: false,
    };
    setPaused(true);
  };

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;
    const delta = event.clientX - drag.startX;
    if (Math.abs(delta) > 8) drag.moved = true;
    setActive(wrapIndex(drag.origin - Math.round(delta / DRAG_STEP_PX), count));
  };

  const endDrag = (event: PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    dragRef.current = null;
    setPaused(false);
  };

  return (
    <section
      aria-labelledby={headingId}
      className={cn("bg-background text-foreground", className)}
      data-slot="coverflow-carousel"
      {...props}
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <header className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
          {eyebrow ? (
            <p className="mb-3 text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
              {eyebrow}
            </p>
          ) : null}
          <h2
            className="text-3xl font-semibold tracking-[-0.05em] text-balance sm:text-4xl lg:text-5xl"
            id={headingId}
          >
            {heading}
          </h2>
          {description ? (
            <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
              {description}
            </p>
          ) : null}
        </header>
        <div
          className="rounded-[calc(var(--radius)+0.45rem)] border border-border bg-card px-4 py-10 text-card-foreground sm:px-8 sm:py-12"
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setPaused(false);
            }
          }}
          onFocus={() => setPaused(true)}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            aria-label="Cover rack"
            aria-roledescription="carousel"
            className="relative mx-auto h-56 w-full max-w-3xl touch-pan-y select-none [perspective:1200px] sm:h-64"
            id={stageId}
            onKeyDown={(event) => {
              if (event.key === "ArrowRight") {
                event.preventDefault();
                move(1);
              }
              if (event.key === "ArrowLeft") {
                event.preventDefault();
                move(-1);
              }
            }}
            onPointerCancel={endDrag}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
          >
            <div className="absolute inset-0 flex items-center justify-center [transform-style:preserve-3d]">
              {covers.map((item, index) => (
                <CoverPlate
                  item={item}
                  key={item.id}
                  offset={shortestOffset(index, active, count)}
                  onSelect={() => {
                    if (dragRef.current?.moved) return;
                    setActive(index);
                  }}
                  reducedMotion={reduceMotion}
                />
              ))}
            </div>
          </div>
          {current ? (
            <div
              aria-live="polite"
              className="mt-8 text-center"
              data-slot="coverflow-carousel-caption"
            >
              <p className="text-lg font-semibold tracking-tight">
                {current.title}
              </p>
              {current.subtitle ? (
                <p className="mt-1 text-sm text-muted-foreground">
                  {current.subtitle}
                </p>
              ) : null}
            </div>
          ) : null}
          {count > 1 ? (
            <div className="mt-6 flex justify-center gap-2">
              {covers.map((item, index) => (
                <button
                  aria-controls={stageId}
                  aria-current={index === active ? "true" : undefined}
                  aria-label={`Show ${item.title}`}
                  className={cn(
                    "size-2.5 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card",
                    index === active
                      ? "bg-foreground"
                      : "bg-border hover:bg-muted-foreground",
                  )}
                  key={`dot-${item.id}`}
                  onClick={() => setActive(index)}
                  type="button"
                />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
