export const stupidInsectMocks = {
  default: {
    cellSize: "md" as const,
    tone: "sand" as const,
    animated: false,
    label: "Sand ring field",
  },
  dusk: {
    cellSize: "lg" as const,
    tone: "dusk" as const,
    animated: true,
    label: "Dusk ring field",
  },
  overlay: {
    cellSize: "sm" as const,
    tone: "sand" as const,
    animated: false,
    label: "Captioned ring field",
  },
} as const;
