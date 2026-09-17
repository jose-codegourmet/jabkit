import type { ShopTopNavProps } from "./ShopTopNav.types";

export const shopTopNavMocks = {
  default: {
    brand: "MUGSY'S MUGS",
    links: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Company", href: "#company" },
      { label: "Stores", href: "#stores" },
    ],
    cta: { label: "Explore Collection", href: "#collection" },
    menuLabel: "Toggle menu",
  },
  alternate: {
    brand: "CAMP SERIES",
    links: [
      { label: "Shop", href: "#shop" },
      { label: "Journal", href: "#journal" },
      { label: "Stores", href: "#stores" },
    ],
    cta: { label: "Shop Now", href: "#shop" },
    menuLabel: "Open navigation",
  },
} satisfies Record<string, ShopTopNavProps>;
