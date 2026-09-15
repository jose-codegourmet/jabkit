import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { Hero33 } from "./Hero33";
import { hero33Mocks } from "./Hero33.mocks";

const meta = {
  title: "Marketing/Hero33",
  component: Hero33,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Hero33>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...hero33Mocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <Hero33 {...hero33Mocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...hero33Mocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <Hero33 {...hero33Mocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...hero33Mocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <Hero33 {...hero33Mocks.default} />
      </div>
      <div className="dark bg-background">
        <Hero33 {...hero33Mocks.default} />
      </div>
    </div>
  ),
};
