import type { MessageScroller as MessageScrollerPrimitive } from "@shadcn/react/message-scroller";
import type { ComponentProps } from "react";
import type { ButtonProps, ButtonSize } from "@/atoms/button";

export type MessageScrollerProviderProps = ComponentProps<
  typeof MessageScrollerPrimitive.Provider
>;

export type MessageScrollerProps = ComponentProps<
  typeof MessageScrollerPrimitive.Root
>;

export type MessageScrollerViewportProps = ComponentProps<
  typeof MessageScrollerPrimitive.Viewport
>;

export type MessageScrollerContentProps = ComponentProps<
  typeof MessageScrollerPrimitive.Content
>;

export type MessageScrollerItemProps = ComponentProps<
  typeof MessageScrollerPrimitive.Item
>;

export type MessageScrollerButtonSize = ButtonSize | "icon-sm";

export type MessageScrollerButtonProps = ComponentProps<
  typeof MessageScrollerPrimitive.Button
> &
  Pick<ButtonProps, "variant"> & {
    size?: MessageScrollerButtonSize;
  };

export type {
  MessageScrollerDefaultScrollPosition,
  MessageScrollerScrollAlign,
  MessageScrollerScrollable,
  MessageScrollerScrollOptions,
  MessageScrollerVisibilityState,
} from "@shadcn/react/message-scroller";
