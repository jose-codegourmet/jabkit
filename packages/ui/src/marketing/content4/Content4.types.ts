import type { HTMLAttributes } from "react";

export interface Content4Crumb {
  label: string;
  href?: string;
}

export interface Content4Author {
  name: string;
  role?: string;
  date: string;
  avatarSrc: string;
  avatarAlt: string;
  fallback: string;
}

export interface Content4Paragraph {
  type: "paragraph";
  id: string;
  text: string;
}

export interface Content4Heading {
  type: "heading";
  id: string;
  title: string;
}

export interface Content4Image {
  type: "image";
  id: string;
  src: string;
  alt: string;
  caption?: string;
}

export type Content4Block = Content4Paragraph | Content4Heading | Content4Image;

export interface Content4Props
  extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  breadcrumbs?: Content4Crumb[];
  title?: string;
  author?: Content4Author;
  outlineLabel?: string;
  backToTopLabel?: string;
  blocks?: Content4Block[];
}
