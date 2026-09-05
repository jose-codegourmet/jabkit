import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { Pricing28 } from "./Pricing28";
import { pricing28Mocks } from "./Pricing28.mocks";

const meta = {
  title: "Marketing/Pricing28",
  component: Pricing28,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Pricing28>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...pricing28Mocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <Pricing28 {...pricing28Mocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...pricing28Mocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <Pricing28 {...pricing28Mocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...pricing28Mocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <Pricing28 {...pricing28Mocks.default} />
      </div>
      <div className="dark bg-background">
        <Pricing28 {...pricing28Mocks.default} />
      </div>
    </div>
  ),
};
