import type { PricingCalendarProps } from "./PricingCalendar.types";

function dayKey(date: Date) {
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${date.getFullYear()}-${month}-${day}`;
}

function buildNightlyRates(start: Date, monthCount: number) {
  const prices: Record<string, number> = {};
  const first = new Date(start.getFullYear(), start.getMonth(), 1);
  const last = new Date(first.getFullYear(), first.getMonth() + monthCount, 0);

  for (
    let cursor = new Date(first);
    cursor <= last;
    cursor.setDate(cursor.getDate() + 1)
  ) {
    const weekend = cursor.getDay() === 0 || cursor.getDay() === 6;
    const wave = (cursor.getDate() * 5 + cursor.getMonth() * 3) % 6;
    const base = weekend ? 184 : 128;
    prices[dayKey(cursor)] = base + wave * 7;
  }

  return prices;
}

const lodgeMonth = new Date(2026, 9, 1);
const lodgePrices = buildNightlyRates(lodgeMonth, 2);

const cabinMonth = new Date(2026, 11, 1);
const cabinPrices = buildNightlyRates(cabinMonth, 2);

export const pricingCalendarMocks = {
  default: {
    title: "See the night before you book",
    description:
      "Two months of lodge rates. Lower nights are marked so a quiet midweek stay is easy to spot.",
    currency: "USD",
    locale: "en-US",
    goodPriceThreshold: 149,
    prices: lodgePrices,
    unavailableDates: ["2026-10-14", "2026-10-15", "2026-11-06"],
    defaultMonth: lodgeMonth,
    numberOfMonths: 2,
    defaultSelected: new Date(2026, 9, 8),
    previousMonthLabel: "Previous month",
    nextMonthLabel: "Next month",
    selectedLabel: "Selected night",
    emptySelectionLabel: "Choose a night to see the rate.",
    unavailableLabel: "Taken",
    goodPriceLabel: "Lower rate",
    standardPriceLabel: "Standard rate",
    submitLabel: "Reserve this night",
  },
  alternate: {
    title: "Cabin nights through the holidays",
    description:
      "December and January on the ridge. Weekends run higher. Midweek nights stay closer to the floor.",
    currency: "USD",
    locale: "en-US",
    goodPriceThreshold: 149,
    prices: cabinPrices,
    unavailableDates: ["2026-12-24", "2026-12-25", "2027-01-01"],
    defaultMonth: cabinMonth,
    numberOfMonths: 2,
    defaultSelected: new Date(2026, 11, 9),
    previousMonthLabel: "Previous month",
    nextMonthLabel: "Next month",
    selectedLabel: "Selected night",
    emptySelectionLabel: "Choose a night to see the rate.",
    unavailableLabel: "Taken",
    goodPriceLabel: "Lower rate",
    standardPriceLabel: "Standard rate",
    submitLabel: "Hold this cabin",
  },
} satisfies Record<"default" | "alternate", PricingCalendarProps>;
