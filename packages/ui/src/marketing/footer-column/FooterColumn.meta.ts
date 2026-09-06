import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "footer-column",
  displayName: "FooterColumn",
  version: "1.0.0",
  addedAt: "2026-09-06",
  description:
    "Site footer with a brand column, about and service links, a live-help row, contact details, and a legal bar.",
  sectionCategory: "footer",
  purpose:
    "Closes a service-oriented site with organized navigation, direct contact routes, and legal information.",
  bestFor: [
    "marketing site closure",
    "secondary navigation",
    "contact and legal information",
  ],
  tone: ["professional", "trustworthy"],
  contentDensity: "medium",
  visualWeight: "medium",
  layout: {
    type: "grid",
    alignment: "left",
  },
  slots: [
    "brand",
    "linkGroups",
    "contactDetails",
    "legalLinks",
    "conversionForm",
  ],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  recommendedAfter: ["cta", "contact", "faq", "content"],
  tags: [
    "footer",
    "marketing",
    "links",
    "social",
    "contact",
    "columns",
    "landing",
  ],
  dependencies: ["lucide-react"],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 820 },
} satisfies ComponentMeta;
