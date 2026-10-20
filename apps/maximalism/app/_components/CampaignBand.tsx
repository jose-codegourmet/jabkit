import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import styles from "../style.module.css";
import { MaxImage } from "./MaxImage";
import { Sticker } from "./Sticker";

export type CampaignBandProps = {
  eyebrow: string;
  title: string;
  body?: ReactNode;
  /** Bounded band background, e.g. max-background-poster-wall or max-background-halftone. */
  imageId: string;
  /** Inline DemoNotice, on-page nav, or other content below the body. */
  children?: ReactNode;
  className?: string;
};

/**
 * Page-header band: the collage sits in a bounded band and all copy sits on a
 * solid ink panel, so text never lands on the artwork.
 */
export function CampaignBand({
  eyebrow,
  title,
  body,
  imageId,
  children,
  className,
}: CampaignBandProps) {
  return (
    <section className={cn(styles.campaignBand, className)}>
      <div aria-hidden="true" className={styles.campaignArt}>
        <MaxImage
          className={styles.campaignArtFrame}
          decorative
          id={imageId}
          priority
          ratio="21:9"
          sizes="100vw"
        />
      </div>
      <div className={styles.campaignPanel}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h1 className={cn("jk-display", styles.campaignTitle)}>{title}</h1>
        {typeof body === "string" ? (
          <p className={cn("jk-lead", styles.campaignBody)}>{body}</p>
        ) : (
          body
        )}
        {children ? (
          <div className={styles.campaignExtra}>{children}</div>
        ) : null}
      </div>
      <Sticker
        className={styles.campaignStickerA}
        motion="drift"
        rotate={-12}
        shape="star"
        size="clamp(3.5rem, 7vw, 6rem)"
        tone="lime"
      />
      <Sticker
        className={styles.campaignStickerB}
        motion="spin"
        shape="burst"
        size="clamp(3rem, 6vw, 5rem)"
        tone="pink"
      />
    </section>
  );
}
