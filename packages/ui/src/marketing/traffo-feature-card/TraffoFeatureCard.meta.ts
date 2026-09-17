import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "traffo-feature-card",
  displayName: "TraffoFeatureCard",
  version: "1.0.0",
  addedAt: "2026-09-17",
  description:
    "Pastel Traffo pillar card with kicker, title, body, and a bottom glyph well.",
  sectionCategory: "feature",
  purpose:
    "States one analytics pillar in the Traffo three-card row without flattening the pen radii.",
  bestFor: ["feature pillars", "product capability cards"],
  tone: ["professional", "bold"],
  industries: ["saas", "analytics"],
  contentDensity: "medium",
  visualWeight: "high",
  layout: { type: "stack", alignment: "left" },
  slots: ["kicker", "title", "body", "icon"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  inspoUrl: "https://codepen.io/dermalhealth/pen/myORdJX",
  tags: ["feature", "card", "traffo", "marketing"],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: false, reducedMotion: true },
  preview: { layout: "fit", width: 480, height: 520 },
} satisfies ComponentMeta;
