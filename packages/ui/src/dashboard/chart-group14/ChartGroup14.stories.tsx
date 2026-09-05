import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { ChartGroup14 } from "./ChartGroup14";
import { chartGroup14Mocks } from "./ChartGroup14.mocks";

const meta = {
  title: "Dashboard/ChartGroup14",
  component: ChartGroup14,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof ChartGroup14>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...chartGroup14Mocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <ChartGroup14 {...chartGroup14Mocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...chartGroup14Mocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <ChartGroup14 {...chartGroup14Mocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...chartGroup14Mocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <ChartGroup14 {...chartGroup14Mocks.default} />
      </div>
      <div className="dark bg-background">
        <ChartGroup14 {...chartGroup14Mocks.default} />
      </div>
    </div>
  ),
};
