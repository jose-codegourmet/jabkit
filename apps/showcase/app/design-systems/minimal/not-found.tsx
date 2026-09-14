import { Button } from "@/atoms/button";
import styles from "./style.module.css";
import { sampleRoot } from "./types";

export default function MinimalNotFoundPage() {
  return (
    <main id="top" className={styles.section}>
      <div className={styles.frame}>
        <h1 className="jk-heading">This page is not in the sample</h1>
        <p className="jk-body mt-4">
          West Room Studio is a closed set of routes. Return to the studio home
          or to the work index.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          <Button asChild>
            <a href={sampleRoot}>Studio home</a>
          </Button>
          <Button asChild variant="secondary">
            <a href={`${sampleRoot}/work`}>View work</a>
          </Button>
        </div>
      </div>
    </main>
  );
}
