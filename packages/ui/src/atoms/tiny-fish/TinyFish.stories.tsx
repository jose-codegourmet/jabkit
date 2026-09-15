import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { TinyFish } from "./TinyFish";
import { tinyFishMocks } from "./TinyFish.mocks";

const meta = {
  title: "Atoms/TinyFish",
  component: TinyFish,
  parameters: { layout: "centered" },
} satisfies Meta<typeof TinyFish>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...tinyFishMocks.default },
  render: () => (
    <TinyFish {...tinyFishMocks.default} />
  ),
};

export const Sizes: Story = {
  args: { ...tinyFishMocks.alternate },
  render: () => (
    <div className="flex flex-col items-start gap-6 bg-background p-8 text-foreground">
      <TinyFish {...tinyFishMocks.compact} />
      <TinyFish {...tinyFishMocks.default} />
      <TinyFish {...tinyFishMocks.alternate} size="lg" />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...tinyFishMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border sm:grid-cols-2">
      <div className="bg-background p-8">
        <TinyFish {...tinyFishMocks.alternate} />
      </div>
      <div className="dark bg-background p-8">
        <TinyFish {...tinyFishMocks.alternate} />
      </div>
    </div>
  ),
};
