import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "traffo-landing-page",
  displayName: "TraffoLandingPage",
  version: "1.0.0",
  addedAt: "2026-09-17",
  description:
    "Full Traffo analytics landing: header, scroll-linked node graph, pillars, and footer.",
  sectionCategory: "page",
  purpose:
    "Assembles the Traffo children into one data landing that matches the CodePen choreography.",
  bestFor: [
    "analytics product landings",
    "scroll-linked SaaS stories",
    "source-distributed marketing samples",
  ],
  tone: ["professional", "bold"],
  industries: ["saas", "analytics"],
  contentDensity: "high",
  visualWeight: "high",
  layout: { type: "full-width", alignment: "mixed" },
  slots: [
    "header",
    "hero",
    "graph",
    "stats",
    "features",
    "testimonial",
    "cta",
    "footer",
  ],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  inspoUrl: "https://codepen.io/dermalhealth/pen/myORdJX",
  tags: ["page", "traffo", "landing", "gsap", "marketing"],
  dependencies: ["gsap", "lucide-react"],
  registryDependencies: [
    "traffo-header",
    "infographic-node",
    "infographic-node-graph",
    "traffo-feature-card",
    "traffo-features-section",
    "traffo-footer",
  ],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 3200 },
} satisfies ComponentMeta;
