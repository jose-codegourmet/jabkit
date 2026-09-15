// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { RideBookingForm } from "./RideBookingForm";
import { rideBookingFormMocks } from "./RideBookingForm.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="flex min-h-svh items-center bg-muted">
      <RideBookingForm {...rideBookingFormMocks.default} />
    </div>
    <div className="dark flex min-h-svh items-center bg-muted">
      <RideBookingForm {...rideBookingFormMocks.default} />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="flex min-h-svh w-full items-center justify-center bg-muted">
      <RideBookingForm {...rideBookingFormMocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="flex min-h-svh w-full items-center justify-center bg-muted">
      <RideBookingForm {...rideBookingFormMocks.alternate} />
    </div>
  ),
  ThemeComparison,
};
