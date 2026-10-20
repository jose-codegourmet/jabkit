"use client";

import { cn } from "@/lib/cn";
import { motionLabels } from "../_data/site";
import styles from "../style.module.css";
import { useMotionPreference } from "./useMotionPreference";

export type MotionToggleProps = {
  className?: string;
  /** "footer" is a quiet text control; "hero" is a small sticker pill. */
  variant?: "footer" | "hero";
};

export function MotionToggle({
  className,
  variant = "footer",
}: MotionToggleProps) {
  const { playing, toggle } = useMotionPreference();

  return (
    <button
      className={cn(
        styles.motionToggle,
        variant === "hero" && styles.motionToggleHero,
        className,
      )}
      data-state={playing ? "playing" : "paused"}
      onClick={toggle}
      type="button"
    >
      <svg aria-hidden="true" className={styles.motionIcon} viewBox="0 0 16 16">
        {playing ? (
          <>
            <rect height="10" rx="1" width="3" x="4" y="3" />
            <rect height="10" rx="1" width="3" x="9" y="3" />
          </>
        ) : (
          <path d="M5 3.2v9.6a.6.6 0 0 0 .9.5l7.6-4.8a.6.6 0 0 0 0-1L5.9 2.7a.6.6 0 0 0-.9.5Z" />
        )}
      </svg>
      <span>{playing ? motionLabels.pause : motionLabels.play}</span>
    </button>
  );
}
