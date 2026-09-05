import type { HTMLAttributes } from "react";

export interface Awards6Item {
  title: string;
  type: string;
  year: string;
}

export interface Awards6ColumnLabels {
  milestone: string;
  type: string;
  year: string;
}

export interface Awards6Props
  extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  title?: string;
  subtitle?: string;
  columnLabels?: Awards6ColumnLabels;
  items?: Awards6Item[];
}
