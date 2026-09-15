export const softPandaMocks = {
  default: {
    label: "Dual-tone mosaic field",
    size: "md" as const,
    tone: "default" as const,
  },
  muted: {
    label: "Muted mosaic field",
    size: "md" as const,
    tone: "muted" as const,
  },
  chart: {
    label: "Chart mosaic field",
    size: "lg" as const,
    tone: "chart" as const,
  },
  compact: {
    label: "Compact mosaic swatch",
    size: "sm" as const,
    tone: "default" as const,
    animate: false,
  },
} as const;
