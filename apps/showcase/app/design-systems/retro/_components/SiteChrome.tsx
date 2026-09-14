"use client";

import { usePathname } from "next/navigation";
import { Button } from "@/atoms/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/atoms/dialog";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/atoms/navigation-menu";
import { brand, demoNote, navItems } from "../content";
import styles from "../style.module.css";
import { sampleRoot } from "../types";

function isCurrent(pathname: string, href: string) {
  if (href === sampleRoot) {
    return pathname === sampleRoot;
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={`${styles.frame} ${styles.headerInner}`}>
        <a className={styles.wordmark} href={sampleRoot}>
          {brand.name}
        </a>
        <NavigationMenu
          className={styles.desktopNav}
          delay={0}
          viewport={false}
        >
          <NavigationMenuList>
            {navItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink
                  className={styles.navLink}
                  href={item.href}
                  aria-current={
                    isCurrent(pathname, item.href) ? "page" : undefined
                  }
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <Dialog>
          <DialogTrigger
            render={
              <Button
                className={styles.menuButton}
                variant="secondary"
                aria-label="Open menu"
              >
                Menu
              </Button>
            }
          />
          <DialogContent
            className="top-0 left-0 max-h-dvh w-full max-w-none translate-x-0 translate-y-0 rounded-none sm:max-w-none"
            showCloseButton
          >
            <DialogHeader>
              <DialogTitle>Pocket Keeps</DialogTitle>
              <DialogDescription>Site menu</DialogDescription>
            </DialogHeader>
            <nav className={styles.mobilePanel} aria-label="Sample">
              {navItems.map((item) => (
                <DialogClose
                  key={item.href}
                  render={
                    <a
                      className={styles.navLink}
                      href={item.href}
                      aria-current={
                        isCurrent(pathname, item.href) ? "page" : undefined
                      }
                    >
                      {item.label}
                    </a>
                  }
                />
              ))}
            </nav>
          </DialogContent>
        </Dialog>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.frame}>
        <p className={styles.colophon}>{brand.name}</p>
        <p className={`jk-caption ${styles.meta}`}>
          A fictional drawer of sleeves and crops. No studio account is
          attached.
        </p>
        <p className={`jk-caption ${styles.meta}`}>{demoNote}</p>
        <nav className={styles.footerNav} aria-label="Footer">
          {navItems.map((item) => (
            <a key={item.href} className={styles.navLink} href={item.href}>
              {item.label}
            </a>
          ))}
          <a className={styles.navLink} href={sampleRoot}>
            Pocket home
          </a>
          <a className={styles.navLink} href="/samples">
            JabKit samples
          </a>
        </nav>
      </div>
    </footer>
  );
}
