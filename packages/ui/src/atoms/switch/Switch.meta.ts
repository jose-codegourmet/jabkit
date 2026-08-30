import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "switch",
  displayName: "Switch",
  version: "1.0.0",
  addedAt: "2026-08-30",
  description: "Accessible Switch primitive adapted from shadcn/ui.",
  tags: ["switch", "primitive", "accessible"],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
} satisfies ComponentMeta;
