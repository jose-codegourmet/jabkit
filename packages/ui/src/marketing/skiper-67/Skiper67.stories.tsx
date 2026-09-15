import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { Skiper67 } from "./Skiper67";
import { skiper67Mocks } from "./Skiper67.mocks";

const meta = {
  title: "Marketing/Skiper67",
  component: Skiper67,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Skiper67>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...skiper67Mocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <Skiper67 {...skiper67Mocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...skiper67Mocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <Skiper67 {...skiper67Mocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...skiper67Mocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <Skiper67 {...skiper67Mocks.default} />
      </div>
      <div className="dark bg-background">
        <Skiper67 {...skiper67Mocks.default} />
      </div>
    </div>
  ),
};
