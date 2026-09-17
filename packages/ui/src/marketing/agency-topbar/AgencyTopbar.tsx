"use client";

import { useEffect, useId, useState } from "react";
import { cn } from "@/lib/cn";
import type { AgencyTopbarProps } from "./AgencyTopbar.types";

const defaults = {
  brand: "LAYOUT",
  brandHref: "#top",
  links: [
    { label: "Index", href: "#index" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ],
  locationCode: "BDX",
  menuLabel: "Toggle menu",
} as const;

function formatLocalTime(date: Date, locationCode: string) {
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  return `${locationCode} ${hours}:${minutes}:${seconds}`;
}

export function AgencyTopbar({
  className,
  brand = defaults.brand,
  brandHref = defaults.brandHref,
  links = [...defaults.links],
  locationCode = defaults.locationCode,
  menuLabel = defaults.menuLabel,
  ...props
}: AgencyTopbarProps) {
  const menuId = useId();
  const [open, setOpen] = useState(false);
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const tick = () => {
      setNow(new Date());
    };
    tick();
    const timer = window.setInterval(tick, 1000);
    return () => window.clearInterval(timer);
  }, []);

  const clock = now
    ? formatLocalTime(now, locationCode)
    : `${locationCode} --:--:--`;

  return (
    <header
      data-slot="agency-topbar"
      className={cn(
        "sticky top-0 z-20 border-b border-[color-mix(in_oklab,var(--jk-background)_18%,transparent)] bg-foreground text-background",
        className,
      )}
      {...props}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-[90rem] items-center justify-between gap-4 px-[var(--jk-space-gutter)]"
      >
        <a
          href={brandHref}
          className="inline-flex items-center gap-2 font-[family-name:var(--jk-font-display)] text-sm font-semibold tracking-[0.22em] text-background no-underline uppercase"
        >
          {brand}
          <span
            aria-hidden="true"
            className="size-1.5 rounded-full bg-warning"
          />
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-[11px] tracking-[0.18em] text-background/80 no-underline uppercase transition-colors duration-300 hover:text-background motion-reduce:transition-none"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <p
            className="font-mono text-[11px] tracking-[0.14em] text-background tabular-nums"
            aria-live="polite"
            aria-atomic="true"
          >
            {clock}
          </p>
          <button
            type="button"
            className="grid size-9 place-items-center rounded-none border border-[color-mix(in_oklab,var(--jk-background)_28%,transparent)] text-background md:hidden"
            aria-label={menuLabel}
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((value) => !value)}
          >
            <span aria-hidden="true">{open ? "×" : "+"}</span>
          </button>
        </div>
      </nav>
      {open ? (
        <div
          id={menuId}
          className="border-t border-[color-mix(in_oklab,var(--jk-background)_18%,transparent)] px-[var(--jk-space-gutter)] py-4 md:hidden"
        >
          <ul className="flex flex-col gap-3">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-mono text-[11px] tracking-[0.18em] text-background no-underline uppercase"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
