import type { MouseEventHandler } from "react";

export interface Hero307Action {
  label: string;
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface Hero307Metric {
  label: string;
  value: string;
  delta: string;
  trend: "up" | "down";
}

export interface Hero307NavItem {
  label: string;
}

export interface Hero307Sale {
  name: string;
  amount: string;
  when: string;
}

export interface Hero307Row {
  product: string;
  status: string;
  amount: string;
}

export interface Hero307Activity {
  actor: string;
  action: string;
  time: string;
}

export interface Hero307Bar {
  label: string;
  value: number;
}

export interface Hero307Dashboard {
  brand: string;
  nav: Hero307NavItem[];
  metrics: Hero307Metric[];
  bars: Hero307Bar[];
  sales: Hero307Sale[];
  rows: Hero307Row[];
  activity: Hero307Activity[];
  areaValues: number[];
}

export type Hero307Panel = "overview" | "sales" | "activity";

export interface Hero307Props {
  className?: string;
  kicker?: string;
  title?: string;
  description?: string;
  primaryAction?: Hero307Action;
  secondaryAction?: Hero307Action;
  dashboard?: Hero307Dashboard;
}
