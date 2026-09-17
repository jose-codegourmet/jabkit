import type { HTMLAttributes, ReactNode } from "react";
import type { TraffoFeatureCardTone } from "@/marketing/traffo-feature-card";

export interface TraffoFeatureItem {
  kicker: string;
  title: string;
  body: string;
  tone: TraffoFeatureCardTone;
  icon?: ReactNode;
}

export interface TraffoFeaturesSectionProps
  extends HTMLAttributes<HTMLElement> {
  eyebrow?: string;
  title?: string;
  meta?: string[];
  items?: TraffoFeatureItem[];
}
