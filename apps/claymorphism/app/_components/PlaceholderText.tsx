import type { ReactNode } from "react";
import styles from "../style.module.css";

const placeholderPattern = /(\[[^\]]+\])/g;

export function PlaceholderText({ text }: { text: string }): ReactNode {
  const seen = new Map<string, number>();
  return text
    .split(placeholderPattern)
    .filter((part) => part.length > 0)
    .map((part) => {
      const count = (seen.get(part) ?? 0) + 1;
      seen.set(part, count);
      const key = `${part}-${count}`;
      return part.startsWith("[") ? (
        <span className={styles.placeholder} key={key}>
          {part}
        </span>
      ) : (
        <span key={key}>{part}</span>
      );
    });
}
