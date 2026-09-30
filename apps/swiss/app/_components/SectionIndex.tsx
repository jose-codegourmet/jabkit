import type { ElementType } from "react";
import styles from "../style.module.css";

export function SectionIndex({
  index,
  label,
  slash = false,
  as: Heading = "h2",
  className = "",
}: {
  index: string;
  label: string;
  slash?: boolean;
  as?: ElementType;
  className?: string;
}) {
  return (
    <div className={`${styles.sectionIndex} ${className}`}>
      <span className={styles.sectionNumber} aria-hidden="true">
        {slash ? <span className={styles.slash}>/</span> : null}
        {index}
      </span>
      <Heading className={styles.sectionLabel}>{label}</Heading>
    </div>
  );
}
