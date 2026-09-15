import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "ticket-confirmation-card",
  displayName: "TicketConfirmationCard",
  version: "1.1.0",
  addedAt: "2026-09-15",
  description:
    "Digital receipt-style confirmation with success status, ticket ID, payment details, and barcode.",
  sectionCategory: "content",
  purpose:
    "Shows a booking or payment confirmation as a perforated ticket slip visitors can read and scan on the page.",
  bestFor: [
    "event booking confirmation",
    "travel tickets",
    "payment receipts that need a scan code",
  ],
  avoidFor: [
    "live checkout that still needs a card form",
    "multi-ticket carts that need a full order table",
    "account dashboards that list many bookings",
  ],
  tone: ["professional", "structured", "calm"],
  industries: ["events", "travel", "ecommerce"],
  contentDensity: "medium",
  visualWeight: "medium",
  layout: {
    type: "card",
    alignment: "center",
    columns: 1,
  },
  slots: [
    "successStatus",
    "ticketId",
    "amount",
    "dateTime",
    "paymentCard",
    "barcode",
  ],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  recommendedAfter: ["hero", "form", "pricing"],
  recommendedBefore: ["faq", "testimonials", "footer"],
  tags: [
    "ticket",
    "confirmation",
    "receipt",
    "barcode",
    "booking",
    "event",
    "marketing",
  ],
  dependencies: ["lucide-react"],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 900 },
} satisfies ComponentMeta;
