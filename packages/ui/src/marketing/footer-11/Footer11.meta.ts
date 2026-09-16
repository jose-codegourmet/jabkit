import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "footer-11",
  displayName: "Footer11",
  version: "1.0.0",
  addedAt: "2026-09-15",
  description:
    "Dark closing footer with a live badge, light headline, email CTA, text nav, and a stretched wordmark over a primary glow.",
  sectionCategory: "footer",
  purpose:
    "Closes a marketing page with one contact path, sparse navigation, and a large brand lockup.",
  bestFor: [
    "product and studio landings",
    "pages that need a single email close",
    "dark full-width site endings",
  ],
  avoidFor: [
    "dense legal or multi-column service footers",
    "forms that need a subscribe field",
  ],
  tone: ["confident", "premium", "minimal"],
  contentDensity: "low",
  visualWeight: "high",
  layout: {
    type: "stack",
    alignment: "left",
  },
  slots: [
    "badge",
    "headline",
    "contact",
    "navigation",
    "brandMark",
    "wordmark",
  ],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  recommendedAfter: ["cta", "contact", "faq", "content"],
  inspoUrl: "https://ui.watermelon.sh/block/footer-11",
  tags: ["footer", "marketing", "contact", "wordmark", "landing", "dark"],
  dependencies: ["lucide-react"],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 820 },
} satisfies ComponentMeta;
