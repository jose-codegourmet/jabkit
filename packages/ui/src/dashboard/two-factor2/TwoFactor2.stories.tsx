import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { TwoFactor2 } from "./TwoFactor2";
import { twoFactor2Mocks } from "./TwoFactor2.mocks";

const meta = {
  title: "Dashboard/TwoFactor2",
  component: TwoFactor2,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof TwoFactor2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...twoFactor2Mocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <TwoFactor2 {...twoFactor2Mocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...twoFactor2Mocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <TwoFactor2 {...twoFactor2Mocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...twoFactor2Mocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <TwoFactor2 {...twoFactor2Mocks.default} />
      </div>
      <div className="dark bg-background">
        <TwoFactor2 {...twoFactor2Mocks.default} />
      </div>
    </div>
  ),
};
