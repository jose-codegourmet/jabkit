import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "qr-code-generator",
  displayName: "QrCodeGenerator",
  version: "1.1.0",
  addedAt: "2026-09-15",
  description:
    "Card that encodes a URL or short note into a live QR mark and downloads it as PNG.",
  sectionCategory: "form",
  purpose:
    "Turns a short payload into a scannable code on the page, with a full-width save action.",
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
  slots: ["title", "payload", "preview", "download"],
  capabilities: {
    supportsImage: true,
    supportsVideo: false,
    supportsForm: true,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  inspoUrl: "https://21st.dev/@user_xn1cklas/components/qr-code-generator",
  tags: ["qr", "code", "download", "link", "atom"],
  dependencies: ["lucide-react"],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: {
    layout: "center",
    width: 448,
    height: 640,
    capture: { viewport: { width: 520, height: 720 } },
  },
} satisfies ComponentMeta;
