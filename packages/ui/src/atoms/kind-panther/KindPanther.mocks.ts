export const kindPantherMocks = {
  default: { label: "Wave field" },
  primary: { label: "Primary wave", tone: "primary" as const },
  muted: { label: "Muted wave", tone: "muted" as const, size: "sm" as const },
  large: { label: "Large wave", size: "lg" as const, tone: "retro" as const },
  caption: {
    label: "Captioned wave",
    children: "Waitlist opens Monday",
  },
} as const;
