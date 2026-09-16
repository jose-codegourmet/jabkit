export const curvyEarwigMocks = {
  default: {
    label: "Search",
    placeholder: "Search...",
  },
  expanded: {
    label: "Search",
    placeholder: "Search...",
    defaultValue: "atlas",
    expanded: true,
  },
  compact: {
    label: "Search",
    placeholder: "Search...",
    size: "sm" as const,
    expanded: true,
  },
} as const;
