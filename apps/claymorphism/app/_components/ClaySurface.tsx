import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";
import styles from "../style.module.css";

export const clayTones = [
  "cream",
  "coral",
  "lavender",
  "mint",
  "butter",
] as const;

export type ClayTone = (typeof clayTones)[number];

const toneClass: Record<ClayTone, string> = {
  cream: styles.toneCream,
  coral: styles.toneCoral,
  lavender: styles.toneLavender,
  mint: styles.toneMint,
  butter: styles.toneButter,
};

export type ClaySurfaceProps = HTMLAttributes<HTMLDivElement> & {
  tone?: ClayTone;
  flat?: boolean;
  children: ReactNode;
};

export function ClaySurface({
  tone = "cream",
  flat = false,
  className,
  children,
  ...props
}: ClaySurfaceProps) {
  return (
    <div
      className={cn(
        styles.surface,
        toneClass[tone],
        flat && styles.surfaceFlat,
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
