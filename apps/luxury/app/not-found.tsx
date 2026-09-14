import { Button } from "@/atoms/button";
import styles from "./style.module.css";
import { sampleRoot } from "./types";

export default function LuxuryNotFoundPage() {
  return (
    <main id="top" className={styles.section}>
      <div className={styles.frame}>
        <h1 className="jk-heading">This page is not in the sample</h1>
        <p className="jk-body mt-4">
          Stillwater House is a closed set of routes. Return to the house home
          or compare the three rooms.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          <Button asChild>
            <a href={sampleRoot}>House home</a>
          </Button>
          <Button asChild variant="secondary">
            <a href={`${sampleRoot}rooms`}>Compare rooms</a>
          </Button>
        </div>
      </div>
    </main>
  );
}
