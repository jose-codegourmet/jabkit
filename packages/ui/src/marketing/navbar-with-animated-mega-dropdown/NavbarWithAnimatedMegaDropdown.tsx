"use client";

import { CompassIcon, MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/atoms/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
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
} from "@/atoms/navigation-menu";
import { cn } from "@/lib/cn";
import type {
  NavbarWithAnimatedMegaDropdownColumn,
  NavbarWithAnimatedMegaDropdownLinkItem,
  NavbarWithAnimatedMegaDropdownNavItem,
  NavbarWithAnimatedMegaDropdownProps,
} from "./NavbarWithAnimatedMegaDropdown.types";

const defaults = {
  brand: { name: "Paperlane", href: "#home" },
  cta: { label: "Start free", href: "#start" },
  secondaryCta: { label: "Sign in", href: "#sign-in" },
  navItems: [
    {
      kind: "mega",
      label: "Product",
      value: "product",
      columns: [
        {
          title: "Build",
          links: [
            {
              title: "Page kit",
              href: "#page-kit",
              description: "Compose landing pages from shared blocks.",
              icon: "layers",
            },
            {
              title: "Workflows",
              href: "#workflows",
              description: "Route reviews without a second tool.",
              icon: "plug",
            },
            {
              title: "Insights",
              href: "#insights",
              description: "See what shipped this week.",
              icon: "bar-chart",
            },
          ],
        },
        {
          title: "Operate",
          links: [
            { title: "Templates", href: "#templates", icon: "file-text" },
            { title: "API", href: "#api", icon: "code" },
            { title: "Security", href: "#security", icon: "shield" },
            { title: "Status", href: "#status", icon: "globe" },
          ],
        },
      ],
      featured: {
        title: "Launch notes",
        href: "#launch-notes",
        description: "Keep release copy, owners, and dates in one lane.",
        icon: "star",
      },
    },
    {
      kind: "mega",
      label: "Resources",
      value: "resources",
      columns: [
        {
          title: "Learn",
          links: [
            {
              title: "Guides",
              href: "#guides",
              description: "Setup, billing, and publishing walkthroughs.",
              icon: "help-circle",
            },
            {
              title: "Journal",
              href: "#journal",
              description: "Release notes and studio writing.",
              icon: "leaf",
            },
          ],
        },
      ],
    },
    { kind: "link", label: "Pricing", href: "#pricing" },
  ],
} satisfies {
  brand: { name: string; href: string };
  cta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  navItems: NavbarWithAnimatedMegaDropdownNavItem[];
};

const staggerClass =
  "motion-safe:animate-in motion-safe:fade-in-0 motion-safe:slide-in-from-bottom-2 motion-safe:fill-mode-both motion-reduce:animate-none";

function MegaPanel({
  columns,
  featured,
}: {
  columns: NavbarWithAnimatedMegaDropdownColumn[];
  featured?: NavbarWithAnimatedMegaDropdownLinkItem;
}) {
  const columnCount = Math.min(Math.max(columns.length, 1), 3);

  return (
    <div
      className={cn(
        "grid w-[min(52rem,calc(100vw-3rem))] md:grid-cols-[minmax(0,1fr)_13rem]",
        !featured && "md:grid-cols-1",
      )}
    >
      <div
        className={cn(
          "grid grow gap-4 p-4 md:border-r md:border-border",
          columnCount === 1 && "md:grid-cols-1",
          columnCount === 2 && "md:grid-cols-2",
          columnCount >= 3 && "md:grid-cols-3",
          !featured && "md:border-r-0",
        )}
      >
        {columns.map((column, index) => (
          <div
            className={cn("flex flex-col gap-2", staggerClass)}
            key={column.title}
            style={{
              animationDelay: `${index * 55}ms`,
              animationDuration: "280ms",
            }}
          >
            <p className="px-1 text-xs font-medium tracking-wide text-muted-foreground">
              {column.title}
            </p>
            <ul className="grid gap-1">
              {column.links.map((link) => (
                <li key={link.href}>
                  {link.description ? (
                    <NavigationMenuLargeItem link={link} />
                  ) : (
                    <NavigationMenuSmallItem item={link} />
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {featured ? (
        <div
          className={cn("p-3", staggerClass)}
          style={{
            animationDelay: `${columns.length * 55}ms`,
            animationDuration: "280ms",
          }}
        >
          <NavigationMenuGridCard className="min-h-40" link={featured} />
        </div>
      ) : null}
    </div>
  );
}

function DesktopNav({
  items,
  defaultValue,
}: {
  items: NavbarWithAnimatedMegaDropdownNavItem[];
  defaultValue?: string | null;
}) {
  return (
    <NavigationMenu className="hidden lg:flex" defaultValue={defaultValue}>
      <NavigationMenuList>
        {items.map((item) => {
          if (item.kind === "link") {
            return (
              <NavigationMenuItem key={item.label}>
                <NavigationMenuLink
                  className={navigationMenuTriggerClassName}
                  href={item.href}
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            );
          }

          return (
            <NavigationMenuItem key={item.value} value={item.value}>
              <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <MegaPanel columns={item.columns} featured={item.featured} />
              </NavigationMenuContent>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function MobileNav({
  items,
  onNavigate,
}: {
  items: NavbarWithAnimatedMegaDropdownNavItem[];
  onNavigate: () => void;
}) {
  return (
    <NavigationMenu className="max-w-none px-4 pt-2 pb-6" delay={0}>
      {items.map((item) => {
        if (item.kind === "link") {
          return (
            <a
              className="flex py-3 text-sm font-medium text-foreground"
              href={item.href}
              key={item.label}
              onClick={onNavigate}
            >
              {item.label}
            </a>
          );
        }

        return (
          <NavigationMenuDisclosure key={item.value} title={item.label}>
            <NavigationMenuList className="grid gap-1">
              {item.columns.flatMap((column) =>
                column.links.map((link) => (
                  <NavigationMenuItem key={link.href}>
                    <NavigationMenuMobileItem
                      item={link}
                      onClick={onNavigate}
                    />
                  </NavigationMenuItem>
                )),
              )}
              {item.featured ? (
                <NavigationMenuItem>
                  <NavigationMenuMobileItem
                    item={item.featured}
                    onClick={onNavigate}
                  />
                </NavigationMenuItem>
              ) : null}
            </NavigationMenuList>
          </NavigationMenuDisclosure>
        );
      })}
    </NavigationMenu>
  );
}

export function NavbarWithAnimatedMegaDropdown({
  className,
  brand = defaults.brand,
  navItems = defaults.navItems,
  cta = defaults.cta,
  secondaryCta = defaults.secondaryCta,
  defaultValue = "product",
  ...props
}: NavbarWithAnimatedMegaDropdownProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b border-border bg-background/90 text-foreground",
        "backdrop-blur-md supports-[backdrop-filter]:bg-background/70",
        className,
      )}
      data-slot="navbar-with-animated-mega-dropdown"
      {...props}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-4">
        <a
          className="flex min-w-0 items-center gap-2 font-semibold tracking-tight outline-none focus-visible:ring-2 focus-visible:ring-ring"
          href={brand.href}
        >
          <span className="flex size-8 shrink-0 items-center justify-center rounded-[--radius] bg-primary text-primary-foreground">
            <CompassIcon aria-hidden="true" className="size-4" />
          </span>
          <span className="truncate">{brand.name}</span>
        </a>

        <div className="hidden min-w-0 flex-1 justify-center lg:flex">
          <DesktopNav defaultValue={defaultValue} items={navItems} />
        </div>

        <div className="ml-auto flex items-center gap-2">
          <Button
            asChild
            className="hidden lg:inline-flex"
            size="sm"
            variant="ghost"
          >
            <a href={secondaryCta.href}>{secondaryCta.label}</a>
          </Button>
          <Button asChild className="hidden lg:inline-flex" size="sm">
            <a href={cta.href}>{cta.label}</a>
          </Button>

          <Dialog onOpenChange={setMenuOpen} open={menuOpen}>
            <Button
              aria-expanded={menuOpen}
              aria-label="Open navigation"
              className="size-9 p-0 lg:hidden"
              onClick={() => setMenuOpen(true)}
              size="sm"
              variant="ghost"
            >
              <MenuIcon className="size-5" />
            </Button>
            <DialogContent
              className="top-0 right-0 left-auto h-dvh w-[min(22rem,calc(100%-1.5rem))] max-w-none translate-x-0 translate-y-0 gap-0 overflow-y-auto rounded-none rounded-l-[--radius] p-0 data-open:slide-in-from-right-4 sm:max-w-none"
              showCloseButton={false}
            >
              <div className="flex h-14 items-center justify-between border-b border-border px-4">
                <DialogTitle className="text-sm">{brand.name}</DialogTitle>
                <DialogClose
                  render={
                    <Button
                      aria-label="Close navigation"
                      className="size-8 p-0"
                      size="sm"
                      variant="ghost"
                    >
                      <XIcon className="size-4" />
                    </Button>
                  }
                />
              </div>
              <MobileNav
                items={navItems}
                onNavigate={() => setMenuOpen(false)}
              />
              <div className="mt-auto flex flex-col gap-2 border-t border-border p-4">
                <Button asChild size="sm" variant="ghost">
                  <a href={secondaryCta.href}>{secondaryCta.label}</a>
                </Button>
                <Button asChild size="sm">
                  <a href={cta.href}>{cta.label}</a>
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  );
}
