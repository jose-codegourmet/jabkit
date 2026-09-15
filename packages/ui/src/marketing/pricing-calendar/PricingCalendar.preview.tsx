// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { PricingCalendar } from "./PricingCalendar";
import { pricingCalendarMocks } from "./PricingCalendar.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <PricingCalendar {...pricingCalendarMocks.default} />
    </div>
    <div className="dark bg-background">
      <PricingCalendar {...pricingCalendarMocks.default} />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="w-full">
      <PricingCalendar {...pricingCalendarMocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <PricingCalendar {...pricingCalendarMocks.alternate} />
    </div>
  ),
  ThemeComparison,
};
