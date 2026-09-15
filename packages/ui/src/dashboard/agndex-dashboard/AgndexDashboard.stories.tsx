import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { AgndexDashboard } from "./AgndexDashboard";
import { agndexDashboardMocks } from "./AgndexDashboard.mocks";

const meta = {
  title: "Dashboard/AgndexDashboard",
  component: AgndexDashboard,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof AgndexDashboard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...agndexDashboardMocks.default },
  render: () => (
    <div className="min-h-dvh bg-background">
      <AgndexDashboard {...agndexDashboardMocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...agndexDashboardMocks.alternate },
  render: () => (
    <div className="min-h-dvh bg-background">
      <AgndexDashboard {...agndexDashboardMocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...agndexDashboardMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <AgndexDashboard {...agndexDashboardMocks.default} />
      </div>
      <div className="dark bg-background">
        <AgndexDashboard {...agndexDashboardMocks.default} />
      </div>
    </div>
  ),
};
