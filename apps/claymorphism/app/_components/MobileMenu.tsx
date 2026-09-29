"use client";

import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { mobileExtraLinks, navLinks } from "../_data/site";
import styles from "../navigation.module.css";

function setInert(element: Element | null, locked: boolean) {
  if (!element) return;
  if (locked) element.setAttribute("inert", "");
  else element.removeAttribute("inert");
}

export function MobileMenu() {
  const pathname = usePathname();
  const menuId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const wasOpen = useRef(false);
  const [open, setOpen] = useState(false);
  const [path, setPath] = useState(pathname);
  if (path !== pathname) {
    setPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const media = window.matchMedia("(min-width: 768px)");
    const closeOnDesktop = () => {
      if (media.matches) setOpen(false);
    };
    media.addEventListener("change", closeOnDesktop);
    return () => media.removeEventListener("change", closeOnDesktop);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const main = document.getElementById("top");
    const footer = document.querySelector("footer");
    const demo = document.querySelector('[aria-label="Demo information"]');
    setInert(main, true);
    setInert(footer, true);
    setInert(demo, true);
    closeRef.current?.focus();

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      setInert(main, false);
      setInert(footer, false);
      setInert(demo, false);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    if (open) {
      wasOpen.current = true;
      return;
    }
    if (wasOpen.current) buttonRef.current?.focus();
  }, [open]);

  return (
    <>
      <button
        aria-controls={menuId}
        aria-expanded={open}
        className={styles.menuButton}
        onClick={() => setOpen((current) => !current)}
        ref={buttonRef}
        type="button"
      >
        Menu
      </button>
      {open ? (
        <div className={styles.sheet} id={menuId}>
          <div className={styles.sheetInner}>
            {navLinks.map((link) => (
              <a
                aria-current={pathname === link.href ? "page" : undefined}
                className={styles.tile}
                href={link.href}
                key={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className={styles.extra}>
              {mobileExtraLinks.map((link) => (
                <a
                  aria-current={pathname === link.href ? "page" : undefined}
                  href={link.href}
                  key={link.href}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <button
              className={styles.close}
              onClick={() => setOpen(false)}
              ref={closeRef}
              type="button"
            >
              Close menu
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
