export const paginationMocks = {
  default: {
    previousHref: "?page=1",
    nextHref: "?page=3",
    pages: [
      { href: "?page=1", label: "1", isActive: false },
      { href: "?page=2", label: "2", isActive: true },
      { href: "?page=3", label: "3", isActive: false },
    ],
  },
  simple: {
    pages: [
      { href: "?page=1", label: "1", isActive: true },
      { href: "?page=2", label: "2", isActive: false },
      { href: "?page=3", label: "3", isActive: false },
      { href: "?page=4", label: "4", isActive: false },
    ],
  },
  iconsOnly: {
    previousHref: "?page=1",
    nextHref: "?page=3",
  },
} as const;
