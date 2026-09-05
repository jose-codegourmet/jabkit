"use client";

import * as React from "react";
import { Button } from "@/atoms/button";
import { cn } from "@/lib/cn";
import type { Hero146Action, Hero146Props } from "./Hero146.types";

const defaults = {
  title: "Deploy enterprise agents your operators can actually run.",
  description:
    "Stand up policy-aware agents, then tune every handoff in a no-code canvas. No waiting on a specialist to ship the next workflow.",
  action: { label: "Get started", href: "#start" },
  caption: "Build your first agent in",
  captionHighlight: "under 8 minutes",
  videoPoster: "/assets/ee004332d5917332.webp",
  videoLabel: "Product walkthrough",
  autoplay: true,
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

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const total = Math.floor(seconds);
  const minutes = Math.floor(total / 60);
  const rest = total % 60;
  return `${minutes}:${rest.toString().padStart(2, "0")}`;
}

function HeroAction({ action }: { action: Hero146Action }) {
  const className =
    "relative z-10 rounded-full bg-[linear-gradient(180deg,color-mix(in_oklab,var(--jk-foreground),var(--jk-background)_18%),var(--jk-foreground))] px-6 text-background shadow-[0_16px_32px_-18px_color-mix(in_oklab,var(--jk-foreground),transparent_35%)] hover:brightness-110";
  if (action.href) {
    return (
      <Button variant="primary" size="lg" className={className} asChild>
        <a href={action.href}>{action.label}</a>
      </Button>
    );
  }
  return (
    <Button
      variant="primary"
      size="lg"
      className={className}
      onClick={action.onClick}
    >
      {action.label}
    </Button>
  );
}

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
    >
      <path d="M8.25 5.8v12.4c0 .9 1 1.45 1.76.97l9.1-6.2a1.15 1.15 0 0 0 0-1.94l-9.1-6.2a1.15 1.15 0 0 0-1.76.97Z" />
    </svg>
  );
}

function PauseIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
    >
      <rect x="6.5" y="5" width="4" height="14" rx="1" />
      <rect x="13.5" y="5" width="4" height="14" rx="1" />
    </svg>
  );
}

export function Hero146({
  className,
  title = defaults.title,
  description = defaults.description,
  action = defaults.action,
  caption = defaults.caption,
  captionHighlight = defaults.captionHighlight,
  videoSrc,
  videoPoster = defaults.videoPoster,
  videoLabel = defaults.videoLabel,
  embedSrc,
  embedTitle = "Presentation",
  autoplay = defaults.autoplay,
  ...props
}: Hero146Props) {
  const headingId = React.useId();
  const seekId = React.useId();
  const reducedMotion = usePrefersReducedMotion();
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [mounted, setMounted] = React.useState(false);
  const [playing, setPlaying] = React.useState(false);
  const [duration, setDuration] = React.useState(0);
  const [currentTime, setCurrentTime] = React.useState(0);
  const [showingEmbed, setShowingEmbed] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    const video = videoRef.current;
    if (!video || !videoSrc || showingEmbed) return;
    if (autoplay && mounted && !reducedMotion) {
      video.muted = true;
      void video.play().then(
        () => setPlaying(true),
        () => setPlaying(false),
      );
    }
  }, [autoplay, mounted, reducedMotion, showingEmbed, videoSrc]);

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  const togglePlayback = React.useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play().then(
        () => setPlaying(true),
        () => setPlaying(false),
      );
    } else {
      video.pause();
      setPlaying(false);
    }
  }, []);

  const openPresentation = React.useCallback(() => {
    if (embedSrc) {
      videoRef.current?.pause();
      setPlaying(false);
      setShowingEmbed(true);
      return;
    }
    togglePlayback();
  }, [embedSrc, togglePlayback]);

  const seekTo = (value: number) => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = value;
    setCurrentTime(value);
  };

  return (
    <section
      data-slot="hero146"
      aria-labelledby={headingId}
      className={cn(
        "relative overflow-hidden bg-background text-foreground",
        className,
      )}
      {...props}
    >
      <style href="jk-hero146" precedence="default">{`
        @keyframes jk-hero146-ping {
          0% { transform: scale(1); opacity: 0.45; }
          80%, 100% { transform: scale(1.7); opacity: 0; }
        }
        .jk-hero146-ping {
          animation: jk-hero146-ping 2.4s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-hero146-ping { animation: none; }
        }
      `}</style>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,var(--jk-foreground)_40%,transparent)]"
        style={{
          backgroundImage: `
            linear-gradient(to right, color-mix(in oklab, var(--jk-border), transparent 42%) 1px, transparent 1px),
            linear-gradient(to bottom, color-mix(in oklab, var(--jk-border), transparent 42%) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="relative border-b border-border">
        <div className="mx-auto flex max-w-3xl flex-col items-center px-5 pt-16 pb-12 text-center sm:px-8 sm:pt-20 sm:pb-14">
          <h1
            id={headingId}
            className="bg-[linear-gradient(180deg,var(--jk-foreground)_0%,color-mix(in_oklab,var(--jk-foreground),var(--jk-muted-foreground)_55%)_100%)] bg-clip-text text-4xl leading-[1.08] font-semibold tracking-[-0.05em] text-balance text-transparent sm:text-5xl lg:text-6xl"
          >
            {title}
          </h1>
          {description ? (
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              {description}
            </p>
          ) : null}
          {action ? (
            <div className="relative mt-9 inline-flex">
              <span
                aria-hidden="true"
                className="jk-hero146-ping pointer-events-none absolute -inset-2 rounded-full border border-foreground/35"
              />
              <HeroAction action={action} />
            </div>
          ) : null}
        </div>
      </div>

      <div className="relative mx-auto max-w-5xl px-5 pt-8 pb-16 sm:px-8 sm:pt-10 sm:pb-20">
        {caption ? (
          <p className="mb-5 text-center text-sm text-muted-foreground sm:text-base">
            {caption}{" "}
            {captionHighlight ? (
              <span className="font-medium text-foreground underline decoration-foreground/40 underline-offset-[5px]">
                {captionHighlight}
              </span>
            ) : null}
          </p>
        ) : null}

        <div className="relative overflow-hidden rounded-[calc(var(--radius)+0.2rem)] border border-border bg-card shadow-[0_28px_60px_-36px_color-mix(in_oklab,var(--jk-foreground),transparent_50%)]">
          <div className="relative aspect-video overflow-hidden bg-muted">
            {showingEmbed && embedSrc ? (
              <iframe
                title={embedTitle}
                src={embedSrc}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 size-full border-0"
              />
            ) : (
              <>
                {videoSrc ? (
                  <video
                    ref={videoRef}
                    src={videoSrc}
                    poster={videoPoster}
                    playsInline
                    muted
                    loop
                    preload="metadata"
                    aria-label={videoLabel}
                    className="absolute inset-0 size-full object-cover"
                    onPlay={() => setPlaying(true)}
                    onPause={() => setPlaying(false)}
                    onTimeUpdate={(event) =>
                      setCurrentTime(event.currentTarget.currentTime)
                    }
                    onLoadedMetadata={(event) =>
                      setDuration(event.currentTarget.duration)
                    }
                    onEnded={() => setPlaying(false)}
                  />
                ) : (
                  <img
                    src={videoPoster}
                    alt={videoLabel}
                    className="absolute inset-0 size-full object-cover"
                  />
                )}
                <button
                  type="button"
                  onClick={openPresentation}
                  aria-label={
                    embedSrc
                      ? "Play presentation"
                      : playing
                        ? "Pause video"
                        : "Play video"
                  }
                  className={cn(
                    "group absolute top-1/2 left-1/2 z-10 grid -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                    playing && !embedSrc && "opacity-0 hover:opacity-100",
                  )}
                >
                  <span
                    aria-hidden="true"
                    className="absolute size-24 rounded-full border border-foreground/25 transition-transform duration-300 ease-out group-hover:scale-75 motion-reduce:transition-none"
                  />
                  <span className="relative grid size-16 place-items-center rounded-full border border-border bg-background/90 text-foreground shadow-[0_18px_36px_-20px_color-mix(in_oklab,var(--jk-foreground),transparent_40%)] backdrop-blur-sm">
                    {playing && !embedSrc ? (
                      <PauseIcon className="size-6" />
                    ) : (
                      <PlayIcon className="ml-0.5 size-7" />
                    )}
                  </span>
                </button>
              </>
            )}
          </div>

          {!showingEmbed ? (
            <div className="flex items-center gap-3 border-t border-border bg-card/90 px-4 py-3 backdrop-blur-sm">
              <button
                type="button"
                onClick={togglePlayback}
                disabled={!videoSrc}
                aria-label={playing ? "Pause" : "Play"}
                className="grid size-8 shrink-0 place-items-center rounded-full border border-border bg-background text-foreground transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card disabled:opacity-40"
              >
                {playing ? (
                  <PauseIcon className="size-3.5" />
                ) : (
                  <PlayIcon className="ml-px size-3.5" />
                )}
              </button>
              <span className="w-10 font-mono text-[11px] text-muted-foreground tabular-nums">
                {formatTime(currentTime)}
              </span>
              <label className="sr-only" htmlFor={seekId}>
                Seek
              </label>
              <input
                id={seekId}
                type="range"
                min={0}
                max={duration || 0}
                step={0.1}
                value={currentTime}
                disabled={!videoSrc || duration === 0}
                onChange={(event) => seekTo(Number(event.target.value))}
                aria-valuetext={formatTime(currentTime)}
                className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-border accent-foreground disabled:cursor-not-allowed"
                style={{
                  backgroundImage: `linear-gradient(to right, var(--jk-foreground) ${progress}%, var(--jk-border) ${progress}%)`,
                }}
              />
              <span className="w-10 text-right font-mono text-[11px] text-muted-foreground tabular-nums">
                {formatTime(duration)}
              </span>
            </div>
          ) : null}
        </div>
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(to_top,var(--jk-background),transparent)]"
      />
    </section>
  );
}
