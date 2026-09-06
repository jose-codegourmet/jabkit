"use client";

import { ArrowUpRight } from "lucide-react";
import {
  useEffect,
  useId,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { cn } from "@/lib/cn";
import type {
  StickyContentItem,
  StickyContentWrapperProps,
} from "./StickyContentWrapper.types";

const DEFAULT_ITEMS: StickyContentItem[] = [
  {
    id: "rooms",
    heading: "Rooms that hold a brief",
    body: "Keep the claim on screen while the proof changes beside it. One surface, four rooms, no extra chrome.",
    points: [
      "Open plan with a quiet wall",
      "Daylight as the primary lamp",
      "Materials named, not guessed",
    ],
    cta: { href: "#floor-plan", label: "See the floor" },
    imageSrc: "/assets/462a1be29787cd8e.webp",
    imageAlt: "Low oak lounge chair on a pale floor",
  },
  {
    id: "light",
    heading: "Light as a product",
    body: "The lamp is not decoration. It sets the tempo of the room and the photograph that sits next to the copy.",
    points: [
      "Arc that clears a reading chair",
      "Warm falloff, no glare on copy",
      "Still when motion is reduced",
    ],
    cta: { href: "#lighting", label: "Read the spec" },
    imageSrc: "/assets/6cc11e462a9aaded.webp",
    imageAlt: "Arc floor lamp lighting a quiet corner",
  },
  {
    id: "stone",
    heading: "Weight you can place",
    body: "A table that does not move when the layout does. Pair the still object with a line of copy that can change.",
    points: [
      "Sculpted stone, one piece",
      "Height set for a laptop and a cup",
      "Sits in sun without bleaching",
    ],
    cta: { href: "#tables", label: "View the table" },
    imageSrc: "/assets/488fa5330da1224c.webp",
    imageAlt: "Sculptural stone side table in a sunlit room",
  },
  {
    id: "rest",
    heading: "A pause that looks finished",
    body: "The daybed is the last frame. Copy, list, and CTA stay in the same column so the image can scale and swap.",
    points: [
      "Linen that reads in light and dark",
      "Plaster wall as a quiet ground",
      "Caption lives in the copy, not on the photo",
    ],
    cta: { href: "#daybed", label: "See the finish" },
    imageSrc: "/assets/7cb36691e11ed9af.webp",
    imageAlt: "Linen daybed against a plaster wall",
  },
];

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

function panelState(index: number, active: number) {
  if (index === active) return "active";
  if (index < active) return "exit";
  return "enter";
}

function CopyBlock({
  item,
  headingId,
}: {
  item: StickyContentItem;
  headingId?: string;
}) {
  return (
    <div className="flex max-w-xl flex-col">
      <h3
        className="text-3xl font-semibold tracking-[-0.05em] text-balance sm:text-4xl lg:text-5xl"
        id={headingId}
      >
        {item.heading}
      </h3>
      <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
        {item.body}
      </p>
      {item.points && item.points.length > 0 ? (
        <ul className="mt-6 space-y-2 text-sm leading-6 text-foreground sm:text-base">
          {item.points.map((point) => (
            <li className="flex gap-3" key={point}>
              <span
                aria-hidden="true"
                className="mt-2 size-1 shrink-0 rounded-full bg-primary"
              />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      ) : null}
      {item.cta ? (
        <a
          className="group mt-8 inline-flex w-fit items-center gap-2 text-sm font-medium text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          href={item.cta.href}
        >
          <span className="relative after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-right after:scale-x-0 after:bg-foreground after:transition-transform after:duration-300 group-hover:after:origin-left group-hover:after:scale-x-100 group-focus-visible:after:origin-left group-focus-visible:after:scale-x-100">
            {item.cta.label}
          </span>
          <ArrowUpRight
            aria-hidden="true"
            className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-focus-visible:-translate-y-0.5 group-focus-visible:translate-x-0.5"
          />
        </a>
      ) : null}
    </div>
  );
}

function MediaFrame({
  item,
  state,
  scaleMedia,
}: {
  item: StickyContentItem;
  state: "enter" | "active" | "exit";
  scaleMedia: boolean;
}) {
  return (
    <div
      className="jk-sticky-media absolute inset-0 overflow-hidden"
      data-scale={scaleMedia ? "on" : "off"}
      data-state={state}
    >
      <img
        alt={item.imageAlt}
        className="size-full object-cover"
        src={item.imageSrc}
      />
    </div>
  );
}

function StaticTour({
  items,
  mediaSide,
  headingId,
}: {
  items: StickyContentItem[];
  mediaSide: "start" | "end";
  headingId: string;
}) {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-16 px-5 py-16 sm:px-8 sm:py-20 lg:gap-24 lg:px-10 lg:py-24">
      {items.map((item, index) => (
        <article
          className={cn(
            "grid items-center gap-8 lg:grid-cols-2 lg:gap-14",
            mediaSide === "start" && "lg:[&>*:first-child]:order-2",
          )}
          key={item.id}
        >
          <CopyBlock
            headingId={index === 0 ? headingId : undefined}
            item={item}
          />
          <div className="aspect-[4/5] overflow-hidden rounded-[calc(var(--radius)+0.5rem)] border border-border bg-card sm:aspect-[5/4]">
            <img
              alt={item.imageAlt}
              className="size-full object-cover"
              src={item.imageSrc}
            />
          </div>
        </article>
      ))}
    </div>
  );
}

export function StickyContentWrapper({
  className,
  items,
  mediaSide = "end",
  scaleMedia = true,
  snap = true,
  ...props
}: StickyContentWrapperProps) {
  const headingId = useId();
  const beats = items && items.length > 0 ? items : DEFAULT_ITEMS;
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const sliceRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    if (reduceMotion) return;
    const stepCount = beats.length;
    const nodes = sliceRefs.current
      .slice(0, stepCount)
      .filter((node): node is HTMLDivElement => Boolean(node));
    if (nodes.length === 0) return;

    const visible = new Set<number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const index = Number(entry.target.getAttribute("data-step"));
          if (Number.isNaN(index)) continue;
          if (entry.isIntersecting) visible.add(index);
          else visible.delete(index);
        }
        const next = [...visible].sort((a, b) => a - b).at(-1);
        if (next !== undefined) setActive(next);
      },
      { rootMargin: "-32% 0px -32% 0px", threshold: 0 },
    );

    for (const node of nodes) observer.observe(node);
    return () => observer.disconnect();
  }, [beats.length, reduceMotion]);

  return (
    <section
      aria-labelledby={headingId}
      className={cn("bg-background text-foreground", className)}
      data-slot="sticky-content-wrapper"
      {...props}
    >
      <style href="jk-sticky-content-wrapper" precedence="default">{`
        .jk-sticky-copy,
        .jk-sticky-media {
          transition:
            opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
            transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .jk-sticky-copy[data-state="enter"] {
          opacity: 0;
          transform: translateY(1.25rem);
          pointer-events: none;
        }
        .jk-sticky-copy[data-state="active"] {
          opacity: 1;
          transform: translateY(0);
        }
        .jk-sticky-copy[data-state="exit"] {
          opacity: 0;
          transform: translateY(-1.25rem);
          pointer-events: none;
        }
        .jk-sticky-media[data-state="enter"] {
          opacity: 0;
        }
        .jk-sticky-media[data-state="active"] {
          opacity: 1;
        }
        .jk-sticky-media[data-state="exit"] {
          opacity: 0;
        }
        .jk-sticky-media[data-scale="on"][data-state="enter"] img {
          transform: scale(1.22);
        }
        .jk-sticky-media[data-scale="on"][data-state="active"] img {
          transform: scale(1.06);
        }
        .jk-sticky-media[data-scale="on"][data-state="exit"] img {
          transform: scale(1);
        }
        .jk-sticky-media img {
          transition: transform 1.1s cubic-bezier(0.16, 1, 0.3, 1);
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-sticky-copy,
          .jk-sticky-media,
          .jk-sticky-media img {
            transition: none;
            transform: none !important;
          }
        }
      `}</style>
      {reduceMotion ? (
        <StaticTour headingId={headingId} items={beats} mediaSide={mediaSide} />
      ) : (
        <div
          className="relative"
          style={{ height: `${beats.length * 100}dvh` }}
        >
          <div className="sticky top-0 flex h-[100dvh] items-stretch overflow-hidden">
            <div
              className={cn(
                "mx-auto flex h-full w-full max-w-6xl flex-col px-5 py-8 sm:px-8 lg:flex-row lg:items-stretch lg:gap-16 lg:px-10 lg:py-0",
                mediaSide === "start" && "lg:flex-row-reverse",
              )}
            >
              <div className="relative h-[42%] min-h-[12rem] flex-1 lg:h-full lg:w-[42%] lg:flex-none">
                {beats.map((item, index) => {
                  const state = panelState(index, active);
                  return (
                    <div
                      className="jk-sticky-copy absolute inset-0 flex items-center"
                      data-state={state}
                      inert={state !== "active" ? true : undefined}
                      key={item.id}
                    >
                      <CopyBlock
                        headingId={index === 0 ? headingId : undefined}
                        item={item}
                      />
                    </div>
                  );
                })}
              </div>
              <div className="relative mt-4 min-h-0 flex-[0.95] overflow-hidden rounded-[calc(var(--radius)+0.65rem)] border border-border bg-card lg:mt-0 lg:h-[min(72vh,40rem)] lg:w-1/2 lg:flex-none lg:self-center">
                {beats.map((item, index) => (
                  <MediaFrame
                    item={item}
                    key={item.id}
                    scaleMedia={scaleMedia}
                    state={panelState(index, active)}
                  />
                ))}
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
          >
            {beats.map((item, index) => (
              <div
                className={cn("h-[100dvh]", snap && "snap-start")}
                data-step={index}
                key={`${item.id}-step`}
                ref={(node) => {
                  sliceRefs.current[index] = node;
                }}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
