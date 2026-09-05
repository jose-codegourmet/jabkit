import type { HTMLAttributes, ReactNode } from "react";

export type Content2TypeKind = "project" | "gallery" | "event" | "social";

export interface Content2Type {
  title: string;
  description: string;
  kind?: Content2TypeKind;
  icon?: ReactNode;
}

export interface Content2Guide {
  title: string;
  description?: string;
  steps: string[];
}

export interface Content2Tip {
  title: string;
  description: string;
}

export interface Content2Props
  extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  kicker?: string;
  title?: string;
  description?: string;
  types?: Content2Type[];
  createGuide?: Content2Guide;
  manageGuide?: Content2Guide;
  tip?: Content2Tip | null;
}
