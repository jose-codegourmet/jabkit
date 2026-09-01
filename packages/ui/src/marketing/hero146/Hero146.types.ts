import type { HTMLAttributes, MouseEventHandler } from "react";

export interface Hero146Action {
  label: string;
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface Hero146Props
  extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  title?: string;
  description?: string;
  action?: Hero146Action;
  caption?: string;
  captionHighlight?: string;
  videoSrc?: string;
  videoPoster?: string;
  videoLabel?: string;
  embedSrc?: string;
  embedTitle?: string;
  autoplay?: boolean;
}
