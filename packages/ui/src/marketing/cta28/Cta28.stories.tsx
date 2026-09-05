import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { Cta28 } from "./Cta28";
import { cta28Mocks } from "./Cta28.mocks";

const meta = {
  title: "Marketing/Cta28",
  component: Cta28,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Cta28>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...cta28Mocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <Cta28 {...cta28Mocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...cta28Mocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <Cta28 {...cta28Mocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...cta28Mocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <Cta28 {...cta28Mocks.default} />
      </div>
      <div className="dark bg-background">
        <Cta28 {...cta28Mocks.default} />
      </div>
    </div>
  ),
};
