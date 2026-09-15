import type { HTMLAttributes, ReactNode } from "react";

export type TrackerCardFlagMark = "PL" | "JP";

export interface TrackerCardProps
  extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  status?: string;
  packageNumber?: string;
  packageNumberLabel?: string;
  destination?: string;
  destinationFlag?: ReactNode;
  flagMark?: TrackerCardFlagMark;
  date?: string;
  qrCodeValue?: string;
  qrCodeImageSrc?: string;
  qrCodeImageAlt?: string;
  packageImage?: ReactNode;
  packageImageSrc?: string;
  packageImageAlt?: string;
  trackLabel?: string;
  trackHref?: string;
  onTrackClick?: () => void;
}
