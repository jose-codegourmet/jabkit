import type { WeekId, WeeklyVisits } from "../../../_data/weekly";

export const reportsSeo = {
  title: "Reports — DAYMARK demo",
  description:
    "A sample DAYMARK weekly visits report with a labeled chart and a readable table. Fictional demo data.",
} as const;

export const reportsHeader = {
  title: "Reports",
} as const;

/** Week picker. Option labels come from weekly.ts ("This week", "Last week"). */
export const weekPicker = {
  id: "report-week",
  label: "Week",
  /** Only shown when JavaScript is off; the select navigates on change otherwise. */
  submit: "Show week",
} as const;

export const weekIds: readonly WeekId[] = ["this-week", "last-week"];

export type ReportState = "ready" | "loading" | "error";

export const reportStates: readonly ReportState[] = [
  "ready",
  "loading",
  "error",
];

export const visitsSection = {
  id: "report-visits",
  heading: "Visits per day",
  caption: "Sample data for a fictional studio.",
} as const;

export const reportStatesCopy = {
  loading: "Loading report…",
  error: "This report couldn't load. Try again.",
  retry: "Try again",
} as const;

export type SummaryItem = {
  id: string;
  label: string;
  value: string;
};

/** "Total visits: 45" · "Busiest day: Friday (10)" · "Bookings declined: 1". */
export function summaryItems(week: WeeklyVisits): SummaryItem[] {
  const { total, busiest, declined } = week.summary;
  return [
    { id: "total", label: "Total visits:", value: String(total) },
    {
      id: "busiest",
      label: "Busiest day:",
      value: `${busiest.day} (${busiest.count})`,
    },
    { id: "declined", label: "Bookings declined:", value: String(declined) },
  ];
}
