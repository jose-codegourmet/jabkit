import { Button } from "@/atoms/button";
import { unknownSlugCopy } from "../../content";
import { sampleRoot } from "../../types";
import styles from "../../style.module.css";

export default function UnknownProjectPage() {
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
