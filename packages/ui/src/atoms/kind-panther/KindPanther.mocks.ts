export const kindPantherMocks = {
  default: { label: "Kind tessellation" },
  dense: { label: "Tight weave", density: "dense" as const },
  compact: { label: "Field tile", size: "sm" as const },
} as const;
