import type { HTMLAttributes } from "react";

export interface Skiper67Props extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  hint?: string;
  poster?: string;
  posterAlt?: string;
  videoSrc?: string;
  videoLabel?: string;
  playLabel?: string;
  defaultOpen?: boolean;
}
