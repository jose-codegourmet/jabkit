import { Button } from "@/atoms/button";
import { cn } from "@/lib/cn";
import { ctaBand } from "../_data/site";
import styles from "../style.module.css";
import { MaxImage } from "./MaxImage";
import { Sticker } from "./Sticker";

export type CtaBandProps = {
  className?: string;
  /** Hide the practical-info link on /info itself. */
  hideInfoLink?: boolean;
};

/** Shared closing band: collage on one side, copy on a solid ink panel. */
export function CtaBand({ className, hideInfoLink = false }: CtaBandProps) {
  return (
    <section
      aria-labelledby="max-cta-heading"
      className={cn(styles.cta, className)}
    >
      <div className={styles.ctaArt}>
        <MaxImage
          decorative
          id={ctaBand.imageId}
          mobileId={ctaBand.mobileImageId}
          mobileRatio="4:5"
          ratio="16:9"
          sizes="(max-width: 767px) 100vw, 55vw"
        />
        <Sticker
          className={styles.ctaSticker}
          motion="drift"
          rotate={10}
          shape="bolt"
          size="clamp(3rem, 6vw, 5rem)"
          tone="lime"
        />
      </div>
      <div className={styles.ctaPanel}>
        <h2
          className={cn("jk-heading", styles.ctaHeading)}
          id="max-cta-heading"
        >
          {ctaBand.headline}
        </h2>
        <p className={styles.ctaBody}>{ctaBand.body}</p>
        <div className={styles.buttonRow}>
          <Button asChild size="lg">
            <a href={ctaBand.primary.href}>{ctaBand.primary.label}</a>
          </Button>
          {hideInfoLink ? null : (
            <a className={styles.textLinkOnDark} href={ctaBand.secondary.href}>
              {ctaBand.secondary.label}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
