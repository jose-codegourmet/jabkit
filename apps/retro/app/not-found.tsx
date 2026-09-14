import { Button } from "@/atoms/button";
import { unknownSlugCopy } from "./content";
import styles from "./style.module.css";
import { sampleRoot } from "./types";

export default function RetroNotFoundPage() {
  return (
    <main id="top" className={styles.section}>
      <div className={styles.frame}>
        <h1 className="jk-heading">{unknownSlugCopy.page.title}</h1>
        <p className="jk-body mt-4">{unknownSlugCopy.page.body}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          <Button asChild>
            <a href={sampleRoot}>Pocket home</a>
          </Button>
          <Button asChild variant="secondary">
            <a href={`${sampleRoot}studio`}>Open studio</a>
          </Button>
        </div>
      </div>
    </main>
  );
}
