import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { Hero32 } from "./Hero32";
import { hero32Mocks } from "./Hero32.mocks";

const meta = {
  title: "Marketing/Hero32",
  component: Hero32,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Hero32>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...hero32Mocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <Hero32 {...hero32Mocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...hero32Mocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <Hero32 {...hero32Mocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...hero32Mocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <Hero32 {...hero32Mocks.default} />
      </div>
      <div className="dark bg-background">
        <Hero32 {...hero32Mocks.default} />
      </div>
    </div>
  ),
};
