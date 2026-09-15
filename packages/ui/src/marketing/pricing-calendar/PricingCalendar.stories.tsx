import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { PricingCalendar } from "./PricingCalendar";
import { pricingCalendarMocks } from "./PricingCalendar.mocks";

const meta = {
  title: "Marketing/PricingCalendar",
  component: PricingCalendar,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof PricingCalendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...pricingCalendarMocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <PricingCalendar {...pricingCalendarMocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...pricingCalendarMocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <PricingCalendar {...pricingCalendarMocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...pricingCalendarMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <PricingCalendar {...pricingCalendarMocks.default} />
      </div>
      <div className="dark bg-background">
        <PricingCalendar {...pricingCalendarMocks.default} />
      </div>
    </div>
  ),
};
