import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "tracker-card",
  displayName: "TrackerCard",
  version: "1.1.0",
  addedAt: "2026-09-15",
  description:
    "Compact parcel card with a pill tracking control, conveyor package stage, destination flag, status headline, and a rounded scan mark.",
  sectionCategory: "content",
  purpose:
    "Puts a single in-transit package on a marketing page so shoppers can read status and open the full track without a dashboard.",
  bestFor: [
    "post-checkout tracking pages",
    "same-day delivery landings",
    "campaign pages that preview one live parcel",
  ],
  avoidFor: [
    "carrier operations dashboards with hundreds of shipments",
    "checkout that still needs a payment form",
  ],
  tone: ["professional", "commercial", "calm"],
  industries: ["ecommerce", "retail", "logistics"],
  contentDensity: "medium",
  visualWeight: "medium",
  layout: {
    type: "card",
    alignment: "center",
    columns: 1,
  },
  slots: [
    "trackControl",
    "packageImage",
    "destination",
    "status",
    "packageNumber",
    "scanMark",
  ],
  capabilities: {
    supportsImage: true,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  recommendedAfter: ["hero", "product", "pricing"],
  recommendedBefore: ["faq", "testimonials", "footer"],
  inspoUrl: "https://21st.dev/@ravikatiyar162/components/tracker-card",
  tags: [
    "tracker",
    "shipping",
    "parcel",
    "package",
    "qr",
    "logistics",
    "ecommerce",
    "marketing",
  ],
  dependencies: ["lucide-react"],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 900 },
} satisfies ComponentMeta;
