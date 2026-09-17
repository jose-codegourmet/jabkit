import { Slot } from "@radix-ui/react-slot";
import { ArrowRightIcon } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/cn";
import type { ShopAnimatedButtonProps } from "./ShopAnimatedButton.types";

export function ShopAnimatedButton({
  className,
  children,
  label = "Explore Collection",
  showIcon = true,
  asChild = false,
  type,
  ...props
}: ShopAnimatedButtonProps) {
  const Component = asChild ? Slot : "button";
  const child = asChild ? React.Children.only(children) : null;
  const content = React.isValidElement<{ children?: React.ReactNode }>(child)
    ? child.props.children
    : (children ?? label);
  const buttonContent = (
    <>
      <span>{content}</span>
      {showIcon ? (
        <ArrowRightIcon
          aria-hidden="true"
          data-slot="shop-animated-button-icon"
          className="size-5 shrink-0 stroke-[2] transition-transform duration-300 ease-out group-hover:translate-x-1 group-focus-visible:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0 motion-reduce:group-focus-visible:translate-x-0"
        />
      ) : null}
    </>
  );

  return (
    <Component
      className={cn(
        "group inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-[32px] bg-warning px-6 py-3 text-base font-semibold whitespace-nowrap text-warning-foreground shadow-none transition-[transform,box-shadow,filter] duration-300 ease-out hover:translate-x-1 hover:shadow-[0_4px_12px_color-mix(in_oklab,var(--jk-warning),transparent_60%)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:translate-y-px disabled:pointer-events-none disabled:opacity-50 motion-reduce:transition-none motion-reduce:hover:translate-x-0",
        className,
      )}
      data-slot="shop-animated-button"
      type={asChild ? undefined : (type ?? "button")}
      {...props}
    >
      {React.isValidElement(child)
        ? React.cloneElement(child, undefined, buttonContent)
        : buttonContent}
    </Component>
  );
}
