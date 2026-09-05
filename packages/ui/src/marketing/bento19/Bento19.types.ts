import type { HTMLAttributes } from "react";

export type Bento19Visual =
  | "pills"
  | "chart"
  | "dashboard"
  | "spark"
  | "alerts";

export type Bento19Aspect = "compact" | "standard" | "portrait";

export interface Bento19Integration {
  name: string;
  initial: string;
}

export interface Bento19Alert {
  label: string;
  detail: string;
  tone?: "warning" | "destructive" | "success";
}

export interface Bento19Card {
  id: string;
  title: string;
  description: string;
  visual: Bento19Visual;
  aspect?: Bento19Aspect;
  integrations?: Bento19Integration[];
  series?: number[];
  metric?: string;
  metricLabel?: string;
  alerts?: Bento19Alert[];
}

export interface Bento19Props
  extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  kicker?: string;
  title?: string;
  description?: string;
  cards?: Bento19Card[];
}
