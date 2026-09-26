"use client";

import type { Route } from "next";
import Link from "next/link";
import { useState } from "react";

export type MenuShelf = {
  label: string;
  count: number;
  href: Route;
  image: string;
};

const countLabel = (count: number) =>
  `${count} ${count === 1 ? "component" : "components"}`;

/**
 * "Start with something real": café menu board of shelves. Hovering or
 * focusing a row highlights it and swaps the illustration on the right.
 */
export function MenuBoard({ shelves }: { shelves: MenuShelf[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = shelves[activeIndex] ?? shelves[0];

  return (
    <section className="relative border-y-3 border-ink bg-board text-cream">
      <div className="mx-auto grid max-w-[1280px] items-center gap-12 px-5 py-14 tab:px-8 tab:py-[88px] desk:grid-cols-2 desk:gap-16">
        <div className="min-w-0">
          <p className="vd-script text-[22px] text-mustard">
            Today&apos;s menu
          </p>
          <h2 className="vd-h2 mt-2">Start with something real.</h2>
          <p className="mt-3 opacity-85">
            Pick a shelf. Each one opens live previews, source, stories, and
            install plans.
          </p>
          <ul className="mt-10 flex flex-col">
            {shelves.map((shelf, index) => {
              const isActive = index === activeIndex;
              return (
                <li key={shelf.label}>
                  <Link
                    href={shelf.href}
                    onMouseEnter={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    className={`-mx-3 flex items-baseline gap-3 rounded-md border-b border-dashed border-cream/35 px-3 py-3.5 transition-colors focus-visible:outline-3 focus-visible:outline-mustard ${
                      isActive ? "bg-mustard/10" : ""
                    }`}
                  >
                    <span
                      className={`font-display text-[22px] transition-colors tab:text-[26px] ${
                        isActive ? "text-mustard" : "text-cream"
                      }`}
                    >
                      {shelf.label}
                    </span>
                    <span
                      aria-hidden="true"
                      className="flex-1 -translate-y-1.5 border-b-2 border-dotted border-cream/40"
                    />
                    <span className="font-mono text-sm whitespace-nowrap">
                      {countLabel(shelf.count)}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            href="/components"
            className="mt-7 inline-block font-semibold text-mustard underline-offset-4 hover:underline"
          >
            See all components →
          </Link>
        </div>
        {active ? (
          <figure className="mx-auto w-full max-w-[520px] rotate-[1.5deg] rounded-[--radius] border-3 border-ink bg-card p-4 text-foreground shadow-[8px_8px_0_oklch(0.15_0.02_160)]">
            <img
              key={active.image}
              src={active.image}
              alt=""
              width={960}
              height={960}
              loading="lazy"
              decoding="async"
              className="block aspect-square w-full rounded-md object-cover"
            />
            <figcaption className="vd-script mx-1 mt-3 text-center text-lg">
              {active.label} · {countLabel(active.count)}
            </figcaption>
          </figure>
        ) : null}
        <div
          aria-hidden="true"
          className="absolute size-0 overflow-hidden"
          style={{
            backgroundImage: shelves
              .map((shelf) => `url(${shelf.image})`)
              .join(", "),
          }}
        />
      </div>
    </section>
  );
}
