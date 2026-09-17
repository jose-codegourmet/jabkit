import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "infographic-node",
  displayName: "InfographicNode",
  version: "1.0.0",
  addedAt: "2026-09-17",
  description:
    "Single data node for a Traffo-style constellation: label, value, and idle or active state.",
  sectionCategory: "content",
  purpose:
    "Renders one measurable graph node that a scroll sequence can light from idle to active.",
  bestFor: [
    "analytics infographics",
    "scroll-linked node graphs",
    "metric constellation tiles",
  ],
  tone: ["professional", "bold"],
  industries: ["saas", "analytics"],
  contentDensity: "low",
  visualWeight: "medium",
  layout: { type: "stack", alignment: "center" },
  slots: ["icon", "value", "label"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  inspoUrl: "https://codepen.io/dermalhealth/pen/myORdJX",
  tags: ["infographic", "node", "metric", "atom"],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: false, reducedMotion: true },
} satisfies ComponentMeta;
