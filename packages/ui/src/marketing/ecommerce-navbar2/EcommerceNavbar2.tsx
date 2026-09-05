"use client";

import {
  ChevronDownIcon,
  HeartIcon,
  MenuIcon,
  SearchIcon,
  ShoppingBagIcon,
  UserIcon,
} from "lucide-react";
import { type FormEvent, type ReactNode, useId, useState } from "react";
import { Badge } from "@/atoms/badge";
import { Button } from "@/atoms/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/atoms/dialog/Dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/atoms/dropdown-menu/DropdownMenu";
import { Input } from "@/atoms/input";
import { Separator } from "@/atoms/separator";
import { cn } from "@/lib/cn";
import type {
  EcommerceNavbar2Link,
  EcommerceNavbar2NavItem,
  EcommerceNavbar2NestedItem,
  EcommerceNavbar2Props,
} from "./EcommerceNavbar2.types";

const defaultNavItems: EcommerceNavbar2NavItem[] = [
  {
    kind: "mega",
    label: "Shop",
    href: "#shop",
    columns: [
      {
        title: "Apparel",
        links: [
          { label: "Outerwear", href: "#outerwear" },
          { label: "Knitwear", href: "#knitwear" },
          { label: "Denim", href: "#denim" },
          { label: "Footwear", href: "#footwear" },
        ],
      },
      {
        title: "Home",
        links: [
          { label: "Bedding", href: "#bedding" },
          { label: "Table", href: "#table" },
          { label: "Lighting", href: "#lighting" },
          { label: "Storage", href: "#storage" },
        ],
      },
      {
        title: "Outdoor",
        links: [
          { label: "Trail kits", href: "#trail" },
          { label: "Camp kitchen", href: "#camp-kitchen" },
          { label: "Rain gear", href: "#rain" },
          { label: "Packs", href: "#packs" },
        ],
      },
    ],
    featured: {
      href: "#spring-drop",
      imageSrc: "/assets/e5ee9abd8e719085.webp",
      imageAlt: "Model walking in a wool coat with a leather tote",
      title: "Spring drop",
      description: "Wool coats and field bags, in store this week.",
    },
  },
  {
    kind: "menu",
    label: "Collections",
    href: "#collections",
    items: [
      {
        label: "House lines",
        href: "#house",
        children: [
          { label: "Marlow Core", href: "#marlow-core" },
          { label: "Atelier", href: "#atelier" },
          { label: "Workwear", href: "#workwear" },
        ],
      },
      { label: "Collaborations", href: "#collabs" },
      { label: "Archive sale", href: "#archive" },
      {
        label: "By season",
        href: "#season",
        children: [
          { label: "Spring", href: "#spring" },
          { label: "Fall", href: "#fall" },
        ],
      },
    ],
  },
  { kind: "link", label: "New", href: "#new" },
  { kind: "link", label: "Sale", href: "#sale", badge: "24" },
  { kind: "link", label: "Stories", href: "#stories" },
];

const defaultAccountLinks: EcommerceNavbar2Link[] = [
  { label: "Sign in", href: "#sign-in" },
  { label: "Orders", href: "#orders" },
  { label: "Addresses", href: "#addresses" },
  { label: "Rewards", href: "#rewards" },
];

const defaultHelpLinks: EcommerceNavbar2Link[] = [
  { label: "Shipping", href: "#shipping" },
  { label: "Returns", href: "#returns" },
  { label: "Size guide", href: "#size-guide" },
  { label: "Contact", href: "#contact" },
];

const defaults = {
  brand: { name: "Marlow", href: "#home" },
  searchPlaceholder: "Search the shop",
  wishlistHref: "#wishlist",
  wishlistLabel: "Wishlist",
  wishlistCount: 2,
  cartHref: "#cart",
  cartLabel: "Cart",
  cartCount: 3,
  accountLabel: "Account",
  helpTitle: "Help",
};

function NavBadge({ label }: { label?: string }) {
  if (!label) return null;
  return (
    <Badge className="h-4 min-w-4 px-1 text-[10px]" variant="secondary">
      {label}
    </Badge>
  );
}

function CountBadge({ count }: { count: number }) {
  if (count <= 0) return null;
  return (
    <Badge className="absolute -top-0.5 -right-0.5 h-4 min-w-4 px-1 text-[10px]">
      {count > 99 ? "99+" : count}
    </Badge>
  );
}

function NestedMenuItems({ items }: { items: EcommerceNavbar2NestedItem[] }) {
  return items.map((item) => {
    if (item.children?.length) {
      return (
        <DropdownMenuSub key={item.label}>
          <DropdownMenuSubTrigger>{item.label}</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            {item.children.map((child) => (
              <DropdownMenuItem
                key={child.label}
                render={<a href={child.href} />}
              >
                {child.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuSubContent>
        </DropdownMenuSub>
      );
    }
    return (
      <DropdownMenuItem key={item.label} render={<a href={item.href} />}>
        {item.label}
      </DropdownMenuItem>
    );
  });
}

function DesktopNavItem({ item }: { item: EcommerceNavbar2NavItem }) {
  const triggerClass = cn(
    "inline-flex h-8 items-center gap-1 rounded-[--radius] px-2.5 text-sm font-medium text-foreground outline-none",
    "hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring",
    "data-popup-open:bg-accent data-popup-open:text-accent-foreground",
  );

  if (item.kind === "link") {
    return (
      <a className={triggerClass} href={item.href}>
        {item.label}
        <NavBadge label={item.badge} />
      </a>
    );
  }

  if (item.kind === "menu") {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger className={triggerClass}>
          {item.label}
          <NavBadge label={item.badge} />
          <ChevronDownIcon className="size-3.5 opacity-70" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="min-w-48">
          <NestedMenuItems items={item.items} />
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={triggerClass}>
        {item.label}
        <NavBadge label={item.badge} />
        <ChevronDownIcon className="size-3.5 opacity-70" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="w-[min(44rem,calc(100vw-2rem))] p-3"
      >
        <div
          className={cn(
            "grid gap-4",
            item.featured
              ? "md:grid-cols-[1fr_1fr_1fr_12rem]"
              : "md:grid-cols-3",
          )}
        >
          {item.columns.map((column) => (
            <DropdownMenuGroup key={column.title}>
              <DropdownMenuLabel>{column.title}</DropdownMenuLabel>
              {column.links.map((link) => (
                <DropdownMenuItem
                  key={link.label}
                  render={<a href={link.href} />}
                >
                  {link.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
          ))}
          {item.featured ? (
            <a
              className="hidden overflow-hidden rounded-[--radius] border border-border bg-muted md:block"
              href={item.featured.href}
            >
              <img
                alt={item.featured.imageAlt}
                className="aspect-[4/5] h-36 w-full object-cover"
                src={item.featured.imageSrc}
              />
              <span className="block space-y-0.5 p-2.5">
                <span className="block text-sm font-medium text-foreground">
                  {item.featured.title}
                </span>
                <span className="block text-xs leading-5 text-muted-foreground">
                  {item.featured.description}
                </span>
              </span>
            </a>
          ) : null}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function SearchField({
  id,
  placeholder,
  className,
  onSearch,
  onSubmit,
}: {
  id: string;
  placeholder: string;
  className?: string;
  onSearch?: (query: string) => void;
  onSubmit?: EcommerceNavbar2Props["onSubmit"];
}) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    onSubmit?.(event);
    if (event.defaultPrevented) return;
    event.preventDefault();
    const query = String(
      new FormData(event.currentTarget).get("q") ?? "",
    ).trim();
    onSearch?.(query);
  };

  return (
    <form className={cn("relative w-full", className)} onSubmit={handleSubmit}>
      <label className="sr-only" htmlFor={id}>
        Search
      </label>
      <SearchIcon
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground"
      />
      <Input
        className="h-9 rounded-full bg-muted/40 pr-3 pl-8"
        id={id}
        name="q"
        placeholder={placeholder}
        type="search"
      />
    </form>
  );
}

function AccountMenu({
  label,
  links,
}: {
  label: string;
  links: EcommerceNavbar2Link[];
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label={label}
        className="relative inline-flex size-9 items-center justify-center rounded-[--radius] text-foreground outline-none hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring"
      >
        <UserIcon className="size-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-44">
        <DropdownMenuLabel>{label}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {links.map((link) => (
          <DropdownMenuItem key={link.label} render={<a href={link.href} />}>
            {link.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function AccordionGroup({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();

  return (
    <div className="border-b border-border">
      <button
        aria-controls={panelId}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-2 px-1 py-3 text-left text-sm font-medium text-foreground"
        onClick={() => setOpen((value) => !value)}
        type="button"
      >
        {title}
        <ChevronDownIcon
          className={cn(
            "size-4 text-muted-foreground transition-transform duration-200",
            open && "rotate-180",
            "motion-reduce:transition-none",
          )}
        />
      </button>
      {open ? (
        <div className="flex flex-col gap-1 pb-3" id={panelId}>
          {children}
        </div>
      ) : null}
    </div>
  );
}

function MobileLink({
  href,
  children,
  onNavigate,
  nested = false,
}: {
  href: string;
  children: ReactNode;
  onNavigate: () => void;
  nested?: boolean;
}) {
  return (
    <a
      className={cn(
        "rounded-[--radius] px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground",
        nested ? "pl-4 text-muted-foreground" : "font-medium text-foreground",
      )}
      href={href}
      onClick={onNavigate}
    >
      {children}
    </a>
  );
}

function MobileNav({
  items,
  helpTitle,
  helpLinks,
  accountLabel,
  accountLinks,
  onNavigate,
}: {
  items: EcommerceNavbar2NavItem[];
  helpTitle: string;
  helpLinks: EcommerceNavbar2Link[];
  accountLabel: string;
  accountLinks: EcommerceNavbar2Link[];
  onNavigate: () => void;
}) {
  return (
    <nav aria-label="Store" className="flex flex-col px-4 pb-6">
      {items.map((item) => {
        if (item.kind === "link") {
          return (
            <MobileLink
              href={item.href}
              key={item.label}
              onNavigate={onNavigate}
            >
              <span className="inline-flex items-center gap-2">
                {item.label}
                <NavBadge label={item.badge} />
              </span>
            </MobileLink>
          );
        }

        if (item.kind === "menu") {
          return (
            <AccordionGroup key={item.label} title={item.label}>
              {item.items.map((entry) => (
                <div className="flex flex-col" key={entry.label}>
                  <MobileLink href={entry.href} onNavigate={onNavigate}>
                    {entry.label}
                  </MobileLink>
                  {entry.children?.map((child) => (
                    <MobileLink
                      href={child.href}
                      key={child.label}
                      nested
                      onNavigate={onNavigate}
                    >
                      {child.label}
                    </MobileLink>
                  ))}
                </div>
              ))}
            </AccordionGroup>
          );
        }

        return (
          <AccordionGroup key={item.label} title={item.label}>
            {item.columns.map((column) => (
              <div className="flex flex-col gap-1" key={column.title}>
                <p className="px-2 pt-2 text-xs font-medium text-muted-foreground">
                  {column.title}
                </p>
                {column.links.map((link) => (
                  <MobileLink
                    href={link.href}
                    key={link.label}
                    onNavigate={onNavigate}
                  >
                    {link.label}
                  </MobileLink>
                ))}
              </div>
            ))}
            {item.featured ? (
              <MobileLink href={item.featured.href} onNavigate={onNavigate}>
                {item.featured.title}
              </MobileLink>
            ) : null}
          </AccordionGroup>
        );
      })}

      <AccordionGroup title={helpTitle}>
        {helpLinks.map((link) => (
          <MobileLink href={link.href} key={link.label} onNavigate={onNavigate}>
            {link.label}
          </MobileLink>
        ))}
      </AccordionGroup>

      <AccordionGroup title={accountLabel}>
        {accountLinks.map((link) => (
          <MobileLink href={link.href} key={link.label} onNavigate={onNavigate}>
            {link.label}
          </MobileLink>
        ))}
      </AccordionGroup>
    </nav>
  );
}

export function EcommerceNavbar2({
  className,
  brand = defaults.brand,
  navItems = defaultNavItems,
  searchPlaceholder = defaults.searchPlaceholder,
  wishlistHref = defaults.wishlistHref,
  wishlistLabel = defaults.wishlistLabel,
  wishlistCount = defaults.wishlistCount,
  cartHref = defaults.cartHref,
  cartLabel = defaults.cartLabel,
  cartCount = defaults.cartCount,
  accountLabel = defaults.accountLabel,
  accountLinks = defaultAccountLinks,
  helpTitle = defaults.helpTitle,
  helpLinks = defaultHelpLinks,
  onSearch,
  onSubmit,
  ...props
}: EcommerceNavbar2Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const searchId = useId();
  const mobileSearchId = useId();

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b border-border bg-background text-foreground",
        className,
      )}
      data-slot="ecommerce-navbar2"
      {...props}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-4">
        <Button
          aria-expanded={menuOpen}
          aria-label="Open navigation"
          className="size-9 px-0 lg:hidden"
          onClick={() => setMenuOpen(true)}
          size="sm"
          variant="ghost"
        >
          <MenuIcon className="size-4" />
        </Button>

        <a
          className="flex min-w-0 items-center gap-2 font-semibold tracking-tight"
          href={brand.href}
        >
          <span className="flex size-8 shrink-0 items-center justify-center rounded-[--radius] bg-primary text-sm text-primary-foreground">
            {brand.name.slice(0, 1)}
          </span>
          <span className="truncate">{brand.name}</span>
        </a>

        <nav
          aria-label="Primary"
          className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 lg:flex"
        >
          {navItems.map((item) => (
            <DesktopNavItem item={item} key={item.label} />
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-1 sm:gap-2">
          <SearchField
            className="hidden w-[min(100%,16rem)] md:block"
            id={searchId}
            onSearch={onSearch}
            onSubmit={onSubmit}
            placeholder={searchPlaceholder}
          />
          <Button
            aria-label={
              wishlistCount
                ? `${wishlistLabel}, ${wishlistCount} saved`
                : wishlistLabel
            }
            asChild
            className="relative size-9 px-0"
            size="sm"
            variant="ghost"
          >
            <a href={wishlistHref}>
              <HeartIcon className="size-4" />
              <CountBadge count={wishlistCount} />
            </a>
          </Button>
          <AccountMenu label={accountLabel} links={accountLinks} />
          <Button
            aria-label={
              cartCount ? `${cartLabel}, ${cartCount} items` : cartLabel
            }
            asChild
            className="relative size-9 px-0"
            size="sm"
            variant="ghost"
          >
            <a href={cartHref}>
              <ShoppingBagIcon className="size-4" />
              <CountBadge count={cartCount} />
            </a>
          </Button>
        </div>
      </div>

      <div className="border-t border-border px-4 py-2 md:hidden">
        <SearchField
          id={mobileSearchId}
          onSearch={onSearch}
          onSubmit={onSubmit}
          placeholder={searchPlaceholder}
        />
      </div>

      <Dialog onOpenChange={setMenuOpen} open={menuOpen}>
        <DialogContent
          className="top-0 left-0 h-dvh w-[min(22rem,calc(100%-1.5rem))] max-w-none translate-x-0 translate-y-0 gap-0 overflow-y-auto rounded-none rounded-r-xl p-0 sm:max-w-none"
          showCloseButton
        >
          <DialogHeader className="border-b border-border p-4">
            <DialogTitle>{brand.name}</DialogTitle>
          </DialogHeader>
          <Separator />
          <MobileNav
            accountLabel={accountLabel}
            accountLinks={accountLinks}
            helpLinks={helpLinks}
            helpTitle={helpTitle}
            items={navItems}
            onNavigate={() => setMenuOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </header>
  );
}
