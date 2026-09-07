import type { Meta, StoryObj } from "@storybook/react";
import { Grid2x2PlusIcon, MenuIcon, XIcon } from "lucide-react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
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
  NavigationMenuContent,
  NavigationMenuDisclosure,
  NavigationMenuGridCard,
  NavigationMenuItem,
  NavigationMenuLargeItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuMobileItem,
  NavigationMenuSmallItem,
  NavigationMenuTrigger,
  navigationMenuTriggerClassName,
} from "./NavigationMenu";
import { navigationMenuMocks } from "./NavigationMenu.mocks";

const meta = {
  title: "Atoms/NavigationMenu",
  component: NavigationMenu,
  parameters: { layout: "centered" },
} satisfies Meta<typeof NavigationMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { defaultValue: "product" },
  render: () => (
    <div className="w-[min(56rem,calc(100vw-2rem))] rounded-[--radius] border border-border bg-background px-4 text-foreground">
      <div className="flex h-14 items-center justify-between gap-3">
        <a className="flex items-center gap-2 font-semibold" href="#top">
          <Grid2x2PlusIcon aria-hidden="true" className="size-5" />
          {navigationMenuMocks.brand}
        </a>
        <NavigationMenu defaultValue="product">
          <NavigationMenuList>
            <NavigationMenuItem value="product">
              <NavigationMenuTrigger>Product</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[min(48rem,calc(100vw-3rem))] md:grid-cols-[1fr_12rem]">
                  <ul className="grid grow gap-3 p-4 md:grid-cols-3 md:border-r md:border-border">
                    {navigationMenuMocks.product.slice(0, 3).map((link) => (
                      <li key={link.href}>
                        <NavigationMenuGridCard link={link} />
                      </li>
                    ))}
                  </ul>
                  <ul className="space-y-1 p-3">
                    {navigationMenuMocks.product.slice(3).map((link) => (
                      <li key={link.href}>
                        <NavigationMenuSmallItem item={link} />
                      </li>
                    ))}
                  </ul>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem value="company">
              <NavigationMenuTrigger>Company</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[min(48rem,calc(100vw-3rem))] md:grid-cols-[1fr_14rem]">
                  <ul className="grid grow grid-cols-2 gap-3 p-4 md:border-r md:border-border">
                    {navigationMenuMocks.company.slice(0, 2).map((link) => (
                      <li key={link.href}>
                        <NavigationMenuGridCard
                          className="min-h-36"
                          link={link}
                        />
                      </li>
                    ))}
                    <li className="col-span-2 grid grid-cols-3 gap-2">
                      {navigationMenuMocks.company.slice(2, 5).map((link) => (
                        <NavigationMenuLargeItem key={link.href} link={link} />
                      ))}
                    </li>
                  </ul>
                  <ul className="space-y-1 p-3">
                    {navigationMenuMocks.company.slice(5).map((link) => (
                      <li key={link.href}>
                        <NavigationMenuLargeItem link={link} />
                      </li>
                    ))}
                  </ul>
                </div>
              </NavigationMenuContent>
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
        </NavigationMenu>
        <Button size="sm">{navigationMenuMocks.cta}</Button>
      </div>
    </div>
  ),
};

export const Variants: Story = {
  args: { defaultValue: null },
  render: () => (
    <div className="w-[min(28rem,calc(100vw-2rem))] rounded-[--radius] border border-border bg-background text-foreground">
      <div className="flex h-14 items-center justify-between gap-3 px-3">
        <a className="flex items-center gap-2 font-semibold" href="#top">
          <Grid2x2PlusIcon aria-hidden="true" className="size-5" />
          {navigationMenuMocks.brand}
        </a>
        <div className="flex items-center gap-2">
          <Button size="sm">{navigationMenuMocks.cta}</Button>
          <Dialog defaultOpen>
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
              className="top-0 right-0 left-auto h-dvh w-[min(22rem,calc(100%-1.5rem))] max-w-none translate-x-0 translate-y-0 gap-0 overflow-y-auto rounded-none rounded-l-[--radius] p-0 sm:max-w-none"
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
              <div className="px-4 pt-2 pb-8">
                <NavigationMenuDisclosure defaultOpen title="Product">
                  <ul className="grid gap-1">
                    {navigationMenuMocks.product.map((link) => (
                      <li key={link.href}>
                        <NavigationMenuMobileItem item={link} />
                      </li>
                    ))}
                  </ul>
                </NavigationMenuDisclosure>
                <NavigationMenuDisclosure title="Company">
                  <ul className="grid gap-1">
                    {navigationMenuMocks.company.map((link) => (
                      <li key={link.href}>
                        <NavigationMenuMobileItem item={link} />
                      </li>
                    ))}
                  </ul>
                </NavigationMenuDisclosure>
                <a
                  className="flex py-3 text-sm font-medium text-foreground"
                  href={navigationMenuMocks.pricingHref}
                >
                  {navigationMenuMocks.pricingLabel}
                </a>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { defaultValue: "product" },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border sm:grid-cols-2">
      <div className="bg-background p-6">
        <NavigationMenu defaultValue="product">
          <NavigationMenuList>
            <NavigationMenuItem value="product">
              <NavigationMenuTrigger>Product</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-72 gap-2 p-3">
                  {navigationMenuMocks.product.slice(0, 3).map((link) => (
                    <li key={link.href}>
                      <NavigationMenuLargeItem link={link} />
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="dark bg-background p-6">
        <NavigationMenu defaultValue="product">
          <NavigationMenuList>
            <NavigationMenuItem value="product">
              <NavigationMenuTrigger>Product</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-72 gap-2 p-3">
                  {navigationMenuMocks.product.slice(0, 3).map((link) => (
                    <li key={link.href}>
                      <NavigationMenuLargeItem link={link} />
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  ),
};
