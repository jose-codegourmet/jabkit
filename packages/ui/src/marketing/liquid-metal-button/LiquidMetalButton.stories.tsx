import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { LiquidMetalButton } from "./LiquidMetalButton";
import { liquidMetalButtonMocks } from "./LiquidMetalButton.mocks";

const meta = {
  title: "Marketing/LiquidMetalButton",
  component: LiquidMetalButton,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof LiquidMetalButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...liquidMetalButtonMocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <LiquidMetalButton {...liquidMetalButtonMocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...liquidMetalButtonMocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <LiquidMetalButton {...liquidMetalButtonMocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...liquidMetalButtonMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <LiquidMetalButton {...liquidMetalButtonMocks.default} />
      </div>
      <div className="dark bg-background">
        <LiquidMetalButton {...liquidMetalButtonMocks.default} />
      </div>
    </div>
  ),
};
