import type { Metadata } from "next";
import { Badge } from "@/atoms/badge";
import { Button } from "@/atoms/button";
import { sampleEmptyCopy } from "../../../../components/samples";
import { CollectionControls } from "../_components/CollectionControls";
import { sampleImage } from "../assets";
import {
  collectionHref,
  demoNote,
  filterCollections,
  parseTagFilter,
  studioHref,
  tagLabels,
} from "../content";
import styles from "../style.module.css";
import { sampleRoot } from "../types";

export const metadata: Metadata = {
  title: "Collections - Pocket Keeps",
  description:
    "Three closed packs: Desk Drawer, Weekend Postcards, and Night Bus. Search and filter by tag.",
};

export default async function CollectionsPage({
  searchParams,
}: {
  searchParams: Promise<{ filter?: string; q?: string }>;
}) {
  const params = await searchParams;
  const filter = parseTagFilter(
    Array.isArray(params.filter) ? params.filter[0] : params.filter,
  );
  const q = Array.isArray(params.q) ? (params.q[0] ?? "") : (params.q ?? "");
  const records = filterCollections(filter, q);

  return (
    <main id="top" className={styles.section}>
      <div className={styles.frame}>
        <h1 className="jk-heading">Collections</h1>
        <p className="jk-lead mt-4">
          Three packs. Search titles and tags. This is not a storefront of paid
          licenses.
        </p>
        <p className={`jk-caption ${styles.meta} mt-4`}>{demoNote}</p>
        <div className="mt-8">
          <CollectionControls current={filter} q={q} />
        </div>
        <div className={`${styles.actions} mt-6`}>
          <Button asChild>
            <a href={studioHref()}>Open studio with your own image</a>
          </Button>
        </div>
        {records.length === 0 ? (
          <div className="mt-12">
            <p className="jk-body">{sampleEmptyCopy.noMatches}</p>
            <div className="mt-4">
              <Button asChild variant="secondary">
                <a href={`${sampleRoot}/collections`}>Reset filters</a>
              </Button>
            </div>
          </div>
        ) : (
          <ul className={`${styles.packGrid} mt-12`}>
            {records.map((collection) => {
              const cover = sampleImage(
                collection.coverId,
                collection.coverAlt,
              );
              return (
                <li key={collection.slug}>
                  <a
                    className={styles.sleeve}
                    href={collectionHref(collection.slug)}
                  >
                    <figure className={styles.figure}>
                      <img
                        src={cover.src}
                        alt={collection.coverAlt}
                        width={cover.width}
                        height={cover.height}
                        loading="lazy"
                        decoding="async"
                        className="aspect-[4/3]"
                      />
                    </figure>
                    <p className={`${styles.sleeveTitle} mt-3`}>
                      {collection.title}
                    </p>
                    <p className="jk-body mt-2">{collection.theme}</p>
                    <p className={`jk-caption ${styles.meta}`}>
                      {collection.assetIds.length} keeps
                    </p>
                    <div className={`${styles.topics} mt-3`}>
                      {collection.tags.map((tag) => (
                        <Badge key={tag}>{tagLabels[tag]}</Badge>
                      ))}
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </main>
  );
}
