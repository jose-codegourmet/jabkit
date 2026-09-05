import type { FormEventHandler, HTMLAttributes } from "react";

export interface Waitlist3Logo {
  name: string;
  href?: string;
  src?: string;
  alt?: string;
}

export interface Waitlist3Person {
  src: string;
  alt: string;
  fallback: string;
}

export interface Waitlist3Photo {
  src: string;
  alt: string;
}

export interface Waitlist3Props
  extends Omit<HTMLAttributes<HTMLElement>, "title" | "onSubmit"> {
  logo?: Waitlist3Logo;
  badge?: string;
  title?: string;
  description?: string;
  emailLabel?: string;
  emailPlaceholder?: string;
  submitLabel?: string;
  people?: Waitlist3Person[];
  socialProof?: string;
  copyright?: string;
  photo?: Waitlist3Photo;
  onSubscribe?: (email: string) => void;
  onSubmit?: FormEventHandler<HTMLFormElement>;
}
