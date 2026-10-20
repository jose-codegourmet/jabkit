import type { Route } from "next";
import Link from "next/link";
import { Button } from "@/atoms/button";
import { cn } from "@/lib/cn";
import { MaxImage } from "../../../_components/MaxImage";
import { Sticker } from "../../../_components/Sticker";
import { artistHref, artists } from "../../../_data/artists";
import styles from "./artist.module.css";
import { artistNotFoundCopy } from "./content";

/** Unknown act: say so plainly, then hand back the whole demo lineup. */
export function ArtistNotFound() {
  return (
    <section
      aria-labelledby="artist-missing-heading"
      className={styles.missing}
    >
      <div className={styles.missingPanel}>
        <h1 className={styles.missingTitle} id="artist-missing-heading">
          {artistNotFoundCopy.heading}
        </h1>
        <p className={cn("jk-lead", styles.missingBody)}>
          {artistNotFoundCopy.body}
        </p>
        <ul
          aria-label={artistNotFoundCopy.listLabel}
          className={styles.missingList}
        >
          {artists.map((artist) => (
            <li key={artist.slug}>
              <Link
                className={styles.missingChip}
                href={artistHref(artist.slug) as Route}
              >
                {artist.name}
              </Link>
            </li>
          ))}
        </ul>
        <div>
          <Button asChild size="lg">
            <Link href="/lineup">{artistNotFoundCopy.button.label}</Link>
          </Button>
        </div>
      </div>

      <div className={styles.missingArt}>
        <div className={styles.missingArtFrame}>
          <MaxImage
            id={artistNotFoundCopy.imageId}
            priority
            ratio="4:5"
            mobileRatio="4:3"
            sizes="(max-width: 899px) 92vw, 30rem"
          />
        </div>
        <Sticker
          className={cn(styles.missingSticker, styles.missingStickerA)}
          motion="spin"
          rotate={-8}
          shape="burst"
          size="clamp(3.5rem, 8vw, 6rem)"
          tone="lime"
        />
        <Sticker
          className={cn(styles.missingSticker, styles.missingStickerB)}
          motion="drift"
          rotate={18}
          shape="squiggle"
          size="clamp(3.5rem, 7vw, 5.5rem)"
          tone="tangerine"
        />
      </div>
    </section>
  );
}
