"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import {
  type CSSProperties,
  type PointerEvent,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { cn } from "@/lib/cn";
import type {
  CoverflowCarouselItem,
  CoverflowCarouselProps,
} from "./CoverflowCarousel.types";

const DEFAULT_CARD_WIDTH = "clamp(148px, 22vw, 260px)";
const SETTLE_GAIN = 0.16;
const SETTLE_EPSILON = 0.0004;
const THROW_GAIN = 0.18;
const THROW_CAP = 2;
const TILT_CAP = 82;

const DEFAULT_ITEMS: CoverflowCarouselItem[] = [
  {
    id: "tidewater",
    image: "/assets/d3f9bde61c9a29e7.webp",
    imageAlt: "Glass rooms along an empty daylight corridor",
    title: "Tidewater",
    subtitle: "Long Player",
    meta: [
      { label: "Year", value: "2019" },
      { label: "Producer", value: "Ada Ferrow" },
      { label: "Length", value: "3:42" },
    ],
  },
  {
    id: "nightshift",
    image: "/assets/462c849dc9a41e59.webp",
    imageAlt: "Sunlit studio desks with plants and open notebooks",
    title: "Nightshift",
    subtitle: "Long Player",
    meta: [
      { label: "Year", value: "2021" },
      { label: "Producer", value: "Kell Mora" },
      { label: "Length", value: "4:08" },
    ],
  },
  {
    id: "overexposed",
    image: "/assets/6cc11e462a9aaded.webp",
    imageAlt: "Arc floor lamp lighting a quiet corner",
    title: "Overexposed",
    subtitle: "Single",
    meta: [
      { label: "Year", value: "2018" },
      { label: "Producer", value: "Juno Vale" },
      { label: "Length", value: "2:57" },
    ],
  },
  {
    id: "slow-bloom",
    image: "/assets/97c532d558fa4fbc.webp",
    imageAlt: "Concrete structure photographed from the ground",
    title: "Slow Bloom",
    subtitle: "EP",
    meta: [
      { label: "Year", value: "2022" },
      { label: "Producer", value: "Rue Alcott" },
      { label: "Length", value: "3:15" },
    ],
  },
  {
    id: "open-palm",
    image: "/assets/462a1be29787cd8e.webp",
    imageAlt: "Low oak lounge chair on a pale floor",
    title: "Open Palm",
    subtitle: "Single",
    meta: [
      { label: "Year", value: "2020" },
      { label: "Producer", value: "Ada Ferrow" },
      { label: "Length", value: "3:01" },
    ],
  },
  {
    id: "low-country",
    image: "/assets/488fa5330da1224c.webp",
    imageAlt: "Sculptural stone side table in a sunlit room",
    title: "Low Country",
    subtitle: "Long Player",
    meta: [
      { label: "Year", value: "2017" },
      { label: "Producer", value: "Sim Oyo" },
      { label: "Length", value: "5:20" },
    ],
  },
  {
    id: "dry-season",
    image: "/assets/66859c6f46cc742b.webp",
    imageAlt: "Quiet interior still with a pale wall and a single chair",
    title: "Dry Season",
    subtitle: "EP",
    meta: [
      { label: "Year", value: "2016" },
      { label: "Producer", value: "Juno Vale" },
      { label: "Length", value: "2:44" },
    ],
  },
  {
    id: "understory",
    image: "/assets/1fd89b6a1d45ac75.webp",
    imageAlt: "Soft daylight across a timber-lined room",
    title: "Understory",
    subtitle: "Single",
    meta: [
      { label: "Year", value: "2023" },
      { label: "Producer", value: "Kell Mora" },
      { label: "Length", value: "3:38" },
    ],
  },
  {
    id: "paper-lantern",
    image: "/assets/e8b49d7b4617a825.webp",
    imageAlt: "Abstract still of folded paper and warm light",
    title: "Paper Lantern",
    subtitle: "Single",
    meta: [
      { label: "Year", value: "2021" },
      { label: "Producer", value: "Rue Alcott" },
      { label: "Length", value: "2:19" },
    ],
  },
  {
    id: "still-water",
    image: "/assets/c21dbcfeac157c9b.webp",
    imageAlt: "Portrait still used as a sleeve for Still Water",
    title: "Still Water",
    subtitle: "Long Player",
    meta: [
      { label: "Year", value: "2015" },
      { label: "Producer", value: "Ada Ferrow" },
      { label: "Length", value: "4:51" },
    ],
  },
  {
    id: "third-rail",
    image: "/assets/1391b53bc91d2127.webp",
    imageAlt: "Portrait still used as a sleeve for Third Rail",
    title: "Third Rail",
    subtitle: "EP",
    meta: [
      { label: "Year", value: "2024" },
      { label: "Producer", value: "Sim Oyo" },
      { label: "Length", value: "3:07" },
    ],
  },
  {
    id: "undertow",
    image: "/assets/c65cd8af6df1b122.webp",
    imageAlt: "Portrait still used as a sleeve for Undertow",
    title: "Undertow",
    subtitle: "Single",
    meta: [
      { label: "Year", value: "2020" },
      { label: "Producer", value: "Juno Vale" },
      { label: "Length", value: "3:29" },
    ],
  },
];

const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

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

export function CoverflowCarousel({
  className,
  items,
  rotate = 44,
  depth = 0.6,
  perspective = 3,
  falloff = 0.56,
  fade = 0.1,
  cardWidth = DEFAULT_CARD_WIDTH,
  gap = 0.05,
  loop = true,
  showCaption = false,
  showPagination = false,
  showNavigation = false,
  label = "Cover carousel",
  cardClassName,
  style,
  ...props
}: CoverflowCarouselProps) {
  const covers = items && items.length > 0 ? items : DEFAULT_ITEMS;
  const count = covers.length;
  const reduceMotion = useReducedMotion();

  const frameRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const posRef = useRef(0);
  const targetRef = useRef(0);
  const widthRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const dragRef = useRef<{
    id: number;
    x: number;
    pos: number;
    v: number;
    t: number;
  } | null>(null);

  const [selected, setSelected] = useState(0);

  const indexAt = useCallback(
    (pos: number) => wrapIndex(Math.round(pos), count),
    [count],
  );

  const paint = useCallback(() => {
    const width = widthRef.current;
    if (!width) return;
    const pitch = width * (1 + gap);
    const pos = posRef.current;

    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      let offset = index - pos;
      if (loop) {
        offset = ((offset % count) + count) % count;
        if (offset > count / 2) offset -= count;
      }

      const distance = Math.abs(offset);

      if (reduceMotion) {
        const active = distance < 0.5;
        card.style.transform = "translateX(-50%)";
        card.style.opacity = active ? "1" : "0";
        card.style.zIndex = active ? "100" : "0";
        card.style.pointerEvents = active ? "auto" : "none";
        return;
      }

      const ramp = distance === 0 ? 0 : distance ** falloff;
      const tilt = Math.min(rotate * ramp, TILT_CAP) * Math.sign(offset);
      const edge = loop ? Math.min(1, Math.max(0, count / 2 - distance)) : 1;

      card.style.transform =
        `translateX(calc(-50% + ${offset * pitch}px)) ` +
        `translateZ(${-depth * width * ramp}px) rotateY(${-tilt}deg)`;
      card.style.opacity = String(Math.max(0, 1 - fade * distance) * edge);
      card.style.zIndex = String(100 - Math.round(distance));
      card.style.pointerEvents = "auto";
    });
  }, [count, depth, fade, falloff, gap, loop, reduceMotion, rotate]);

  const settle = useCallback(
    (target: number) => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      targetRef.current = target;
      setSelected(indexAt(target));

      if (reduceMotion) {
        posRef.current = target;
        paint();
        rafRef.current = null;
        return;
      }

      const step = () => {
        const remaining = target - posRef.current;
        if (Math.abs(remaining) < SETTLE_EPSILON) {
          posRef.current = target;
          paint();
          rafRef.current = null;
          return;
        }
        posRef.current += remaining * SETTLE_GAIN;
        paint();
        rafRef.current = requestAnimationFrame(step);
      };
      rafRef.current = requestAnimationFrame(step);
    },
    [indexAt, paint, reduceMotion],
  );

  const clampPos = useCallback(
    (pos: number) => (loop ? pos : Math.max(0, Math.min(count - 1, pos))),
    [count, loop],
  );

  const goTo = useCallback(
    (index: number) => {
      const target = loop
        ? index + Math.round((targetRef.current - index) / count) * count
        : index;
      settle(clampPos(target));
    },
    [clampPos, count, loop, settle],
  );

  const nudge = useCallback(
    (by: number) => settle(clampPos(Math.round(targetRef.current) + by)),
    [clampPos, settle],
  );

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.button !== 0) return;
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    event.currentTarget.setPointerCapture(event.pointerId);
    targetRef.current = posRef.current;
    dragRef.current = {
      id: event.pointerId,
      x: event.clientX,
      pos: posRef.current,
      v: 0,
      t: performance.now(),
    };
  };

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.id !== event.pointerId) return;

    const pitch = widthRef.current * (1 + gap);
    if (!pitch) return;

    const now = performance.now();
    const previous = posRef.current;
    posRef.current = clampPos(drag.pos - (event.clientX - drag.x) / pitch);
    drag.v = ((posRef.current - previous) / Math.max(now - drag.t, 1)) * 1000;
    drag.t = now;

    const index = indexAt(posRef.current);
    if (index !== selected) setSelected(index);
    paint();
  };

  const endDrag = (event: PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.id !== event.pointerId) return;
    dragRef.current = null;
    const carried = Math.max(
      -THROW_CAP,
      Math.min(THROW_CAP, drag.v * THROW_GAIN),
    );
    settle(clampPos(Math.round(posRef.current + carried)));
  };

  useIsoLayoutEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;

    const measure = () => {
      const card = cardRefs.current[0];
      if (!card) return;
      widthRef.current = card.offsetWidth;
      paint();
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(frame);
    return () => observer.disconnect();
  }, [paint]);

  useEffect(
    () => () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    },
    [],
  );

  const active = covers[selected];
  const rootStyle = {
    ...style,
    "--cf-card": cardWidth,
  } as CSSProperties;

  return (
    <section
      aria-label={label}
      aria-roledescription="carousel"
      className={cn("w-full bg-background text-foreground", className)}
      data-slot="coverflow-carousel"
      role="region"
      style={rootStyle}
      {...props}
    >
      <div className="relative">
        <div
          className="cursor-grab overflow-hidden py-10 outline-none ring-ring focus-visible:ring-2 active:cursor-grabbing"
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") {
              event.preventDefault();
              nudge(-1);
            } else if (event.key === "ArrowRight") {
              event.preventDefault();
              nudge(1);
            }
          }}
          onPointerCancel={endDrag}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          ref={frameRef}
          style={{
            perspective: `calc(var(--cf-card) * ${perspective})`,
            touchAction: "pan-y",
          }}
          tabIndex={0}
        >
          <div
            className="relative select-none [transform-style:preserve-3d]"
            style={{ height: "var(--cf-card)" }}
          >
            {covers.map((item, index) => (
              <div
                aria-label={`${index + 1} of ${count}`}
                aria-roledescription="slide"
                className={cn(
                  "absolute top-0 left-1/2 aspect-square overflow-hidden rounded-2xl bg-muted shadow-xl will-change-transform",
                  cardClassName,
                )}
                key={item.id}
                ref={(node) => {
                  cardRefs.current[index] = node;
                }}
                role="group"
                style={{ width: "var(--cf-card)" }}
              >
                <img
                  alt={item.imageAlt}
                  className="size-full select-none object-cover"
                  draggable={false}
                  src={item.image}
                />
              </div>
            ))}
          </div>
        </div>

        {showNavigation && count > 1 ? (
          <>
            <button
              aria-label="Previous slide"
              className="absolute top-1/2 left-3 z-[200] -translate-y-1/2 rounded-full bg-background/70 p-2 text-foreground backdrop-blur transition hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              onClick={() => nudge(-1)}
              type="button"
            >
              <ChevronLeftIcon className="size-5" />
            </button>
            <button
              aria-label="Next slide"
              className="absolute top-1/2 right-3 z-[200] -translate-y-1/2 rounded-full bg-background/70 p-2 text-foreground backdrop-blur transition hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              onClick={() => nudge(1)}
              type="button"
            >
              <ChevronRightIcon className="size-5" />
            </button>
          </>
        ) : null}
      </div>

      {showCaption && active?.title ? (
        <div
          aria-live="polite"
          className="mt-2 flex flex-col items-center px-6 motion-safe:animate-in motion-safe:fade-in motion-safe:duration-300 motion-reduce:animate-none"
          data-slot="coverflow-carousel-caption"
          key={selected}
        >
          <p className="text-[15px] font-semibold tracking-tight text-foreground">
            {active.title}
          </p>
          {active.subtitle ? (
            <p className="mt-1 text-[13px] text-muted-foreground">
              {active.subtitle}
            </p>
          ) : null}
          {active.meta && active.meta.length > 0 ? (
            <dl className="mt-10 w-full max-w-[230px] text-[12px]">
              {active.meta.map((row) => (
                <div className="flex justify-between py-[5px]" key={row.label}>
                  <dt className="text-muted-foreground">{row.label}</dt>
                  <dd className="font-medium text-foreground">{row.value}</dd>
                </div>
              ))}
            </dl>
          ) : null}
        </div>
      ) : null}

      {showPagination && count > 1 ? (
        <div className="mt-6 flex items-center justify-center gap-2">
          {covers.map((item, index) => (
            <button
              aria-current={index === selected ? "true" : undefined}
              aria-label={`Go to slide ${index + 1}`}
              className={cn(
                "size-2 rounded-full bg-foreground transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                index === selected ? "opacity-100" : "opacity-30",
              )}
              key={`dot-${item.id}`}
              onClick={() => goTo(index)}
              type="button"
            />
          ))}
        </div>
      ) : null}
    </section>
  );
}
