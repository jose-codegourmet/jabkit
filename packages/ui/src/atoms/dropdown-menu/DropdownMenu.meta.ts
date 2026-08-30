import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "dropdown-menu",
  displayName: "DropdownMenu",
  version: "1.0.0",
  addedAt: "2026-08-30",
  description: "Accessible DropdownMenu primitive adapted from shadcn/ui.",
  tags: ["dropdown-menu", "primitive", "accessible"],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
} satisfies ComponentMeta;
