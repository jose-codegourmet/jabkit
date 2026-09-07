import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { RandomLetterSwap } from "./RandomLetterSwap";
import { randomLetterSwapMocks } from "./RandomLetterSwap.mocks";

const meta = {
  title: "Marketing/RandomLetterSwap",
  component: RandomLetterSwap,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof RandomLetterSwap>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...randomLetterSwapMocks.default },
  render: () => (
    <div className="min-h-80 bg-background text-foreground">
      <RandomLetterSwap {...randomLetterSwapMocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...randomLetterSwapMocks.alternate },
  render: () => (
    <div className="min-h-80 bg-background text-foreground">
      <RandomLetterSwap {...randomLetterSwapMocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...randomLetterSwapMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="min-h-56 bg-background">
        <RandomLetterSwap {...randomLetterSwapMocks.default} />
      </div>
      <div className="dark min-h-56 bg-background">
        <RandomLetterSwap {...randomLetterSwapMocks.default} />
      </div>
    </div>
  ),
};
