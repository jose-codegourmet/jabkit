import { cn } from "@/lib/cn";
import { demoNotice } from "../_data/site";
import styles from "../style.module.css";

export type DemoNoticeProps = {
  /**
   * "full": full-width strip (above the footer).
   * "inline": compact box placed near demo data.
   * "short": one-line footer form.
   */
  variant?: "full" | "inline" | "short";
  /** Replace the default wording (e.g. tickets or contact notices). */
  text?: string;
  className?: string;
};

export function DemoNotice({
  variant = "inline",
  text,
  className,
}: DemoNoticeProps) {
  const copy =
    text ?? (variant === "short" ? demoNotice.short : demoNotice.full);

  if (variant === "short") {
    return <p className={cn(styles.demoShort, className)}>{copy}</p>;
  }

  return (
    <aside
      aria-label="Demo notice"
      className={cn(
        styles.demoNotice,
        variant === "full" ? styles.demoNoticeFull : styles.demoNoticeInline,
        className,
      )}
    >
      <div className={styles.demoNoticeInner}>
        <span className={styles.demoTag}>Demo</span>
        <p>{copy}</p>
      </div>
    </aside>
  );
}
