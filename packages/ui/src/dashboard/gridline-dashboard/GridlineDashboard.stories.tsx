import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { GridlineDashboard } from "./GridlineDashboard";
import { gridlineDashboardMocks } from "./GridlineDashboard.mocks";

const meta = {
  title: "Dashboard/GridlineDashboard",
  component: GridlineDashboard,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof GridlineDashboard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...gridlineDashboardMocks.default },
  render: () => (
    <div className="min-h-dvh bg-background">
      <GridlineDashboard {...gridlineDashboardMocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...gridlineDashboardMocks.alternate },
  render: () => (
    <div className="min-h-dvh bg-background">
      <GridlineDashboard {...gridlineDashboardMocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...gridlineDashboardMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <GridlineDashboard {...gridlineDashboardMocks.default} />
      </div>
      <div className="dark bg-background">
        <GridlineDashboard {...gridlineDashboardMocks.default} />
      </div>
    </div>
  ),
};
