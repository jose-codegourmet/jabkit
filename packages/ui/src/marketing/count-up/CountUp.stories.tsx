import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { CountUp } from "./CountUp";
import { countUpMocks } from "./CountUp.mocks";

const meta = {
  title: "Marketing/CountUp",
  component: CountUp,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof CountUp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...countUpMocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <CountUp {...countUpMocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...countUpMocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <CountUp {...countUpMocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...countUpMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <CountUp {...countUpMocks.default} />
      </div>
      <div className="dark bg-background">
        <CountUp {...countUpMocks.default} />
      </div>
    </div>
  ),
};
