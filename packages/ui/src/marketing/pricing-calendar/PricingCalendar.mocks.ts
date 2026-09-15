import type { PricingCalendarProps } from "./PricingCalendar.types";

function dayKey(date: Date) {
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${date.getFullYear()}-${month}-${day}`;
}

function addDays(date: Date, amount: number) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + amount);
}

function generateMockPriceData(start: Date, days = 180, seed = 17) {
  const data: Record<string, number> = {};
  let state = seed;
  for (let i = 0; i < days; i++) {
    state = (state * 1664525 + 1013904223) >>> 0;
    data[dayKey(addDays(start, i))] = 80 + (state % 121);
  }
  return data;
}

const defaultStart = new Date(2026, 8, 15);
const alternateStart = new Date(2026, 10, 1);

export const pricingCalendarMocks = {
  default: {
    locale: "en-US",
    goodPriceThreshold: 100,
    prices: generateMockPriceData(defaultStart),
    defaultMonth: defaultStart,
    numberOfMonths: 2,
    previousMonthLabel: "Go to the previous month",
    nextMonthLabel: "Go to the next month",
    attributionLabel: "Pricing calendar",
    attributionHref: "https://daypicker.dev/",
    attributionName: "React DayPicker",
  },
  alternate: {
    locale: "en-US",
    goodPriceThreshold: 100,
    prices: generateMockPriceData(alternateStart, 180, 41),
    defaultMonth: alternateStart,
    numberOfMonths: 2,
    defaultSelected: new Date(2026, 10, 12),
    previousMonthLabel: "Go to the previous month",
    nextMonthLabel: "Go to the next month",
    attributionLabel: "Pricing calendar",
    attributionHref: "https://daypicker.dev/",
    attributionName: "React DayPicker",
  },
} satisfies Record<"default" | "alternate", PricingCalendarProps>;
