import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "footer-19",
  displayName: "Footer19",
  version: "1.0.0",
  addedAt: "2026-09-15",
  description:
    "Dark dotted-grid footer with a square newsletter join, status badge, three uppercase link columns, and a location time strip.",
  sectionCategory: "footer",
  purpose:
    "Closes a marketing page with a weekly subscribe path, compact company navigation, and studio meta in one full-width band.",
  bestFor: [
    "product landings that need a newsletter close without a giant wordmark",
    "pages that want a square joined subscribe control",
    "studio sites that keep location and socials in the footer rail",
  ],
  avoidFor: [
    "compact legal-only footers",
    "product shells that should not collect email",
  ],
  tone: ["dark", "product", "quiet"],
  contentDensity: "medium",
  visualWeight: "medium",
  layout: {
    type: "split",
    alignment: "left",
    columns: 3,
  },
  slots: [
    "badge",
    "newsletter",
    "brand",
    "linkColumns",
    "copyright",
    "location",
    "social",
  ],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: true,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  recommendedAfter: ["cta", "contact", "faq", "content"],
  inspoUrl: "https://ui.watermelon.sh/block/footer-19",
  tags: [
    "footer",
    "marketing",
    "newsletter",
    "landing",
    "social",
    "dotted-grid",
  ],
  dependencies: ["lucide-react"],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 900 },
} satisfies ComponentMeta;
