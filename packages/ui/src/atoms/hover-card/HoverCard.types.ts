import type { PreviewCard as PreviewCardPrimitive } from "@base-ui/react/preview-card";

export type HoverCardProps = PreviewCardPrimitive.Root.Props;
export type HoverCardTriggerProps = PreviewCardPrimitive.Trigger.Props;
export type HoverCardPortalProps = PreviewCardPrimitive.Portal.Props;
export type HoverCardContentProps = PreviewCardPrimitive.Popup.Props &
  Pick<
    PreviewCardPrimitive.Positioner.Props,
    "align" | "alignOffset" | "side" | "sideOffset"
  > &
  Pick<PreviewCardPrimitive.Portal.Props, "container">;
