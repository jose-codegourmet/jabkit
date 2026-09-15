export const strongSquidMocks = {
  default: { label: "Toggle night mode" },
  night: { defaultChecked: true, label: "Night mode on" },
  compact: { size: "sm" as const, label: "Compact night toggle" },
} as const;
