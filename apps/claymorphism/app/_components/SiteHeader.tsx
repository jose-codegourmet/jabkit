"use client";

import { usePathname } from "next/navigation";
import { Button } from "@/atoms/button";
import { assets } from "../_data/assets";
import { navLinks, primaryCta } from "../_data/site";
import styles from "../navigation.module.css";
import { ClayImage } from "./ClayImage";
import { MobileMenu } from "./MobileMenu";

function Wordmark() {
  if (assets["cla-logo-wordmark"]) {
    return (
      <ClayImage
        alt=""
        className={styles.wordmarkImage}
        decorative
        id="cla-logo-wordmark"
        priority
      />
    );
  }

  return (
    <>
      <ClayImage
        alt=""
        className={styles.symbol}
        decorative
        id="cla-logo-symbol"
        priority
      />
      <span className={styles.wordmarkType}>pillo</span>
    </>
  );
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.rail}>
        <a aria-label="Pillo home" className={styles.wordmark} href="/">
          <Wordmark />
        </a>
        <nav aria-label="Primary" className={styles.nav}>
          {navLinks.map((link) => (
            <a
              aria-current={pathname === link.href ? "page" : undefined}
              className={styles.link}
              href={link.href}
              key={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <Button asChild className={styles.start}>
          <a href={primaryCta.href}>{primaryCta.label}</a>
        </Button>
        <MobileMenu />
      </div>
    </header>
  );
}
