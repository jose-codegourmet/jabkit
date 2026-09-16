import type { HTMLAttributes, ReactNode } from "react";

export type AvatarBorderSize = "sm" | "default" | "lg";

export interface AvatarBorderProps extends HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  fallback?: ReactNode;
  size?: AvatarBorderSize;
  /** @deprecated The reference border is static; retained for source compatibility. */
  animate?: boolean;
  /** Show the reference verification badge. Defaults to true. */
  verified?: boolean;
  /** Accessible badge text. Defaults to "Verified". */
  verificationLabel?: string;
  children?: ReactNode;
}
