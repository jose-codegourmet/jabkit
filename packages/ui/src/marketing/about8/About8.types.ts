import type { HTMLAttributes } from "react";

export interface About8Stat {
  value: string;
  label: string;
}

export interface About8Image {
  src: string;
  alt: string;
}

export interface About8Mission {
  title: string;
  paragraphs: string[];
}

export interface About8Product {
  title: string;
  description: string;
}

export interface About8Team {
  title: string;
  description: string;
  image: About8Image;
}

export interface About8Props extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  title?: string;
  description?: string;
  stats?: About8Stat[];
  mission?: About8Mission;
  gallery?: About8Image[];
  product?: About8Product;
  team?: About8Team;
}
