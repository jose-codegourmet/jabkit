import type { HTMLAttributes } from "react";

export interface Skiper67Props extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  eyebrow?: string;
  heading?: string;
  description?: string;
  poster?: string;
  posterAlt?: string;
  videoSrc?: string;
  videoLabel?: string;
  playLabel?: string;
  defaultOpen?: boolean;
}
