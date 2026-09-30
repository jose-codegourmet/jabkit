"use client";

import { Cross2Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { Button } from "@/atoms/button";
import { headerNav, headerPrimary, headerSecondary } from "../_data/site";
import styles from "../navigation.module.css";

function isCurrent(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

/** Desktop nav links, right-side actions and the mobile menu sheet. */
export function SiteNavigation() {
  const pathname = usePathname();
  const sheetId = useId();
  const [open, setOpen] = useState(false);
  const [path, setPath] = useState(pathname);
  const menuButton = useRef<HTMLButtonElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const wasOpen = useRef(false);

  if (path !== pathname) {
    setPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButton.current?.focus();
    const media = window.matchMedia("(min-width: 768px)");
    const onMedia = () => {
      if (media.matches) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    media.addEventListener("change", onMedia);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      media.removeEventListener("change", onMedia);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    if (open) {
      wasOpen.current = true;
      return;
    }
    if (wasOpen.current) {
      wasOpen.current = false;
      menuButton.current?.focus();
    }
  }, [open]);

  return (
    <>
      <nav aria-label="Primary" className={styles.nav}>
        <ul>
          {headerNav.map((link) => (
            <li key={link.href}>
              <Link
                aria-current={
                  isCurrent(pathname, link.href) ? "page" : undefined
                }
                className={styles.navLink}
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.headerActions}>
        <Link className={styles.secondaryLink} href={headerSecondary.href}>
          {headerSecondary.label}
        </Link>
        <Button asChild className={styles.primaryButton}>
          <Link href={headerPrimary.href}>{headerPrimary.label}</Link>
        </Button>
        <button
          aria-controls={sheetId}
          aria-expanded={open}
          className={styles.menuButton}
          onClick={() => setOpen((value) => !value)}
          ref={menuButton}
          type="button"
        >
          <HamburgerMenuIcon aria-hidden="true" />
          Menu
        </button>
      </div>

      {open ? (
        <div className={styles.sheet} id={sheetId}>
          <div className={styles.sheetInner}>
            <nav aria-label="Menu">
              <ul className={styles.sheetList}>
                {headerNav.map((link) => (
                  <li key={link.href}>
                    <Link
                      aria-current={
                        isCurrent(pathname, link.href) ? "page" : undefined
                      }
                      className={styles.sheetLink}
                      href={link.href}
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    className={styles.sheetLink}
                    href={headerSecondary.href}
                    onClick={() => setOpen(false)}
                  >
                    {headerSecondary.label}
                  </Link>
                </li>
              </ul>
            </nav>
            <Button asChild className={styles.sheetPrimary} size="lg">
              <Link href={headerPrimary.href} onClick={() => setOpen(false)}>
                {headerPrimary.label}
              </Link>
            </Button>
            <button
              className={styles.closeButton}
              onClick={() => setOpen(false)}
              ref={closeButton}
              type="button"
            >
              <Cross2Icon aria-hidden="true" />
              Close
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
