import { CtaBand } from "../../_components/CtaBand";
import { PageIntro } from "../../_components/PageIntro";
import { faqIntro } from "./content";
import { FaqTopics } from "./FaqTopics";
import styles from "./faq.module.css";

export function FaqPage() {
  return (
    <div className={styles.page}>
      <PageIntro
        backgroundFit="tile"
        backgroundId={faqIntro.backgroundId}
        body={
          <p className={`jk-body ${styles.introBody}`}>
            {faqIntro.lead}{" "}
            <a className={styles.contact} href={faqIntro.linkHref}>
              {faqIntro.linkLabel}
            </a>
            .
          </p>
        }
        className={styles.intro}
        title={faqIntro.title}
      />

      <section aria-label="Questions by topic" className={styles.topics}>
        <FaqTopics />
      </section>

      <CtaBand className={styles.cta} />
    </div>
  );
}
