import type { HTMLAttributes } from "react";

export type TrackerCardStatus =
  | "packed"
  | "in-transit"
  | "out-for-delivery"
  | "delivered";

export interface TrackerCardPlace {
  city: string;
  region: string;
  code: string;
}

export interface TrackerCardStep {
  id: string;
  label: string;
  time: string;
  complete?: boolean;
  current?: boolean;
}

export interface TrackerCardAction {
  label: string;
  href: string;
}

export interface TrackerCardProps
  extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  eyebrow?: string;
  heading?: string;
  description?: string;
  status?: TrackerCardStatus;
  statusLabel?: string;
  statusDetail?: string;
  trackingLabel?: string;
  trackingNumber?: string;
  copyLabel?: string;
  copiedLabel?: string;
  courierLabel?: string;
  courier?: string;
  etaLabel?: string;
  eta?: string;
  originLabel?: string;
  destinationLabel?: string;
  origin?: TrackerCardPlace;
  destination?: TrackerCardPlace;
  stepsHeading?: string;
  steps?: TrackerCardStep[];
  scanLabel?: string;
  showScan?: boolean;
  primaryAction?: TrackerCardAction;
  secondaryAction?: TrackerCardAction;
}
