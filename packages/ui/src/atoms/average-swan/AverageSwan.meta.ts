import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "average-swan",
  displayName: "AverageSwan",
  version: "1.1.0",
  addedAt: "2026-09-15",
  description:
    "A four-key sampler pad with square chassis wells, oversized 10px-radius keys, and a hard press-in shadow.",
  sectionCategory: "action",
  purpose:
    "Recreates a compact hardware pad (minus, plus, record, play) with native buttons and local radii instead of the shared Button shape.",
  bestFor: [
    "sampler, transport, or device-style controls",
    "tactile record and play actions",
    "product UI that needs a recessed square well",
  ],
  avoidFor: [
    "generic form submit buttons",
    "dense toolbars that cannot spare the 2x2 pad",
  ],
  tone: ["playful", "bold"],
  contentDensity: "low",
  visualWeight: "high",
  layout: {
    type: "grid",
    columns: 2,
    alignment: "center",
  },
  slots: ["minus", "plus", "record", "play", "caption"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  tags: ["button", "pad", "sampler", "neumorphic", "atom"],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: {
    layout: "center",
  },
} satisfies ComponentMeta;
