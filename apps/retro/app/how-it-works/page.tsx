import type { Metadata } from "next";
import { Button } from "@/atoms/button";
import { Content1 } from "@/marketing/content1";
import { Faq12 } from "@/marketing/faq12";
import { ArtImage } from "../_components/ArtImage";
import { toGuideSections } from "../_components/adapters";
import { guideFaqs, studioHref, studioSteps } from "../content";
import styles from "../style.module.css";

export const metadata: Metadata = {
  title: "How it works - Pocket Keeps",
  description:
    "Choose a keep or upload, set a crop, pan and zoom, then download. The studio is the real ImageCropper.",
};

export default function HowItWorksPage() {
  return (
    <main id="top">
      <header className={styles.section}>
        <div className={`${styles.frame} ${styles.guideIntro}`}>
          <div>
            <h1 className="jk-heading">How it works</h1>
            <p className="jk-lead mt-4">
              Choose a picture, find the right frame, and take a small piece
              with you.
            </p>

            <div className={`${styles.actions} mt-6`}>
              <Button asChild>
                <a href={studioHref({ asset: "postcard-pier", aspect: "4:3" })}>
                  Open studio
                </a>
              </Button>
            </div>
          </div>
          <ArtImage
            id="ret-process-cutout"
            alt="Cut paper, photo prints and analog tools laid out on a work table"
            priority
          />
        </div>
      </header>

      <section className={styles.section} aria-labelledby="annotated">
        <div className={styles.frame}>
          <h2 className={`jk-heading ${styles.anchorHeading}`} id="annotated">
            Find your frame
          </h2>
          <p className="jk-body mt-4">
            A few simple controls, a picture of your own, and room to
            experiment.
          </p>
          <ol className={`${styles.guideList} mt-8`}>
            {studioSteps.map((step) => (
              <li className={styles.guideItem} key={step.id}>
                <h3 className="jk-label">{step.title}</h3>
                <p className="jk-body mt-2">{step.body}</p>
              </li>
            ))}
            <li className={styles.guideItem}>
              <h3 className="jk-label">Recover from a failed upload</h3>
              <p className="jk-body mt-2">
                If the type, size, or decode check fails, the cropper keeps the
                current picture and shows the limit. Reset to sample returns to
                Pier at low tide, or whichever keep the URL named.
              </p>
            </li>
          </ol>
        </div>
      </section>

      <Content1
        description="A closer look at each step, from choosing your picture to saving the finished crop."
        kicker="Process"
        outlineLabel="On this page"
        sections={toGuideSections()}
        title="From a keep to a PNG"
      />

      <Faq12
        categories={guideFaqs}
        description="Everything you need to know before making your first keep."
        kicker="Limits"
        title="A few practical details"
      />
    </main>
  );
}
