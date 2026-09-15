import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { OddFish } from "./OddFish";
import { oddFishMocks } from "./OddFish.mocks";

const meta = {
  title: "Atoms/OddFish",
  component: OddFish,
  parameters: { layout: "centered" },
} satisfies Meta<typeof OddFish>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...oddFishMocks.default },
  render: () => (
    <OddFish {...oddFishMocks.default} />
  ),
};

export const Accent: Story = {
  args: { ...oddFishMocks.accent },
  render: () => (
    <OddFish {...oddFishMocks.accent} />
  ),
};

export const ThemeComparison: Story = {
  args: { ...oddFishMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border sm:grid-cols-2">
      <div className="flex items-center justify-center bg-background p-8">
        <OddFish {...oddFishMocks.default} />
      </div>
      <div className="dark flex items-center justify-center bg-background p-8">
        <OddFish {...oddFishMocks.accent} />
      </div>
    </div>
  ),
};
