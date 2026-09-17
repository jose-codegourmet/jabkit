// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { cn } from "@/lib/cn";
import { ShopCollectionHero } from "@/marketing/shop-collection-hero";
import { ShopProductGrid } from "@/marketing/shop-product-grid";
import { shopProductGridItems } from "@/marketing/shop-product-grid/ShopProductGrid.mocks";
import { ShopTopNav } from "@/marketing/shop-top-nav";
import type {
  ShoppingLayoutPageProps,
  ShoppingLayoutPageSocialLink,
} from "./ShoppingLayoutPage.types";

const defaultFooterLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Company", href: "#company" },
  { label: "Stores", href: "#stores" },
];

const defaultSocialLinks: ShoppingLayoutPageSocialLink[] = [
  { label: "Facebook", href: "#facebook", network: "facebook" },
  { label: "Instagram", href: "#instagram", network: "instagram" },
  { label: "X", href: "#x", network: "x" },
  { label: "GitHub", href: "#github", network: "github" },
  { label: "YouTube", href: "#youtube", network: "youtube" },
];

const socialMarks = {
  facebook: "FB",
  instagram: "IG",
  x: "X",
  github: "GH",
  youtube: "YT",
} as const;

export function ShoppingLayoutPage({
  className,
  nav,
  hero,
  products = shopProductGridItems,
  footerLinks = defaultFooterLinks,
  footerCopyright = "© 2026 Mugsy's Mugs, Inc. All rights reserved.",
  socialLinks = defaultSocialLinks,
  ...props
}: ShoppingLayoutPageProps) {
  return (
    <div
      data-slot="shopping-layout-page"
      className={cn("bg-background text-foreground", className)}
      {...props}
    >
      <ShopTopNav {...nav} />
      <ShopCollectionHero {...hero} />
      <div className="bg-background px-5 pb-20 sm:px-8">
        <ShopProductGrid products={products} />
      </div>
      <footer className="bg-primary px-5 py-16 text-center text-primary-foreground sm:px-8">
        <nav aria-label="Footer">
          <ul className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-base font-medium text-primary-foreground no-underline transition-opacity duration-300 hover:opacity-80"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="mt-6 text-sm text-primary-foreground/80">
          {footerCopyright}
        </p>
        <ul className="mt-6 flex justify-center gap-4">
          {socialLinks.map((link) => (
            <li key={link.network}>
              <a
                href={link.href}
                aria-label={link.label}
                className="grid size-10 place-items-center rounded-full bg-[color-mix(in_oklab,var(--jk-primary-foreground)_10%,transparent)] text-xs font-semibold text-primary-foreground transition-[transform,background-color] duration-300 ease-out hover:-translate-y-0.5 hover:bg-[color-mix(in_oklab,var(--jk-primary-foreground)_20%,transparent)] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                {socialMarks[link.network]}
              </a>
            </li>
          ))}
        </ul>
      </footer>
    </div>
  );
}
