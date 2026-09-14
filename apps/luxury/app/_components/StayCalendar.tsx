"use client";

import { useCallback, useSyncExternalStore } from "react";
import {
  CalendarWithLocalisation,
  type CalendarWithLocalisationRange,
} from "@/atoms/calendar-with-localisation";

function subscribeDesktop(onChange: () => void) {
  const media = window.matchMedia("(min-width: 768px)");
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}

function getDesktop() {
  return window.matchMedia("(min-width: 768px)").matches;
}

/**
 * Initial month is the first day of September 2026, matching the sample
 * authoring date. Local calendar dates, not UTC timestamps.
 */
export const INQUIRY_DEFAULT_MONTH = new Date(2026, 8, 1);

export function StayCalendar({
  selected,
  onSelect,
}: {
  selected: CalendarWithLocalisationRange | undefined;
  onSelect: (range: CalendarWithLocalisationRange | undefined) => void;
}) {
  const twoMonths = useSyncExternalStore(
    subscribeDesktop,
    getDesktop,
    () => false,
  );

  const handleSelect = useCallback(
    (range: CalendarWithLocalisationRange | undefined) => {
      onSelect(range);
    },
    [onSelect],
  );

  return (
    <CalendarWithLocalisation
      locale="en"
      defaultLocale="en"
      numberOfMonths={twoMonths ? 2 : 1}
      defaultMonth={INQUIRY_DEFAULT_MONTH}
      selected={selected}
      onSelect={handleSelect}
      // Explicit Sunday-first English agrees with the component fallback in
      // browsers without Intl.Locale.weekInfo, keeping hydration stable.
      localeOptions={[{ value: "en", label: "English", bcp47: "en-US" }]}
      copy={{
        en: {
          title: "Preferred stay dates",
          description:
            "Choose an arrival and a later departure. Dates are a preference, not availability.",
          languageLabel: "Language",
          previousMonth: "Previous month",
          nextMonth: "Next month",
        },
      }}
    />
  );
}
