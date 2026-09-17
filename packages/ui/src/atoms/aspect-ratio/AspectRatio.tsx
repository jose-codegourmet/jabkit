import type { CSSProperties } from "react";
import { cn } from "@/lib/cn";
import type { AspectRatioProps } from "./AspectRatio.types";

function AspectRatio({ ratio, className, ...props }: AspectRatioProps) {
  return (
    <div
      data-slot="aspect-ratio"
      style={
        {
          "--ratio": ratio,
        } as CSSProperties
      }
      className={cn("relative aspect-(--ratio)", className)}
      {...props}
    />
  );
}

export { AspectRatio };
