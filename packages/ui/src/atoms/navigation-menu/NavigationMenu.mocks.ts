import type { NavigationMenuLinkItem } from "./NavigationMenu.types";

export const navigationMenuMocks = {
  brand: "Lumen",
  cta: "Get started",
  product: [
    {
      title: "Website builder",
      href: "#builder",
      description: "Ship responsive pages from a shared component kit.",
      icon: "globe",
    },
    {
      title: "Cloud platform",
      href: "#cloud",
      description: "Deploy, scale, and observe apps from one workspace.",
      icon: "layers",
    },
    {
      title: "Team collaboration",
      href: "#collaboration",
      description: "Reviews, comments, and roles that stay out of the way.",
      icon: "user-plus",
    },
    { title: "Analytics", href: "#analytics", icon: "bar-chart" },
    { title: "Integrations", href: "#integrations", icon: "plug" },
    { title: "Commerce", href: "#commerce", icon: "wallet" },
    { title: "Security", href: "#security", icon: "shield" },
    { title: "API", href: "#api", icon: "code" },
  ] satisfies NavigationMenuLinkItem[],
  company: [
    {
      title: "About",
      href: "#about",
      description: "The studio, the people, and the work we take on.",
      icon: "users",
    },
    {
      title: "Customer stories",
      href: "#stories",
      description: "How teams use Lumen to ship calmer product surfaces.",
      icon: "star",
    },
    {
      title: "Terms",
      href: "#terms",
      description: "How the product is licensed and operated.",
      icon: "file-text",
    },
    {
      title: "Privacy",
      href: "#privacy",
      description: "What we collect and how we protect it.",
      icon: "shield",
    },
    {
      title: "Refunds",
      href: "#refunds",
      description: "Cancellations and billing adjustments.",
      icon: "rotate-ccw",
    },
    {
      title: "Partnerships",
      href: "#partnerships",
      description: "Agencies and platforms we build with.",
      icon: "handshake",
    },
    {
      title: "Journal",
      href: "#journal",
      description: "Release notes, tutorials, and studio writing.",
      icon: "leaf",
    },
    {
      title: "Help center",
      href: "#help",
      description: "Guides for setup, billing, and access.",
      icon: "help-circle",
    },
  ] satisfies NavigationMenuLinkItem[],
  pricingHref: "#pricing",
  pricingLabel: "Pricing",
} as const;
