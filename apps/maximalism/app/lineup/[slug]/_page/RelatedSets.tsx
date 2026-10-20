import Link from "next/link";
import { cn } from "@/lib/cn";
import { ActCard } from "../../../_components/ActCard";
import type { Artist } from "../../../_data/artists";
import shared from "../../../style.module.css";
import styles from "./artist.module.css";
import { artistCopy } from "./content";

export type RelatedSetsProps = {
  related: Artist[];
  stageName: string;
};

/** Other sets on the same stage and day. Demo data has none, so the empty path is the usual one. */
export function RelatedSets({ related, stageName }: RelatedSetsProps) {
  return (
    <section
      aria-labelledby="artist-related-heading"
      className={cn(shared.section, styles.related)}
    >
      <div className={shared.sectionHead}>
        <h2
          className={cn("jk-heading", styles.relatedHeading)}
          id="artist-related-heading"
        >
          {artistCopy.related.heading(stageName)}
        </h2>
      </div>
      {related.length > 0 ? (
        <ul className={styles.relatedGrid}>
          {related.map((artist, index) => (
            <li key={artist.slug}>
              <ActCard
                artist={artist}
                headingLevel="h3"
                size="sm"
                tilt={index % 2 === 0 ? 1 : -1}
              />
            </li>
          ))}
        </ul>
      ) : (
        <div className={cn(shared.quietPanel, styles.relatedEmpty)}>
          <p className={styles.relatedEmptyText}>
            {artistCopy.related.empty}{" "}
            <Link className={shared.textLink} href="/schedule">
              {artistCopy.related.emptyLink.label}
            </Link>
          </p>
        </div>
      )}
    </section>
  );
}
