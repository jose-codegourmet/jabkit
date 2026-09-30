import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import styles from "../style.module.css";

/** Portal title row: the page's one H1, an optional sub line and actions. */
export function PortalPageHeader({
  title,
  sub,
  actions,
  className,
}: {
  title: ReactNode;
  sub?: ReactNode;
  actions?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn(styles.pageHeader, className)}>
      <div className={styles.pageHeaderText}>
        <h1>{title}</h1>
        {sub ? <p>{sub}</p> : null}
      </div>
      {actions ? <div className={styles.actions}>{actions}</div> : null}
    </div>
  );
}
