// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { CalendarWithLocalisation } from "./CalendarWithLocalisation";
import { calendarWithLocalisationMocks } from "./CalendarWithLocalisation.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border sm:grid-cols-2">
    <div className="bg-background p-6">
      <CalendarWithLocalisation {...calendarWithLocalisationMocks.default} />
    </div>
    <div className="dark bg-background p-6">
      <CalendarWithLocalisation {...calendarWithLocalisationMocks.default} />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="w-full max-w-[44rem]">
      <CalendarWithLocalisation {...calendarWithLocalisationMocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full max-w-[44rem]">
      <CalendarWithLocalisation {...calendarWithLocalisationMocks.english} />
    </div>
  ),
  ThemeComparison,
};
