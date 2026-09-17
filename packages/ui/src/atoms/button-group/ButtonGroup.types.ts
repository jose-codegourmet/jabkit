import type { Separator } from "@base-ui/react/separator";
import type { useRender } from "@base-ui/react/use-render";
import type { ComponentProps } from "react";

export type ButtonGroupOrientation = "horizontal" | "vertical";

export type ButtonGroupProps = ComponentProps<"div"> & {
  orientation?: ButtonGroupOrientation;
};

export type ButtonGroupTextProps = useRender.ComponentProps<"div">;

export type ButtonGroupSeparatorProps = Separator.Props;
