import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "fast-puma",
  displayName: "FastPuma",
  version: "1.0.0",
  addedAt: "2026-09-15",
  description:
    "A pill CTA that throws a chart-token particle burst on hover and focus.",
  sectionCategory: "action",
  purpose:
    "Gives a primary launch action extra kinetic energy without leaving semantic tokens.",
  bestFor: [
    "hero or demo launch CTAs",
    "playful product actions that still need a real button",
    "catalogue and preview entry points",
  ],
  avoidFor: [
    "destructive or irreversible actions",
    "dense toolbars where motion would distract",
  ],
  tone: ["playful", "bold"],
  contentDensity: "low",
  visualWeight: "medium",
  layout: {
    type: "stack",
    alignment: "center",
  },
  slots: ["actionLabel"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  tags: ["button", "cta", "action", "particles", "atom"],
  dependencies: ["@radix-ui/react-slot"],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: {
    layout: "center",
  },
} satisfies ComponentMeta;
