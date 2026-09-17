import type { HTMLAttributes, ReactNode } from "react";

export interface AgencySectionHeadingProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  number?: string;
  label?: string;
  meta?: string;
  title?: ReactNode;
  emphasis?: string;
  titleAs?: "h1" | "h2" | "h3" | "p";
}
