import { Button } from "@/atoms/button";
import { unknownSlugCopy } from "../../content";
import styles from "../../style.module.css";
import { sampleRoot } from "../../types";

export default function UnknownCasePage() {
  return (
    <main id="top" className={styles.section}>
      <div className={styles.frame}>
        <h1 className="jk-heading">{unknownSlugCopy.title}</h1>
        <p className="jk-body mt-4">{unknownSlugCopy.body}</p>
        <div className="mt-6">
          <Button asChild>
            <a href={`${sampleRoot}/work`}>{unknownSlugCopy.actionLabel}</a>
          </Button>
        </div>
      </div>
    </main>
  );
}
