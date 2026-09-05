import type { HTMLAttributes } from "react";

export interface Feature261Person {
  src: string;
  alt: string;
  fallback: string;
}

export interface Feature261ImageTile {
  src: string;
  alt: string;
  caption?: string;
}

export interface Feature261StatTile {
  value: string;
  label: string;
  hint?: string;
}

export interface Feature261PricingTile {
  amount: string;
  period: string;
  caption: string;
  ctaLabel: string;
  href: string;
}

export interface Feature261PromoTile {
  title: string;
  body: string;
}

export interface Feature261AvatarsTile {
  title: string;
  body: string;
  people: Feature261Person[];
  extraCount?: string;
}

export interface Feature261Props
  extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  title?: string;
  description?: string;
  heroImage?: Feature261ImageTile;
  stat?: Feature261StatTile;
  pricing?: Feature261PricingTile;
  promo?: Feature261PromoTile;
  avatars?: Feature261AvatarsTile;
  supportingImage?: Feature261ImageTile;
}
