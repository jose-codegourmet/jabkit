import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { Content4 } from "./Content4";
import { content4Mocks } from "./Content4.mocks";

const meta = {
  title: "Marketing/Content4",
  component: Content4,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Content4>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...content4Mocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <Content4 {...content4Mocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...content4Mocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <Content4 {...content4Mocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...content4Mocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <Content4 {...content4Mocks.default} />
      </div>
      <div className="dark bg-background">
        <Content4 {...content4Mocks.default} />
      </div>
    </div>
  ),
};
