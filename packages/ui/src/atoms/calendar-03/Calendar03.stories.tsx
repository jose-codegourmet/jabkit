import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { Calendar03 } from "./Calendar03";
import { calendar03Mocks } from "./Calendar03.mocks";

const meta = {
  title: "Atoms/Calendar03",
  component: Calendar03,
  parameters: { layout: "centered" },
} satisfies Meta<typeof Calendar03>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...calendar03Mocks.default },
  render: () => (
    <div className="bg-background p-6 text-foreground">
      <Calendar03 {...calendar03Mocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...calendar03Mocks.alternate },
  render: () => (
    <div className="bg-background p-6 text-foreground">
      <Calendar03 {...calendar03Mocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...calendar03Mocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border sm:grid-cols-2">
      <div className="bg-background p-6">
        <Calendar03 {...calendar03Mocks.default} />
      </div>
      <div className="dark bg-background p-6">
        <Calendar03 {...calendar03Mocks.default} />
      </div>
    </div>
  ),
};
