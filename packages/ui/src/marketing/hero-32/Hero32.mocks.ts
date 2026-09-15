import type { Hero32NavItem, Hero32Props } from "./Hero32.types";

export const hero32NavItems: Hero32NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Usecases", href: "#usecases" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export const hero32Mocks = {
  default: {
    brand: "Haven",
    brandHref: "#home",
    navItems: hero32NavItems,
    login: { label: "Login", href: "#login" },
    primaryAction: { label: "Book a demo", href: "#demo" },
    playAction: { label: "Play overview", href: "#overview" },
    backgroundImage: "/assets/c7475f3caa3d48fd.webp",
    backgroundAlt: "Sunflowers against a clear sky",
  },
  alternate: {
    brand: "Harbor",
    brandHref: "#home",
    navItems: [
      { label: "Platform", href: "#platform" },
      { label: "Work", href: "#work" },
      { label: "Pricing", href: "#pricing" },
      { label: "Contact", href: "#contact" },
    ],
    login: { label: "Sign in", href: "#signin" },
    title: "A quiet room for the work that cannot wait",
    subtitle:
      "Private sessions, on your clock, with operators who already know the brief.",
    primaryAction: { label: "Book a walkthrough", href: "#walkthrough" },
    playAction: { label: "Watch a session", href: "#session" },
    backgroundImage: "/assets/c7475f3caa3d48fd.webp",
    backgroundAlt: "Sunflowers against a clear sky",
  },
} satisfies Record<string, Hero32Props>;
