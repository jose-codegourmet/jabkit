import type { HTMLAttributes, MouseEventHandler } from "react";

export interface Announcement4Props
  extends Omit<HTMLAttributes<HTMLElement>, "onDismiss"> {
  message?: string;
  ctaLabel?: string;
  ctaHref?: string;
  dismissLabel?: string;
  onCtaClick?: MouseEventHandler<HTMLAnchorElement>;
  onDismiss?: MouseEventHandler<HTMLButtonElement>;
}
