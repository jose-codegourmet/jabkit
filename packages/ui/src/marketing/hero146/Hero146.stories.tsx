import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { Hero146 } from "./Hero146";
import { hero146Mocks } from "./Hero146.mocks";

const meta = {
  title: "Marketing/Hero146",
  component: Hero146,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Hero146>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...hero146Mocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <Hero146 {...hero146Mocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...hero146Mocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <Hero146 {...hero146Mocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...hero146Mocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <Hero146 {...hero146Mocks.default} autoplay={false} />
      </div>
      <div className="dark bg-background">
        <Hero146 {...hero146Mocks.default} autoplay={false} />
      </div>
    </div>
  ),
};
