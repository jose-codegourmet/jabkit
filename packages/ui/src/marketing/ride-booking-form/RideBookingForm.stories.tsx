import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { RideBookingForm } from "./RideBookingForm";
import { rideBookingFormMocks } from "./RideBookingForm.mocks";

const meta = {
  title: "Marketing/RideBookingForm",
  component: RideBookingForm,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof RideBookingForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...rideBookingFormMocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <RideBookingForm {...rideBookingFormMocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...rideBookingFormMocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <RideBookingForm {...rideBookingFormMocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...rideBookingFormMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <RideBookingForm {...rideBookingFormMocks.default} />
      </div>
      <div className="dark bg-background">
        <RideBookingForm {...rideBookingFormMocks.default} />
      </div>
    </div>
  ),
};
