import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { Awards6 } from "./Awards6";
import { awards6Mocks } from "./Awards6.mocks";

const meta = {
  title: "Marketing/Awards6",
  component: Awards6,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Awards6>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...awards6Mocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <Awards6 {...awards6Mocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...awards6Mocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <Awards6 {...awards6Mocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...awards6Mocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <Awards6 {...awards6Mocks.default} />
      </div>
      <div className="dark bg-background">
        <Awards6 {...awards6Mocks.default} />
      </div>
    </div>
  ),
};
