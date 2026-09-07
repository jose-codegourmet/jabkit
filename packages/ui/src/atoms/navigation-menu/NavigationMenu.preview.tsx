import { Grid2x2PlusIcon, MenuIcon, XIcon } from "lucide-react";
// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { Button } from "@/atoms/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/atoms/dialog";
import {
  NavigationMenu,
  NavigationMenuDisclosure,
  NavigationMenuGridCard,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuMobileItem,
  NavigationMenuSmallItem,
  navigationMenuTriggerClassName,
} from "./NavigationMenu";
import { navigationMenuMocks } from "./NavigationMenu.mocks";

const DefaultPreview = () => (
  <NavigationMenu
    className="w-[min(56rem,calc(100vw-2rem))] max-w-none flex-col overflow-hidden rounded-[--radius] border border-border bg-background text-foreground"
    delay={0}
  >
    <div className="flex h-14 w-full items-center justify-between gap-3 px-4">
      <a className="flex items-center gap-2 font-semibold" href="#top">
        <Grid2x2PlusIcon aria-hidden="true" className="size-5" />
        {navigationMenuMocks.brand}
      </a>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerClassName}>
            Product
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            className={navigationMenuTriggerClassName}
            href={navigationMenuMocks.pricingHref}
          >
            {navigationMenuMocks.pricingLabel}
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
      <Button size="sm">{navigationMenuMocks.cta}</Button>
    </div>
    <div className="grid w-full border-t border-border md:grid-cols-[1fr_12rem]">
      <NavigationMenuList className="grid grow gap-3 p-4 md:grid-cols-3 md:border-r md:border-border">
        {navigationMenuMocks.product.slice(0, 3).map((link) => (
          <NavigationMenuItem key={link.href}>
            <NavigationMenuGridCard link={link} />
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
      <NavigationMenuList className="flex-col items-stretch space-y-1 p-3">
        {navigationMenuMocks.product.slice(3).map((link) => (
          <NavigationMenuItem key={link.href}>
            <NavigationMenuSmallItem item={link} />
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </div>
  </NavigationMenu>
);

const VariantsPreview = () => (
  <div className="w-[min(28rem,calc(100vw-2rem))] rounded-[--radius] border border-border bg-background text-foreground">
    <div className="flex h-14 items-center justify-between gap-3 px-3">
      <a className="flex items-center gap-2 font-semibold" href="#top">
        <Grid2x2PlusIcon aria-hidden="true" className="size-5" />
        {navigationMenuMocks.brand}
      </a>
      <div className="flex items-center gap-2">
        <Button size="sm">{navigationMenuMocks.cta}</Button>
        <Dialog defaultOpen modal={false}>
          <DialogTrigger
            render={
              <Button
                aria-label="Open menu"
                className="size-9 p-0"
                size="sm"
                variant="ghost"
              >
                <MenuIcon className="size-5" />
              </Button>
            }
          />
          <DialogContent
            className="static h-auto max-h-[28rem] w-full max-w-none translate-x-0 translate-y-0 gap-0 overflow-y-auto rounded-[--radius] p-0 shadow-none sm:max-w-none"
            showCloseButton={false}
          >
            <div className="flex h-14 items-center justify-between border-b border-border px-4">
              <DialogTitle className="text-sm">
                {navigationMenuMocks.brand}
              </DialogTitle>
              <DialogClose
                render={
                  <Button
                    aria-label="Close menu"
                    className="size-8 p-0"
                    size="sm"
                    variant="ghost"
                  >
                    <XIcon className="size-4" />
                  </Button>
                }
              />
            </div>
            <NavigationMenu className="max-w-none px-4 pt-2 pb-6" delay={0}>
              <NavigationMenuDisclosure defaultOpen title="Product">
                <NavigationMenuList className="grid gap-1">
                  {navigationMenuMocks.product.slice(0, 4).map((link) => (
                    <NavigationMenuItem key={link.href}>
                      <NavigationMenuMobileItem item={link} />
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenuDisclosure>
              <NavigationMenuDisclosure title="Company">
                <NavigationMenuList className="grid gap-1">
                  {navigationMenuMocks.company.slice(0, 3).map((link) => (
                    <NavigationMenuItem key={link.href}>
                      <NavigationMenuMobileItem item={link} />
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenuDisclosure>
            </NavigationMenu>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  </div>
);

export default {
  Default: DefaultPreview,
  Variants: VariantsPreview,
};
