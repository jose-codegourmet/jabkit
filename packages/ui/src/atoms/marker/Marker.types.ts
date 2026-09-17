import type { useRender } from "@base-ui/react/use-render";
import type { ComponentProps } from "react";

export type MarkerVariant = "default" | "border" | "separator";

export type MarkerProps = useRender.ComponentProps<"div"> & {
  variant?: MarkerVariant;
};

export type MarkerIconProps = ComponentProps<"span">;

export type MarkerContentProps = ComponentProps<"span">;
