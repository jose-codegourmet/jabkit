import type { Hero31Logo, Hero31NavItem, Hero31Props } from "./Hero31.types";

export const hero31NavItems: Hero31NavItem[] = [
  { label: "Product", href: "#product" },
  { label: "About Us", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const hero31Logos: Hero31Logo[] = [
  { icon: "command", name: "novo", weight: "tight" },
  { icon: "workflow", name: "Telia Cygate", weight: "medium" },
  { icon: "blocks", name: "customer.io", weight: "bold" },
  { icon: "sparkles", name: "Fastmail", weight: "medium" },
  { icon: "zap", name: "Medtronic", weight: "tight" },
];

export const hero31Mocks = {
  default: {
    brand: "Northline",
    brandHref: "#top",
    navItems: hero31NavItems,
    signUp: { label: "Sign up", href: "#signup" },
    title: "Innovation that Drives Impact.",
    subtitle:
      "Northline empowers teams to build, scale, and transform with technology that drives real results.",
    cta: { label: "Request a Demo", href: "#demo" },
    trustedByText: "TRUSTED BY AMBITIOUS TEAMS",
    logos: hero31Logos,
    backgroundImage: "/assets/5f56206b8544c593.webp",
    backgroundAlt: "Soft glowing curtain of light across a dark field",
  },
  alternate: {
    brand: "Harbor",
    brandHref: "#top",
    navItems: [
      { label: "Platform", href: "#platform" },
      { label: "Work", href: "#work" },
      { label: "Journal", href: "#journal" },
      { label: "Pricing", href: "#pricing" },
      { label: "Contact", href: "#contact" },
    ],
    signUp: { label: "Join now", href: "#join" },
    title: "Ship the system, not the slide.",
    subtitle:
      "Harbor gives operators a single plate for briefs, launches, and the proof that the work already landed.",
    cta: { label: "Book a walkthrough", href: "#walkthrough" },
    trustedByText: "IN USE WITH GROWING TEAMS",
    logos: [
      { icon: "command", name: "Helio", weight: "tight" },
      { icon: "workflow", name: "Fieldwork", weight: "medium" },
      { icon: "blocks", name: "orbit.studio", weight: "bold" },
      { icon: "sparkles", name: "Kite", weight: "medium" },
      { icon: "zap", name: "Ampere", weight: "tight" },
    ],
    backgroundImage: "/assets/5f56206b8544c593.webp",
    backgroundAlt: "Soft glowing curtain of light across a dark field",
  },
} satisfies Record<string, Hero31Props>;
