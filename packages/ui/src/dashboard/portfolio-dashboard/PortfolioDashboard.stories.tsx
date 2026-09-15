import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { PortfolioDashboard } from "./PortfolioDashboard";
import { portfolioDashboardMocks } from "./PortfolioDashboard.mocks";

const meta = {
  title: "Dashboard/PortfolioDashboard",
  component: PortfolioDashboard,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof PortfolioDashboard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...portfolioDashboardMocks.default },
  render: () => (
    <div className="min-h-dvh bg-background">
      <PortfolioDashboard {...portfolioDashboardMocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...portfolioDashboardMocks.alternate },
  render: () => (
    <div className="min-h-dvh bg-background">
      <PortfolioDashboard {...portfolioDashboardMocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...portfolioDashboardMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <PortfolioDashboard {...portfolioDashboardMocks.default} />
      </div>
      <div className="dark bg-background">
        <PortfolioDashboard {...portfolioDashboardMocks.default} />
      </div>
    </div>
  ),
};
