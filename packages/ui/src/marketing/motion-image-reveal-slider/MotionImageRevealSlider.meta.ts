import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "motion-image-reveal-slider",
  displayName: "MotionImageRevealSlider",
  version: "1.0.0",
  addedAt: "2026-09-07",
  description:
    "Marketing still with a draggable rail that reveals a color photograph from a grayscale overlay, or compares two images.",
  sectionCategory: "comparison",
  purpose:
    "Lets a landing page show a before-and-after or color-versus-mono photograph as a single interactive frame instead of two static tiles.",
  bestFor: [
    "before-and-after photography",
    "color grading or retouching stories",
    "renovation and product transformation beats",
  ],
  avoidFor: [
    "dense application consoles",
    "galleries that need independent captions per still",
  ],
  tone: ["editorial", "visual", "kinetic"],
  industries: ["media", "design", "architecture"],
  contentDensity: "low",
  visualWeight: "high",
  layout: {
    type: "stack",
    alignment: "center",
  },
  slots: ["headline", "revealImage", "overlayImage", "sliderHandle"],
  capabilities: {
    supportsImage: true,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  recommendedAfter: ["hero", "content"],
  recommendedBefore: ["gallery", "cta"],
  tags: [
    "slider",
    "reveal",
    "comparison",
    "image",
    "grayscale",
    "marketing",
    "interactive",
    "before-after",
    "landing",
  ],
  dependencies: ["lucide-react"],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 900 },
} satisfies ComponentMeta;
