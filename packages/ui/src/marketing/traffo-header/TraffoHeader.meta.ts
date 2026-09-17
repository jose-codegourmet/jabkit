import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "traffo-header",
  displayName: "TraffoHeader",
  version: "1.0.0",
  addedAt: "2026-09-17",
  description:
    "Traffo site header with brand mark, primary nav, and a compact start CTA.",
  sectionCategory: "navbar",
  purpose:
    "Pins the analytics landing chrome: product links plus the header conversion action.",
  bestFor: ["analytics landings", "SaaS marketing pages"],
  tone: ["professional", "clean"],
  industries: ["saas", "analytics"],
  contentDensity: "low",
  visualWeight: "low",
  layout: { type: "full-width", alignment: "mixed" },
  slots: ["brand", "navigationItems", "headerCta", "mobileNavigation"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  recommendedBefore: ["hero"],
  inspoUrl: "https://codepen.io/dermalhealth/pen/myORdJX",
  tags: ["navbar", "header", "traffo", "marketing"],
  dependencies: ["lucide-react"],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 180 },
} satisfies ComponentMeta;
