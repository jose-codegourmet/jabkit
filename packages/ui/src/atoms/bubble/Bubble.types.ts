import type { useRender } from "@base-ui/react/use-render";
import type { ComponentProps } from "react";

export type BubbleVariant =
  | "default"
  | "secondary"
  | "muted"
  | "tinted"
  | "outline"
  | "ghost"
  | "destructive";

export type BubbleAlign = "start" | "end";

export type BubbleReactionSide = "top" | "bottom";

export interface BubbleProps extends ComponentProps<"div"> {
  variant?: BubbleVariant;
  align?: BubbleAlign;
}

export type BubbleContentProps = useRender.ComponentProps<"div">;

export interface BubbleReactionsProps extends ComponentProps<"div"> {
  align?: BubbleAlign;
  side?: BubbleReactionSide;
}

export type BubbleGroupProps = ComponentProps<"div">;
