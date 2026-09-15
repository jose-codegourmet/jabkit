import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "qr-code-generator",
  displayName: "QrCodeGenerator",
  version: "1.0.0",
  addedAt: "2026-09-15",
  description:
    "Type a URL or short note and get a live QR mark you can copy or download as PNG.",
  sectionCategory: "form",
  purpose:
    "Turns a short payload into a scannable code without leaving the page or sending data to a server.",
  bestFor: [
    "share links on a landing page",
    "event check-in codes",
    "wifi or contact handoff",
  ],
  avoidFor: [
    "binary payloads over ~180 bytes",
    "styled brand marks that need a logo overlay",
    "server-signed tickets",
  ],
  tone: ["clean", "professional"],
  contentDensity: "medium",
  visualWeight: "medium",
  layout: {
    type: "stack",
    alignment: "center",
  },
  slots: ["title", "preview", "payload", "download", "copy"],
  capabilities: {
    supportsImage: true,
    supportsVideo: false,
    supportsForm: true,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  recommendedAfter: ["input", "button"],
  tags: ["qr", "code", "download", "link", "atom"],
  dependencies: ["lucide-react"],
  registryDependencies: ["button", "input", "label"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: {
    layout: "center",
    width: 420,
    height: 560,
    capture: { viewport: { width: 520, height: 640 } },
  },
} satisfies ComponentMeta;
