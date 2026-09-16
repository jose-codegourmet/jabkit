import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "footer-18",
  displayName: "Footer18",
  version: "1.0.0",
  addedAt: "2026-09-15",
  description:
    "Full-viewport agency footer with a newsletter card, pill trial CTA, three link columns, uppercase utility links, and an oversized muted wordmark.",
  sectionCategory: "footer",
  purpose:
    "Closes a marketing page with a subscribe card, compact navigation, a pill conversion path, and a giant brand lockup.",
  bestFor: [
    "studio and fintech landings that need a subscribe close",
    "pages that want a pill trial CTA beside link columns",
    "full-height endings with a giant muted wordmark",
  ],
  avoidFor: [
    "compact legal-only footers",
    "product shells that should not collect email",
  ],
  tone: ["editorial", "agency", "quiet"],
  contentDensity: "medium",
  visualWeight: "high",
  layout: {
    type: "split",
    alignment: "left",
    columns: 4,
  },
  slots: [
    "newsletter",
    "linkColumns",
    "trial",
    "address",
    "explore",
    "bottomNav",
    "social",
    "wordmark",
  ],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: true,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  recommendedAfter: ["cta", "contact", "faq", "content"],
  inspoUrl: "https://ui.watermelon.sh/block/footer-18",
  tags: [
    "footer",
    "marketing",
    "newsletter",
    "wordmark",
    "landing",
    "social",
    "pill",
  ],
  dependencies: ["lucide-react"],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 1100 },
} satisfies ComponentMeta;
