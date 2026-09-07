import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "image-cropper",
  displayName: "ImageCropper",
  version: "1.0.0",
  addedAt: "2026-09-07",
  description:
    "Upload a photo, zoom and pan to frame a crop, then preview and download the result.",
  sectionCategory: "form",
  purpose:
    "Lets people frame a profile, cover, or social image with a live preview before they commit the crop.",
  bestFor: [
    "profile photo uploads",
    "social media image framing",
    "cover and thumbnail selection",
  ],
  avoidFor: ["full photo editors", "multi-layer compositing", "video frames"],
  tone: ["clean", "professional"],
  contentDensity: "medium",
  visualWeight: "medium",
  layout: {
    type: "stack",
    alignment: "center",
  },
  slots: ["upload", "cropStage", "aspect", "zoom", "preview", "download"],
  capabilities: {
    supportsImage: true,
    supportsVideo: false,
    supportsForm: true,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  recommendedAfter: ["button"],
  tags: ["image", "crop", "upload", "zoom", "preview", "atom"],
  dependencies: ["lucide-react"],
  registryDependencies: ["button"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: {
    layout: "center",
    width: 560,
    height: 760,
    capture: { viewport: { width: 720, height: 860 } },
  },
} satisfies ComponentMeta;
