import type { HTMLAttributes } from "react";

export interface MotionImageRevealSliderProps
  extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  eyebrow?: string;
  heading?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  overlaySrc?: string;
  overlayAlt?: string;
  grayscaleOverlay?: boolean;
  leftLabel?: string;
  rightLabel?: string;
  initialPosition?: number;
  step?: number;
}
