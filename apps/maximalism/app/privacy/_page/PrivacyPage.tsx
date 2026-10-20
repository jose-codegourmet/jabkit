import type { Route } from "next";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { Placeholder } from "../../_components/Placeholder";
import { Sticker } from "../../_components/Sticker";
import shared from "../../style.module.css";
import { privacyCopy } from "./content";
import styles from "./legal.module.css";

/**
 * Plain prose stub: one loud display title, then the placeholder privacy notice on a
 * quiet, high-contrast panel. Stickers live in their own grid column so they
 * can never land on the heading or the copy.
 */
export function PrivacyPage() {
  return (
    <article aria-labelledby="privacy-title" className={styles.page}>
      <header className={styles.header}>
        <h1 className={cn("jk-display", styles.title)} id="privacy-title">
          {privacyCopy.title}
        </h1>
        <div aria-hidden="true" className={styles.stickers}>
          <Sticker
            motion="drift"
            rotate={-10}
            shape="knob"
            size="clamp(3rem, 6vw, 4.75rem)"
            tone="cobalt"
          />
          <Sticker
            className={styles.stickerTrail}
            rotate={8}
            shape="bolt"
            size="clamp(2.5rem, 5vw, 3.75rem)"
            tone="lime"
          />
        </div>
      </header>

      <div className={cn(shared.quietPanel, styles.panel)}>
        <p className={cn("jk-lead", styles.body)}>
          <Placeholder text={privacyCopy.body} />
        </p>
        <p className={styles.note}>{privacyCopy.note}</p>
      </div>

      <p className={styles.backRow}>
        <Link
          className={cn(shared.textLink, styles.back)}
          href={privacyCopy.back.href as Route}
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
          {privacyCopy.back.label}
        </Link>
      </p>
    </article>
  );
}
