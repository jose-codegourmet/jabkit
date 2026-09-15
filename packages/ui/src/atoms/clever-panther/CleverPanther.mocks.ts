export const cleverPantherMocks = {
  default: {
    eyebrow: "Night brief",
    title: "Clever panther",
    description:
      "A compact note card with a token-tinted sheen that stays readable in light and dark.",
  },
  action: {
    eyebrow: "Field note",
    title: "Quiet tracking",
    description: "A short blurb for a catalogue tile that still wants a next step.",
    actionLabel: "Open note",
    size: "lg" as const,
  },
  muted: {
    eyebrow: "Archive",
    title: "Muted coat",
    description: "The quieter tone for lists that already have a loud neighbor.",
    tone: "muted" as const,
    size: "sm" as const,
  },
} as const;
