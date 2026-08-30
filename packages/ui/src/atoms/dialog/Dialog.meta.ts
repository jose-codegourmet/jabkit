import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "dialog",
  displayName: "Dialog",
  version: "1.0.0",
  addedAt: "2026-08-30",
  description: "Accessible Dialog primitive adapted from shadcn/ui.",
  tags: ["dialog", "primitive", "accessible"],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
} satisfies ComponentMeta;
