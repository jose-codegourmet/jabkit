"use client";

import {
  type PointerEvent as ReactPointerEvent,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { cn } from "@/lib/cn";
import type {
  FallingTextAlign,
  FallingTextHeading,
  FallingTextProps,
  FallingTextTrigger,
} from "./FallingText.types";

const defaults = {
  eyebrow: "Motion copy",
  text: "Drop the headline and let gravity finish the pitch.",
  description:
    "Words rest in place until they fall. Highlighted tokens keep the semantic accent while the rest of the line settles on the floor.",
  highlightWords: ["gravity", "pitch"] as string[],
  trigger: "auto" as FallingTextTrigger,
  gravity: 1,
  as: "h1" as FallingTextHeading,
  align: "center" as FallingTextAlign,
  threshold: 0.4,
  rootMargin: "0px 0px -8% 0px",
};

type WordToken = { key: string; value: string; highlight: boolean };

type Body = {
  x: number;
  y: number;
  w: number;
  h: number;
  vx: number;
  vy: number;
  angle: number;
  va: number;
  pinned: boolean;
};

const alignClass: Record<FallingTextAlign, string> = {
  left: "items-start text-left",
  center: "items-center text-center",
  right: "items-end text-right",
};

const wrapAlign: Record<FallingTextAlign, string> = {
  left: "justify-start",
  center: "justify-center",
  right: "justify-end",
};

function wordKey(value: string) {
  return value.replace(/[^\p{L}\p{N}]+/gu, "").toLowerCase();
}

function tokenize(text: string, highlightWords: string[]): WordToken[] {
  const highlights = new Set(highlightWords.map(wordKey).filter(Boolean));
  return text
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((value, index) => ({
      key: `${wordKey(value) || "token"}-${index}`,
      value,
      highlight: highlights.has(wordKey(value)),
    }));
}

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

function applyTransform(el: HTMLElement, body: Body) {
  el.style.transform = `translate3d(${body.x}px, ${body.y}px, 0) rotate(${body.angle}rad)`;
}

export function FallingText({
  className,
  text = defaults.text,
  eyebrow = defaults.eyebrow,
  description = defaults.description,
  highlightWords = defaults.highlightWords,
  trigger = defaults.trigger,
  gravity = defaults.gravity,
  as = defaults.as,
  align = defaults.align,
  threshold = defaults.threshold,
  rootMargin = defaults.rootMargin,
  ...props
}: FallingTextProps) {
  const headingId = useId();
  const rootRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLElement>(null);
  const startFallRef = useRef<() => void>(() => {});
  const wordRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const bodiesRef = useRef<Body[]>([]);
  const frameRef = useRef(0);
  const lastTsRef = useRef<number | null>(null);
  const gravityRef = useRef(gravity);
  const dragRef = useRef<{
    index: number;
    pointerId: number;
    ox: number;
    oy: number;
  } | null>(null);
  const [fallen, setFallen] = useState(false);
  const reducedMotion = usePrefersReducedMotion();
  const words = tokenize(text, highlightWords);
  const Heading = as;
  const interactive = trigger === "click" || trigger === "hover";
  const canFall = !reducedMotion && !fallen;
  gravityRef.current = gravity;

  const stopLoop = () => {
    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    frameRef.current = 0;
    lastTsRef.current = null;
  };

  const startFall = () => {
    if (reducedMotion || fallen) return;
    const stage = stageRef.current;
    if (!stage) return;
    const stageBox = stage.getBoundingClientRect();
    const bodies: Body[] = [];
    for (let i = 0; i < wordRefs.current.length; i += 1) {
      const el = wordRefs.current[i];
      if (!el) continue;
      const box = el.getBoundingClientRect();
      const body: Body = {
        x: box.left - stageBox.left,
        y: box.top - stageBox.top,
        w: box.width,
        h: box.height,
        vx: (Math.random() - 0.5) * 140,
        vy: Math.random() * -40,
        angle: 0,
        va: (Math.random() - 0.5) * 3.2,
        pinned: false,
      };
      el.style.position = "absolute";
      el.style.left = "0";
      el.style.top = "0";
      el.style.margin = "0";
      el.style.willChange = "transform";
      applyTransform(el, body);
      bodies.push(body);
    }
    bodiesRef.current = bodies;
    setFallen(true);
    stopLoop();
    const step = (ts: number) => {
      const surface = stageRef.current;
      if (!surface) return;
      const last = lastTsRef.current ?? ts;
      lastTsRef.current = ts;
      const dt = Math.min(0.032, (ts - last) / 1000);
      const width = surface.clientWidth;
      const height = surface.clientHeight;
      const g = 1680 * Math.max(0.15, gravityRef.current);
      const list = bodiesRef.current;
      const drag = dragRef.current;

      for (let i = 0; i < list.length; i += 1) {
        const body = list[i];
        if (drag?.index === i || body.pinned) continue;
        body.vy += g * dt;
        body.vx *= 0.995;
        body.va *= 0.992;
        body.x += body.vx * dt;
        body.y += body.vy * dt;
        body.angle += body.va * dt;

        if (body.x < 0) {
          body.x = 0;
          body.vx = Math.abs(body.vx) * 0.42;
          body.va *= -0.6;
        } else if (body.x + body.w > width) {
          body.x = width - body.w;
          body.vx = -Math.abs(body.vx) * 0.42;
          body.va *= -0.6;
        }
        if (body.y < 0) {
          body.y = 0;
          body.vy = Math.abs(body.vy) * 0.2;
        } else if (body.y + body.h > height) {
          body.y = height - body.h;
          body.vy *= -0.38;
          body.vx *= 0.84;
          body.va *= 0.72;
          if (Math.abs(body.vy) < 28) body.vy = 0;
          if (Math.abs(body.vx) < 8) body.vx = 0;
          if (Math.abs(body.va) < 0.12) body.va = 0;
        }
      }

      for (let i = 0; i < list.length; i += 1) {
        for (let j = i + 1; j < list.length; j += 1) {
          const a = list[i];
          const b = list[j];
          const ax = a.x + a.w / 2;
          const ay = a.y + a.h / 2;
          const bx = b.x + b.w / 2;
          const by = b.y + b.h / 2;
          const overlapX = (a.w + b.w) / 2 - Math.abs(ax - bx);
          const overlapY = (a.h + b.h) / 2 - Math.abs(ay - by);
          if (overlapX <= 0 || overlapY <= 0) continue;
          if (overlapX < overlapY) {
            const dir = ax < bx ? -1 : 1;
            const push = overlapX / 2;
            if (drag?.index !== i && !a.pinned) a.x += dir * push;
            if (drag?.index !== j && !b.pinned) b.x -= dir * push;
            const swap = a.vx;
            a.vx = b.vx * 0.72;
            b.vx = swap * 0.72;
          } else {
            const dir = ay < by ? -1 : 1;
            const push = overlapY / 2;
            if (drag?.index !== i && !a.pinned) a.y += dir * push;
            if (drag?.index !== j && !b.pinned) b.y -= dir * push;
            const swap = a.vy;
            a.vy = b.vy * 0.62;
            b.vy = swap * 0.62;
          }
        }
      }

      for (let i = 0; i < list.length; i += 1) {
        const el = wordRefs.current[i];
        if (el) applyTransform(el, list[i]);
      }
      frameRef.current = requestAnimationFrame(step);
    };
    frameRef.current = requestAnimationFrame(step);
  };

  startFallRef.current = startFall;

  useEffect(() => {
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  useEffect(() => {
    if (reducedMotion || fallen) return;
    if (trigger === "auto") {
      const timer = window.setTimeout(() => startFallRef.current(), 280);
      return () => window.clearTimeout(timer);
    }
    if (trigger !== "scroll") return;
    const node = rootRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) startFallRef.current();
      },
      { threshold, rootMargin },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [fallen, reducedMotion, rootMargin, threshold, trigger]);

  const onActivate = () => {
    if (!canFall) return;
    if (trigger === "click" || trigger === "hover") startFall();
  };

  const onPointerDown = (
    event: ReactPointerEvent<HTMLSpanElement>,
    index: number,
  ) => {
    if (!fallen || reducedMotion) return;
    const stage = stageRef.current;
    const el = wordRefs.current[index];
    const body = bodiesRef.current[index];
    if (!stage || !el || !body) return;
    const stageBox = stage.getBoundingClientRect();
    dragRef.current = {
      index,
      pointerId: event.pointerId,
      ox: event.clientX - stageBox.left - body.x,
      oy: event.clientY - stageBox.top - body.y,
    };
    body.pinned = true;
    body.vx = 0;
    body.vy = 0;
    el.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (
    event: ReactPointerEvent<HTMLSpanElement>,
    index: number,
  ) => {
    const drag = dragRef.current;
    const stage = stageRef.current;
    const body = bodiesRef.current[index];
    if (!drag || drag.index !== index || !stage || !body) return;
    const stageBox = stage.getBoundingClientRect();
    const nextX = event.clientX - stageBox.left - drag.ox;
    const nextY = event.clientY - stageBox.top - drag.oy;
    body.vx = (nextX - body.x) * 18;
    body.vy = (nextY - body.y) * 18;
    body.x = Math.max(0, Math.min(stage.clientWidth - body.w, nextX));
    body.y = Math.max(0, Math.min(stage.clientHeight - body.h, nextY));
    const el = wordRefs.current[index];
    if (el) applyTransform(el, body);
  };

  const onPointerUp = (index: number) => {
    const drag = dragRef.current;
    if (!drag || drag.index !== index) return;
    const body = bodiesRef.current[index];
    if (body) body.pinned = false;
    dragRef.current = null;
  };

  const hint =
    reducedMotion || fallen
      ? undefined
      : trigger === "click"
        ? "Activate to drop the words."
        : trigger === "hover"
          ? "Hover to drop the words."
          : undefined;

  return (
    <section
      aria-labelledby={headingId}
      className={cn("bg-background text-foreground", className)}
      data-fallen={fallen ? "true" : "false"}
      data-slot="falling-text"
      {...props}
      ref={rootRef}
    >
      <div
        className={cn(
          "mx-auto flex w-full max-w-5xl flex-col gap-5 px-6 py-20 sm:px-10 sm:py-24",
          alignClass[align],
        )}
      >
        {eyebrow ? (
          <p className="text-xs font-medium tracking-[0.22em] text-muted-foreground uppercase">
            {eyebrow}
          </p>
        ) : null}
        <Heading className="sr-only" id={headingId}>
          {text}
        </Heading>
        {(() => {
          const stageClassName = cn(
            "relative min-h-[22rem] w-full max-w-4xl overflow-hidden rounded-[--radius] border border-border bg-card px-5 py-8 text-left text-4xl leading-[1.08] font-semibold tracking-[-0.05em] sm:min-h-[24rem] sm:px-8 sm:text-5xl lg:text-6xl",
            interactive && canFall && "cursor-pointer",
          );
          const wordsNode = (
            <div
              className={cn(
                "flex w-full flex-wrap gap-x-[0.38em] gap-y-[0.5em]",
                wrapAlign[align],
                fallen && "h-full",
              )}
            >
              {words.map((word, index) => (
                <span
                  className={cn(
                    "inline-block origin-center select-none",
                    word.highlight &&
                      "rounded-sm bg-primary/15 px-1.5 text-primary",
                    fallen && "touch-none",
                  )}
                  data-slot={
                    word.highlight
                      ? "falling-text-highlight"
                      : "falling-text-word"
                  }
                  key={word.key}
                  onPointerCancel={() => onPointerUp(index)}
                  onPointerDown={(event) => onPointerDown(event, index)}
                  onPointerMove={(event) => onPointerMove(event, index)}
                  onPointerUp={() => onPointerUp(index)}
                  ref={(node) => {
                    wordRefs.current[index] = node;
                  }}
                >
                  {word.value}
                </span>
              ))}
            </div>
          );
          const assignStage = (node: HTMLElement | null) => {
            stageRef.current = node;
          };
          if (trigger === "click") {
            return (
              <button
                aria-label={hint}
                className={stageClassName}
                data-slot="falling-text-stage"
                onClick={onActivate}
                ref={assignStage}
                type="button"
              >
                {wordsNode}
              </button>
            );
          }
          return (
            <div
              aria-hidden="true"
              className={stageClassName}
              data-slot="falling-text-stage"
              onPointerEnter={trigger === "hover" ? onActivate : undefined}
              ref={assignStage}
            >
              {wordsNode}
            </div>
          );
        })()}
        {description ? (
          <p className="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}
