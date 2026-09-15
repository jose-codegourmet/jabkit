import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { Hero1 } from "./Hero1";
import { hero1Mocks } from "./Hero1.mocks";

const meta = {
  title: "Marketing/Hero1",
  component: Hero1,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Hero1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...hero1Mocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <Hero1 {...hero1Mocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...hero1Mocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <Hero1 {...hero1Mocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...hero1Mocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <Hero1 {...hero1Mocks.default} />
      </div>
      <div className="dark bg-background">
        <Hero1 {...hero1Mocks.default} />
      </div>
    </div>
  ),
};
