export const cleverPantherMocks = {
  default: {
    title: "Monthly Balance",
    subtitle: "Updated just now",
    revenue: "$51,274",
    revenueChange: "+8.5%",
    costs: "$12,818",
    costsChange: "+2.1%",
    actionLabel: "View Full Report",
  },
  raised: {
    title: "Monthly Balance",
    tone: "raised" as const,
  },
  compact: {
    title: "Monthly Balance",
    tone: "field" as const,
    size: "sm" as const,
  },
  caption: {
    title: "Monthly Balance",
    size: "lg" as const,
    children: "Live",
  },
} as const;
