import { Button } from "@/atoms/button";
import styles from "./style.module.css";
import { sampleRoot } from "./types";

export default function EditorialNotFoundPage() {
  return (
    <main id="top" className={styles.section}>
      <div className={styles.frame}>
        <h1 className="jk-heading">This page is not in the sample</h1>
        <p className="jk-body mt-4">
          Common Hours is a closed set of routes. Return to the current issue or
          to the story archive.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          <Button asChild>
            <a href={sampleRoot}>Current issue</a>
          </Button>
          <Button asChild variant="secondary">
            <a href={`${sampleRoot}stories`}>View stories</a>
          </Button>
        </div>
      </div>
    </main>
  );
}
