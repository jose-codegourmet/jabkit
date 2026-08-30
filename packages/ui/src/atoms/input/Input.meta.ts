import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "input",
  displayName: "Input",
  version: "1.0.0",
  addedAt: "2026-08-30",
  description: "Accessible Input primitive adapted from shadcn/ui.",
  tags: ["input", "primitive", "accessible"],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
} satisfies ComponentMeta;
