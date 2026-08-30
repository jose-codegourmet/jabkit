import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { Hero228 } from "./Hero228";
import { hero228Mocks } from "./Hero228.mocks";

const meta = {
  title: "Marketing/Hero228",
  component: Hero228,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Hero228>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...hero228Mocks.default },
  render: () => <Hero228 {...hero228Mocks.default} />,
};

export const Variants: Story = {
  args: { ...hero228Mocks.studio },
  render: () => <Hero228 {...hero228Mocks.studio} />,
};

export const ThemeComparison: Story = {
  args: { ...hero228Mocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <Hero228 {...hero228Mocks.default} />
      </div>
      <div className="dark bg-background">
        <Hero228 {...hero228Mocks.default} />
      </div>
    </div>
  ),
};
