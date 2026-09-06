import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "cursor-grid",
  displayName: "CursorGrid",
  version: "1.0.0",
  addedAt: "2026-09-06",
  description:
    "Marketing canvas lattice that lights cells around the cursor with configurable falloff and click pulses, honoring prefers-reduced-motion.",
  sectionCategory: "background",
  purpose:
    "Adds responsive ambient motion behind sparse hero or campaign content without supplying page structure itself.",
  bestFor: ["experimental heroes", "creative portfolios", "campaign backdrops"],
  avoidFor: [
    "content-heavy pages",
    "interfaces where pointer effects would distract from tasks",
  ],
  tone: ["experimental", "technical", "energetic"],
  contentDensity: "low",
  visualWeight: "high",
  layout: {
    type: "full-width",
    alignment: "center",
  },
  slots: ["backgroundSurface"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  tags: [
    "marketing",
    "animation",
    "canvas",
    "cursor",
    "grid",
    "hero",
    "interactive",
  ],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: false, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 720 },
} satisfies ComponentMeta;
