import type { HTMLAttributes } from "react";

export interface Skiper52Image {
  src: string;
  alt: string;
  code: string;
}

export interface Skiper52Props
  extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  eyebrow?: string;
  heading?: string;
  description?: string;
  images?: Skiper52Image[];
  initialActive?: number;
}
