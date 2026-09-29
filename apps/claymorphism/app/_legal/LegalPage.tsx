import { Card, CardContent } from "@/atoms/card";
import { ClaySurface } from "../_components/ClaySurface";
import { PlaceholderText } from "../_components/PlaceholderText";
import type { LegalDocument } from "./content";
import styles from "./legal.module.css";

export function LegalPage({ document }: { document: LegalDocument }) {
  return (
    <article aria-labelledby="legal-title" className={styles.page}>
      <ClaySurface className={styles.column} flat tone="cream">
        <header className={styles.header}>
          <h1 className="jk-heading" id="legal-title">
            {document.title}
          </h1>
          <p className={`jk-caption ${styles.updated}`}>
            <PlaceholderText text={document.updated} />
          </p>
        </header>

        <Card className={`${styles.callout} ring-0`}>
          <CardContent className={styles.notice}>
            <p className="jk-body">{document.notice}</p>
          </CardContent>
        </Card>

        <div className={styles.prose}>
          <p className="jk-body">
            <PlaceholderText text={document.body} />
          </p>
        </div>
      </ClaySurface>
    </article>
  );
}
