"use client";

import { useEffect, useRef } from "react";

const FRAME_COUNT = 10;
/** Keeps chips from drifting into the copy when the hero stacks. */
const MAX_DRIFT = 56;
const frames = Array.from(
  { length: FRAME_COUNT },
  (_, index) => `url(/art/frames/f${index + 1}.webp)`,
).join(", ");

/**
 * Arched stage with the 10-frame flip-book. Elements with `data-px` drift by
 * (distance from viewport centre × factor); the frame image moves opposite.
 */
export function HeroArt({ tag = "#hero" }: { tag?: string }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = root.getBoundingClientRect();
      const distance =
        rect.top + rect.height / 2 - (window.innerHeight || 800) / 2;
      for (const element of root.querySelectorAll<HTMLElement>("[data-px]")) {
        const offset = Math.max(
          -MAX_DRIFT,
          Math.min(MAX_DRIFT, distance * Number(element.dataset.px)),
        );
        element.style.setProperty("--px", `${offset.toFixed(1)}px`);
      }
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="relative mx-auto flex w-full max-w-[520px] justify-center px-4 pt-6 pb-8"
    >
      <div
        aria-hidden="true"
        data-px="-0.08"
        className="pointer-events-none absolute -inset-x-[20%] -inset-y-[10%] translate-y-(--px) bg-[radial-gradient(circle_at_50%_45%,oklch(0.84_0.14_85/35%),transparent_55%)]"
      />
      <div
        data-px="0.06"
        className="relative aspect-[4/5] w-full max-w-[440px] translate-y-(--px) overflow-hidden rounded-[999px_999px_18px_18px] border-4 border-ink bg-curtain shadow-[0_0_0_10px_var(--vd-mustard),0_0_0_14px_var(--vd-ink),14px_14px_0_14px_oklch(0.2_0.05_250/60%)]"
      >
        <div
          data-px="-0.12"
          role="img"
          aria-label="JabKit hopping on stage and raising a building block"
          className="vd-flip absolute top-[-8%] left-0 h-[116%] w-full translate-y-(--px)"
        />
        <div
          aria-hidden="true"
          className="vd-flicker pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,transparent_55%,oklch(0.15_0.03_30/45%))]"
        />
        <div
          aria-hidden="true"
          className="absolute size-0 overflow-hidden"
          style={{ backgroundImage: frames }}
        />
      </div>
      <span
        aria-hidden="true"
        data-px="-0.22"
        className="absolute top-[12%] left-[2%] translate-y-(--px) -rotate-6 rounded-lg border-2 border-ink bg-card px-3 py-1.5 font-display text-[17px] text-foreground shadow-[3px_3px_0_var(--vd-shadow)]"
      >
        {tag}
      </span>
      <span
        aria-hidden="true"
        data-px="-0.3"
        className="absolute top-[34%] right-0 translate-y-(--px) rotate-[5deg] rounded-lg border-2 border-ink bg-code px-3 py-1.5 font-mono text-[13px] text-code-foreground shadow-[3px_3px_0_var(--vd-tomato)]"
      >
        npx jabkit add
      </span>
      <span
        aria-hidden="true"
        data-px="-0.16"
        className="absolute bottom-[10%] left-[6%] translate-y-(--px) text-[40px] leading-none text-mustard [text-shadow:2px_2px_0_var(--vd-ink)]"
      >
        ✦
      </span>
      <span
        aria-hidden="true"
        data-px="-0.26"
        className="absolute right-[8%] bottom-[4%] translate-y-(--px) text-[26px] leading-none text-cream [text-shadow:2px_2px_0_var(--vd-ink)]"
      >
        ✦
      </span>
    </div>
  );
}
