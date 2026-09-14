import { Button } from "@/atoms/button";
import styles from "./style.module.css";
import { sampleRoot } from "./types";

export default function NeoNotFoundPage() {
  return (
    <main id="top" className={styles.section}>
      <div className={styles.frame}>
        <h1 className="jk-heading">This page is not in the sample</h1>
        <p className="jk-body mt-4">
          Good Noise is a closed set of routes. Return to the studio home or to
          the work index.
        </p>
        <div className={styles.actions}>
          <Button asChild>
            <a href={sampleRoot}>Studio home</a>
          </Button>
          <Button asChild variant="secondary">
            <a href={`${sampleRoot}work`}>See the work</a>
          </Button>
        </div>
      </div>
    </main>
  );
}
