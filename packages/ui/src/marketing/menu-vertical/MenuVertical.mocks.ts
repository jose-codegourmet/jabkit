import type { MenuVerticalProps } from "./MenuVertical.types";

export const menuVerticalMocks = {
  default: {
    items: [
      { label: "Home", href: "#home" },
      { label: "Pricing", href: "#pricing" },
      { label: "Docs", href: "#docs" },
      { label: "About Us", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
    skew: 0,
  },
  alternate: {
    items: [
      { label: "Studio", href: "#studio" },
      { label: "Work", href: "#work" },
      { label: "Journal", href: "#journal" },
      { label: "Visit", href: "#visit" },
    ],
    skew: 12,
  },
} satisfies Record<"default" | "alternate", MenuVerticalProps>;
