export const cardMocks = {
  default: {
    title: "Card Title",
    description: "Card Description",
    action: "Card Action",
    content: "Card Content",
    footer: "Card Footer",
  },
  size: {
    title: "Scheduled reports",
    description: "Weekly snapshots. No more manual exports.",
    items: [
      "Choose a schedule (daily, or weekly).",
      "Send to channels or specific teammates.",
      "Include charts, tables, and key metrics.",
    ],
    primary: "Set up scheduled reports",
    secondary: "See what's new",
  },
} as const;
