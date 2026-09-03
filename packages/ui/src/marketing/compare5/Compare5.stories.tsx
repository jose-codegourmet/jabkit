import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { Compare5 } from "./Compare5";
import { compare5Mocks } from "./Compare5.mocks";

const meta = {
  title: "Marketing/Compare5",
  component: Compare5,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Compare5>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...compare5Mocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <Compare5 {...compare5Mocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...compare5Mocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <Compare5 {...compare5Mocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...compare5Mocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <Compare5 {...compare5Mocks.default} />
      </div>
      <div className="dark bg-background">
        <Compare5 {...compare5Mocks.default} />
      </div>
    </div>
  ),
};
