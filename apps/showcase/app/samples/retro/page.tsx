import type { Metadata } from "next";
import { Button } from "@/atoms/button";
import { Faq12 } from "@/marketing/faq12";
import { StudioPreview } from "./_components/StudioPreview";
import { sampleImage } from "./assets";
import {
  brand,
  collectionHref,
  collections,
  demoNote,
  imageryStubNote,
  studioHref,
  studioSteps,
} from "./content";
import styles from "./style.module.css";
import { sampleRoot } from "./types";

export const metadata: Metadata = {
  title: "Pocket Keeps - JabKit Retro sample",
  description:
    "Fictional creative utility. Crop a keep in the browser, then compare plan concepts without a subscription.",
};

export default function RetroHomePage() {
  const hero = sampleImage(
    "ret-hero",
    "Placeholder arrangement of paper objects on a warm tabletop",
  );

  return (
    <main id="top">
      <section className={styles.section}>
        <div className={`${styles.frame} ${styles.heroLayout}`}>
          <div className={styles.heroCopy}>
            <h1 className="jk-display">{brand.statement}</h1>
            <p className="jk-lead mt-6">{brand.intro}</p>
            <p className={`jk-caption ${styles.meta} mt-4`}>{demoNote}</p>
            <div className={`${styles.actions} mt-6`}>
              <Button asChild>
                <a href={studioHref({ asset: "postcard-pier", aspect: "4:3" })}>
                  Open studio
                </a>
              </Button>
              <Button asChild variant="secondary">
                <a href={`${sampleRoot}/collections`}>Browse collections</a>
              </Button>
            </div>
          </div>
          <figure className={`${styles.figure} ${styles.tilt}`}>
            <img
              src={hero.src}
              alt={hero.alt}
              width={hero.width}
              height={hero.height}
              fetchPriority="high"
              decoding="async"
              className="aspect-[4/5] object-cover object-[center_35%] md:aspect-[3/2]"
            />
            <figcaption className={`jk-caption ${styles.caption}`}>
              {imageryStubNote}
            </figcaption>
          </figure>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="packs">
        <div className={styles.frame}>
          <h2 className={`jk-heading ${styles.anchorHeading}`} id="packs">
            Three closed packs
          </h2>
          <p className="jk-body mt-4">
            Start with Weekend Postcards if you want the 4:3 journey. Each pack
            has two keeps, not an endless catalogue.
          </p>
          <ul className={`${styles.packGrid} mt-8`}>
            {collections.map((collection) => {
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
                    <p className={`jk-caption ${styles.meta}`}>
                      {collection.theme} · {collection.assetIds.length} keeps
                    </p>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="studio-home">
        <div className={styles.frame}>
          <h2 className={`jk-heading ${styles.anchorHeading}`} id="studio-home">
            The studio is this cropper
          </h2>
          <p className="jk-body mt-4">
            Crop, zoom, and download work now. Cloud sync, collaboration, and
            paid accounts are plan concepts only and have no controls here.
          </p>
          <p className={`jk-caption ${styles.meta} mt-4`}>
            Live ImageCropper. Same Upload, aspect, zoom, preview, Download, and
            Reset to sample as the studio page.
          </p>
          <div className="mt-6">
            <StudioPreview />
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="steps-home">
        <div className={styles.frame}>
          <h2 className={`jk-heading ${styles.anchorHeading}`} id="steps-home">
            Three steps
          </h2>
          <ol className={`${styles.steps} mt-8`}>
            {studioSteps.map((step) => (
              <li className={styles.step} key={step.id}>
                <h3 className="jk-label">{step.title}</h3>
                <p className="jk-body mt-2">{step.body}</p>
              </li>
            ))}
          </ol>
          <div className={`${styles.actions} mt-8`}>
            <Button asChild>
              <a href={`${sampleRoot}/how-it-works`}>How it works</a>
            </Button>
            <Button asChild variant="secondary">
              <a href={`${sampleRoot}/pricing`}>Compare plan concepts</a>
            </Button>
          </div>
        </div>
      </section>

      <Faq12
        categories={[
          {
            id: "now",
            label: "What works now",
            items: [
              {
                question: "Is this a subscription product?",
                answer:
                  "No. Sleeve is the free local demo. Cabinet is an illustrative concept. No payment is collected.",
              },
            ],
          },
        ]}
        description={demoNote}
        kicker="Honest limits"
        title="A working crop, a fictional cabinet"
      />
    </main>
  );
}
