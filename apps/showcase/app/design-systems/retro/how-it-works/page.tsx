import type { Metadata } from "next";
import { Button } from "@/atoms/button";
import { Content1 } from "@/marketing/content1";
import { Faq12 } from "@/marketing/faq12";
import { toGuideSections } from "../_components/adapters";
import { demoNote, guideFaqs, studioHref, studioSteps } from "../content";
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
        <div className={styles.frame}>
          <h1 className="jk-heading">How it works</h1>
          <p className="jk-lead mt-4">
            The guide names the controls that exist on the studio page. There is
            no generated screenshot of a fake editor.
          </p>
          <p className={`jk-caption ${styles.meta} mt-4`}>{demoNote}</p>
          <div className={`${styles.actions} mt-6`}>
            <Button asChild>
              <a href={studioHref({ asset: "postcard-pier", aspect: "4:3" })}>
                Open seeded studio
              </a>
            </Button>
          </div>
        </div>
      </header>

      <section className={styles.section} aria-labelledby="annotated">
        <div className={styles.frame}>
          <h2 className={`jk-heading ${styles.anchorHeading}`} id="annotated">
            Annotated studio steps
          </h2>
          <p className="jk-body mt-4">
            These steps describe the live ImageCropper. Open the studio to use
            the same controls.
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
        description="The same sequence the studio implements: choose, frame, preview, download."
        kicker="Process"
        outlineLabel="On this page"
        sections={toGuideSections()}
        title="From a keep to a PNG"
      />

      <Faq12
        categories={guideFaqs}
        description="Formats and limits match the cropper. Plans stay conceptual."
        kicker="Limits"
        title="Files, keyboard, and the plan boundary"
      />
    </main>
  );
}
