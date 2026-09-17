import type { ContextMenu as ContextMenuPrimitive } from "@base-ui/react/context-menu";
import type { ComponentProps } from "react";

export type ContextMenuProps = ContextMenuPrimitive.Root.Props;
export type ContextMenuPortalProps = ContextMenuPrimitive.Portal.Props;
export type ContextMenuTriggerProps = ContextMenuPrimitive.Trigger.Props;
export type ContextMenuGroupProps = ContextMenuPrimitive.Group.Props;
export type ContextMenuLabelProps = ContextMenuPrimitive.GroupLabel.Props & {
  inset?: boolean;
};
export type ContextMenuItemVariant = "default" | "destructive";
export type ContextMenuItemProps = ContextMenuPrimitive.Item.Props & {
  inset?: boolean;
  variant?: ContextMenuItemVariant;
};
export type ContextMenuSubProps = ContextMenuPrimitive.SubmenuRoot.Props;
export type ContextMenuSubTriggerProps =
  ContextMenuPrimitive.SubmenuTrigger.Props & {
    inset?: boolean;
  };
export type ContextMenuContentProps = ContextMenuPrimitive.Popup.Props &
  Pick<
    ContextMenuPrimitive.Positioner.Props,
    "align" | "alignOffset" | "side" | "sideOffset"
  >;
export type ContextMenuSubContentProps = ContextMenuContentProps;
export type ContextMenuCheckboxItemProps =
  ContextMenuPrimitive.CheckboxItem.Props & {
    inset?: boolean;
  };
export type ContextMenuRadioGroupProps = ContextMenuPrimitive.RadioGroup.Props;
export type ContextMenuRadioItemProps = ContextMenuPrimitive.RadioItem.Props & {
  inset?: boolean;
};
export type ContextMenuSeparatorProps = ContextMenuPrimitive.Separator.Props;
export type ContextMenuShortcutProps = ComponentProps<"span">;
