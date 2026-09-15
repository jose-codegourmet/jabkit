export const kindPantherMocks = {
  default: { label: "Honeycomb field" },
  primary: { label: "Primary comb", tone: "primary" as const },
  muted: { label: "Muted comb", tone: "muted" as const, size: "sm" as const },
  large: { label: "Large comb", size: "lg" as const, tone: "honey" as const },
} as const;
