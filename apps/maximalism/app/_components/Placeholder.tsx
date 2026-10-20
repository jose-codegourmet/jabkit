import { cn } from "@/lib/cn";
import styles from "../style.module.css";

const placeholderPattern = /(\[[^\]]+\])/g;

export type PlaceholderProps = {
  /** Copy that may contain one or more "[… — client to confirm]" tokens. */
  text: string;
  className?: string;
};

/** Renders copy with every "[…]" token marked as pending client content. */
export function Placeholder({ text, className }: PlaceholderProps) {
  const seen = new Map<string, number>();
  const parts = text
    .split(placeholderPattern)
    .filter((part) => part.length > 0);

  return (
    <>
      {parts.map((part) => {
        const count = (seen.get(part) ?? 0) + 1;
        seen.set(part, count);
        const key = `${part}-${count}`;
        return part.startsWith("[") ? (
          <span className={cn(styles.placeholder, className)} key={key}>
            {part}
          </span>
        ) : (
          <span key={key}>{part}</span>
        );
      })}
    </>
  );
}
