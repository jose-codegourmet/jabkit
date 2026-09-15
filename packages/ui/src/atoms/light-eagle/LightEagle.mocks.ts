export const lightEagleMocks = {
  default: {
    cellSize: "md" as const,
    tone: "frost" as const,
    animated: false,
    label: "Isometric cube field",
  },
  slate: {
    cellSize: "lg" as const,
    tone: "slate" as const,
    animated: true,
    label: "Slate cube field",
  },
  ink: {
    cellSize: "sm" as const,
    tone: "ink" as const,
    animated: false,
    label: "Ink cube field",
  },
} as const;
