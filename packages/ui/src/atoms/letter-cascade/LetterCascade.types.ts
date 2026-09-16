import type { ButtonHTMLAttributes } from "react";

export type LetterCascadeStaggerFrom = "first" | "last" | "center" | number;

export interface LetterCascadeProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  /** Text that splits into per-glyph flap faces. */
  text: string;
  /** Classes applied to each front and echo glyph. */
  letterClassName?: string;
  /** Seconds between each letter's spring start. */
  staggerDuration?: number;
  /** Origin of the stagger wave. */
  staggerFrom?: LetterCascadeStaggerFrom;
  /** Spring stiffness — higher values settle faster. */
  stiffness?: number;
  /** Spring damping — lower values bounce more. */
  damping?: number;
  /** Play the cascade on click instead of pointer enter. */
  triggerOnClick?: boolean;
  /** Fires after the flap cycle finishes and faces reset. */
  onComplete?: () => void;
}
