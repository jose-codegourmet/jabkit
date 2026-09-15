export const lovelyYakMocks = {
  default: {
    kicker: "Trail lead",
    title: "Mira Solano",
    description: "Maps highland routes and writes the notes the group actually uses.",
  },
  withAction: {
    kicker: "Studio",
    title: "North Fold",
    description: "A small press for field guides, maps, and quiet travel writing.",
    actionLabel: "Follow",
    size: "lg" as const,
  },
  compact: {
    kicker: "Guide",
    title: "Ivo Ren",
    description: "Short briefs for weekend paths.",
    size: "sm" as const,
  },
} as const;
