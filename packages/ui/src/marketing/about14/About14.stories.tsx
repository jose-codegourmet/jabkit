import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { About14 } from "./About14";
import { about14Mocks } from "./About14.mocks";

const meta = {
  title: "Marketing/About14",
  component: About14,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof About14>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...about14Mocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <About14 {...about14Mocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...about14Mocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <About14 {...about14Mocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...about14Mocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <About14 {...about14Mocks.default} />
      </div>
      <div className="dark bg-background">
        <About14 {...about14Mocks.default} />
      </div>
    </div>
  ),
};
