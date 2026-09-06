import type { Toast as ToastPrimitive } from "@base-ui/react/toast";

export type ToastStatus = "success" | "info" | "warning" | "error" | "loading";

export type ToastProps = ToastPrimitive.Root.Props;
export type ToastProviderProps = ToastPrimitive.Provider.Props;
export type ToastPortalProps = ToastPrimitive.Portal.Props;
export type ToastViewportProps = ToastPrimitive.Viewport.Props;
export type ToastContentProps = ToastPrimitive.Content.Props;
export type ToastTitleProps = ToastPrimitive.Title.Props;
export type ToastDescriptionProps = ToastPrimitive.Description.Props;
export type ToastActionProps = ToastPrimitive.Action.Props;
export type ToastCloseProps = ToastPrimitive.Close.Props;

export type ToasterProps = ToastProviderProps & {
  disablePortal?: boolean;
  viewportClassName?: string;
};
