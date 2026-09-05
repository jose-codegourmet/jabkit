import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "ecommerce-navbar2",
  displayName: "EcommerceNavbar2",
  version: "1.0.0",
  addedAt: "2026-09-05",
  description:
    "Dense storefront header with nested dropdowns, a mega shop panel, search, wishlist and cart badges, account menu, and an accordion mobile sheet.",
  tags: [
    "navbar",
    "marketing",
    "ecommerce",
    "navigation",
    "header",
    "dropdown",
    "search",
    "cart",
    "mobile",
  ],
  dependencies: ["lucide-react"],
  registryDependencies: [
    "badge",
    "button",
    "dialog",
    "dropdown-menu",
    "input",
    "separator",
  ],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 420 },
} satisfies ComponentMeta;
