import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { FastPuma } from "./FastPuma";
import { fastPumaMocks } from "./FastPuma.mocks";

const meta = {
  title: "Atoms/FastPuma",
  component: FastPuma,
  parameters: { layout: "centered" },
} satisfies Meta<typeof FastPuma>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...fastPumaMocks.default },
  render: () => (
    <FastPuma {...fastPumaMocks.default} />
  ),
};

export const Tones: Story = {
  args: { ...fastPumaMocks.alternate },
  render: () => (
    <div className="flex flex-wrap items-center gap-8 bg-background p-10 text-foreground">
      <FastPuma {...fastPumaMocks.compact} />
      <FastPuma {...fastPumaMocks.default} />
      <FastPuma {...fastPumaMocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...fastPumaMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border sm:grid-cols-2">
      <div className="bg-background p-10">
        <FastPuma {...fastPumaMocks.default} />
      </div>
      <div className="dark bg-background p-10">
        <FastPuma {...fastPumaMocks.default} />
      </div>
    </div>
  ),
};
