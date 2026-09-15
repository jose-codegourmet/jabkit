export const lovelyYakMocks = {
  default: {
    title: "Performance Analytics",
    liveLabel: "Live",
    stats: [
      { label: "Total Views", value: "24.5K", delta: "+12.3%" },
      { label: "Conversions", value: "1.2K", delta: "+8.1%" },
    ],
    bars: [
      { track: 40, fill: 60 },
      { track: 60, fill: 40 },
      { track: 75, fill: 80 },
      { track: 45, fill: 50 },
      { track: 85, fill: 90 },
      { track: 65, fill: 70 },
      { track: 95, fill: 85 },
    ],
    periodLabel: "Last 7 days",
    actionLabel: "View Details",
  },
  weeklyPulse: {
    title: "Weekly pulse",
    liveLabel: null,
    stats: [
      { label: "Sessions", value: "8.4K", delta: "+4.6%" },
      { label: "Signups", value: "312", delta: "+2.1%" },
    ],
    bars: [
      { track: 35, fill: 55 },
      { track: 52, fill: 48 },
      { track: 70, fill: 72 },
      { track: 58, fill: 64 },
      { track: 88, fill: 80 },
      { track: 62, fill: 58 },
      { track: 78, fill: 76 },
    ],
    periodLabel: "This week",
    actionLabel: "Open report",
    size: "lg" as const,
  },
} as const;
