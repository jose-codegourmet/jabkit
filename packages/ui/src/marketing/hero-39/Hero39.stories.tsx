import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { Hero39 } from "./Hero39";
import { hero39Mocks } from "./Hero39.mocks";

const meta = {
  title: "Marketing/Hero39",
  component: Hero39,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Hero39>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...hero39Mocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <Hero39 {...hero39Mocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...hero39Mocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <Hero39 {...hero39Mocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...hero39Mocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <Hero39 {...hero39Mocks.default} />
      </div>
      <div className="dark bg-background">
        <Hero39 {...hero39Mocks.default} />
      </div>
    </div>
  ),
};
