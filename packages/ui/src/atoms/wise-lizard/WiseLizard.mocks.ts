export const wiseLizardMocks = {
  default: {
    badge: "USERNAME",
    placeholder: "Enter username",
    "aria-label": "Username",
  },
  filled: {
    badge: "Handle",
    defaultValue: "nora.vale",
    "aria-label": "Handle",
  },
  compact: {
    badge: "Alias",
    placeholder: "Alias",
    size: "sm" as const,
    "aria-label": "Alias",
  },
} as const;
