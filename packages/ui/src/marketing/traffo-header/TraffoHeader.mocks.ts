import type { TraffoHeaderProps } from "./TraffoHeader.types";

export const traffoHeaderMocks = {
  default: {
    brand: "Traffo",
    brandHref: "#top",
    links: [
      { label: "Analytics", href: "#graph" },
      { label: "Features", href: "#features", hasMenu: true },
      { label: "Blog", href: "#blog" },
      { label: "Get in touch", href: "#contact" },
    ],
    ctaLabel: "Start for free",
    ctaHref: "#start",
  },
  alternate: {
    brand: "Traffo Labs",
    brandHref: "#top",
    links: [
      { label: "Product", href: "#graph" },
      { label: "Docs", href: "#features" },
    ],
    ctaLabel: "Book a demo",
    ctaHref: "#start",
  },
} satisfies Record<string, TraffoHeaderProps>;
