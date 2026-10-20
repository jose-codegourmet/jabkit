import type { Route } from "next";
import Link from "next/link";
import { Button } from "@/atoms/button";
import { cn } from "@/lib/cn";
import { MaxImage } from "../_components/MaxImage";
import { Sticker } from "../_components/Sticker";
import { artists } from "../_data/artists";
import shared from "../style.module.css";
import { lineupCopy } from "./content";
import styles from "./home.module.css";
import { LineupCarousel } from "./LineupCarousel";

/** Lineup preview on a bounded poster-wall band; every piece of copy sits on a solid panel. */
export function LineupPreview() {
  return (
    <section
      aria-labelledby="home-lineup-title"
      className={cn(shared.section, styles.lineup)}
    >
      <div aria-hidden="true" className={styles.lineupBackdrop}>
        <MaxImage
          className={styles.lineupBackdropImage}
          decorative
          id="max-background-poster-wall"
          ratio="3:2"
          sizes="100vw"
        />
      </div>
      <Sticker
        className={styles.lineupSticker}
        motion="drift"
        rotate={8}
        shape="bolt"
        size="clamp(3rem, 6vw, 4.5rem)"
        tone="lime"
      />

      <div className={styles.lineupHead}>
        <h2 className="jk-heading" id="home-lineup-title">
          {lineupCopy.title}
        </h2>
        <p className="jk-body">{lineupCopy.body}</p>
      </div>

      <LineupCarousel
        artists={artists}
        label={lineupCopy.carouselLabel}
        listView={lineupCopy.listView}
        nextLabel={lineupCopy.next}
        previousLabel={lineupCopy.previous}
      />

      <div className={styles.lineupFoot}>
        <Button asChild size="lg">
          <Link href={lineupCopy.fullLineup.href as Route}>
            {lineupCopy.fullLineup.label}
          </Link>
        </Button>
      </div>
    </section>
  );
}
