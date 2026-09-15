export const curvyEarwigMocks = {
  default: {
    label: "Search",
    placeholder: "Search",
  },
  expanded: {
    label: "Search the catalogue",
    placeholder: "Type to search",
    defaultValue: "atlas",
    expanded: true,
  },
  compact: {
    label: "Compact search",
    placeholder: "Find",
    size: "sm" as const,
    expanded: true,
  },
} as const;
