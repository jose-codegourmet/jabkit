import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "traffo-footer",
  displayName: "TraffoFooter",
  version: "1.0.0",
  addedAt: "2026-09-17",
  description:
    "Traffo footer with brand blurb, Product/Company/Legal columns, and a quiet bottom bar.",
  sectionCategory: "footer",
  purpose:
    "Closes the Traffo landing with directory links and legal/product paths.",
  bestFor: ["SaaS landings", "analytics marketing pages"],
  tone: ["professional", "clean"],
  industries: ["saas", "analytics"],
  contentDensity: "medium",
  visualWeight: "low",
  layout: { type: "grid", alignment: "left", columns: 4 },
  slots: ["brand", "blurb", "columns", "copyright", "credit"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  recommendedAfter: ["cta"],
  inspoUrl: "https://codepen.io/dermalhealth/pen/myORdJX",
  tags: ["footer", "traffo", "marketing"],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 520 },
} satisfies ComponentMeta;
