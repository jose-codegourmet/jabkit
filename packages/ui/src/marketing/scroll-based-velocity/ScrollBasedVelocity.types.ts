import type { HTMLAttributes } from "react";

export interface ScrollBasedVelocityProps extends HTMLAttributes<HTMLElement> {
  /** Phrase repeated across each velocity row. */
  text?: string;
  /** Base travel speed. Sign of each row is applied internally. */
  defaultVelocity?: number;
  /** Classes applied to the scrolling type, matching the Componentry text slot. */
  textClassName?: string;
}
