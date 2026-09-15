import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "footer-13",
  displayName: "Footer13",
  version: "1.0.0",
  addedAt: "2026-09-15",
  description:
    "Cinematic landscape footer with a fading wide hero, four link columns, a sharp newsletter capture, socials, and legal links.",
  sectionCategory: "footer",
  purpose:
    "Closes a marketing page with a photographic dusk band, grouped navigation, and a square subscribe path.",
  bestFor: [
    "studio and product landings that want a landscape close",
    "pages that need a newsletter plus multi-column links",
    "dark full-width endings with a photographic hero",
  ],
  avoidFor: [
    "minimal wordmark-only endings",
    "product shells that should not collect email",
  ],
  tone: ["editorial", "cinematic", "dark"],
  contentDensity: "medium",
  visualWeight: "high",
  layout: {
    type: "split",
    alignment: "left",
    columns: 5,
  },
  slots: [
    "hero",
    "brand",
    "linkColumns",
    "newsletter",
    "copyright",
    "social",
    "legal",
  ],
  capabilities: {
    supportsImage: true,
    supportsVideo: false,
    supportsForm: true,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  recommendedAfter: ["cta", "contact", "faq", "content"],
  tags: [
    "footer",
    "marketing",
    "newsletter",
    "landscape",
    "landing",
    "dark",
    "social",
  ],
  dependencies: ["lucide-react"],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 1040 },
} satisfies ComponentMeta;
