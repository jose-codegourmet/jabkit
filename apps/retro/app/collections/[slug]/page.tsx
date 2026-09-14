import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Badge } from "@/atoms/badge";
import { Button } from "@/atoms/button";
import { CollectionPicker } from "../../_components/CollectionPicker";
import { sampleImage } from "../../assets";
import {
  assetsForCollection,
  collectionHref,
  collections,
  cropFormatLabels,
  getCollection,
  imageryStubNote,
  provenanceNote,
  studioHref,
  tagLabels,
} from "../../content";
import styles from "../../style.module.css";
import { sampleRoot } from "../../types";

export function generateStaticParams() {
  return collections.map((collection) => ({ slug: collection.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const collection = getCollection(slug);
  if (!collection) {
    return { title: "Collection not found - Pocket Keeps" };
  }
  return {
    title: `${collection.title} - Pocket Keeps`,
    description: collection.summary,
  };
}

export default async function CollectionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const collection = getCollection(slug);
  if (!collection) notFound();

  const keeps = assetsForCollection(collection);
  const cover = sampleImage(collection.coverId, collection.coverAlt);

  return (
    <main id="top">
      <header className={styles.section}>
        <div className={styles.frame}>
          <p className={`jk-caption ${styles.meta}`}>
            <a href={`${sampleRoot}collections`}>Collections</a>
            {" / "}
            {collection.title}
          </p>
          <h1 className="jk-heading mt-4">{collection.title}</h1>
          <p className="jk-lead mt-4">{collection.theme}</p>
          <p className="jk-body mt-4">{collection.description}</p>

          <div className={`${styles.topics} mt-4`}>
            {collection.tags.map((tag) => (
              <Badge key={tag}>{tagLabels[tag]}</Badge>
            ))}
          </div>
          <figure className={`${styles.figure} mt-8`}>
            <img
              src={cover.src}
              alt={collection.coverAlt}
              width={cover.width}
              height={cover.height}
              decoding="async"
              className="aspect-[4/3]"
            />
            <figcaption className={`jk-caption ${styles.caption}`}>
              {collection.coverCaption} {imageryStubNote}
            </figcaption>
          </figure>
        </div>
      </header>

      <section className={styles.section} aria-labelledby="keeps">
        <div className={styles.frame}>
          <h2 className={`jk-heading ${styles.anchorHeading}`} id="keeps">
            Two keeps
          </h2>
          <ul className={`${styles.assetGrid} mt-8`}>
            {keeps.map((asset) => {
              const image = sampleImage(asset.imageId, asset.alt);
              return (
                <li key={asset.id}>
                  <figure className={styles.figure}>
                    <img
                      src={image.src}
                      alt={asset.alt}
                      width={image.width}
                      height={image.height}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[4/3]"
                    />
                    <figcaption className={`jk-caption ${styles.caption}`}>
                      {asset.caption}
                    </figcaption>
                  </figure>
                  <h3 className={`${styles.sleeveTitle} mt-4`}>
                    {asset.title}
                  </h3>
                  <p className="jk-body mt-2">{asset.summary}</p>
                  <p className={`jk-caption ${styles.meta} mt-2`}>
                    {asset.cropNote}
                  </p>
                  <div className={`${styles.actions} mt-4`}>
                    <Button asChild size="sm">
                      <a href={studioHref({ asset: asset.id, aspect: "4:3" })}>
                        Open {cropFormatLabels["4:3"]} in studio
                      </a>
                    </Button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="picker">
        <div className={styles.frame}>
          <h2 className={`jk-heading ${styles.anchorHeading}`} id="picker">
            Choose an asset and a format
          </h2>
          <p className="jk-body mt-4">
            Open in studio is a local navigation, not a cart. Formats map to the
            cropper: 1:1, 4:3, 16:9, and free. This prepares a crop of a local
            image. It does not generate a design or save a cloud project.
          </p>
        </div>
        <CollectionPicker
          assets={keeps}
          description={`${collection.summary} Select a keep with the image controls, then a crop format.`}
          title={collection.title}
        />
      </section>

      <section className={styles.section} id="provenance">
        <div className={styles.frame}>
          <h2 className={`jk-heading ${styles.anchorHeading}`}>Provenance</h2>
          <p className="jk-body mt-4">{provenanceNote}</p>
          <p className={`jk-caption ${styles.meta} mt-4`}>{imageryStubNote}</p>
          <div className={`${styles.actions} mt-6`}>
            <Button asChild variant="secondary">
              <a href={collectionHref(collection.slug)}>This collection</a>
            </Button>
            <Button asChild variant="secondary">
              <a href={`${sampleRoot}how-it-works`}>How cropping works</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
