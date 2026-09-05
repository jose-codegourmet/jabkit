import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "team11",
  displayName: "Team11",
  version: "1.0.0",
  addedAt: "2026-09-05",
  description:
    "Bordered team header above a dense member grid that reveals a highlighted bio card on hover and keyboard focus from medium screens up.",
  tags: ["team", "marketing", "grid", "hover", "portraits", "bios", "landing"],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 1100 },
} satisfies ComponentMeta;
