import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { CalendarWithLocalisation } from "./CalendarWithLocalisation";
import { calendarWithLocalisationMocks } from "./CalendarWithLocalisation.mocks";

const meta = {
  title: "Atoms/CalendarWithLocalisation",
  component: CalendarWithLocalisation,
  parameters: { layout: "centered" },
} satisfies Meta<typeof CalendarWithLocalisation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...calendarWithLocalisationMocks.default },
  render: () => (
    <div className="bg-background p-6 text-foreground">
      <CalendarWithLocalisation {...calendarWithLocalisationMocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...calendarWithLocalisationMocks.english },
  render: () => (
    <div className="bg-background p-6 text-foreground">
      <CalendarWithLocalisation {...calendarWithLocalisationMocks.english} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...calendarWithLocalisationMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border sm:grid-cols-2">
      <div className="bg-background p-6">
        <CalendarWithLocalisation {...calendarWithLocalisationMocks.default} />
      </div>
      <div className="dark bg-background p-6">
        <CalendarWithLocalisation {...calendarWithLocalisationMocks.default} />
      </div>
    </div>
  ),
};
