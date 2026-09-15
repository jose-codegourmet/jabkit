export const oddFishMocks = {
  default: {
    eyebrow: "Field note",
    title: "Quiet current",
    description: "Keep one idea on a small card. Tokens carry the surface in both themes.",
    action: "Open note",
  },
  accent: {
    eyebrow: "Accent",
    title: "Warm eddy",
    description: "A tinted card for a callout that still sits on the same token set.",
    action: "Read more",
    tone: "accent" as const,
  },
  compact: {
    eyebrow: "Brief",
    title: "Small eddy",
    description: "Use the compact size when the row is already tight.",
    size: "sm" as const,
    tone: "muted" as const,
  },
} as const;
