"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Rays } from "../Rays";

/** "Both themes, one source": day/night art with a working theme switch. */
export function ThemeSplit() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const current = mounted ? resolvedTheme : undefined;

  return (
    <section className="relative overflow-hidden border-b-3 border-ink bg-tomato text-cream">
      <Rays x="50%" y="60%" width="5deg" color="oklch(1 0 0 / 8%)" />
      <div className="relative mx-auto max-w-[1280px] px-5 py-14 text-center tab:px-8 tab:py-24">
        <p className="vd-kicker mb-[18px]">Light and dark</p>
        <h2 className="vd-h2">Both themes, one source.</h2>
        <p className="mx-auto mt-3.5 max-w-[46ch] leading-7 opacity-90">
          Every component ships with both palettes from the same tokens.
        </p>
        <div className="relative mt-12 grid gap-1 overflow-hidden rounded-[20px] border-4 border-ink bg-ink shadow-[10px_10px_0_var(--vd-shadow)] tab:grid-cols-2">
          <figure className="relative bg-paper">
            <img
              src="/art/jk-day.webp"
              alt="JabKit waving under the sun"
              width={960}
              height={717}
              loading="lazy"
              decoding="async"
              className="block aspect-[4/3] w-full object-cover"
            />
            <figcaption className="absolute bottom-[18px] left-[18px] rounded-full border-2 border-ink bg-paper px-4 py-1.5 font-display text-lg text-ink shadow-[3px_3px_0_var(--vd-ink)]">
              Day shift · Light
            </figcaption>
          </figure>
          <figure className="relative bg-slate">
            <img
              src="/art/jk-night.webp"
              alt="JabKit yawning under the moon"
              width={960}
              height={717}
              loading="lazy"
              decoding="async"
              className="block aspect-[4/3] w-full object-cover"
            />
            <figcaption className="absolute right-[18px] bottom-[18px] rounded-full border-2 border-mustard bg-ink px-4 py-1.5 font-display text-lg text-mustard shadow-[3px_3px_0_var(--vd-mustard)]">
              Night shift · Dark
            </figcaption>
          </figure>
          <fieldset className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-3 border-ink text-[13px] font-semibold tracking-[0.1em] uppercase shadow-[4px_4px_0_var(--vd-ink)]">
            <legend className="sr-only">Site theme</legend>
            <button
              type="button"
              aria-pressed={current === "light"}
              onClick={() => setTheme("light")}
              className="bg-paper px-[18px] py-2.5 text-ink aria-pressed:shadow-[inset_0_-4px_0_var(--vd-tomato)]"
            >
              Light
            </button>
            <button
              type="button"
              aria-pressed={current === "dark"}
              onClick={() => setTheme("dark")}
              className="bg-ink px-[18px] py-2.5 text-mustard aria-pressed:shadow-[inset_0_-4px_0_var(--vd-mustard)]"
            >
              Dark
            </button>
          </fieldset>
        </div>
      </div>
    </section>
  );
}
