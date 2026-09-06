"use client";

import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from "lucide-react";
import { useId, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/atoms/avatar/Avatar";
import { Badge } from "@/atoms/badge";
import { Button } from "@/atoms/button";
import { cn } from "@/lib/cn";
import type { TestimonialProps, TestimonialQuote } from "./Testimonial.types";

const DEFAULT_EYEBROW = "Customer stories";
const DEFAULT_HEADING = "The page that operators actually quote.";
const DEFAULT_DESCRIPTION =
  "Stacked reviews from studios that shipped with Harbor. Cycle the deck, or skip to a named story.";
const DEFAULT_VERIFIED = "Verified review";
const DEFAULT_PREVIOUS = "Previous review";
const DEFAULT_NEXT = "Next review";
const DEFAULT_RATING_LABEL = "out of five";

const DEFAULT_QUOTES: TestimonialQuote[] = [
  {
    id: "amara",
    quote:
      "We stopped rewriting the launch brief for every channel. The page we ship is the page operators actually open on Monday.",
    name: "Amara Cole",
    role: "Design director",
    company: "Harbor Field",
    avatarSrc: "/assets/bd48582e630a15fa.webp",
    avatarAlt: "Portrait of Amara Cole",
    fallback: "AC",
    rating: 5,
    storyHref: "#story-amara",
    storyLabel: "Read the field notes",
  },
  {
    id: "julian",
    quote:
      "The tokens held through a dark-mode pass and a last-minute crop change. Nothing in the section had to be restyled by hand.",
    name: "Julian Hart",
    role: "Product engineer",
    company: "Northline",
    avatarSrc: "/assets/2a364f729e4f7c09.webp",
    avatarAlt: "Portrait of Julian Hart",
    fallback: "JH",
    rating: 5,
    storyHref: "#story-julian",
    storyLabel: "See the install path",
  },
  {
    id: "priya",
    quote:
      "Photography, wordmark, and quotes finally sit on the same desk. Clients stop asking which template we started from.",
    name: "Priya Nair",
    role: "Brand lead",
    company: "Studio Calder",
    avatarSrc: "/assets/d111cc60a8f2bf68.webp",
    avatarAlt: "Portrait of Priya Nair",
    fallback: "PN",
    rating: 4,
    storyHref: "#story-priya",
    storyLabel: "Open the brand brief",
  },
  {
    id: "eli",
    quote:
      "Reviews used to live in a slide no one forwarded. Putting them on the landing page cut the 'is this real?' email in half.",
    name: "Eli Voss",
    role: "Studio producer",
    company: "Northline",
    avatarSrc: "/assets/040bd026249d7af9.webp",
    avatarAlt: "Portrait of Eli Voss",
    fallback: "EV",
    rating: 5,
    storyHref: "#story-eli",
    storyLabel: "Read the launch recap",
  },
];

function StarRow({
  rating,
  ratingLabel,
}: {
  rating: number;
  ratingLabel: string;
}) {
  const clamped = Math.max(0, Math.min(5, Math.round(rating)));
  const stars = [1, 2, 3, 4, 5] as const;
  return (
    <p className="flex items-center gap-0.5 text-primary">
      <span className="sr-only">
        {clamped} {ratingLabel}
      </span>
      {stars.map((star) => (
        <StarIcon
          aria-hidden="true"
          className={cn(
            "size-3.5",
            star <= clamped
              ? "fill-primary text-primary"
              : "fill-none text-muted-foreground/50",
          )}
          key={star}
        />
      ))}
    </p>
  );
}

function QuoteCard({
  quote,
  verifiedLabel,
  ratingLabel,
  active,
}: {
  quote: TestimonialQuote;
  verifiedLabel: string;
  ratingLabel: string;
  active?: boolean;
}) {
  const attribution = quote.company
    ? `${quote.role} · ${quote.company}`
    : quote.role;

  return (
    <article
      className="flex h-full flex-col justify-between gap-8 rounded-[calc(var(--radius)+0.55rem)] border border-border bg-card p-6 text-card-foreground shadow-[0_28px_48px_-32px_color-mix(in_oklab,var(--jk-foreground),transparent_55%)] sm:p-8"
      data-active={active ? "true" : undefined}
      data-slot="testimonial-card"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <Avatar className="size-11" size="lg">
            {quote.avatarSrc ? (
              <AvatarImage alt={quote.avatarAlt ?? ""} src={quote.avatarSrc} />
            ) : null}
            <AvatarFallback>{quote.fallback}</AvatarFallback>
          </Avatar>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold tracking-tight">
              {quote.name}
            </p>
            <p className="truncate text-xs leading-5 text-muted-foreground">
              {attribution}
            </p>
          </div>
        </div>
        {typeof quote.rating === "number" ? (
          <StarRow rating={quote.rating} ratingLabel={ratingLabel} />
        ) : null}
      </div>

      <blockquote className="text-xl font-medium tracking-[-0.03em] text-pretty sm:text-2xl">
        <p>“{quote.quote}”</p>
      </blockquote>

      <div className="flex items-center justify-between gap-3">
        <Badge variant="outline">{verifiedLabel}</Badge>
        {quote.storyHref && quote.storyLabel ? (
          <a
            className="text-sm font-medium text-primary underline-offset-4 hover:underline"
            href={quote.storyHref}
          >
            {quote.storyLabel}
          </a>
        ) : (
          <span />
        )}
      </div>
    </article>
  );
}

export function Testimonial({
  className,
  eyebrow = DEFAULT_EYEBROW,
  heading = DEFAULT_HEADING,
  description = DEFAULT_DESCRIPTION,
  quotes = DEFAULT_QUOTES,
  layout = "stack",
  verifiedLabel = DEFAULT_VERIFIED,
  previousLabel = DEFAULT_PREVIOUS,
  nextLabel = DEFAULT_NEXT,
  ratingLabel = DEFAULT_RATING_LABEL,
  ...props
}: TestimonialProps) {
  const headingId = useId();
  const liveId = useId();
  const [activeIndex, setActiveIndex] = useState(0);
  const count = quotes.length;
  const active = count === 0 ? 0 : ((activeIndex % count) + count) % count;
  const stacked = layout === "stack" && count > 1;

  const go = (delta: number) => {
    if (count === 0) return;
    setActiveIndex((current) => (current + delta + count) % count);
  };

  return (
    <section
      aria-labelledby={headingId}
      className={cn("bg-background text-foreground", className)}
      data-slot="testimonial"
      {...props}
    >
      <style href="jk-testimonial" precedence="default">{`
        .jk-testimonial-stack [data-slot="testimonial-layer"] {
          transition:
            transform 480ms cubic-bezier(0.32, 0.72, 0, 1),
            opacity 480ms cubic-bezier(0.32, 0.72, 0, 1);
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-testimonial-stack [data-slot="testimonial-layer"] {
            transition: none;
            transform: none !important;
          }
          .jk-testimonial-stack [data-slot="testimonial-layer"][data-layer="hidden"],
          .jk-testimonial-stack [data-slot="testimonial-layer"][data-layer="back"] {
            opacity: 0 !important;
            pointer-events: none;
          }
        }
      `}</style>
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <header className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
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

        {count === 0 ? null : stacked ? (
          <div className="mx-auto w-full max-w-2xl">
            <div
              aria-live="polite"
              className="jk-testimonial-stack relative grid pb-10"
              id={liveId}
            >
              {quotes.map((quote, index) => {
                const position = (index - active + count) % count;
                const layer =
                  position === 0
                    ? "front"
                    : position === 1
                      ? "mid"
                      : position === 2
                        ? "back"
                        : "hidden";
                const isFront = layer === "front";

                return (
                  <div
                    className="col-start-1 row-start-1"
                    data-layer={layer}
                    data-slot="testimonial-layer"
                    key={quote.id}
                    style={{
                      zIndex: count - position,
                      opacity: layer === "hidden" ? 0 : 1,
                      pointerEvents: isFront ? "auto" : "none",
                      transform:
                        layer === "front"
                          ? "translateY(0) scale(1)"
                          : layer === "mid"
                            ? "translateY(1.05rem) scale(0.96)"
                            : "translateY(2.1rem) scale(0.92)",
                    }}
                  >
                    <QuoteCard
                      active={isFront}
                      quote={quote}
                      ratingLabel={ratingLabel}
                      verifiedLabel={verifiedLabel}
                    />
                  </div>
                );
              })}
            </div>

            <div className="mt-12 flex items-center justify-center gap-3 sm:mt-14">
              <Button
                aria-controls={liveId}
                aria-label={previousLabel}
                onClick={() => go(-1)}
                size="sm"
                variant="secondary"
              >
                <ChevronLeftIcon aria-hidden="true" className="size-4" />
                <span className="sr-only sm:not-sr-only">{previousLabel}</span>
              </Button>
              <div className="flex items-center gap-1.5">
                {quotes.map((quote, index) => {
                  const selected = index === active;
                  return (
                    <button
                      aria-controls={liveId}
                      aria-current={selected ? "true" : undefined}
                      aria-label={`${quote.name}, ${index + 1} of ${count}`}
                      className={cn(
                        "h-2 rounded-full transition-[width,background-color] duration-300 ease-out motion-reduce:transition-none",
                        selected
                          ? "w-8 bg-foreground"
                          : "w-2 bg-muted-foreground/35 hover:bg-muted-foreground/55",
                      )}
                      key={quote.id}
                      onClick={() => setActiveIndex(index)}
                      type="button"
                    />
                  );
                })}
              </div>
              <Button
                aria-controls={liveId}
                aria-label={nextLabel}
                onClick={() => go(1)}
                size="sm"
                variant="secondary"
              >
                <span className="sr-only sm:not-sr-only">{nextLabel}</span>
                <ChevronRightIcon aria-hidden="true" className="size-4" />
              </Button>
            </div>
          </div>
        ) : (
          <div
            className={cn(
              "grid items-stretch gap-5",
              count > 1 ? "md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1",
            )}
          >
            {quotes.map((quote) => (
              <QuoteCard
                key={quote.id}
                quote={quote}
                ratingLabel={ratingLabel}
                verifiedLabel={verifiedLabel}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
