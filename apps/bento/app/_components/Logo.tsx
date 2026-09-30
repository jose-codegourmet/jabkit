import type { Route } from "next";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { brand } from "../_data/site";
import styles from "../style.module.css";

/**
 * The four-cell mark drawn inline so it follows the theme: one wide filled cell on top,
 * two small cells and one tall cell below (see ben-logo-symbol). The name is set in HTML
 * because the generated wordmark softens at large sizes.
 */
export function LogoMark({ size = 28 }: { size?: number }) {
  return (
    <svg
      aria-hidden="true"
      className={styles.logoMark}
      height={size}
      viewBox="0 0 32 32"
      width={size}
    >
      <rect
        className={styles.logoFill}
        height="9"
        rx="2.5"
        width="26"
        x="3"
        y="3"
      />
      <rect
        className={styles.logoLine}
        height="5"
        rx="1.75"
        strokeWidth="2"
        width="10"
        x="4"
        y="15.5"
      />
      <rect
        className={styles.logoLine}
        height="5"
        rx="1.75"
        strokeWidth="2"
        width="10"
        x="4"
        y="23.5"
      />
      <rect
        className={styles.logoLine}
        height="13"
        rx="1.75"
        strokeWidth="2"
        width="11"
        x="17"
        y="15.5"
      />
    </svg>
  );
}

export type LogoProps = {
  size?: "sm" | "md";
  showWordmark?: boolean;
  /** Pass null to render without a link. */
  href?: Route | null;
  className?: string;
};

export function Logo({
  size = "md",
  showWordmark = true,
  href = "/",
  className,
}: LogoProps) {
  const markSize = size === "sm" ? 22 : 28;
  const content = (
    <>
      <LogoMark size={markSize} />
      {showWordmark ? (
        <span
          className={styles.logoWord}
          style={{ fontSize: size === "sm" ? "0.9375rem" : "1.0625rem" }}
        >
          {brand.name}
        </span>
      ) : null}
    </>
  );

  if (href === null) {
    return <span className={cn(styles.logo, className)}>{content}</span>;
  }

  return (
    <Link
      aria-label={`${brand.name} home`}
      className={cn(styles.logo, className)}
      href={href}
    >
      {content}
    </Link>
  );
}
