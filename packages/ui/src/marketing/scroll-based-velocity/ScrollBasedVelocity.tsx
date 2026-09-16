"use client";

import {
  useEffect,
  useId,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { cn } from "@/lib/cn";
import type { ScrollBasedVelocityProps } from "./ScrollBasedVelocity.types";

const defaults = {
  text: "Velocity Scroll",
  defaultVelocity: 5,
};

const TEXT_CLASS =
  "text-center text-4xl font-bold tracking-[-0.02em] text-foreground drop-shadow-sm md:text-7xl md:leading-[5rem]";

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

function wrapUnit(value: number, unit: number) {
  if (unit <= 0) return 0;
  return ((value % unit) + unit) % unit;
}

function VelocityRow({
  text,
  baseVelocity,
  reducedMotion,
  textClassName,
}: {
  text: string;
  baseVelocity: number;
  reducedMotion: boolean;
  textClassName?: string;
}) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const unitRef = useRef<HTMLSpanElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [copies, setCopies] = useState(6);

  useEffect(() => {
    const viewport = viewportRef.current;
    const unit = unitRef.current;
    if (!viewport || !unit) return;

    const measure = () => {
      const unitWidth = unit.offsetWidth;
      if (unitWidth <= 0) return;
      setCopies(Math.max(4, Math.ceil(viewport.offsetWidth / unitWidth) + 2));
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(viewport);
    observer.observe(unit);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    if (reducedMotion) {
      track.style.transform = "translate3d(0,0,0)";
      return;
    }

    let offset = 0;
    let lastTime = performance.now();
    let lastScroll = window.scrollY;
    let smoothVelocity = 0;
    let direction = 1;
    let frame = 0;

    const tick = (now: number) => {
      const dt = Math.min(0.048, (now - lastTime) / 1000);
      lastTime = now;

      const scrollY = window.scrollY;
      const raw = (scrollY - lastScroll) / Math.max(dt, 1 / 120);
      lastScroll = scrollY;
      smoothVelocity += (raw - smoothVelocity) * Math.min(1, dt * 9);

      if (smoothVelocity < -8) direction = -1;
      else if (smoothVelocity > 8) direction = 1;

      const boost = Math.min(6, Math.abs(smoothVelocity) / 220);
      let travel = direction * baseVelocity * 14 * dt;
      travel += direction * travel * boost;
      offset += travel;

      const unitWidth = unitRef.current?.offsetWidth ?? 0;
      const wrapped = wrapUnit(offset, unitWidth);
      track.style.transform = `translate3d(${-wrapped}px,0,0)`;
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [baseVelocity, reducedMotion]);

  const typeClass = cn("inline-block pr-[0.35em]", TEXT_CLASS, textClassName);

  return (
    <div
      className="w-full overflow-hidden whitespace-nowrap"
      data-slot="scroll-based-velocity-row"
      ref={viewportRef}
    >
      <div
        className="inline-flex will-change-transform"
        data-slot="scroll-based-velocity-track"
        ref={trackRef}
      >
        {Array.from({ length: copies }, (_, index) => (
          <span
            className={typeClass}
            // biome-ignore lint/suspicious/noArrayIndexKey: copies are identical filler
            key={`${text}-${index}`}
            ref={index === 0 ? unitRef : undefined}
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}

export function ScrollBasedVelocity({
  className,
  text = defaults.text,
  defaultVelocity = defaults.defaultVelocity,
  textClassName,
  ...props
}: ScrollBasedVelocityProps) {
  const headingId = useId();
  const reducedMotion = useReducedMotion();
  const speed = Math.abs(defaultVelocity) || defaults.defaultVelocity;

  return (
    <section
      aria-labelledby={headingId}
      className={cn(
        "relative w-full overflow-hidden bg-background py-16 text-foreground",
        className,
      )}
      data-slot="scroll-based-velocity"
      {...props}
    >
      <h2 className="sr-only" id={headingId}>
        {text}
      </h2>
      <div aria-hidden="true" className="flex flex-col gap-1">
        <VelocityRow
          baseVelocity={speed}
          key={`${text}-fwd`}
          reducedMotion={reducedMotion}
          text={text}
          textClassName={textClassName}
        />
        <VelocityRow
          baseVelocity={-speed}
          key={`${text}-rev`}
          reducedMotion={reducedMotion}
          text={text}
          textClassName={textClassName}
        />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background to-background/0"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background to-background/0"
      />
    </section>
  );
}
