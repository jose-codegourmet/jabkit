import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { MenuVertical } from "./MenuVertical";
import { menuVerticalMocks } from "./MenuVertical.mocks";

const meta = {
  title: "Marketing/MenuVertical",
  component: MenuVertical,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof MenuVertical>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...menuVerticalMocks.default },
  render: () => (
    <div className="min-h-[32rem] bg-background text-foreground">
      <MenuVertical {...menuVerticalMocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...menuVerticalMocks.alternate },
  render: () => (
    <div className="min-h-[32rem] bg-background text-foreground">
      <MenuVertical {...menuVerticalMocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...menuVerticalMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="min-h-[28rem] bg-background">
        <MenuVertical {...menuVerticalMocks.default} />
      </div>
      <div className="dark min-h-[28rem] bg-background">
        <MenuVertical {...menuVerticalMocks.default} />
      </div>
    </div>
  ),
};
