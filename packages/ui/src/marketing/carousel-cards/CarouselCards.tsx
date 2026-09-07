"use client";

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  HeartIcon,
  StarIcon,
} from "lucide-react";
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { Badge } from "@/atoms/badge";
import { Button } from "@/atoms/button";
import { cn } from "@/lib/cn";
import type {
  CarouselCardsItem,
  CarouselCardsProps,
} from "./CarouselCards.types";

const DEFAULT_EYEBROW = "In the city this month";
const DEFAULT_HEADING = "Experiences worth a slow afternoon";
const DEFAULT_DESCRIPTION =
  "Book a desk, a walk, or a table. Cards snap as you scroll; save the ones you want to keep.";
const DEFAULT_VIEW_ALL_HREF = "#all-experiences";
const DEFAULT_VIEW_ALL_LABEL = "Show all";

const DEFAULT_ITEMS: CarouselCardsItem[] = [
  {
    id: "drawing",
    title: "Dawn drawing on the harbor wall",
    image: "/assets/d3f9bde61c9a29e7.webp",
    imageAlt: "Empty office corridor with glass rooms and daylight",
    location: "North Quay, Lisbon",
    price: 48,
    currency: "EUR",
    rating: 4.9,
    reviewCount: 128,
    badge: "Original",
    date: "Closes 21 May",
    href: "#drawing",
  },
  {
    id: "studio",
    title: "Half-day desk in the plant room",
    image: "/assets/462c849dc9a41e59.webp",
    imageAlt: "Sunlit studio desks with plants and open notebooks",
    location: "Campo de Ourique",
    price: 72,
    currency: "EUR",
    rating: 4.8,
    reviewCount: 86,
    badge: "Popular",
    date: "Open Saturdays",
    href: "#studio",
  },
  {
    id: "lamp",
    title: "Evening light study with an arc lamp",
    image: "/assets/6cc11e462a9aaded.webp",
    imageAlt: "Arc floor lamp lighting a quiet corner",
    location: "Estrela atelier",
    price: 36,
    currency: "EUR",
    rating: 4.7,
    reviewCount: 54,
    date: "Closes 4 Jun",
    href: "#lamp",
  },
  {
    id: "concrete",
    title: "Concrete stair walk with a guide",
    image: "/assets/97c532d558fa4fbc.webp",
    imageAlt: "Concrete structure photographed from the ground",
    location: "Alcântara yards",
    price: 55,
    currency: "EUR",
    rating: 4.6,
    reviewCount: 41,
    badge: "New",
    date: "Fridays only",
    href: "#concrete",
  },
  {
    id: "lounge",
    title: "Oak lounge hour and a slow pour",
    image: "/assets/462a1be29787cd8e.webp",
    imageAlt: "Low oak lounge chair on a pale floor",
    location: "Príncipe Real",
    price: 29,
    currency: "EUR",
    rating: 4.9,
    reviewCount: 203,
    badge: "Quiet",
    date: "Drop-in",
    href: "#lounge",
  },
  {
    id: "stone",
    title: "Stone table still-life session",
    image: "/assets/488fa5330da1224c.webp",
    imageAlt: "Sculptural stone side table in a sunlit room",
    location: "Mouraria studio",
    price: 64,
    currency: "EUR",
    rating: 4.8,
    reviewCount: 67,
    date: "Closes 12 Jun",
    href: "#stone",
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

function formatPrice(price: number, currency = "EUR") {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(price);
}

function ListingCard({
  item,
  favorited,
  onToggleFavorite,
}: {
  item: CarouselCardsItem;
  favorited: boolean;
  onToggleFavorite: () => void;
}) {
  const titleId = useId();
  const media = (
    <div className="relative overflow-hidden rounded-[calc(var(--radius)+0.15rem)] bg-muted">
      <img
        alt={item.imageAlt}
        className="aspect-[4/5] h-auto w-full object-cover motion-safe:transition-transform motion-safe:duration-500 motion-safe:ease-out motion-safe:group-hover/card:scale-[1.04]"
        src={item.image}
      />
      {item.badge ? (
        <Badge
          className="pointer-events-none absolute top-3 left-3 border-border/80 bg-background/90 text-foreground backdrop-blur-sm"
          variant="outline"
        >
          {item.badge}
        </Badge>
      ) : null}
    </div>
  );
  const copy = (
    <div className="mt-3 flex flex-col gap-1">
      <p
        className="text-[0.95rem] leading-snug font-semibold tracking-tight text-balance"
        id={titleId}
      >
        {item.title}
      </p>
      <p className="text-sm text-muted-foreground">{item.location}</p>
      <div className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
        {item.rating != null ? (
          <span className="inline-flex items-center gap-1 text-foreground">
            <StarIcon
              aria-hidden="true"
              className="size-3.5 fill-warning text-warning"
            />
            <span className="tabular-nums">{item.rating.toFixed(1)}</span>
            {item.reviewCount != null ? (
              <span className="text-muted-foreground">
                ({item.reviewCount})
              </span>
            ) : null}
          </span>
        ) : null}
        {item.date ? (
          <span className="text-muted-foreground">{item.date}</span>
        ) : null}
      </div>
      <p className="mt-1 text-sm">
        <span className="font-semibold tabular-nums">
          {formatPrice(item.price, item.currency)}
        </span>
        <span className="text-muted-foreground"> / person</span>
      </p>
    </div>
  );
  const favorite = (
    <Button
      aria-label={favorited ? "Remove from saved" : "Save listing"}
      aria-pressed={favorited}
      className="absolute top-3 right-3 z-10 size-9 rounded-full border border-border/70 bg-background/90 p-0 text-foreground shadow-none backdrop-blur-sm hover:bg-background"
      onClick={onToggleFavorite}
      size="sm"
      type="button"
      variant="ghost"
    >
      <HeartIcon
        aria-hidden="true"
        className={cn(
          "size-4",
          favorited ? "fill-primary text-primary" : "text-foreground",
        )}
      />
    </Button>
  );

  return (
    <article
      aria-labelledby={titleId}
      className="group/card relative w-[15rem] shrink-0 snap-start sm:w-[16.25rem]"
      data-slot="carousel-cards-item"
    >
      {item.href ? (
        <a
          className="block rounded-[--radius] outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          href={item.href}
        >
          {media}
          {copy}
        </a>
      ) : (
        <>
          {media}
          {copy}
        </>
      )}
      {favorite}
    </article>
  );
}

export function CarouselCards({
  className,
  eyebrow = DEFAULT_EYEBROW,
  heading = DEFAULT_HEADING,
  description = DEFAULT_DESCRIPTION,
  viewAllHref = DEFAULT_VIEW_ALL_HREF,
  viewAllLabel = DEFAULT_VIEW_ALL_LABEL,
  items,
  onFavoriteChange,
  ...props
}: CarouselCardsProps) {
  const headingId = useId();
  const scrollerId = useId();
  const scrollerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const listings = items && items.length > 0 ? items : DEFAULT_ITEMS;
  const [saved, setSaved] = useState<Set<string>>(
    () =>
      new Set(listings.filter((item) => item.favorited).map((item) => item.id)),
  );
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const syncEdges = useCallback(() => {
    const node = scrollerRef.current;
    if (!node) return;
    const max = node.scrollWidth - node.clientWidth;
    setCanPrev(node.scrollLeft > 8);
    setCanNext(node.scrollLeft < max - 8);
  }, []);

  useEffect(() => {
    const node = scrollerRef.current;
    if (!node) return;
    syncEdges();
    node.addEventListener("scroll", syncEdges, { passive: true });
    window.addEventListener("resize", syncEdges);
    return () => {
      node.removeEventListener("scroll", syncEdges);
      window.removeEventListener("resize", syncEdges);
    };
  }, [syncEdges]);

  const scrollByPage = (direction: -1 | 1) => {
    const node = scrollerRef.current;
    if (!node) return;
    const firstCard = node.querySelector<HTMLElement>(
      "[data-slot='carousel-cards-item']",
    );
    const step = firstCard
      ? firstCard.getBoundingClientRect().width + 16
      : node.clientWidth * 0.7;
    node.scrollBy({
      left: direction * Math.max(step, 160),
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  const toggleFavorite = (id: string) => {
    setSaved((current) => {
      const next = new Set(current);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      onFavoriteChange?.(id, next.has(id));
      return next;
    });
  };

  return (
    <section
      aria-labelledby={headingId}
      className={cn("bg-background text-foreground", className)}
      data-slot="carousel-cards"
      {...props}
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <header className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            {eyebrow ? (
              <p className="mb-3 text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
                {eyebrow}
              </p>
            ) : null}
            <h2
              className="text-3xl font-semibold tracking-[-0.05em] text-balance sm:text-4xl"
              id={headingId}
            >
              {heading}
            </h2>
            {description ? (
              <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                {description}
              </p>
            ) : null}
          </div>
          <div className="flex shrink-0 items-center gap-2">
            {viewAllHref ? (
              <a
                className="mr-1 text-sm font-medium text-foreground underline-offset-4 hover:underline"
                href={viewAllHref}
              >
                {viewAllLabel}
              </a>
            ) : null}
            <Button
              aria-controls={scrollerId}
              aria-label="Previous listings"
              className="size-10 rounded-full p-0"
              disabled={!canPrev}
              onClick={() => scrollByPage(-1)}
              size="sm"
              type="button"
              variant="secondary"
            >
              <ChevronLeftIcon aria-hidden="true" className="size-4" />
            </Button>
            <Button
              aria-controls={scrollerId}
              aria-label="Next listings"
              className="size-10 rounded-full p-0"
              disabled={!canNext}
              onClick={() => scrollByPage(1)}
              size="sm"
              type="button"
              variant="secondary"
            >
              <ChevronRightIcon aria-hidden="true" className="size-4" />
            </Button>
          </div>
        </header>
        <div
          className={cn(
            "flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
            !reduceMotion && "scroll-smooth",
          )}
          id={scrollerId}
          ref={scrollerRef}
        >
          {listings.map((item) => (
            <ListingCard
              favorited={saved.has(item.id)}
              item={item}
              key={item.id}
              onToggleFavorite={() => toggleFavorite(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
