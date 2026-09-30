"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import styles from "../style.module.css";

/**
 * Marketing routes get the site header, <main id="top"> and full footer. The portal
 * (/demo and below) supplies its own chrome from app/demo/layout.tsx, so this renders
 * only its children there. Header and footer arrive as server-rendered slots.
 */
export function MarketingFrame({
  header,
  footer,
  children,
}: {
  header: ReactNode;
  footer: ReactNode;
  children: ReactNode;
}) {
  const pathname = usePathname();
  const inPortal = pathname === "/demo" || pathname.startsWith("/demo/");

  if (inPortal) return <>{children}</>;

  return (
    <>
      {header}
      <main className={styles.main} id="top" tabIndex={-1}>
        {children}
      </main>
      {footer}
    </>
  );
}
