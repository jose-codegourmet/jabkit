import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "order-confirmation-card",
  displayName: "OrderConfirmationCard",
  version: "1.1.0",
  addedAt: "2026-09-15",
  description:
    "Centered post-checkout card with a success mark, order id, payment, time, total, and a pill account action.",
  sectionCategory: "content",
  purpose:
    "Gives an ecommerce landing a trusted order-complete moment shoppers can read and act on without opening a dashboard.",
  bestFor: [
    "ecommerce thank-you pages",
    "checkout success overlays",
    "campaign landings that preview a paid order",
  ],
  avoidFor: [
    "live checkout that still needs a payment form",
    "account order history with many past carts",
    "packed receipts that need line items and ship-to",
  ],
  tone: ["professional", "commercial", "calm"],
  industries: ["ecommerce", "retail", "fashion"],
  contentDensity: "low",
  visualWeight: "medium",
  layout: {
    type: "card",
    alignment: "center",
    columns: 1,
  },
  slots: [
    "headline",
    "successIcon",
    "orderId",
    "paymentMethod",
    "dateTime",
    "total",
    "primaryCTA",
  ],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  recommendedAfter: ["hero", "product", "pricing"],
  recommendedBefore: ["faq", "testimonials", "footer"],
  tags: [
    "order",
    "confirmation",
    "receipt",
    "checkout",
    "ecommerce",
    "success",
    "marketing",
  ],
  dependencies: ["lucide-react"],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 900 },
} satisfies ComponentMeta;
