import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { Team14 } from "./Team14";
import { team14Mocks } from "./Team14.mocks";

const meta = {
  title: "Marketing/Team14",
  component: Team14,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Team14>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...team14Mocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <Team14 {...team14Mocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...team14Mocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <Team14 {...team14Mocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...team14Mocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <Team14 {...team14Mocks.default} />
      </div>
      <div className="dark bg-background">
        <Team14 {...team14Mocks.default} />
      </div>
    </div>
  ),
};
