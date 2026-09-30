import type { ReactNode } from "react";
import styles from "../style.module.css";

/** One "[… — client to confirm]" string, visibly marked so it is never mistaken for final copy. */
export function Placeholder({ children }: { children: ReactNode }) {
  return <span className={styles.placeholder}>{children}</span>;
}

const placeholderPattern = /(\[[^\]]+\])/g;

/** Renders text, marking every bracketed placeholder inside it. */
export function WithPlaceholders({ text }: { text: string }) {
  const parts = text.split(placeholderPattern).filter(Boolean);
  const seen = new Map<string, number>();
  return (
    <>
      {parts.map((part) => {
        const count = (seen.get(part) ?? 0) + 1;
        seen.set(part, count);
        const key = `${part}-${count}`;
        return part.startsWith("[") ? (
          <Placeholder key={key}>{part}</Placeholder>
        ) : (
          <span key={key}>{part}</span>
        );
      })}
    </>
  );
}
