"use client";

import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { brand, mobileMenuItems, navItems } from "../_data/site";
import nav from "../navigation.module.css";
import { DemoNotice } from "./DemoNotice";
import { Sticker } from "./Sticker";

function isCurrent(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function DesktopNav() {
  const pathname = usePathname();
  return (
    <nav aria-label="Primary" className={nav.desktopNav}>
      <ul className={nav.navList}>
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              aria-current={isCurrent(pathname, item.href) ? "page" : undefined}
              className={nav.navLink}
              href={item.href as Route}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

const mobileQuery = "(max-width: 899px)";

/**
 * Below 900px: Menu/Close button plus a full-height ink sheet. Focus moves into
 * the sheet and is trapped with the Close button; Esc and Close dismiss it and
 * return focus to the button; the page behind is inert and does not scroll.
 */
export function MobileMenu() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);
  const sheetId = useId();

  const close = useCallback((returnFocus = true) => {
    setOpen(false);
    if (returnFocus) buttonRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;

    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    root.style.overflow = "hidden";
    const background = Array.from(
      document.querySelectorAll<HTMLElement>("[data-max-inert-when-menu]"),
    );
    for (const element of background) element.inert = true;

    sheetRef.current?.querySelector<HTMLElement>("a[href]")?.focus();

    function focusables(): HTMLElement[] {
      const inSheet = Array.from(
        sheetRef.current?.querySelectorAll<HTMLElement>("a[href], button") ??
          [],
      );
      return buttonRef.current ? [buttonRef.current, ...inSheet] : inSheet;
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }
      if (event.key !== "Tab") return;
      const items = focusables();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement as HTMLElement | null;
      if (!active || !items.includes(active)) {
        event.preventDefault();
        first.focus();
      } else if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    }

    const media = window.matchMedia(mobileQuery);
    function onViewportChange() {
      if (!media.matches) close(false);
    }

    document.addEventListener("keydown", onKeyDown);
    media.addEventListener("change", onViewportChange);
    return () => {
      root.style.overflow = previousOverflow;
      for (const element of background) element.inert = false;
      document.removeEventListener("keydown", onKeyDown);
      media.removeEventListener("change", onViewportChange);
    };
  }, [open, close]);

  return (
    <>
      <button
        aria-controls={sheetId}
        aria-expanded={open}
        className={nav.menuButton}
        onClick={() => (open ? close() : setOpen(true))}
        ref={buttonRef}
        type="button"
      >
        <span aria-hidden="true" className={nav.menuIcon} data-open={open}>
          <span />
          <span />
        </span>
        {open ? "Close" : "Menu"}
      </button>
      <div
        aria-label="Menu"
        aria-modal="true"
        className={nav.sheet}
        data-open={open ? "true" : undefined}
        hidden={!open}
        id={sheetId}
        ref={sheetRef}
        role="dialog"
      >
        <nav aria-label="Mobile" className={nav.sheetNav}>
          <ul className={nav.sheetList}>
            {mobileMenuItems.map((item) => (
              <li key={item.href}>
                <Link
                  aria-current={
                    isCurrent(pathname, item.href) ? "page" : undefined
                  }
                  className={nav.sheetLink}
                  href={item.href as Route}
                  onClick={() => close(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <p className={nav.sheetTagline}>{brand.tagline}</p>
        <Sticker
          className={nav.sheetStickerA}
          rotate={-14}
          shape="star"
          size="5rem"
          tone="lime"
        />
        <Sticker
          className={nav.sheetStickerB}
          shape="knob"
          size="4.5rem"
          tone="pink"
        />
      </div>
    </>
  );
}

const demoRoutes = ["/", "/lineup", "/schedule", "/tickets", "/info"];

/** Full demo notice strip above the footer on every page that shows demo data. */
export function FooterDemoStrip({ className }: { className?: string }) {
  const pathname = usePathname();
  const show = demoRoutes.some((route) =>
    route === "/" ? pathname === "/" : isCurrent(pathname, route),
  );
  if (!show) return null;
  return (
    <DemoNotice className={cn(nav.footerDemo, className)} variant="full" />
  );
}
