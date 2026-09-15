import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "footer-10",
  displayName: "Footer10",
  version: "1.0.0",
  addedAt: "2026-09-15",
  description:
    "Blush-plate marketing footer with a photographic banner CTA, large email, underline newsletter, and four link columns.",
  sectionCategory: "footer",
  purpose:
    "Closes a marketing page with a conversion banner, a single email path, a subscribe field, and grouped legal and product links.",
  bestFor: [
    "SaaS and platform landings",
    "pages that need a banner close plus newsletter",
    "multi-column service footers with a contact email",
  ],
  avoidFor: [
    "minimal wordmark-only endings",
    "product shells that should not collect email",
  ],
  tone: ["confident", "editorial", "warm"],
  contentDensity: "medium",
  visualWeight: "high",
  layout: {
    type: "split",
    alignment: "left",
    columns: 12,
  },
  slots: [
    "banner",
    "headline",
    "cta",
    "contact",
    "newsletter",
    "linkColumns",
    "brand",
    "copyright",
  ],
  capabilities: {
    supportsImage: true,
    supportsVideo: false,
    supportsForm: true,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  recommendedAfter: ["cta", "contact", "faq", "content"],
  tags: ["footer", "marketing", "contact", "newsletter", "landing", "banner"],
  dependencies: ["lucide-react"],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 980 },
} satisfies ComponentMeta;
