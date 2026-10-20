import type { Route } from "next";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { Placeholder } from "../../_components/Placeholder";
import { Sticker } from "../../_components/Sticker";
import shared from "../../style.module.css";
import { termsCopy } from "./content";
import styles from "./legal.module.css";

/**
 * Plain prose stub: one loud display title, then the placeholder terms on a
 * quiet, high-contrast panel. Stickers live in their own grid column so they
 * can never land on the heading or the copy.
 */
export function TermsPage() {
  return (
    <article aria-labelledby="terms-title" className={styles.page}>
      <header className={styles.header}>
        <h1 className={cn("jk-display", styles.title)} id="terms-title">
          {termsCopy.title}
        </h1>
        <div aria-hidden="true" className={styles.stickers}>
          <Sticker
            motion="drift"
            rotate={-10}
            shape="star"
            size="clamp(3rem, 6vw, 4.75rem)"
            tone="lime"
          />
          <Sticker
            className={styles.stickerTrail}
            rotate={8}
            shape="squiggle"
            size="clamp(2.5rem, 5vw, 3.75rem)"
            tone="pink"
          />
        </div>
      </header>

      <div className={cn(shared.quietPanel, styles.panel)}>
        <p className={cn("jk-lead", styles.body)}>
          <Placeholder text={termsCopy.body} />
        </p>
        <p className={styles.note}>{termsCopy.note}</p>
      </div>

      <p className={styles.backRow}>
        <Link
          className={cn(shared.textLink, styles.back)}
          href={termsCopy.back.href as Route}
        >
          <svg
            aria-hidden="true"
            className={styles.backIcon}
            fill="none"
            focusable="false"
            viewBox="0 0 24 24"
          >
            <path d="M19 12H5m6-6-6 6 6 6" />
          </svg>
          {termsCopy.back.label}
        </Link>
      </p>
    </article>
  );
}
