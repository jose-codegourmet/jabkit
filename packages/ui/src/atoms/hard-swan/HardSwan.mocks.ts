export const hardSwanMocks = {
  default: {
    label: "Field hatch",
    palette: "field" as const,
    scale: "regular" as const,
  },
  dusk: {
    label: "Dusk hatch",
    palette: "dusk" as const,
    scale: "coarse" as const,
    animated: true,
  },
  overlay: {
    label: "Captioned hatch",
    palette: "field" as const,
    scale: "fine" as const,
  },
} as const;
