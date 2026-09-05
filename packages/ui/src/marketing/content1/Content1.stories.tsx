import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { Content1 } from "./Content1";
import { content1Mocks } from "./Content1.mocks";

const meta = {
  title: "Marketing/Content1",
  component: Content1,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Content1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...content1Mocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <Content1 {...content1Mocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...content1Mocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <Content1 {...content1Mocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...content1Mocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <Content1 {...content1Mocks.default} />
      </div>
      <div className="dark bg-background">
        <Content1 {...content1Mocks.default} />
      </div>
    </div>
  ),
};
