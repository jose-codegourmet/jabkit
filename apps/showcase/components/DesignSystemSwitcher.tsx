"use client";

import { type KeyboardEvent, useId, useRef, useState } from "react";

export type SwitcherSystem = {
  slug: string;
  designSystem: string;
  brand: string;
  description: string;
  href?: string;
  routes: Array<{ path: string; note?: string }>;
};

const playbills = [
  "bg-paper text-ink",
  "bg-tomato text-cream",
  "bg-board text-cream",
  "bg-telegraph text-cream",
  "bg-mustard text-ink",
] as const;

function hostOf(href?: string) {
  if (!href) return "deployment not configured";
  try {
    return new URL(href).host;
  } catch {
    return href;
  }
}

/** Five-tab switcher: playbill, route list, and a link out to each site. */
export function DesignSystemSwitcher({
  systems,
  initialSlug,
}: {
  systems: SwitcherSystem[];
  initialSlug?: string;
}) {
  const [activeIndex, setActiveIndex] = useState(() =>
    Math.max(
      0,
      systems.findIndex((system) => system.slug === initialSlug),
    ),
  );
  const baseId = useId();
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const active = systems[activeIndex];
  if (!active) return null;

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const delta =
      event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
    const target =
      event.key === "Home"
        ? 0
        : event.key === "End"
          ? systems.length - 1
          : delta
            ? (activeIndex + delta + systems.length) % systems.length
            : -1;
    if (target < 0) return;
    event.preventDefault();
    setActiveIndex(target);
    tabRefs.current[target]?.focus();
  };

  return (
    <div className="mt-10">
      <div
        role="tablist"
        aria-label="Design systems"
        onKeyDown={onKeyDown}
        className="grid grid-cols-2 border-b-2 border-ink tab:grid-cols-3 desk:grid-cols-5"
      >
        {systems.map((system, index) => {
          const selected = index === activeIndex;
          return (
            <button
              key={system.slug}
              ref={(element) => {
                tabRefs.current[index] = element;
              }}
              type="button"
              role="tab"
              id={`${baseId}-tab-${system.slug}`}
              aria-selected={selected}
              aria-controls={selected ? `${baseId}-panel` : undefined}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActiveIndex(index)}
              className={`-mb-0.5 rounded-t-[10px] border-b-3 px-4 py-3.5 text-left transition-colors ${
                selected
                  ? "border-tomato bg-mustard/50"
                  : "border-transparent hover:bg-muted"
              }`}
            >
              <span
                className={`block font-semibold ${selected ? "text-tomato-text" : ""}`}
              >
                {system.designSystem}
              </span>
              <span className="mt-0.5 block text-[13px] text-muted-foreground">
                {system.brand}
              </span>
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`${baseId}-panel`}
        aria-labelledby={`${baseId}-tab-${active.slug}`}
        className="mt-7 grid gap-8 desk:grid-cols-[1.6fr_1fr]"
      >
        <div className="vd-card overflow-hidden">
          <div className="flex items-center gap-2 border-b-2 border-ink px-3.5 py-2.5">
            {[0, 1, 2].map((dot) => (
              <span
                key={dot}
                aria-hidden="true"
                className="size-2.5 rounded-full border border-ink bg-muted"
              />
            ))}
            <span className="ml-2.5 truncate font-mono text-xs text-muted-foreground">
              {hostOf(active.href)}
            </span>
          </div>
          <div
            className={`vd-halftone relative grid min-h-[320px] place-items-center overflow-hidden px-6 py-12 text-center desk:min-h-[440px] ${playbills[activeIndex % playbills.length]}`}
          >
            <div>
              <p className="vd-script text-2xl text-current opacity-80">
                now showing
              </p>
              <p className="mt-2 font-display text-[clamp(2.5rem,7vw,4.5rem)] leading-none tracking-[-0.03em]">
                {active.brand}
              </p>
              <p className="vd-kicker mt-5">{active.designSystem}</p>
              <p className="mx-auto mt-5 max-w-[36ch] leading-7 opacity-90">
                {active.description}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="vd-script text-xl">{active.designSystem}</p>
          <h2 className="vd-h2">{active.brand}</h2>
          <p className="text-base leading-[26px] text-muted-foreground">
            {active.description}
          </p>
          <ul
            className="vd-card mt-2 py-1"
            aria-label={`${active.brand} routes`}
          >
            {active.routes.map((route, index) => (
              <li
                key={route.path}
                className={`flex justify-between gap-4 px-4 py-2.5 ${
                  index < active.routes.length - 1
                    ? "border-b border-dashed border-ink"
                    : ""
                }`}
              >
                <span className="font-mono text-[13px]">{route.path}</span>
                {route.note ? (
                  <span className="font-mono text-xs text-muted-foreground">
                    {route.note}
                  </span>
                ) : null}
              </li>
            ))}
          </ul>
          {active.href ? (
            <a href={active.href} className="vd-btn vd-btn-primary mt-auto">
              Visit {active.brand} ↗
            </a>
          ) : (
            <p aria-disabled="true" className="vd-btn mt-auto opacity-60">
              Deployment not configured
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
