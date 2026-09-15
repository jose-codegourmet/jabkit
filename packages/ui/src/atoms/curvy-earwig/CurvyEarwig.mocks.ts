export const curvyEarwigMocks = {
  default: {
    label: "Search",
    placeholder: "search",
  },
  expanded: {
    label: "Search",
    placeholder: "search",
    defaultValue: "atlas",
    expanded: true,
  },
  compact: {
    label: "Search",
    placeholder: "search",
    size: "sm" as const,
    expanded: true,
  },
} as const;
