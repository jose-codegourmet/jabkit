import type { Footer11NavLink, Footer11Props } from "./Footer11.types";

export const footer11NavLinks: Footer11NavLink[] = [
  { label: "Products", href: "#products" },
  { label: "Company", href: "#company" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export const footer11Mocks = {
  default: {
    badgeText: "Loved by Creators",
    heading:
      "Want to collaborate with us, explore our tools or just curious to know more?",
    contactLabel: "Reach out at:",
    contactEmail: "hello@northline.studio",
    contactEmailHref: "mailto:hello@northline.studio",
    navLinks: footer11NavLinks,
    brandName: "northline.io",
  },
  alternate: {
    badgeText: "Trusted by studios",
    heading:
      "Need a quieter path for your next launch, or just want the field notes?",
    contactLabel: "Write to us:",
    contactEmail: "desk@harbor.studio",
    contactEmailHref: "mailto:desk@harbor.studio",
    navLinks: [
      { label: "Work", href: "#work" },
      { label: "Studio", href: "#studio" },
      { label: "Journal", href: "#journal" },
      { label: "Visit", href: "#visit" },
    ],
    brandName: "harbor.studio",
  },
} satisfies Record<string, Footer11Props>;
