export const jollyParrotMocks = {
  default: { label: "Diamond field" },
  alternate: { label: "Primary diamonds", tone: "primary" as const },
  chart: { label: "Chart diamonds", tone: "chart" as const, size: "lg" as const },
  still: { label: "Still diamond field", animated: false },
} as const;
