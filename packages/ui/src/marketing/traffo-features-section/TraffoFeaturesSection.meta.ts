import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "traffo-features-section",
  displayName: "TraffoFeaturesSection",
  version: "1.0.0",
  addedAt: "2026-09-17",
  description:
    "Traffo pillars head, shipping meta, and a three-card feature grid.",
  sectionCategory: "feature",
  purpose:
    "Frames Capture, Understand, and Convert as the Traffo product story.",
  bestFor: ["SaaS feature sections", "analytics landings"],
  tone: ["professional", "bold"],
  industries: ["saas", "analytics"],
  contentDensity: "medium",
  visualWeight: "high",
  layout: { type: "grid", alignment: "left", columns: 3 },
  slots: ["eyebrow", "title", "meta", "featureCards"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  recommendedAfter: ["hero"],
  inspoUrl: "https://codepen.io/dermalhealth/pen/myORdJX",
  tags: ["features", "traffo", "pillars", "marketing"],
  dependencies: ["lucide-react"],
  registryDependencies: ["traffo-feature-card"],
  a11y: { keyboardNav: false, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 1100 },
} satisfies ComponentMeta;
