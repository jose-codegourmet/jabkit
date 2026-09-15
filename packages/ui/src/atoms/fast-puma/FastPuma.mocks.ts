export const fastPumaMocks = {
  default: {},
  compact: { size: "sm" as const },
  spacious: { size: "lg" as const },
  inverted: {
    defaultPlusPressed: true,
    defaultMinusPressed: false,
  },
} as const;
