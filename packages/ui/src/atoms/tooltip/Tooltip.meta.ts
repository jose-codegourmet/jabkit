import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "tooltip",
  displayName: "Tooltip",
  version: "1.0.0",
  addedAt: "2026-08-30",
  description: "Accessible Tooltip primitive adapted from shadcn/ui.",
  tags: ["tooltip", "primitive", "accessible"],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
} satisfies ComponentMeta;
