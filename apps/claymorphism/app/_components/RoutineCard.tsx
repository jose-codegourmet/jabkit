import type { Routine } from "../_data/types";
import styles from "../style.module.css";
import { ClayImage } from "./ClayImage";
import { ClaySurface } from "./ClaySurface";

export type RoutineCardProps = {
  routine: Routine;
  summary?: "home" | "index";
  linkLabel?: string;
  showStepCount?: boolean;
  className?: string;
};

export function RoutineCard({
  routine,
  summary = "home",
  linkLabel,
  showStepCount,
  className,
}: RoutineCardProps) {
  const summaryText =
    summary === "index" ? routine.indexSummary : routine.homeSummary;
  const stepsVisible = showStepCount ?? summary === "index";

  return (
    <ClaySurface className={className} tone="cream">
      <a className={styles.routine} href={`/routines/${routine.slug}`}>
        <ClayImage
          alt=""
          className={styles.routineImage}
          decorative
          fluid
          id={routine.imageId}
          sizes="(min-width: 768px) 30vw, 100vw"
        />
        <h3 className={styles.routineName}>{routine.name}</h3>
        <p className={styles.routineSummary}>{summaryText}</p>
        {stepsVisible ? (
          <p className={styles.routineMeta}>{routine.stepCountLabel}</p>
        ) : null}
        {linkLabel ? (
          <span className={styles.textLink}>{linkLabel}</span>
        ) : null}
      </a>
    </ClaySurface>
  );
}
