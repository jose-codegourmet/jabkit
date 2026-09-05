import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { Content3 } from "./Content3";
import { content3Mocks } from "./Content3.mocks";

const meta = {
  title: "Marketing/Content3",
  component: Content3,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Content3>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...content3Mocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <Content3 {...content3Mocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...content3Mocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <Content3 {...content3Mocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...content3Mocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <Content3 {...content3Mocks.default} />
      </div>
      <div className="dark bg-background">
        <Content3 {...content3Mocks.default} />
      </div>
    </div>
  ),
};
