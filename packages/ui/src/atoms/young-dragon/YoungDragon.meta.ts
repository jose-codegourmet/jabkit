import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "young-dragon",
  displayName: "YoungDragon",
  version: "1.1.0",
  addedAt: "2026-09-15",
  description:
    "A square-faced 3D cube loader that tumbles on two axes using outlined faces and semantic tokens.",
  sectionCategory: "feedback",
  purpose:
    "Marks an in-progress wait with a geometric 3D cube instead of a flat ring, keeping sharp square faces in light and dark.",
  bestFor: [
    "overlay and empty-state loading",
    "playful async waits that still need a status role",
    "compact pending markers beside a short label",
  ],
  avoidFor: [
    "determinate progress with a known percentage",
    "dense toolbars that need a hairline spinner",
  ],
  tone: ["playful", "clean"],
  contentDensity: "low",
  visualWeight: "low",
  layout: {
    type: "stack",
    alignment: "center",
  },
  slots: ["statusLabel"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  tags: ["loader", "spinner", "cube", "3d", "feedback", "atom"],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: false, reducedMotion: true },
  preview: {
    layout: "center",
  },
} satisfies ComponentMeta;
