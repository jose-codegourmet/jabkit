"use client";

import {
  type KeyboardEvent,
  type PointerEvent,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { Badge } from "@/atoms/badge";
import { Button } from "@/atoms/button";
import { cn } from "@/lib/cn";
import type {
  Hero230Action,
  Hero230Logo,
  Hero230Props,
  Hero230Slide,
} from "./Hero230.types";

const DEFAULT_KICKER = "Now in public beta";
const DEFAULT_TITLE = "Proof up front. Product in motion.";
const DEFAULT_DESCRIPTION =
  "A stacked launch hero: a clear offer, partner marks that keep moving, and a filmstrip of the work that sold the room.";
const DEFAULT_PRIMARY: Hero230Action = {
  label: "Start a project",
  href: "#start",
};
const DEFAULT_SECONDARY: Hero230Action = {
  label: "See the work",
  href: "#work",
};

const DEFAULT_LOGOS: Hero230Logo[] = [
  { name: "Brightline" },
  { name: "Copper" },
  { name: "Midway" },
  { name: "Solstice" },
  { name: "Parcel" },
  { name: "Kindred" },
  { name: "Aperture" },
  { name: "Willow" },
];

const DEFAULT_SLIDES: Hero230Slide[] = [
  {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=720&h=900&q=80",
    alt: "Sunlit studio desks with plants and open notebooks",
    caption: "Studio floor",
  },
  {
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=720&h=900&q=80",
    alt: "Team gathered around laptops in a bright workspace",
    caption: "War room",
  },
  {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=720&h=900&q=80",
    alt: "Laptop showing charts on a wooden desk",
    caption: "Launch metrics",
  },
  {
    src: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=720&h=900&q=80",
    alt: "Two colleagues reviewing a screen together",
    caption: "Pairing",
  },
  {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=720&h=900&q=80",
    alt: "Collaborative workshop around a table",
    caption: "Workshop",
  },
  {
    src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=720&h=900&q=80",
    alt: "Quiet desk with a laptop and coffee",
    caption: "Focus hour",
  },
];

function wrapIndex(index: number, length: number) {
  if (length <= 0) return 0;
  return (index + length) % length;
}

function usePrefersReducedMotion() {
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

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className={cn("size-4", className)}
      fill="none"
    >
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HeroAction({
  action,
  variant,
}: {
  action: Hero230Action;
  variant: "primary" | "secondary";
}) {
  const content = (
    <>
      {action.label}
      <ArrowRight className="ml-1.5 transition-transform duration-200 ease-out group-hover:translate-x-0.5 motion-reduce:transition-none" />
    </>
  );
  if (action.href) {
    return (
      <Button
        variant={variant}
        size="lg"
        asChild
        className="group rounded-full px-6"
      >
        <a href={action.href}>{content}</a>
      </Button>
    );
  }
  return (
    <Button
      variant={variant}
      size="lg"
      onClick={action.onClick}
      className="group rounded-full px-6"
    >
      {content}
    </Button>
  );
}

function LogoMark({ logo }: { logo: Hero230Logo }) {
  if (logo.src) {
    return (
      <img
        src={logo.src}
        alt={logo.name}
        className="h-7 w-auto max-w-28 object-contain opacity-70"
      />
    );
  }
  return (
    <span className="flex items-center gap-2 text-sm font-semibold tracking-[-0.02em] text-muted-foreground">
      <span
        aria-hidden="true"
        className="grid size-6 place-items-center rounded-md border border-border bg-card font-mono text-[10px] text-foreground"
      >
        {logo.name.slice(0, 1)}
      </span>
      {logo.name}
    </span>
  );
}

function LogoMarquee({
  logos,
  animate,
}: {
  logos: Hero230Logo[];
  animate: boolean;
}) {
  const copies = animate
    ? ([
        { suffix: "lead", items: logos },
        { suffix: "loop", items: logos },
      ] as const)
    : ([{ suffix: "lead", items: logos }] as const);
  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,var(--jk-foreground)_12%,var(--jk-foreground)_88%,transparent)]">
      <p className="sr-only">
        Partner marks: {logos.map((logo) => logo.name).join(", ")}
      </p>
      <div
        aria-hidden="true"
        className={cn(
          "flex w-max items-center gap-12 py-2",
          animate && "jk-hero230-marquee",
        )}
      >
        {copies.flatMap((copy) =>
          copy.items.map((logo) => (
            <div
              key={`${copy.suffix}-${logo.name}`}
              className="flex shrink-0 items-center"
            >
              <LogoMark logo={logo} />
            </div>
          )),
        )}
      </div>
    </div>
  );
}

function FilmstripCard({
  slide,
  active,
  onSelect,
}: {
  slide: Hero230Slide;
  active: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      tabIndex={active ? 0 : -1}
      aria-hidden={active ? undefined : true}
      aria-label={slide.caption ? `Show ${slide.caption}` : slide.alt}
      aria-current={active ? "true" : undefined}
      className={cn(
        "group/card relative aspect-[3/4] w-[min(16rem,72vw)] shrink-0 overflow-hidden rounded-t-[1.75rem] rounded-b-md border border-border bg-card text-left shadow-[0_28px_56px_-32px_color-mix(in_oklab,var(--jk-foreground),transparent_48%)] transition-[transform,box-shadow] duration-300 ease-out motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        active
          ? "-translate-y-2"
          : "hover:-translate-y-1.5 motion-reduce:hover:translate-y-0",
      )}
    >
      <img
        src={slide.src}
        alt=""
        draggable={false}
        className="pointer-events-none size-full object-cover transition-transform duration-500 ease-out group-hover/card:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover/card:scale-100"
      />
    </button>
  );
}

export function Hero230({
  className,
  kicker = DEFAULT_KICKER,
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  primaryAction = DEFAULT_PRIMARY,
  secondaryAction = DEFAULT_SECONDARY,
  logos = DEFAULT_LOGOS,
  slides = DEFAULT_SLIDES,
  autoplay = true,
  autoplayMs = 3800,
  ...props
}: Hero230Props) {
  const headingId = useId();
  const carouselId = useId();
  const reducedMotion = usePrefersReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [focused, setFocused] = useState(false);
  const [userCaption, setUserCaption] = useState<string | null>(null);
  const swipe = useRef<{ x: number; pointerId: number } | null>(null);
  const swiped = useRef(false);
  const count = slides.length;
  const current = slides[active];
  const paused = hovering || focused;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !autoplay || reducedMotion || paused || count < 2) return;
    const timer = window.setInterval(() => {
      setActive((value) => wrapIndex(value + 1, count));
    }, autoplayMs);
    return () => window.clearInterval(timer);
  }, [autoplay, autoplayMs, count, mounted, paused, reducedMotion]);

  const goTo = useCallback(
    (next: number, fromUser = false) => {
      if (!count) return;
      const index = wrapIndex(next, count);
      setActive(index);
      if (fromUser) {
        const slide = slides[index];
        setUserCaption(slide?.caption ?? slide?.alt ?? null);
      }
    },
    [count, slides],
  );

  const selectSlide = useCallback(
    (index: number) => {
      if (swiped.current) {
        swiped.current = false;
        return;
      }
      goTo(index, true);
    },
    [goTo],
  );

  const onKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (count < 2) return;
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goTo(active + 1, true);
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goTo(active - 1, true);
    }
    if (event.key === "Home") {
      event.preventDefault();
      goTo(0, true);
    }
    if (event.key === "End") {
      event.preventDefault();
      goTo(count - 1, true);
    }
  };

  const onPointerDown = (event: PointerEvent<HTMLElement>) => {
    swiped.current = false;
    swipe.current = { x: event.clientX, pointerId: event.pointerId };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onPointerUp = (event: PointerEvent<HTMLElement>) => {
    if (!swipe.current || swipe.current.pointerId !== event.pointerId) return;
    const delta = event.clientX - swipe.current.x;
    swipe.current = null;
    if (Math.abs(delta) < 40 || count < 2) return;
    swiped.current = true;
    goTo(delta < 0 ? active + 1 : active - 1, true);
  };

  return (
    <section
      data-slot="hero230"
      aria-labelledby={headingId}
      className={cn(
        "overflow-hidden bg-background px-5 py-16 text-foreground sm:px-8 sm:py-20 lg:py-24",
        className,
      )}
      {...props}
    >
      <style href="jk-hero230" precedence="default">{`
        @keyframes jk-hero230-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .jk-hero230-marquee {
          animation: jk-hero230-marquee 30s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-hero230-marquee { animation: none; }
        }
      `}</style>

      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        {kicker ? (
          <Badge
            variant="outline"
            className="mb-6 h-auto rounded-full border-border px-3.5 py-1 text-xs font-medium tracking-[0.04em]"
          >
            {kicker}
          </Badge>
        ) : null}
        <h1
          id={headingId}
          className="max-w-2xl text-4xl leading-[1.08] font-semibold tracking-[-0.06em] text-balance sm:text-5xl lg:text-6xl"
        >
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            {description}
          </p>
        ) : null}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {primaryAction ? (
            <HeroAction action={primaryAction} variant="primary" />
          ) : null}
          {secondaryAction ? (
            <HeroAction action={secondaryAction} variant="secondary" />
          ) : null}
        </div>
      </div>

      {logos.length ? (
        <div className="mx-auto mt-12 max-w-5xl sm:mt-14">
          <LogoMarquee logos={logos} animate={mounted && !reducedMotion} />
        </div>
      ) : null}

      {count ? (
        <section
          id={carouselId}
          aria-roledescription="carousel"
          aria-label="Product filmstrip"
          onKeyDown={onKeyDown}
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onPointerCancel={() => {
            swipe.current = null;
          }}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          onFocus={() => setFocused(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setFocused(false);
            }
          }}
          className="relative mx-auto mt-12 w-full max-w-6xl outline-none sm:mt-16"
        >
          <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,var(--jk-foreground)_8%,var(--jk-foreground)_92%,transparent)]">
            <div
              className={cn(
                "flex items-end justify-start gap-5 px-[max(1.25rem,calc(50%-8rem))] py-6",
                reducedMotion
                  ? "transition-none"
                  : "transition-transform duration-500 ease-out",
              )}
              style={{
                transform: `translateX(calc(${-active} * (min(16rem, 72vw) + 1.25rem)))`,
              }}
            >
              {slides.map((slide, index) => (
                <FilmstripCard
                  key={`${slide.src}-${slide.alt}`}
                  slide={slide}
                  active={index === active}
                  onSelect={() => selectSlide(index)}
                />
              ))}
            </div>
          </div>
          {current?.caption ? (
            <p className="mt-2 text-center text-sm font-medium text-muted-foreground">
              {current.caption}
            </p>
          ) : null}
          {userCaption ? (
            <p className="sr-only" aria-live="polite">
              {userCaption}
            </p>
          ) : null}
          {count > 1 ? (
            <div className="mt-5 flex justify-center gap-2">
              {slides.map((slide, index) => (
                <button
                  key={`dot-${slide.alt}`}
                  type="button"
                  aria-label={`Show slide ${index + 1}`}
                  aria-controls={carouselId}
                  aria-current={index === active ? "true" : undefined}
                  onClick={() => selectSlide(index)}
                  className={cn(
                    "size-2.5 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                    index === active
                      ? "bg-foreground"
                      : "bg-border hover:bg-muted-foreground",
                  )}
                />
              ))}
            </div>
          ) : null}
        </section>
      ) : null}
    </section>
  );
}
