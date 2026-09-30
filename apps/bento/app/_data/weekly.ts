export type DayKey = "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun";

export type DayVisits = {
  day: DayKey;
  label: string;
  /** null = closed. */
  visits: number | null;
};

export type WeekId = "this-week" | "last-week";

export type WeeklyVisits = {
  id: WeekId;
  label: string;
  days: DayVisits[];
  summary: {
    total: number;
    busiest: { day: string; count: number };
    declined: number;
  };
};

const dayLabels: Record<DayKey, string> = {
  Mon: "Monday",
  Tue: "Tuesday",
  Wed: "Wednesday",
  Thu: "Thursday",
  Fri: "Friday",
  Sat: "Saturday",
  Sun: "Sunday",
};

function days(values: (number | null)[]): DayVisits[] {
  return (Object.keys(dayLabels) as DayKey[]).map((day, index) => ({
    day,
    label: dayLabels[day],
    visits: values[index] ?? null,
  }));
}

export const weeks: WeeklyVisits[] = [
  {
    id: "this-week",
    label: "This week",
    days: days([6, 9, 8, 7, 10, 5, null]),
    summary: {
      total: 45,
      busiest: { day: "Friday", count: 10 },
      declined: 1,
    },
  },
  {
    id: "last-week",
    label: "Last week",
    days: days([5, 8, 9, 6, 9, 4, null]),
    summary: {
      total: 41,
      busiest: { day: "Wednesday", count: 9 },
      declined: 0,
    },
  },
];

export const thisWeek = weeks[0];

export function getWeek(id: string): WeeklyVisits {
  return weeks.find((week) => week.id === id) ?? thisWeek;
}

/** "Mon 6, Tue 9, Wed 8, Thu 7, Fri 10, Sat 5, Sun closed." */
export function textEquivalent(week: WeeklyVisits): string {
  return `${week.days
    .map((day) => `${day.day} ${day.visits === null ? "closed" : day.visits}`)
    .join(", ")}.`;
}
