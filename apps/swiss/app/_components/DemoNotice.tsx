import { demoNotice } from "../_data/site";
import styles from "../style.module.css";

export function DemoNotice({
  variant = "bar",
}: {
  variant?: "bar" | "inline";
}) {
  if (variant === "inline")
    return <p className={styles.demoInline}>{demoNotice}</p>;
  return (
    <aside className={styles.demoNotice} aria-label="Demo program notice">
      <p>{demoNotice}</p>
    </aside>
  );
}
