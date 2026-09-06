import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "dropdown-menu",
  displayName: "DropdownMenu",
  version: "1.0.0",
  addedAt: "2026-08-30",
  description: "Accessible DropdownMenu primitive adapted from shadcn/ui.",
  sectionCategory: "navigation",
  purpose:
    "Keeps secondary actions compact until a user requests them from a trigger.",
  bestFor: [
    "compact action menus",
    "contextual navigation",
    "account controls",
  ],
  tone: ["clean", "professional"],
  contentDensity: "medium",
  visualWeight: "low",
  layout: {
    type: "overlay",
    alignment: "left",
  },
  slots: ["trigger", "menuItems", "groups"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  tags: ["dropdown-menu", "primitive", "accessible"],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
} satisfies ComponentMeta;
