import type { HTMLAttributes, MouseEventHandler } from "react";

export interface Team14Member {
  src: string;
  alt: string;
  name: string;
  role: string;
}

export interface Team14Action {
  label: string;
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface Team14Props
  extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  title?: string;
  description?: string;
  action?: Team14Action;
  members?: Team14Member[];
}
