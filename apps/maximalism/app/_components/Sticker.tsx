import type { CSSProperties } from "react";
import { cn } from "@/lib/cn";
import styles from "../style.module.css";

export type StickerShape =
  | "star"
  | "burst"
  | "arrow"
  | "squiggle"
  | "knob"
  | "bolt";

export type StickerTone =
  | "pink"
  | "lime"
  | "cobalt"
  | "tangerine"
  | "cream"
  | "ink";

export type StickerProps = {
  shape: StickerShape;
  tone?: StickerTone;
  /** Any CSS length. Defaults to 4.5rem. */
  size?: string;
  rotate?: number;
  /** Kinetic accent while motion plays; always still when paused. */
  motion?: "drift" | "spin" | "none";
  className?: string;
};

const toneClass: Record<StickerTone, string> = {
  pink: styles.stickerPink,
  lime: styles.stickerLime,
  cobalt: styles.stickerCobalt,
  tangerine: styles.stickerTangerine,
  cream: styles.stickerCream,
  ink: styles.stickerInk,
};

function Shape({ shape }: { shape: StickerShape }) {
  switch (shape) {
    case "star":
      return (
        <path d="M50 6l12.5 26.5 29 3.6-21.3 20 5.4 28.7L50 70.7 24.4 84.8l5.4-28.7-21.3-20 29-3.6z" />
      );
    case "burst":
      return (
        <path d="M50 4l9 14 16-6 1 17 17 3-8 15 12 12-16 7 3 17-17-2-6 16-11-13-11 13-6-16-17 2 3-17-16-7 12-12-8-15 17-3 1-17 16 6z" />
      );
    case "arrow":
      return (
        <path
          className={styles.stickerStroke}
          d="M10 70c18-30 42-44 70-40m0 0L64 16m16 14L66 46"
        />
      );
    case "squiggle":
      return (
        <path
          className={styles.stickerStroke}
          d="M8 60c10-22 20-22 26 0s16 22 24 0 18-22 26 0"
        />
      );
    case "knob":
      return (
        <>
          <circle cx="42" cy="54" r="30" />
          <path className={styles.stickerAccentStroke} d="M42 54l18-18" />
          <path
            className={styles.stickerStroke}
            d="M78 24c6 6 9 14 9 22m-2-38c10 10 15 23 15 36"
          />
        </>
      );
    case "bolt":
      return <path d="M58 4L20 56h26l-8 40 42-56H52z" />;
  }
}

/** Decorative sticker. Place it in margins or on image edges, never over copy or controls. */
export function Sticker({
  shape,
  tone = "pink",
  size = "4.5rem",
  rotate = 0,
  motion = "none",
  className,
}: StickerProps) {
  return (
    <svg
      aria-hidden="true"
      className={cn(styles.sticker, toneClass[tone], className)}
      data-motion={motion}
      focusable="false"
      style={
        {
          "--max-sticker-size": size,
          "--max-rotate": `${rotate}deg`,
        } as CSSProperties
      }
      viewBox="0 0 100 100"
    >
      <Shape shape={shape} />
    </svg>
  );
}
