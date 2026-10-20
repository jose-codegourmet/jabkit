import Image from "next/image";
import type { CSSProperties } from "react";
import { cn } from "@/lib/cn";
import { brand } from "../_data/site";
import { assets } from "../assets";
import styles from "../style.module.css";

export type WordmarkProps = {
  /**
   * "fixed" is the readable lockup for navigation, footer and tickets; it never moves.
   * "campaign" is the expanding type version for campaign layouts (motion-gated).
   */
  variant?: "fixed" | "campaign";
  /** Surface the fixed mark sits on. The artwork is ink, so dark surfaces get a cream plate. */
  surface?: "light" | "dark";
  className?: string;
  priority?: boolean;
};

export function Wordmark({
  variant = "fixed",
  surface = "light",
  className,
  priority = false,
}: WordmarkProps) {
  if (variant === "campaign") {
    const words = brand.name.split(" ");
    return (
      <span
        aria-label={brand.name}
        className={cn(styles.campaignWordmark, className)}
        role="img"
      >
        {words.map((word, wordIndex) => (
          <span aria-hidden="true" className={styles.campaignWord} key={word}>
            {Array.from(word).map((letter, index) => (
              <span
                className={styles.campaignLetter}
                key={`${word}-${letter}-${index.toString()}`}
                style={{ "--max-i": wordIndex * 4 + index } as CSSProperties}
              >
                {letter}
              </span>
            ))}
          </span>
        ))}
      </span>
    );
  }

  const art = assets["max-logo-wordmark"];
  return (
    <span
      className={cn(
        styles.wordmark,
        surface === "dark" && styles.wordmarkOnDark,
        className,
      )}
    >
      {art ? (
        <Image
          alt={brand.name}
          className={styles.wordmarkImage}
          height={art.height}
          priority={priority}
          src={art.src}
          width={art.width}
        />
      ) : (
        <span className={styles.wordmarkType}>{brand.name}</span>
      )}
    </span>
  );
}

export type LogoSymbolProps = {
  className?: string;
  /** Decorative by default: pair it with visible brand text. */
  alt?: string;
};

export function LogoSymbol({ className, alt = "" }: LogoSymbolProps) {
  const art = assets["max-logo-symbol"];
  if (!art) return null;
  return (
    <Image
      alt={alt}
      className={cn(styles.logoSymbol, className)}
      height={art.height}
      src={art.src}
      width={art.width}
    />
  );
}
