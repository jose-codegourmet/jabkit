"use client";

import * as React from "react";
import { Button } from "@/atoms/button";
import { cn } from "@/lib/cn";
import type {
  Hero231Action,
  Hero231Logo,
  Hero231Portrait,
  Hero231Props,
} from "./Hero231.types";

const defaultPortraits: Hero231Portrait[] = [
  {
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=480&h=640&q=80",
    alt: "Portrait of Amara Cole",
    name: "Amara Cole",
    role: "Creative director",
  },
  {
    src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=480&h=640&q=80",
    alt: "Portrait of Julian Hart",
    name: "Julian Hart",
    role: "Design lead",
  },
  {
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=480&h=640&q=80",
    alt: "Portrait of Noor Elamin",
    name: "Noor Elamin",
    role: "Brand strategist",
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=480&h=640&q=80",
    alt: "Portrait of Mateo Ruiz",
    name: "Mateo Ruiz",
    role: "Art director",
  },
  {
    src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=480&h=640&q=80",
    alt: "Portrait of Sable Wren",
    name: "Sable Wren",
    role: "Producer",
  },
];

const defaultLogos: Hero231Logo[] = [
  { name: "Northline" },
  { name: "Helio" },
  { name: "Fieldwork" },
  { name: "Orbit" },
  { name: "Kite & Co" },
  { name: "Lumen" },
  { name: "Harbor" },
  { name: "Nova" },
];

const defaults = {
  kicker: "Creative studio",
  title: "The people and partners behind the work.",
  description:
    "A split hero for teams who want a clear offer on the left and living proof on the right — portraits in coverflow, marks in motion.",
  primaryAction: { label: "Start a project", href: "#start" },
  secondaryAction: { label: "See the work", href: "#work" },
  autoplay: true,
  autoplayMs: 4000,
} as const;

function shortestOffset(index: number, active: number, length: number) {
  let offset = index - active;
  const half = length / 2;
  if (offset > half) offset -= length;
  if (offset < -half) offset += length;
  return offset;
}

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

function HeroAction({
  action,
  variant,
}: {
  action: Hero231Action;
  variant: "primary" | "secondary";
}) {
  if (action.href) {
    return (
      <Button variant={variant} size="lg" asChild>
        <a href={action.href}>{action.label}</a>
      </Button>
    );
  }
  return (
    <Button variant={variant} size="lg" onClick={action.onClick}>
      {action.label}
    </Button>
  );
}

function LogoMark({ logo }: { logo: Hero231Logo }) {
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
  logos: Hero231Logo[];
  animate: boolean;
}) {
  const copies = [
    { suffix: "lead", items: logos },
    { suffix: "loop", items: logos },
  ] as const;
  return (
    <div
      className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,var(--jk-foreground)_10%,var(--jk-foreground)_90%,transparent)]"
      aria-hidden={animate}
    >
      <div
        className={cn(
          "flex w-max items-center gap-10 py-2",
          animate && "jk-hero231-marquee",
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

function PortraitCard({
  portrait,
  offset,
  reducedMotion,
  onSelect,
}: {
  portrait: Hero231Portrait;
  offset: number;
  reducedMotion: boolean;
  onSelect: () => void;
}) {
  const hidden = Math.abs(offset) > 2;
  const initial = (portrait.name ?? portrait.alt).slice(0, 1);
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-label={portrait.name ? `Show ${portrait.name}` : portrait.alt}
      aria-hidden={hidden || undefined}
      tabIndex={hidden ? -1 : 0}
      className={cn(
        "absolute overflow-hidden rounded-[--radius] border border-border bg-muted text-left shadow-[0_28px_60px_-32px_color-mix(in_oklab,var(--jk-foreground),transparent_45%)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        reducedMotion
          ? "transition-opacity duration-300"
          : "transition-[transform,opacity] duration-500 ease-out",
      )}
      style={
        reducedMotion
          ? {
              opacity: offset === 0 ? 1 : 0,
              pointerEvents: offset === 0 ? "auto" : "none",
              zIndex: offset === 0 ? 4 : 0,
            }
          : {
              transform: `translate3d(${offset * 7.25}rem, 0, ${-Math.abs(offset) * 5.5}rem) rotateY(${offset * -30}deg) scale(${1 - Math.abs(offset) * 0.1})`,
              opacity: hidden ? 0 : 1,
              pointerEvents: hidden ? "none" : "auto",
              zIndex: 8 - Math.abs(offset),
            }
      }
    >
      <img
        src={portrait.src}
        alt={portrait.alt}
        width={224}
        height={320}
        className="h-80 w-56 object-cover"
      />
      <span className="sr-only">{initial}</span>
    </button>
  );
}

export function Hero231({
  className,
  kicker = defaults.kicker,
  title = defaults.title,
  description = defaults.description,
  primaryAction = defaults.primaryAction,
  secondaryAction = defaults.secondaryAction,
  portraits = defaultPortraits,
  logos = defaultLogos,
  autoplay = defaults.autoplay,
  autoplayMs = defaults.autoplayMs,
}: Hero231Props) {
  const headingId = React.useId();
  const carouselId = React.useId();
  const reducedMotion = usePrefersReducedMotion();
  const [mounted, setMounted] = React.useState(false);
  const [active, setActive] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const count = portraits.length;
  const current = portraits[active];

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

  return (
    <section
      className={cn("overflow-hidden bg-background text-foreground", className)}
      aria-labelledby={headingId}
    >
      <style href="jk-hero231" precedence="default">{`
        @keyframes jk-hero231-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .jk-hero231-marquee {
          animation: jk-hero231-marquee 28s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-hero231-marquee { animation: none; }
        }
      `}</style>
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-16 lg:py-24">
        <div className="max-w-xl">
          {kicker ? (
            <p className="mb-5 font-mono text-xs font-medium tracking-[0.16em] text-primary uppercase">
              {kicker}
            </p>
          ) : null}
          <h1
            id={headingId}
            className="text-4xl font-semibold tracking-[-0.06em] text-balance sm:text-5xl lg:text-6xl"
          >
            {title}
          </h1>
          {description ? (
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              {description}
            </p>
          ) : null}
          <div className="mt-9 flex flex-wrap gap-3">
            {primaryAction ? (
              <HeroAction action={primaryAction} variant="primary" />
            ) : null}
            {secondaryAction ? (
              <HeroAction action={secondaryAction} variant="secondary" />
            ) : null}
          </div>
        </div>
        <div className="min-w-0">
          {logos.length ? (
            <div className="mb-6">
              <LogoMarquee logos={logos} animate={mounted && !reducedMotion} />
            </div>
          ) : null}
          <div className="relative overflow-hidden rounded-[calc(var(--radius)+0.35rem)] bg-muted px-4 py-8 sm:px-8 sm:py-10">
            <section
              id={carouselId}
              aria-roledescription="carousel"
              aria-label="Portrait coverflow"
              className="relative mx-auto h-80 w-full max-w-xl [perspective:1100px]"
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
              <div className="absolute inset-0 flex items-center justify-center [transform-style:preserve-3d]">
                {mounted
                  ? portraits.map((portrait, index) => (
                      <PortraitCard
                        key={`${portrait.src}-${portrait.alt}`}
                        portrait={portrait}
                        offset={shortestOffset(index, active, count)}
                        reducedMotion={reducedMotion}
                        onSelect={() => setActive(index)}
                      />
                    ))
                  : current && (
                      <div className="h-80 w-56 overflow-hidden rounded-[--radius] border border-border bg-card">
                        <img
                          src={current.src}
                          alt={current.alt}
                          className="size-full object-cover"
                        />
                      </div>
                    )}
              </div>
            </section>
            {current?.name ? (
              <div className="mt-6 text-center" aria-live="polite">
                <p className="text-sm font-medium">{current.name}</p>
                {current.role ? (
                  <p className="mt-1 text-sm text-muted-foreground">
                    {current.role}
                  </p>
                ) : null}
              </div>
            ) : null}
            {count > 1 ? (
              <div className="mt-5 flex justify-center gap-2">
                {portraits.map((portrait, index) => (
                  <button
                    key={`dot-${portrait.alt}`}
                    type="button"
                    aria-label={`Show portrait ${index + 1}`}
                    aria-controls={carouselId}
                    aria-current={index === active ? "true" : undefined}
                    onClick={() => setActive(index)}
                    className={cn(
                      "size-2.5 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-muted",
                      index === active
                        ? "bg-foreground"
                        : "bg-border hover:bg-muted-foreground",
                    )}
                  />
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
