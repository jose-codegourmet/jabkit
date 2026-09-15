"use client";

import { PauseIcon, PlayIcon, Volume2Icon, VolumeXIcon } from "lucide-react";
import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/atoms/dialog";
import { cn } from "@/lib/cn";
import type { Skiper67Props } from "./Skiper67.types";

const defaults = {
  eyebrow: "Showreel",
  heading: "Watch the cut before you book the room.",
  description:
    "Hover the frame. The play control stays with your pointer. Click to open the player and scrub the reel.",
  poster: "/assets/ee004332d5917332.webp",
  posterAlt: "Still from a studio showreel with warm stage light",
  videoSrc:
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  videoLabel: "Studio showreel",
  playLabel: "Play showreel",
} as const;

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const total = Math.floor(seconds);
  const minutes = Math.floor(total / 60);
  const rest = total % 60;
  return `${minutes}:${rest.toString().padStart(2, "0")}`;
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

function FollowPlayMark({
  reducedMotion,
}: {
  reducedMotion: boolean;
}) {
  return (
    <span
      aria-hidden="true"
      className="jk-skiper-67-play pointer-events-none absolute top-0 left-0 z-10 grid size-16 place-items-center rounded-full border border-border bg-background/85 text-foreground shadow-[0_18px_36px_-20px_color-mix(in_oklab,var(--jk-foreground),transparent_40%)] backdrop-blur-sm will-change-transform sm:size-20"
      data-reduced={reducedMotion ? "true" : "false"}
    >
      <PlayIcon className="ml-0.5 size-6 sm:size-7" />
    </span>
  );
}

function ModalPlayer({
  videoSrc,
  videoLabel,
  poster,
  reducedMotion,
}: {
  videoSrc: string;
  videoLabel: string;
  poster: string;
  reducedMotion: boolean;
}) {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const seekId = React.useId();
  const [playing, setPlaying] = React.useState(false);
  const [muted, setMuted] = React.useState(false);
  const [duration, setDuration] = React.useState(0);
  const [currentTime, setCurrentTime] = React.useState(0);

  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (reducedMotion) {
      video.pause();
      return;
    }
    const play = () => {
      void video.play().catch(() => {
        setPlaying(false);
      });
    };
    play();
  }, [reducedMotion, videoSrc]);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play();
    } else {
      video.pause();
    }
  };

  const seekTo = (value: number) => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = value;
    setCurrentTime(value);
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="relative overflow-hidden rounded-[calc(var(--radius)+0.15rem)] bg-card text-card-foreground">
      <div className="relative aspect-video bg-muted">
        <video
          ref={videoRef}
          src={videoSrc}
          poster={poster}
          playsInline
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
      </div>
      <div className="flex items-center gap-3 border-t border-border bg-card px-4 py-3">
        <button
          type="button"
          onClick={togglePlayback}
          aria-label={playing ? "Pause" : "Play"}
          className="grid size-8 shrink-0 place-items-center rounded-full border border-border bg-background text-foreground transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card"
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
          disabled={duration === 0}
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
        <button
          type="button"
          onClick={toggleMute}
          aria-label={muted ? "Unmute" : "Mute"}
          className="grid size-8 shrink-0 place-items-center rounded-full border border-border bg-background text-foreground transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card"
        >
          {muted ? (
            <VolumeXIcon className="size-3.5" />
          ) : (
            <Volume2Icon className="size-3.5" />
          )}
        </button>
      </div>
    </div>
  );
}

export function Skiper67({
  className,
  eyebrow = defaults.eyebrow,
  heading = defaults.heading,
  description = defaults.description,
  poster = defaults.poster,
  posterAlt = defaults.posterAlt,
  videoSrc = defaults.videoSrc,
  videoLabel = defaults.videoLabel,
  playLabel = defaults.playLabel,
  defaultOpen = false,
  ...props
}: Skiper67Props) {
  const headingId = React.useId();
  const reducedMotion = usePrefersReducedMotion();
  const stageRef = React.useRef<HTMLButtonElement>(null);
  const [open, setOpen] = React.useState(defaultOpen);

  React.useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let reduceMotion = media.matches;
    let frame = 0;
    let targetX = 50;
    let targetY = 50;
    let x = 50;
    let y = 50;
    let hovered = false;

    const apply = () => {
      stage.style.setProperty("--skiper67-x", `${x}%`);
      stage.style.setProperty("--skiper67-y", `${y}%`);
    };

    const tick = () => {
      if (reduceMotion) {
        x = 50;
        y = 50;
      } else {
        const ease = hovered ? 0.22 : 0.12;
        x += (targetX - x) * ease;
        y += (targetY - y) * ease;
      }
      apply();
      frame = window.requestAnimationFrame(tick);
    };

    const onMove = (event: PointerEvent) => {
      if (reduceMotion) return;
      const rect = stage.getBoundingClientRect();
      const nx = ((event.clientX - rect.left) / rect.width) * 100;
      const ny = ((event.clientY - rect.top) / rect.height) * 100;
      targetX = Math.max(8, Math.min(92, nx));
      targetY = Math.max(10, Math.min(90, ny));
      hovered = true;
    };

    const onLeave = () => {
      hovered = false;
      targetX = 50;
      targetY = 50;
    };

    const onMotion = () => {
      reduceMotion = media.matches;
      if (reduceMotion) {
        hovered = false;
        targetX = 50;
        targetY = 50;
        x = 50;
        y = 50;
      }
    };

    apply();
    frame = window.requestAnimationFrame(tick);
    media.addEventListener("change", onMotion);
    stage.addEventListener("pointermove", onMove);
    stage.addEventListener("pointerleave", onLeave);

    return () => {
      window.cancelAnimationFrame(frame);
      media.removeEventListener("change", onMotion);
      stage.removeEventListener("pointermove", onMove);
      stage.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <section
      aria-labelledby={headingId}
      className={cn("bg-background text-foreground", className)}
      data-slot="skiper-67"
      {...props}
    >
      <style href="jk-skiper-67" precedence="default">{`
        .jk-skiper-67-stage {
          --skiper67-x: 50%;
          --skiper67-y: 50%;
        }
        .jk-skiper-67-play {
          transform: translate(calc(var(--skiper67-x) - 50%), calc(var(--skiper67-y) - 50%));
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-skiper-67-play {
            transform: translate(-50%, -50%);
            top: 50%;
            left: 50%;
          }
        }
      `}</style>
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

        <Dialog onOpenChange={setOpen} open={open}>
          <button
            type="button"
            ref={stageRef}
            className="jk-skiper-67-stage group relative mx-auto block w-full max-w-5xl overflow-hidden rounded-[calc(var(--radius)+0.45rem)] border border-border bg-muted text-left shadow-[0_28px_60px_-36px_color-mix(in_oklab,var(--jk-foreground),transparent_50%)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-haspopup="dialog"
            aria-expanded={open}
            aria-label={playLabel}
          >
            <span className="relative block aspect-video">
              <img
                src={poster}
                alt={posterAlt}
                className="absolute inset-0 size-full object-cover"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(to_top,color-mix(in_oklab,var(--jk-background),transparent_28%),transparent_42%)]"
              />
              <FollowPlayMark reducedMotion={reducedMotion} />
            </span>
          </button>
          <DialogContent
            className="w-full max-w-[min(72rem,calc(100%-2rem))] overflow-hidden border-0 bg-transparent p-0 shadow-none ring-0 sm:max-w-[min(72rem,calc(100%-2rem))]"
            showCloseButton
          >
            <DialogTitle className="sr-only">{videoLabel}</DialogTitle>
            <DialogDescription className="sr-only">
              Full player with play, seek, and mute controls.
            </DialogDescription>
            {open ? (
              <ModalPlayer
                poster={poster}
                reducedMotion={reducedMotion}
                videoLabel={videoLabel}
                videoSrc={videoSrc}
              />
            ) : null}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
