import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { TwoFactor5 } from "./TwoFactor5";
import { twoFactor5Mocks } from "./TwoFactor5.mocks";

const meta = {
  title: "Dashboard/TwoFactor5",
  component: TwoFactor5,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof TwoFactor5>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...twoFactor5Mocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <TwoFactor5 {...twoFactor5Mocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...twoFactor5Mocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <TwoFactor5 {...twoFactor5Mocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...twoFactor5Mocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <TwoFactor5 {...twoFactor5Mocks.default} />
      </div>
      <div className="dark bg-background">
        <TwoFactor5 {...twoFactor5Mocks.default} />
      </div>
    </div>
  ),
};
