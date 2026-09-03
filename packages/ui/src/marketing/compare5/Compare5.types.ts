import type { HTMLAttributes, MouseEventHandler } from "react";

export interface Compare5Action {
  label: string;
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface Compare5Option {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  action: Compare5Action;
  accent?: boolean;
}

export interface Compare5Props
  extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  title?: string;
  description?: string;
  dividerLabel?: string;
  left?: Compare5Option;
  right?: Compare5Option;
}
