export const jollyChickenMocks = {
  default: { label: "Toggle night mode" },
  night: { label: "Night mode on", defaultChecked: true },
  compact: { label: "Compact night mode", size: "sm" as const },
  large: { label: "Large night mode", size: "lg" as const },
} as const;
