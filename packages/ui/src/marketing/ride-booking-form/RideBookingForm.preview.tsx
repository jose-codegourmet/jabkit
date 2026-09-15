// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { RideBookingForm } from "./RideBookingForm";
import { rideBookingFormMocks } from "./RideBookingForm.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <RideBookingForm {...rideBookingFormMocks.default} />
    </div>
    <div className="dark bg-background">
      <RideBookingForm {...rideBookingFormMocks.default} />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="w-full">
      <RideBookingForm {...rideBookingFormMocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <RideBookingForm {...rideBookingFormMocks.alternate} />
    </div>
  ),
  ThemeComparison,
};
