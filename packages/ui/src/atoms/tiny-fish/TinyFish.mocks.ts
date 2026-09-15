export const tinyFishMocks = {
  default: { defaultChecked: false, label: "Airplane mode" },
  alternate: { defaultChecked: true, label: "Keep the current on" },
  compact: { size: "sm" as const, defaultChecked: true, label: "Compact" },
} as const;
