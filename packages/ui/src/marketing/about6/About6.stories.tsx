import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { About6 } from "./About6";
import { about6Mocks } from "./About6.mocks";

const meta = {
  title: "Marketing/About6",
  component: About6,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof About6>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...about6Mocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <About6 {...about6Mocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...about6Mocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <About6 {...about6Mocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...about6Mocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <About6 {...about6Mocks.default} />
      </div>
      <div className="dark bg-background">
        <About6 {...about6Mocks.default} />
      </div>
    </div>
  ),
};
