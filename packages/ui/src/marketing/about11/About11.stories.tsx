import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { About11 } from "./About11";
import { about11Mocks } from "./About11.mocks";

const meta = {
  title: "Marketing/About11",
  component: About11,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof About11>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...about11Mocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <About11 {...about11Mocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...about11Mocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <About11 {...about11Mocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...about11Mocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <About11 {...about11Mocks.default} />
      </div>
      <div className="dark bg-background">
        <About11 {...about11Mocks.default} />
      </div>
    </div>
  ),
};
