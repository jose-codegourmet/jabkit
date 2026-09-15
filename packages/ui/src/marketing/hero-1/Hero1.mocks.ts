import type { Hero1NavItem, Hero1Props, Hero1SocialLink } from "./Hero1.types";

export const hero1NavItems: Hero1NavItem[] = [
  { label: "Products", href: "#products", active: true },
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Support", href: "#support" },
];

export const hero1SocialLinks: Hero1SocialLink[] = [
  { label: "Linkedin", href: "#linkedin" },
  { label: "Instagram", href: "#instagram" },
  { label: "Behance", href: "#behance" },
];

export const hero1Mocks = {
  default: {
    brand: "Aurevia",
    brandHref: "#home",
    navItems: hero1NavItems,
    signIn: { label: "Sign in", href: "#signin" },
    titleLead: "The goal's the focus,",
    titleTrail: "time's the marker.",
    description:
      "Advanced wind turbines that take energy\n production to new heights.",
    cta: { label: "Let's Move Forward Today", href: "#forward" },
    socialLinks: hero1SocialLinks,
    scrollLabel: "Scroll to Discover",
    backgroundImage: "/assets/ceb500f4f6db225a.webp",
    backgroundAlt: "Purple lattice structure rising from the lower left",
  },
  alternate: {
    brand: "Northline",
    brandHref: "#home",
    navItems: [
      { label: "Turbines", href: "#turbines", active: true },
      { label: "Grid", href: "#grid" },
      { label: "Field", href: "#field" },
      { label: "Contact", href: "#contact" },
    ],
    signIn: { label: "Sign in", href: "#signin" },
    titleLead: "Power that holds the line,",
    titleTrail: "weather that does not.",
    description:
      "Coastal arrays built for long nights\n and longer service windows.",
    cta: { label: "See the Next Array", href: "#array" },
    socialLinks: [
      { label: "Linkedin", href: "#linkedin" },
      { label: "X", href: "#x" },
      { label: "Vimeo", href: "#vimeo" },
    ],
    scrollLabel: "Scroll to Discover",
    backgroundImage: "/assets/ceb500f4f6db225a.webp",
    backgroundAlt: "Purple lattice structure rising from the lower left",
  },
} satisfies Record<string, Hero1Props>;
