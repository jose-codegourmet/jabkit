import Link from "next/link";
import styles from "../style.module.css";
import { SwissImage } from "./SwissImage";

export function FrameLogo({
  format = "wordmark",
  variant = "ink",
  className = "",
}: {
  format?: "wordmark" | "symbol";
  variant?: "ink" | "paper";
  className?: string;
}) {
  const isWordmark = format === "wordmark";
  return (
    <Link
      href="/"
      className={`${styles.frameLogo} ${variant === "paper" ? styles.paperLogo : ""} ${className}`}
    >
      <SwissImage
        id={isWordmark ? "swi-logo-wordmark" : "swi-logo-symbol"}
        alt="FRAME/01 home"
        ratio={isWordmark ? "21:9" : "1:1"}
        sizes={isWordmark ? "180px" : "48px"}
        imageClassName={styles.logoImage}
      />
    </Link>
  );
}
