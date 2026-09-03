import type { HTMLAttributes, MouseEventHandler } from "react";

export type CodeExample14Icon = "create" | "update" | "delete" | "folder";

export interface CodeExample14Action {
  label: string;
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface CodeExample14Item {
  id: string;
  title: string;
  description: string;
  icon?: CodeExample14Icon;
  fileName?: string;
  language?: string;
  code: string;
}

export interface CodeExample14Props
  extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  kicker?: string;
  title?: string;
  description?: string;
  primaryAction?: CodeExample14Action;
  secondaryAction?: CodeExample14Action;
  items?: CodeExample14Item[];
  defaultItemId?: string;
}
