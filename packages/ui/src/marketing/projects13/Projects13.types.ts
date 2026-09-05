import type { HTMLAttributes } from "react";

export interface Projects13Image {
  src: string;
  alt: string;
}

export interface Projects13Project {
  index?: string;
  title: string;
  date: string;
  description: string;
  image: Projects13Image;
}

export interface Projects13Props extends HTMLAttributes<HTMLElement> {
  label?: string;
  projects?: Projects13Project[];
}
