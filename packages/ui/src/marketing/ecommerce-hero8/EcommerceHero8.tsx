"use client";

// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { Button } from "@/atoms/button";
import { cn } from "@/lib/cn";
import { ecommerceHero8Slides } from "./EcommerceHero8.mocks";
import type {
  EcommerceHero8Props,
  EcommerceHero8Slide,
} from "./EcommerceHero8.types";

const defaults = {
  slides: ecommerceHero8Slides,
  autoplay: true,
  autoplayMs: 5200,
} as const;

function usePrefersReducedMotion() {
  const [reduced, setReduced] = React.useState(false);
  React.useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  return reduced;
}

function ProductRail({
  slides,
  active,
  onSelect,
  railId,
}: {
  slides: EcommerceHero8Slide[];
  active: number;
  onSelect: (index: number) => void;
  railId: string;
}) {
  const itemRefs = React.useRef<Array<HTMLButtonElement | null>>([]);

  React.useEffect(() => {
    itemRefs.current[active]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [active]);

  return (
    <div
      className="flex gap-3 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      role="tablist"
      aria-label="Featured products"
    >
      {slides.map((slide, index) => {
        const selected = index === active;
        return (
          <button
            key={`${slide.productName}-${slide.productSrc}`}
            ref={(node) => {
              itemRefs.current[index] = node;
            }}
            type="button"
            role="tab"
            id={`${railId}-tab-${index}`}
            aria-selected={selected}
            aria-controls={railId}
            onClick={() => onSelect(index)}
            className={cn(
              "group w-28 shrink-0 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background focus-visible:ring-offset-2 focus-visible:ring-offset-foreground/40 sm:w-32",
            )}
          >
            <span
              className={cn(
                "block overflow-hidden rounded-[--radius] border bg-muted",
                selected ? "border-background" : "border-transparent",
              )}
            >
              <img
                src={slide.productSrc}
                alt=""
                className="aspect-square size-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              />
            </span>
            <span
              className={cn(
                "mt-2 block text-sm tracking-[-0.02em] text-background",
                selected ? "font-medium" : "font-normal opacity-80",
              )}
            >
              {slide.productName}
            </span>
          </button>
        );
      })}
    </div>
  );
}

export function EcommerceHero8({
  className,
  slides = defaults.slides,
  autoplay = defaults.autoplay,
  autoplayMs = defaults.autoplayMs,
}: EcommerceHero8Props) {
  const headingId = React.useId();
  const carouselId = React.useId();
  const reducedMotion = usePrefersReducedMotion();
  const [mounted, setMounted] = React.useState(false);
  const [active, setActive] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const count = slides.length;
  const current = slides[active] ?? slides[0];

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    if (!mounted || !autoplay || reducedMotion || paused || count < 2) return;
    const timer = window.setInterval(() => {
      setActive((value) => (value + 1) % count);
    }, autoplayMs);
    return () => window.clearInterval(timer);
  }, [autoplay, autoplayMs, count, mounted, paused, reducedMotion]);

  const move = React.useCallback(
    (direction: -1 | 1) => {
      if (!count) return;
      setActive((value) => (value + direction + count) % count);
    },
    [count],
  );

  if (!current) return null;

  return (
    <section
      className={cn("relative overflow-hidden bg-muted text-foreground", className)}
      aria-labelledby={headingId}
      data-slot="ecommerce-hero8"
    >
      <style href="jk-ecommerce-hero8" precedence="default">{`
        @keyframes jk-ecommerce-hero8-enter {
          from { opacity: 0; transform: translateY(0.85rem); }
          to { opacity: 1; transform: translateY(0); }
        }
        .jk-ecommerce-hero8-enter {
          animation: jk-ecommerce-hero8-enter 640ms ease-out both;
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-ecommerce-hero8-enter { animation: none; }
        }
      `}</style>
      <div
        id={carouselId}
        aria-roledescription="carousel"
        aria-label="Collection stories"
        className="relative min-h-svh"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) {
            setPaused(false);
          }
        }}
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
      >
        {slides.map((slide, index) => {
          const isActive = index === active;
          return (
            <div
              key={`${slide.backgroundSrc}-${slide.title}`}
              className={cn(
                "absolute inset-0",
                isActive ? "z-10" : "z-0",
                reducedMotion
                  ? isActive
                    ? "opacity-100"
                    : "opacity-0"
                  : "transition-opacity duration-700 ease-out",
                !reducedMotion && (isActive ? "opacity-100" : "opacity-0"),
              )}
              aria-hidden={!isActive}
            >
              <img
                src={slide.backgroundSrc}
                alt={isActive ? slide.backgroundAlt : ""}
                className="size-full object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[color-mix(in_oklab,var(--jk-foreground)_58%,transparent)]"
              />
            </div>
          );
        })}
        <div className="relative z-20 flex min-h-svh flex-col justify-end gap-10 px-5 py-10 sm:px-8 lg:justify-between lg:px-12 lg:py-14">
          <div
            className={cn(
              "mt-auto max-w-xl text-background lg:mt-24",
              mounted && !reducedMotion && "jk-ecommerce-hero8-enter",
            )}
            key={current.title}
          >
            <h1
              id={headingId}
              className="font-serif text-4xl leading-[1.08] font-normal tracking-[-0.03em] text-balance sm:text-5xl lg:text-7xl"
            >
              {current.title}
            </h1>
            <p className="mt-5 max-w-md text-base leading-7 text-background/85 sm:text-lg">
              {current.description}
            </p>
            <div className="mt-8">
              <Button
                variant="secondary"
                size="lg"
                asChild
                className="border-background bg-transparent text-background shadow-none hover:bg-background/10"
              >
                <a href={current.ctaHref}>{current.ctaLabel}</a>
              </Button>
            </div>
          </div>
          <ProductRail
            slides={slides}
            active={active}
            onSelect={setActive}
            railId={carouselId}
          />
        </div>
      </div>
    </section>
  );
}
