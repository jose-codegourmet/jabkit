// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { FullscreenCalendar } from "./FullscreenCalendar";
import { fullscreenCalendarMocks } from "./FullscreenCalendar.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <FullscreenCalendar {...fullscreenCalendarMocks.default} />
    </div>
    <div className="dark bg-background">
      <FullscreenCalendar {...fullscreenCalendarMocks.default} />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="w-full">
      <FullscreenCalendar {...fullscreenCalendarMocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <FullscreenCalendar {...fullscreenCalendarMocks.alternate} />
    </div>
  ),
  ThemeComparison,
};
