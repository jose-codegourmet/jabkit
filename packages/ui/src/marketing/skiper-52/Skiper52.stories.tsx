import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { Skiper52 } from "./Skiper52";
import { skiper52Mocks } from "./Skiper52.mocks";

const meta = {
  title: "Marketing/Skiper52",
  component: Skiper52,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Skiper52>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...skiper52Mocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <Skiper52 {...skiper52Mocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...skiper52Mocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <Skiper52 {...skiper52Mocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...skiper52Mocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <Skiper52 {...skiper52Mocks.default} />
      </div>
      <div className="dark bg-background">
        <Skiper52 {...skiper52Mocks.default} />
      </div>
    </div>
  ),
};
