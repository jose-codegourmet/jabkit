import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { FullscreenCalendar } from "./FullscreenCalendar";
import { fullscreenCalendarMocks } from "./FullscreenCalendar.mocks";

const meta = {
  title: "Dashboard/FullscreenCalendar",
  component: FullscreenCalendar,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof FullscreenCalendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...fullscreenCalendarMocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <FullscreenCalendar {...fullscreenCalendarMocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...fullscreenCalendarMocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <FullscreenCalendar {...fullscreenCalendarMocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...fullscreenCalendarMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <FullscreenCalendar {...fullscreenCalendarMocks.default} />
      </div>
      <div className="dark bg-background">
        <FullscreenCalendar {...fullscreenCalendarMocks.default} />
      </div>
    </div>
  ),
};
