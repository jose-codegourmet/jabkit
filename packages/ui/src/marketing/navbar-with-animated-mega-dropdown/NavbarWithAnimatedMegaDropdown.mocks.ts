import type { NavbarWithAnimatedMegaDropdownProps } from "./NavbarWithAnimatedMegaDropdown.types";

export const navbarWithAnimatedMegaDropdownMocks = {
  default: {
    brand: { name: "Paperlane", href: "#home" },
    defaultValue: "product",
    navItems: [
      {
        kind: "mega",
        label: "Product",
        value: "product",
        columns: [
          {
            title: "Build",
            links: [
              {
                title: "Page kit",
                href: "#page-kit",
                description: "Compose landing pages from shared blocks.",
                icon: "layers",
              },
              {
                title: "Workflows",
                href: "#workflows",
                description: "Route reviews without a second tool.",
                icon: "plug",
              },
              {
                title: "Insights",
                href: "#insights",
                description: "See what shipped this week.",
                icon: "bar-chart",
              },
            ],
          },
          {
            title: "Operate",
            links: [
              { title: "Templates", href: "#templates", icon: "file-text" },
              { title: "API", href: "#api", icon: "code" },
              { title: "Security", href: "#security", icon: "shield" },
              { title: "Status", href: "#status", icon: "globe" },
            ],
          },
        ],
        featured: {
          title: "Launch notes",
          href: "#launch-notes",
          description: "Keep release copy, owners, and dates in one lane.",
          icon: "star",
        },
      },
      {
        kind: "mega",
        label: "Resources",
        value: "resources",
        columns: [
          {
            title: "Learn",
            links: [
              {
                title: "Guides",
                href: "#guides",
                description: "Setup, billing, and publishing walkthroughs.",
                icon: "help-circle",
              },
              {
                title: "Journal",
                href: "#journal",
                description: "Release notes and studio writing.",
                icon: "leaf",
              },
            ],
          },
          {
            title: "Company",
            links: [
              {
                title: "Customers",
                href: "#customers",
                description: "How teams keep launch work calm.",
                icon: "users",
              },
              {
                title: "Partners",
                href: "#partners",
                description: "Agencies that ship on Paperlane.",
                icon: "handshake",
              },
            ],
          },
        ],
      },
      { kind: "link", label: "Pricing", href: "#pricing" },
    ],
    secondaryCta: { label: "Sign in", href: "#sign-in" },
    cta: { label: "Start free", href: "#start" },
  },
  alternate: {
    brand: { name: "Relay North", href: "#home" },
    defaultValue: null,
    navItems: [
      {
        kind: "mega",
        label: "Platform",
        value: "platform",
        columns: [
          {
            title: "Core",
            links: [
              {
                title: "Routing",
                href: "#routing",
                description: "Send work to the right owner on time.",
                icon: "globe",
              },
              {
                title: "Roles",
                href: "#roles",
                description: "Keep access tight across studios.",
                icon: "users",
              },
            ],
          },
        ],
      },
      { kind: "link", label: "Pricing", href: "#pricing" },
      { kind: "link", label: "Docs", href: "#docs" },
    ],
    secondaryCta: { label: "Log in", href: "#login" },
    cta: { label: "Book a demo", href: "#demo" },
  },
} satisfies Record<
  "default" | "alternate",
  NavbarWithAnimatedMegaDropdownProps
>;
