"use client";

import { PauseIcon, PlayIcon, PlusIcon, Volume2Icon, VolumeXIcon } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/cn";
import type { Skiper67Props } from "./Skiper67.types";

const defaults = {
  hint: "Click the video to play",
  poster: "/assets/ee004332d5917332.webp",
  posterAlt: "Still from a studio showreel with warm stage light",
  videoSrc:
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  videoLabel: "Studio showreel",
  playLabel: "Play",
} as const;

const CLOSED_CLIP = "inset(43.5% 43.5% 33.5% 43.5%)";
const OPEN_CLIP = "inset(0 0 0 0)";

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

function OverlayPlayer({
  videoSrc,
  videoLabel,
  poster,
  reducedMotion,
  onClose,
}: {
  videoSrc: string;
  videoLabel: string;
  poster: string;
  reducedMotion: boolean;
  onClose: () => void;
}) {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const closeRef = React.useRef<HTMLButtonElement>(null);
  const seekId = React.useId();
  const [playing, setPlaying] = React.useState(!reducedMotion);
  const [muted, setMuted] = React.useState(false);
  const [duration, setDuration] = React.useState(0);
  const [currentTime, setCurrentTime] = React.useState(0);
  const [opened, setOpened] = React.useState(reducedMotion);

  React.useEffect(() => {
    closeRef.current?.focus();
    if (reducedMotion) return;
    const frame = window.requestAnimationFrame(() => setOpened(true));
    return () => window.cancelAnimationFrame(frame);
  }, [reducedMotion]);

  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (reducedMotion) {
      video.pause();
      return;
    }
    void video.play().catch(() => {
      setPlaying(false);
    });
  }, [reducedMotion, videoSrc]);

  React.useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

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
    <div className="fixed inset-0 z-[101] flex items-center justify-center">
      <button
        type="button"
        aria-label="Close player"
        className="absolute inset-0 bg-background/90 backdrop-blur-lg"
        onClick={onClose}
      />
      <div
        className="jk-skiper-67-pop relative aspect-video w-full max-w-7xl"
        data-open={opened ? "true" : "false"}
        data-reduced={reducedMotion ? "true" : "false"}
      >
        <div className="relative size-full overflow-hidden rounded-none bg-card">
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
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close player"
            className="absolute top-2 right-2 z-10 rounded-full p-1 text-primary-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring dark:text-foreground"
          >
            <PlusIcon className="size-5 rotate-45" />
          </button>
          <div className="absolute bottom-0 left-1/2 flex w-full max-w-7xl -translate-x-1/2 items-center justify-center px-5 mix-blend-exclusion md:px-10 md:py-5">
            <button
              type="button"
              onClick={togglePlayback}
              aria-label={playing ? "Pause" : "Play"}
              className="grid h-4 w-4 shrink-0 place-items-center bg-transparent text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring dark:text-foreground"
            >
              {playing ? (
                <PauseIcon className="size-4 fill-current" />
              ) : (
                <PlayIcon className="size-4 fill-current" />
              )}
            </button>
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
              className="jk-skiper-67-range mx-3 h-0.5 w-full cursor-pointer appearance-none bg-transparent disabled:cursor-not-allowed"
              style={{
                backgroundImage: `linear-gradient(to right, var(--jk-primary-foreground) ${progress}%, color-mix(in oklab, var(--jk-primary-foreground), transparent 70%) ${progress}%)`,
              }}
            />
            <button
              type="button"
              onClick={toggleMute}
              aria-label={muted ? "Unmute" : "Mute"}
              className="grid size-4 shrink-0 place-items-center bg-transparent text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring dark:text-foreground"
            >
              {muted ? (
                <VolumeXIcon className="size-4" />
              ) : (
                <Volume2Icon className="size-4" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Skiper67({
  className,
  hint = defaults.hint,
  poster = defaults.poster,
  posterAlt = defaults.posterAlt,
  videoSrc = defaults.videoSrc,
  videoLabel = defaults.videoLabel,
  playLabel = defaults.playLabel,
  defaultOpen = false,
  ...props
}: Skiper67Props) {
  const hintId = React.useId();
  const reducedMotion = usePrefersReducedMotion();
  const stageRef = React.useRef<HTMLButtonElement>(null);
  const loopRef = React.useRef<HTMLVideoElement>(null);
  const [open, setOpen] = React.useState(defaultOpen);

  React.useEffect(() => {
    const loop = loopRef.current;
    if (!loop) return;
    if (reducedMotion || open) {
      loop.pause();
      return;
    }
    void loop.play().catch(() => undefined);
  }, [open, reducedMotion, videoSrc]);

  React.useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let reduceMotion = media.matches;
    let frame = 0;
    let targetX = 0;
    let targetY = 0;
    let x = 0;
    let y = 0;
    let targetOpacity = 0;
    let opacity = 0;

    const apply = () => {
      stage.style.setProperty("--skiper67-x", `${x}px`);
      stage.style.setProperty("--skiper67-y", `${y}px`);
      stage.style.setProperty("--skiper67-opacity", `${opacity}`);
    };

    const tick = () => {
      if (reduceMotion) {
        x = stage.clientWidth / 2 - 22;
        y = stage.clientHeight / 2 - 12;
        opacity = 1;
      } else {
        const ease = 0.28;
        x += (targetX - x) * ease;
        y += (targetY - y) * ease;
        opacity += (targetOpacity - opacity) * ease;
      }
      apply();
      frame = window.requestAnimationFrame(tick);
    };

    const onMove = (event: PointerEvent) => {
      if (reduceMotion) return;
      const rect = stage.getBoundingClientRect();
      targetX = event.clientX - rect.left;
      targetY = event.clientY - rect.top;
      targetOpacity = 1;
    };

    const onLeave = () => {
      targetOpacity = reduceMotion ? 1 : 0;
    };

    const onMotion = () => {
      reduceMotion = media.matches;
      if (reduceMotion) {
        targetOpacity = 1;
      } else {
        targetOpacity = 0;
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
      aria-labelledby={hintId}
      className={cn(
        "relative flex min-h-[36rem] w-full items-center justify-center bg-background text-foreground",
        className,
      )}
      data-slot="skiper-67"
      {...props}
    >
      <style href="jk-skiper-67" precedence="default">{`
        .jk-skiper-67-stage {
          --skiper67-x: 0px;
          --skiper67-y: 0px;
          --skiper67-opacity: 0;
        }
        .jk-skiper-67-play {
          transform: translate3d(var(--skiper67-x), var(--skiper67-y), 0);
          opacity: var(--skiper67-opacity);
        }
        .jk-skiper-67-pop {
          clip-path: ${CLOSED_CLIP};
          opacity: 0;
        }
        .jk-skiper-67-pop[data-open="true"] {
          clip-path: ${OPEN_CLIP};
          opacity: 1;
          transition:
            clip-path 1s cubic-bezier(0.22, 1, 0.36, 1),
            opacity 0.2s linear;
        }
        .jk-skiper-67-pop[data-reduced="true"] {
          clip-path: ${OPEN_CLIP};
          opacity: 1;
          transition: none;
        }
        .jk-skiper-67-range::-webkit-slider-thumb {
          appearance: none;
          width: 0;
          height: 0;
          opacity: 0;
        }
        .jk-skiper-67-range::-moz-range-thumb {
          width: 0;
          height: 0;
          border: 0;
          opacity: 0;
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-skiper-67-play {
            opacity: 1;
          }
          .jk-skiper-67-pop,
          .jk-skiper-67-pop[data-open="true"] {
            clip-path: ${OPEN_CLIP};
            opacity: 1;
            transition: none;
          }
        }
      `}</style>
      <div className="absolute top-1/4 grid content-start justify-items-center gap-6 text-center">
        <span
          className="relative max-w-[12ch] text-xs leading-tight text-foreground uppercase opacity-40 after:absolute after:top-full after:left-1/2 after:h-16 after:w-px after:bg-gradient-to-b after:from-transparent after:to-foreground after:content-['']"
          id={hintId}
        >
          {hint}
        </span>
      </div>

      <button
        type="button"
        ref={stageRef}
        className="jk-skiper-67-stage relative size-[11.25rem] overflow-hidden rounded-none bg-muted text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-label={`${playLabel} ${videoLabel}`}
        onClick={() => setOpen(true)}
      >
        <video
          ref={loopRef}
          src={videoSrc}
          poster={poster}
          muted
          playsInline
          loop
          aria-hidden="true"
          className="absolute inset-0 size-full rounded-none object-cover"
        />
        <span className="sr-only">{posterAlt}</span>
        <span
          aria-hidden="true"
          className="jk-skiper-67-play pointer-events-none absolute top-0 left-0 z-20 flex w-fit items-center justify-center gap-2 p-2 text-sm text-primary-foreground mix-blend-exclusion select-none dark:text-foreground"
        >
          <PlayIcon className="size-4 fill-current" />
          {playLabel}
        </span>
      </button>

      {open ? (
        <OverlayPlayer
          onClose={() => setOpen(false)}
          poster={poster}
          reducedMotion={reducedMotion}
          videoLabel={videoLabel}
          videoSrc={videoSrc}
        />
      ) : null}
    </section>
  );
}
