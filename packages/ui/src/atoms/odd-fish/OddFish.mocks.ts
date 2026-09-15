export const oddFishMocks = {
  default: {
    handle: "@ivo.maren",
    name: "Ivo Maren",
    bio: "Field notes from a small studio. Three counts, one follow, no rounded corners.",
    initials: "IM",
    badge: "Live",
    action: "Follow",
    stats: [
      { value: "128", label: "Posts" },
      { value: "47", label: "Notes" },
      { value: "9", label: "Sets" },
    ],
  },
  accent: {
    handle: "@warm.eddy",
    name: "Warm Eddy",
    bio: "Same plate, primary header, still on the token set in both themes.",
    initials: "WE",
    badge: "New",
    action: "Message",
    tone: "accent" as const,
    stats: [
      { value: "64", label: "Takes" },
      { value: "21", label: "Cuts" },
      { value: "3", label: "Reels" },
    ],
  },
  compact: {
    handle: "@brief",
    name: "Small Eddy",
    bio: "Compact size when the row is already tight.",
    initials: "SE",
    badge: "Idle",
    action: "Open",
    size: "sm" as const,
    tone: "muted" as const,
    stats: [
      { value: "12", label: "Pins" },
      { value: "8", label: "Lists" },
      { value: "2", label: "Drafts" },
    ],
  },
} as const;
