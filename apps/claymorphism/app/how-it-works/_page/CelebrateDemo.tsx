"use client";

import { useState } from "react";
import { Badge } from "@/atoms/badge";
import { Button } from "@/atoms/button";
import { Progress, ProgressLabel } from "@/atoms/progress";
import { celebrateStep } from "./content";
import styles from "./how-it-works.module.css";

export function CelebrateDemo() {
  const [finished, setFinished] = useState(false);
  const message = finished ? celebrateStep.complete : celebrateStep.partial;

  return (
    <div className={styles.celebrate}>
      <Progress
        aria-valuemax={4}
        aria-valuemin={0}
        aria-valuenow={finished ? 4 : 2}
        aria-valuetext={message}
        className={styles.progress}
        value={finished ? 100 : 50}
      >
        <ProgressLabel className={styles.progressLabel}>
          {message}
        </ProgressLabel>
      </Progress>
      {finished ? (
        <Badge className={styles.finishBadge}>{celebrateStep.badge}</Badge>
      ) : null}
      <Button
        aria-pressed={finished}
        className={styles.finishToggle}
        onClick={() => setFinished((current) => !current)}
        type="button"
      >
        {celebrateStep.toggleLabel}
      </Button>
    </div>
  );
}
