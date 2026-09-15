export const shyRattlesnakeMocks = {
  default: {
    brand: "UIVERSE",
    badge: "Dev Pass",
    subtitle: "Global Developer Conference",
    details: [
      { label: "Name", value: "Alex Developer" },
      { label: "Date", value: "Oct 24, 2026" },
      { label: "Venue", value: "Neon Nexus Arena" },
      { label: "Gateway", value: "Sector 7G" },
    ],
    barcode: "UI-77-9X04-DEV",
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
