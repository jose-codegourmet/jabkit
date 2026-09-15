import type { Hero39Logo, Hero39NavItem, Hero39Props } from "./Hero39.types";

export const hero39NavItems: Hero39NavItem[] = [
  { label: "Products", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Support", href: "#support" },
];

export const hero39Logos: Hero39Logo[] = [
  { name: "Forbes", face: "serif" },
  { name: "healthline", face: "sans" },
  { name: "Bloomberg", face: "sans" },
  { name: "The Washington Post", face: "serif" },
];

export const hero39Mocks = {
  default: {
    brand: "Retreats",
    brandHref: "#home",
    navItems: hero39NavItems,
    headerAction: { label: "Book a call", href: "#book" },
    badge: "A peaceful place to disconnect",
    titleLead: "The best place to find",
    titlePrefix: "your",
    titleEmphasis: "Inner Stillness",
    description:
      "Find an escape to reconnect with nature and your inner self. Your moment of clarity is waiting.",
    searchPlaceholder: "Enter a nature retreat name...",
    searchAction: { label: "Find Peace", href: "#search" },
    searchName: "q",
    logosLabel: "Trusted by seekers of calm",
    logos: hero39Logos,
    backgroundImage: "/assets/21a7a386e170d4cf.webp",
    backgroundAlt: "Peaceful nature landscape painting",
  },
  alternate: {
    brand: "Stillwater",
    brandHref: "#home",
    navItems: [
      { label: "Cabins", href: "#cabins" },
      { label: "Trails", href: "#trails" },
      { label: "Guides", href: "#guides" },
      { label: "Stay", href: "#stay" },
    ],
    headerAction: { label: "Plan a stay", href: "#stay" },
    badge: "Open air, closed calendars",
    titleLead: "A quieter shore to meet",
    titlePrefix: "your",
    titleEmphasis: "Slow Horizon",
    description:
      "Walk the lake path, leave the inbox at the gate, and let the next few days belong to you.",
    searchPlaceholder: "Search a lakeside cabin...",
    searchAction: { label: "Find Quiet", href: "#search" },
    searchName: "q",
    logosLabel: "Noted by editors of",
    logos: [
      { name: "Kinfolk", face: "serif" },
      { name: "Outside", face: "sans" },
      { name: "Monocle", face: "sans" },
      { name: "The Atlantic", face: "serif" },
    ],
    backgroundImage: "/assets/21a7a386e170d4cf.webp",
    backgroundAlt: "Peaceful nature landscape painting",
  },
} satisfies Record<string, Hero39Props>;
