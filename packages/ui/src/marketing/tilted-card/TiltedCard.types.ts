import type { HTMLAttributes } from "react";

export interface TiltedCardItem {
  id: string;
  imageSrc: string;
  imageAlt: string;
  caption?: string;
  overlayTitle?: string;
  overlaySubtitle?: string;
}

export interface TiltedCardProps
  extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  eyebrow?: string;
  heading?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  caption?: string;
  overlayTitle?: string;
  overlaySubtitle?: string;
  cards?: TiltedCardItem[];
  rotateAmplitude?: number;
  scaleOnHover?: number;
  showCaption?: boolean;
  displayOverlay?: boolean;
}
