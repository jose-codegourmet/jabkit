import type { HTMLAttributes } from "react";

export interface MotionLoadingProgressBarProps
  extends HTMLAttributes<HTMLElement> {
  eyebrow?: string;
  heading?: string;
  description?: string;
  status?: string;
  completeStatus?: string;
  /** Determinate fill from 0 to 100 when `autoPlay` is false. */
  progress?: number;
  /** Fill shown when the user prefers reduced motion. */
  reducedProgress?: number;
  autoPlay?: boolean;
  loop?: boolean;
  stiffness?: number;
  damping?: number;
  jumpMs?: number;
  holdMs?: number;
}
