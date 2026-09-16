import { Check } from "lucide-react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/atoms/avatar/Avatar";
import { cn } from "@/lib/cn";
import type { AvatarBorderProps } from "./AvatarBorder.types";

const avatarSizeClass = {
  sm: "size-6",
  default: "size-10",
  lg: "data-[size=lg]:size-16",
} as const;

export function AvatarBorder({
  className,
  src,
  alt = "",
  fallback,
  size = "default",
  animate: _animate,
  verified = true,
  verificationLabel = "Verified",
  children,
  ...props
}: AvatarBorderProps) {
  return (
    <div
      className={cn(
        "relative inline-flex shrink-0 rounded-full ring-2 ring-success ring-offset-2 ring-offset-background",
        className,
      )}
      data-size={size}
      data-slot="avatar-border"
      {...props}
    >
      {children ?? (
        <Avatar
          className={cn("bg-background after:hidden", avatarSizeClass[size])}
          size={size}
        >
          {src ? <AvatarImage alt={alt} src={src} /> : null}
          <AvatarFallback>{fallback}</AvatarFallback>
        </Avatar>
      )}
      {verified && (
        <span
          className="absolute -right-1.5 -bottom-1.5 inline-flex size-4 items-center justify-center rounded-full bg-success text-success-foreground"
          data-slot="avatar-border-badge"
        >
          <Check aria-hidden="true" className="size-3" />
          <span className="sr-only">{verificationLabel}</span>
        </span>
      )}
    </div>
  );
}
