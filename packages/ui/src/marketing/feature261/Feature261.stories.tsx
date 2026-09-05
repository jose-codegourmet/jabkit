import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { Feature261 } from "./Feature261";
import { feature261Mocks } from "./Feature261.mocks";

const meta = {
  title: "Marketing/Feature261",
  component: Feature261,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Feature261>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...feature261Mocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <Feature261 {...feature261Mocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...feature261Mocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <Feature261 {...feature261Mocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...feature261Mocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <Feature261 {...feature261Mocks.default} />
      </div>
      <div className="dark bg-background">
        <Feature261 {...feature261Mocks.default} />
      </div>
    </div>
  ),
};
