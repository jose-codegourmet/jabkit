import { shopCollectionHeroMocks } from "@/marketing/shop-collection-hero/ShopCollectionHero.mocks";
import { shopProductGridItems } from "@/marketing/shop-product-grid/ShopProductGrid.mocks";
import { shopTopNavMocks } from "@/marketing/shop-top-nav/ShopTopNav.mocks";
import type { ShoppingLayoutPageProps } from "./ShoppingLayoutPage.types";

export const shoppingLayoutPageMocks = {
  default: {
    nav: shopTopNavMocks.default,
    hero: shopCollectionHeroMocks.default,
    products: shopProductGridItems,
    footerLinks: shopTopNavMocks.default.links,
    footerCopyright: "© 2026 Mugsy's Mugs, Inc. All rights reserved.",
    socialLinks: [
      { label: "Facebook", href: "#facebook", network: "facebook" },
      { label: "Instagram", href: "#instagram", network: "instagram" },
      { label: "X", href: "#x", network: "x" },
      { label: "GitHub", href: "#github", network: "github" },
      { label: "YouTube", href: "#youtube", network: "youtube" },
    ],
  },
  alternate: {
    nav: shopTopNavMocks.alternate,
    hero: shopCollectionHeroMocks.alternate,
    products: shopProductGridItems.slice(0, 6),
    footerLinks: shopTopNavMocks.alternate.links,
    footerCopyright: "© 2026 Camp Series. All rights reserved.",
    socialLinks: [
      { label: "Instagram", href: "#instagram", network: "instagram" },
      { label: "YouTube", href: "#youtube", network: "youtube" },
    ],
  },
} satisfies Record<string, ShoppingLayoutPageProps>;
