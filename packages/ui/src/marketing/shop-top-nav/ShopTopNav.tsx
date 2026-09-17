"use client";

import { CoffeeIcon, MenuIcon, XIcon } from "lucide-react";
import { useId, useState } from "react";
import { ShopAnimatedButton } from "@/atoms/shop-animated-button";
import { cn } from "@/lib/cn";
import type { ShopTopNavProps } from "./ShopTopNav.types";

const defaults = {
  brand: "MUGSY'S MUGS",
  links: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Company", href: "#company" },
    { label: "Stores", href: "#stores" },
  ],
  cta: { label: "Explore Collection", href: "#collection" },
  menuLabel: "Toggle menu",
} as const;

export function ShopTopNav({
  className,
  brand = defaults.brand,
  links = [...defaults.links],
  cta = defaults.cta,
  menuLabel = defaults.menuLabel,
  ...props
}: ShopTopNavProps) {
  const menuId = useId();
  const [open, setOpen] = useState(false);

  return (
    <header
      data-slot="shop-top-nav"
      className={cn(
        "bg-card text-card-foreground shadow-[0_2px_8px_color-mix(in_oklab,var(--jk-foreground),transparent_90%)]",
        className,
      )}
      {...props}
    >
      <nav
        aria-label="Store"
        className="relative z-[5] mx-auto flex max-w-[1400px] items-center justify-between overflow-hidden px-5 py-5"
      >
        <div className="flex min-w-0 items-center gap-1.5 rounded-br-[32px] bg-card">
          <button
            type="button"
            className="grid size-9 place-items-center rounded-[8px] text-card-foreground md:hidden"
            aria-label={menuLabel}
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? (
              <XIcon aria-hidden="true" className="size-7" />
            ) : (
              <MenuIcon aria-hidden="true" className="size-7" />
            )}
          </button>
          <a
            href="#home"
            className="flex items-center gap-2 font-semibold tracking-wide text-card-foreground no-underline"
          >
            <CoffeeIcon aria-hidden="true" className="size-6 text-warning" />
            <span>{brand}</span>
          </a>
        </div>
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-base font-medium text-card-foreground no-underline transition-colors duration-300 hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <ShopAnimatedButton asChild className="hidden md:inline-flex">
          <a href={cta.href}>{cta.label}</a>
        </ShopAnimatedButton>
      </nav>
      {open ? (
        <div
          id={menuId}
          className="border-t border-border bg-card px-5 py-4 md:hidden"
        >
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-base font-medium text-card-foreground no-underline"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <ShopAnimatedButton asChild>
              <a href={cta.href}>{cta.label}</a>
            </ShopAnimatedButton>
          </div>
        </div>
      ) : null}
    </header>
  );
}
