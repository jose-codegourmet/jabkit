"use client";

import { Cross2Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { Button } from "@/atoms/button";
import { ThemeToggle } from "./ThemeToggle";

const navClassName =
  "inline-flex min-h-11 items-center text-muted-foreground hover:text-foreground";

function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <>
      <Link href="/components" className={navClassName} onClick={onNavigate}>
        Components
      </Link>
      <Link href="/samples" className={navClassName} onClick={onNavigate}>
        Samples
      </Link>
      <Link href="/#how-it-works" className={navClassName} onClick={onNavigate}>
        How it works
      </Link>
      <a
        href="https://github.com"
        className={navClassName}
        onClick={onNavigate}
      >
        GitHub
      </a>
    </>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const buttonWrapRef = useRef<HTMLSpanElement>(null);
  const panelRef = useRef<HTMLElement>(null);
  const wasOpen = useRef(false);

  const close = () => setOpen(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 640px)");
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
      const first = panelRef.current?.querySelector<HTMLElement>("a, button");
      first?.focus();
      return;
    }
    if (wasOpen.current) {
      wasOpen.current = false;
      buttonWrapRef.current?.querySelector("button")?.focus();
    }
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold tracking-tight"
        >
          <span className="grid size-7 place-items-center rounded-md bg-primary font-mono text-sm text-primary-foreground">
            J
          </span>
          JabKit
        </Link>
        <nav
          aria-label="Primary"
          className="hidden items-center gap-6 text-sm sm:flex"
        >
          <NavLinks />
        </nav>
        <div className="flex items-center gap-2">
          <span ref={buttonWrapRef} className="sm:hidden">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="size-9 px-0"
              aria-label={open ? "Close navigation" : "Open navigation"}
              aria-expanded={open}
              aria-controls={menuId}
              onClick={() => setOpen((current) => !current)}
            >
              {open ? <Cross2Icon /> : <HamburgerMenuIcon />}
            </Button>
          </span>
          <ThemeToggle />
        </div>
      </div>
      {open ? (
        <button
          type="button"
          tabIndex={-1}
          aria-label="Close navigation"
          className="fixed inset-0 top-[68px] z-40 bg-foreground/20 sm:hidden"
          onClick={close}
        />
      ) : null}
      <nav
        ref={panelRef}
        id={menuId}
        aria-label="Mobile"
        hidden={!open}
        className="absolute inset-x-0 top-full z-50 border-b border-border bg-background px-5 py-3 sm:hidden"
      >
        <div className="flex flex-col text-sm">
          <NavLinks onNavigate={close} />
        </div>
      </nav>
    </header>
  );
}
