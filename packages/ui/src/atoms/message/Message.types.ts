import type { ComponentProps } from "react";

export type MessageAlign = "start" | "end";

export type MessageProps = ComponentProps<"div"> & {
  align?: MessageAlign;
};

export type MessageGroupProps = ComponentProps<"div">;

export type MessageAvatarProps = ComponentProps<"div">;

export type MessageContentProps = ComponentProps<"div">;

export type MessageHeaderProps = ComponentProps<"div">;

export type MessageFooterProps = ComponentProps<"div">;
