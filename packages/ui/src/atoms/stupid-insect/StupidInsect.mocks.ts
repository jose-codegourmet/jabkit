export const stupidInsectMocks = {
  default: {
    cellSize: "md" as const,
    tone: "primary" as const,
    animated: true,
  },
  chart: {
    cellSize: "lg" as const,
    tone: "chart" as const,
    animated: true,
    children: "Chart tone",
  },
  still: {
    cellSize: "sm" as const,
    tone: "primary" as const,
    animated: false,
    children: "Still tile",
  },
} as const;
