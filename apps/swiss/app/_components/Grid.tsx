import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import styles from "../style.module.css";

type ResponsiveNumber =
  | number
  | { mobile?: number; tablet?: number; desktop?: number };

type GridProps = HTMLAttributes<HTMLDivElement> & { children: ReactNode };
type GridItemProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  span?: ResponsiveNumber;
  start?: ResponsiveNumber;
};

type GridVariables = CSSProperties & Record<`--swi-${string}`, number>;

function valueAt(
  value: ResponsiveNumber | undefined,
  key: "mobile" | "tablet" | "desktop",
  fallback: number,
) {
  if (typeof value === "number") return value;
  return value?.[key] ?? fallback;
}

export function Grid({ className = "", ...props }: GridProps) {
  return <div className={`${styles.grid} ${className}`} {...props} />;
}

export function GridItem({
  className = "",
  span,
  start,
  style,
  ...props
}: GridItemProps) {
  const variables: GridVariables = {
    "--swi-mobile-span": valueAt(span, "mobile", 4),
    "--swi-tablet-span": valueAt(span, "tablet", 8),
    "--swi-desktop-span": valueAt(span, "desktop", 12),
    "--swi-mobile-start": valueAt(start, "mobile", 1),
    "--swi-tablet-start": valueAt(start, "tablet", 1),
    "--swi-desktop-start": valueAt(start, "desktop", 1),
    ...style,
  };
  return (
    <div
      className={`${styles.gridItem} ${className}`}
      style={variables}
      {...props}
    />
  );
}
