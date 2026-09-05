import type { HTMLAttributes, MouseEventHandler } from "react";

export interface Content3Breadcrumb {
  label: string;
  href?: string;
}

export interface Content3Action {
  label: string;
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface Content3Figure {
  src: string;
  alt: string;
  caption?: string;
}

export interface Content3Table {
  caption?: string;
  columns: string[];
  rows: string[][];
}

export interface Content3Alert {
  title: string;
  description: string;
}

export type Content3Block =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "figure"; figure: Content3Figure }
  | { type: "table"; table: Content3Table }
  | { type: "alert"; alert: Content3Alert };

export interface Content3Section {
  id: string;
  title: string;
  blocks: Content3Block[];
}

export interface Content3Props
  extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  breadcrumbs?: Content3Breadcrumb[];
  title?: string;
  description?: string;
  primaryAction?: Content3Action;
  secondaryAction?: Content3Action;
  topicsLabel?: string;
  sections?: Content3Section[];
}
