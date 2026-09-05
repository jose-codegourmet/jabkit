import type { HTMLAttributes } from "react";

export interface About14Image {
  src: string;
  alt: string;
}

export interface About14Profile {
  src: string;
  alt: string;
  name: string;
  role: string;
  fallback: string;
}

export interface About14Props
  extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  title?: string;
  label?: string;
  intro?: string;
  profile?: About14Profile;
  philosophy?: string;
  image?: About14Image;
}
