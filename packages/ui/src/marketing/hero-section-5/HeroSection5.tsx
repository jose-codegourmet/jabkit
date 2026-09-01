"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Button } from "@/atoms/button";
import { cn } from "@/lib/cn";
import type {
  HeroSection5Action,
  HeroSection5Brand,
  HeroSection5Logo,
  HeroSection5NavItem,
  HeroSection5Props,
  HeroSection5Video,
} from "./HeroSection5.types";

const defaultBrand: HeroSection5Brand = { name: "Lumen", href: "#top" };

const defaultNavItems: HeroSection5NavItem[] = [
  { label: "Platform", href: "#platform" },
  { label: "Research", href: "#research" },
  { label: "Pricing", href: "#pricing" },
  { label: "Journal", href: "#journal" },
];

const defaultHeaderAction: HeroSection5Action = {
  label: "Request access",
  href: "#access",
};

const defaultPrimaryAction: HeroSection5Action = {
  label: "Start a trial",
  href: "#trial",
};

const defaultSecondaryAction: HeroSection5Action = {
  label: "Watch the brief",
  href: "#brief",
};

const defaultVideo: HeroSection5Video = {
  src: "https://videos.pexels.com/video-files/3129957/3129957-hd_1280_720_25fps.mp4",
  poster:
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
  label: "Abstract particle field drifting through a dark research lab",
};

const defaultLogos: HeroSection5Logo[] = [
  { name: "Helio" },
  { name: "Northline" },
  { name: "Fieldwork" },
  { name: "Orbit" },
  { name: "Kite" },
  { name: "Harbor" },
  { name: "Nova" },
  { name: "Ampere" },
];

const defaults = {
  kicker: "Research platform",
  title: "See the system, not just the signal.",
  description:
    "A cinematic plate for labs and platforms that lead with atmosphere — looping film, a quiet offer, and the marks that already trust the work.",
  autoplay: true,
} as const;

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
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
  action: HeroSection5Action;
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

function HeaderAction({ action }: { action: HeroSection5Action }) {
  if (action.href) {
    return (
      <Button variant="primary" size="sm" asChild>
        <a href={action.href}>{action.label}</a>
      </Button>
    );
  }
  return (
    <Button variant="primary" size="sm" onClick={action.onClick}>
      {action.label}
    </Button>
  );
}

function LogoMark({ logo }: { logo: HeroSection5Logo }) {
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
  logos: HeroSection5Logo[];
  animate: boolean;
}) {
  const copies = [
    { suffix: "lead", items: logos },
    { suffix: "loop", items: logos },
  ] as const;
  return (
    <div
      className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,var(--jk-foreground)_12%,var(--jk-foreground)_88%,transparent)]"
      aria-hidden={animate}
    >
      <div
        className={cn(
          "flex w-max items-center gap-10 py-2",
          animate && "jk-hero-section-5-marquee",
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

export function HeroSection5({
  className,
  brand = defaultBrand,
  navItems = defaultNavItems,
  headerAction = defaultHeaderAction,
  kicker = defaults.kicker,
  title = defaults.title,
  description = defaults.description,
  primaryAction = defaultPrimaryAction,
  secondaryAction = defaultSecondaryAction,
  video = defaultVideo,
  logos = defaultLogos,
  autoplay = defaults.autoplay,
}: HeroSection5Props) {
  const headingId = useId();
  const menuId = useId();
  const videoRef = useRef<HTMLVideoElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [playing, setPlaying] = useState(false);
  const shouldPlay = autoplay && !reducedMotion;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const node = videoRef.current;
    if (!node) return;
    if (!shouldPlay) {
      node.pause();
      setPlaying(false);
      return;
    }
    const play = () => {
      node
        .play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
    };
    if (video.src) play();
  }, [shouldPlay, video.src]);

  const togglePlayback = () => {
    const node = videoRef.current;
    if (!node) return;
    if (node.paused) {
      node
        .play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
      return;
    }
    node.pause();
    setPlaying(false);
  };

  return (
    <section
      data-slot="hero-section-5"
      className={cn("bg-background text-foreground", className)}
      aria-labelledby={headingId}
    >
      <style href="jk-hero-section-5" precedence="default">{`
        @keyframes jk-hero-section-5-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .jk-hero-section-5-marquee {
          animation: jk-hero-section-5-marquee 32s linear infinite;
        }
        .jk-hero-section-5-marquee:hover,
        .jk-hero-section-5-marquee:focus-within {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-hero-section-5-marquee { animation: none; }
        }
      `}</style>
      <div className="mx-auto max-w-6xl px-4 py-5 sm:px-6 lg:px-8 lg:py-8">
        <div className="relative overflow-hidden rounded-[1.75rem] border border-border bg-card p-1 lg:rounded-[3rem]">
          <div className="relative isolate aspect-[2/3] overflow-hidden rounded-[1.5rem] bg-muted lg:aspect-video lg:rounded-[2.75rem]">
            <div aria-hidden="true" className="absolute inset-0">
              <div className="absolute -top-16 left-1/4 size-72 rounded-full bg-primary/25 blur-3xl" />
              <div className="absolute right-0 bottom-0 size-80 rounded-full bg-chart-4/20 blur-3xl" />
              <div className="absolute inset-x-12 bottom-16 h-40 rounded-full bg-chart-5/15 blur-3xl" />
            </div>
            <video
              ref={videoRef}
              className="absolute inset-0 size-full object-cover"
              src={video.src}
              poster={video.poster}
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden="true"
              tabIndex={-1}
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-background/25"
            />
            <header className="absolute inset-x-0 top-0 z-20 flex items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8 lg:py-6">
              <a
                href={brand.href ?? "#top"}
                className="text-sm font-semibold tracking-[-0.03em] text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {brand.name}
              </a>
              {navItems.length ? (
                <nav
                  aria-label="Primary"
                  className="hidden items-center gap-6 lg:flex"
                >
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="text-sm text-foreground/80 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              ) : null}
              <div className="flex items-center gap-2">
                {headerAction ? <HeaderAction action={headerAction} /> : null}
                {navItems.length ? (
                  <Button
                    variant="secondary"
                    size="sm"
                    className="lg:hidden"
                    aria-expanded={menuOpen}
                    aria-controls={menuId}
                    onClick={() => setMenuOpen((open) => !open)}
                  >
                    {menuOpen ? (
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="size-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M6 6l12 12M18 6L6 18" />
                      </svg>
                    ) : (
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="size-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M4 7h16M4 12h16M4 17h16" />
                      </svg>
                    )}
                    <span className="sr-only">
                      {menuOpen ? "Close menu" : "Open menu"}
                    </span>
                  </Button>
                ) : null}
              </div>
            </header>
            {menuOpen && navItems.length ? (
              <nav
                id={menuId}
                aria-label="Mobile"
                className="absolute inset-x-3 top-20 z-20 rounded-[--radius] border border-border bg-background/95 p-3 shadow-[0_24px_48px_-28px_color-mix(in_oklab,var(--jk-foreground),transparent_45%)] backdrop-blur-xl lg:hidden"
              >
                <ul className="grid gap-1">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-sm text-foreground hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ) : null}
            <div className="absolute inset-x-0 bottom-0 z-10 px-5 py-6 sm:px-8 sm:py-8 lg:px-12 lg:py-12">
              {kicker ? (
                <p className="mb-3 font-mono text-xs font-medium tracking-[0.16em] text-primary uppercase">
                  {kicker}
                </p>
              ) : null}
              <h1
                id={headingId}
                className="max-w-xl text-3xl font-semibold tracking-[-0.06em] text-balance sm:text-5xl lg:max-w-2xl lg:text-6xl"
              >
                {title}
              </h1>
              {description ? (
                <p className="mt-4 max-w-lg text-base leading-7 text-foreground/80 sm:text-lg sm:leading-8">
                  {description}
                </p>
              ) : null}
              <div className="mt-7 flex flex-wrap items-center gap-3">
                {primaryAction ? (
                  <HeroAction action={primaryAction} variant="primary" />
                ) : null}
                {secondaryAction ? (
                  <HeroAction action={secondaryAction} variant="secondary" />
                ) : null}
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-foreground/80"
                  onClick={togglePlayback}
                >
                  {playing ? "Pause film" : "Play film"}
                </Button>
              </div>
            </div>
          </div>
        </div>
        <p className="sr-only">{video.label ?? video.src}</p>
        {logos.length ? (
          <div className="mt-8">
            <p className="mb-3 text-center text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase">
              Trusted by teams in the field
            </p>
            <LogoMarquee logos={logos} animate={mounted && !reducedMotion} />
          </div>
        ) : null}
      </div>
    </section>
  );
}
