import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { DemostackDashboard } from "./DemostackDashboard";
import { demostackDashboardMocks } from "./DemostackDashboard.mocks";

const meta = {
  title: "Dashboard/DemostackDashboard",
  component: DemostackDashboard,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof DemostackDashboard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...demostackDashboardMocks.default },
  render: () => (
    <div className="min-h-dvh bg-background">
      <DemostackDashboard {...demostackDashboardMocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...demostackDashboardMocks.alternate },
  render: () => (
    <div className="min-h-dvh bg-background">
      <DemostackDashboard {...demostackDashboardMocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...demostackDashboardMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <DemostackDashboard {...demostackDashboardMocks.default} />
      </div>
      <div className="dark bg-background">
        <DemostackDashboard {...demostackDashboardMocks.default} />
      </div>
    </div>
  ),
};
