import type { HTMLAttributes } from "react";

export type Pricing28Interval = "monthly" | "yearly";

export type Pricing28FeatureIcon =
  | "check"
  | "users"
  | "zap"
  | "shield"
  | "sparkles"
  | "layers"
  | "headset"
  | "lock";

export interface Pricing28Person {
  src: string;
  alt: string;
  fallback: string;
}

export interface Pricing28TrustItem {
  value: string;
  label: string;
}

export interface Pricing28Feature {
  icon: Pricing28FeatureIcon;
  text: string;
}

export interface Pricing28FeatureGroup {
  title: string;
  items: Pricing28Feature[];
}

export interface Pricing28Plan {
  id: string;
  name: string;
  popular?: boolean;
  popularLabel?: string;
  monthlyPrice: string;
  yearlyPrice: string;
  monthlyPeriod: string;
  yearlyPeriod: string;
  tagline?: string;
  taglineTooltip?: string;
  ctaLabel: string;
  href: string;
  ctaVariant?: "primary" | "secondary";
  groups: Pricing28FeatureGroup[];
}

export interface Pricing28Props
  extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  title?: string;
  people?: Pricing28Person[];
  extraCount?: string;
  trustItems?: Pricing28TrustItem[];
  monthlyLabel?: string;
  yearlyLabel?: string;
  yearlyBadge?: string;
  defaultInterval?: Pricing28Interval;
  interval?: Pricing28Interval;
  onIntervalChange?: (interval: Pricing28Interval) => void;
  plans?: Pricing28Plan[];
  secureLabel?: string;
}
