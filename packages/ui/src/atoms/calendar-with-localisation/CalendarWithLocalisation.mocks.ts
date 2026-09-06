import type { CalendarWithLocalisationProps } from "./CalendarWithLocalisation.types";

export const calendarWithLocalisationMocks = {
  default: {
    defaultLocale: "es",
    defaultMonth: new Date(2025, 8, 1),
    defaultSelected: {
      from: new Date(2025, 8, 9),
      to: new Date(2025, 8, 17),
    },
  },
  english: {
    defaultLocale: "en",
    defaultMonth: new Date(2025, 8, 1),
    defaultSelected: {
      from: new Date(2025, 8, 28),
      to: new Date(2025, 9, 5),
    },
  },
} satisfies Record<string, CalendarWithLocalisationProps>;
