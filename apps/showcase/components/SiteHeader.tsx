"use client";

import { Cross2Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { GITHUB_URL, isNavActive, primaryNav } from "../lib/site";
import { ThemeToggle } from "./ThemeToggle";

const DESKTOP_QUERY = "(min-width: 68.8125rem)";

function NavLinks({
  pathname,
  onNavigate,
  stacked = false,
}: {
  pathname: string | null;
  onNavigate?: () => void;
  stacked?: boolean;
}) {
  const base = stacked
    ? "flex min-h-12 items-center rounded-full border-2 px-4"
    : "inline-flex min-h-10 items-center rounded-full border-2 px-2.5";
  return (
    <>
      {primaryNav.map((item) => {
        const active = isNavActive(item, pathname);
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            aria-current={active ? "page" : undefined}
            className={`${base} transition-colors ${
              active
                ? "border-ink bg-mustard text-ink shadow-[2px_2px_0_var(--vd-shadow)]"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
      <a
        href={GITHUB_URL}
        onClick={onNavigate}
        className={`${base} border-transparent text-muted-foreground transition-colors hover:text-foreground`}
      >
        GitHub
      </a>
    </>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);
  const wasOpen = useRef(false);

  const close = () => setOpen(false);

  useEffect(() => {
    const media = window.matchMedia(DESKTOP_QUERY);
    const onChange = () => {
      if (media.matches) setOpen(false);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
      }
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  useEffect(() => {
    if (open) {
      wasOpen.current = true;
      panelRef.current?.querySelector<HTMLElement>("a, button")?.focus();
      return;
    }
    if (wasOpen.current) {
      wasOpen.current = false;
      buttonRef.current?.focus();
    }
  }, [open]);

  return (
    <>
      <div aria-hidden="true" className="vd-awning" />
      <header className="vd-header sticky top-0 z-40">
        <div className="mx-auto flex h-[68px] max-w-[1280px] items-center justify-between gap-4 px-5 tab:px-8">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-3 font-display text-xl tracking-[-0.01em]"
          >
            <img
              src="/art/jk-logo.webp"
              alt=""
              width={38}
              height={38}
              className="vd-logo-medallion size-[38px]"
            />
            JabKit
          </Link>
          <nav
            aria-label="Primary"
            className="hidden items-center gap-1 text-[13px] font-semibold tracking-[0.08em] uppercase desk:flex"
          >
            <NavLinks pathname={pathname} />
          </nav>
          <div className="flex items-center gap-2">
            <button
              ref={buttonRef}
              type="button"
              aria-label={open ? "Close navigation" : "Open navigation"}
              aria-expanded={open}
              aria-controls={menuId}
              onClick={() => setOpen((current) => !current)}
              className="grid size-10 place-items-center rounded-full border-2 border-ink bg-card shadow-[2px_2px_0_var(--vd-shadow)] desk:hidden"
            >
              {open ? <Cross2Icon /> : <HamburgerMenuIcon />}
            </button>
            <ThemeToggle />
          </div>
        </div>
        {open ? (
          <button
            type="button"
            tabIndex={-1}
            aria-label="Close navigation"
            className="fixed inset-0 top-[72px] z-40 bg-ink/30 desk:hidden"
            onClick={close}
          />
        ) : null}
        <nav
          ref={panelRef}
          id={menuId}
          aria-label="Mobile"
          hidden={!open}
          className="absolute inset-x-0 top-[calc(100%+4px)] z-50 border-b-4 border-double border-ink bg-card px-5 py-4 desk:hidden"
        >
          <div className="flex flex-col gap-1 text-sm font-semibold tracking-[0.08em] uppercase">
            <NavLinks pathname={pathname} onNavigate={close} stacked />
          </div>
        </nav>
      </header>
    </>
  );
}
