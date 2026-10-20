import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import type { InfoSectionId } from "../../_data/info";
import { sectionIndex } from "./content";
import styles from "./info.module.css";

export type InfoBlockProps = {
  id: InfoSectionId;
  title: string;
  /** Stack the heading above full-width content (used by the venue map). */
  wide?: boolean;
  children: ReactNode;
};

/** One quiet practical-info section: index + heading beside plain content. */
export function InfoBlock({
  id,
  title,
  wide = false,
  children,
}: InfoBlockProps) {
  const headingId = `${id}-heading`;
  return (
    <section
      aria-labelledby={headingId}
      className={cn(styles.block, wide && styles.blockWide)}
      id={id}
    >
      <div className={styles.blockHead}>
        <span aria-hidden="true" className={styles.blockIndex}>
          {sectionIndex[id]}
        </span>
        <h2 className={cn("jk-heading", styles.blockTitle)} id={headingId}>
          {title}
        </h2>
      </div>
      <div className={styles.blockBody}>{children}</div>
    </section>
  );
}
