import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { Content2 } from "./Content2";
import { content2Mocks } from "./Content2.mocks";

const meta = {
  title: "Marketing/Content2",
  component: Content2,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Content2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...content2Mocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <Content2 {...content2Mocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...content2Mocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <Content2 {...content2Mocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...content2Mocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <Content2 {...content2Mocks.default} />
      </div>
      <div className="dark bg-background">
        <Content2 {...content2Mocks.default} />
      </div>
    </div>
  ),
};
