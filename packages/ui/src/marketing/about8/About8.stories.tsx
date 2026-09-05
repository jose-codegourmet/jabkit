import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { About8 } from "./About8";
import { about8Mocks } from "./About8.mocks";

const meta = {
  title: "Marketing/About8",
  component: About8,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof About8>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...about8Mocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <About8 {...about8Mocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...about8Mocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <About8 {...about8Mocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...about8Mocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <About8 {...about8Mocks.default} />
      </div>
      <div className="dark bg-background">
        <About8 {...about8Mocks.default} />
      </div>
    </div>
  ),
};
