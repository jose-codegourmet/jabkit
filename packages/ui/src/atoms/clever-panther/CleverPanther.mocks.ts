export const cleverPantherMocks = {
  default: {
    label: "Neumorphic slab",
  },
  raised: {
    label: "Raised slab",
    tone: "raised" as const,
  },
  compact: {
    label: "Compact slab",
    tone: "field" as const,
    size: "sm" as const,
  },
  caption: {
    label: "Captioned slab",
    size: "lg" as const,
    children: "Night route",
  },
} as const;
