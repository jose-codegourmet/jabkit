export const shyRattlesnakeMocks = {
  default: {
    brand: "JabKit",
    badge: "Dev Pass",
    title: "North Loop 26",
    subtitle: "Global developer conference",
    details: [
      { label: "Name", value: "Mira Chen" },
      { label: "Date", value: "Oct 24, 2026" },
      { label: "Venue", value: "Harbor Pier Hall" },
      { label: "Gate", value: "Dock 7" },
    ],
    barcode: "JK-77-9X04-DEV",
    seatLabel: "Seat",
    seat: "42",
  },
  compact: {
    brand: "JabKit",
    badge: "Guest",
    title: "After Hours",
    subtitle: "Studio open night",
    details: [
      { label: "Name", value: "Theo Alvarez" },
      { label: "Date", value: "Nov 8, 2026" },
      { label: "Venue", value: "West Annex" },
      { label: "Gate", value: "Side A" },
    ],
    barcode: "JK-11-GUEST-08",
    seatLabel: "Row",
    seat: "C3",
    animate: false,
  },
} as const;
