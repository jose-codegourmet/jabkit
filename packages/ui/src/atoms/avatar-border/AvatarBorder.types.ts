import type { HTMLAttributes, ReactNode } from "react";

export type AvatarBorderSize = "sm" | "default" | "lg";

export interface AvatarBorderProps extends HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  fallback?: ReactNode;
  size?: AvatarBorderSize;
  animate?: boolean;
  children?: ReactNode;
}
