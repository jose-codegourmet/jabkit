import type { NavigationMenu as NavigationMenuPrimitive } from "@base-ui/react/navigation-menu";
import type { LucideIcon } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";

export type NavigationMenuProps = NavigationMenuPrimitive.Root.Props & {
  viewport?: boolean;
};

export type NavigationMenuListProps = NavigationMenuPrimitive.List.Props;
export type NavigationMenuItemProps = NavigationMenuPrimitive.Item.Props;
export type NavigationMenuTriggerProps = NavigationMenuPrimitive.Trigger.Props;
export type NavigationMenuContentProps = NavigationMenuPrimitive.Content.Props;
export type NavigationMenuLinkProps = NavigationMenuPrimitive.Link.Props;
export type NavigationMenuIconProps = NavigationMenuPrimitive.Icon.Props;
export type NavigationMenuPortalProps = NavigationMenuPrimitive.Portal.Props;
export type NavigationMenuBackdropProps =
  NavigationMenuPrimitive.Backdrop.Props;
export type NavigationMenuPopupProps = NavigationMenuPrimitive.Popup.Props;

export type NavigationMenuPositionerProps =
  NavigationMenuPrimitive.Positioner.Props;

export type NavigationMenuViewportProps = NavigationMenuPrimitive.Popup.Props &
  Pick<
    NavigationMenuPrimitive.Positioner.Props,
    "align" | "alignOffset" | "side" | "sideOffset"
  >;

export interface NavigationMenuLinkItem {
  title: string;
  href: string;
  description?: string;
  icon?: LucideIcon;
}

export interface NavigationMenuGridCardProps
  extends Omit<NavigationMenuLinkProps, "href"> {
  link: NavigationMenuLinkItem;
}

export interface NavigationMenuSmallItemProps
  extends Omit<NavigationMenuLinkProps, "href"> {
  item: NavigationMenuLinkItem;
  href?: string;
}

export interface NavigationMenuLargeItemProps
  extends Omit<NavigationMenuLinkProps, "href"> {
  link: NavigationMenuLinkItem;
  href?: string;
}

export interface NavigationMenuMobileItemProps
  extends Omit<NavigationMenuLinkProps, "href"> {
  item: NavigationMenuLinkItem;
  href?: string;
}

export interface NavigationMenuDisclosureProps extends ComponentProps<"div"> {
  title: string;
  defaultOpen?: boolean;
  children: ReactNode;
}
