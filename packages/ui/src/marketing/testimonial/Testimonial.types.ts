import type { HTMLAttributes } from "react";

export type TestimonialLayout = "stack" | "grid";

export interface TestimonialQuote {
  id: string;
  quote: string;
  name: string;
  role: string;
  company?: string;
  avatarSrc?: string;
  avatarAlt?: string;
  fallback: string;
  rating?: number;
  storyHref?: string;
  storyLabel?: string;
}

export interface TestimonialProps
  extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  eyebrow?: string;
  heading?: string;
  description?: string;
  quotes?: TestimonialQuote[];
  layout?: TestimonialLayout;
  verifiedLabel?: string;
  previousLabel?: string;
  nextLabel?: string;
  ratingLabel?: string;
}
