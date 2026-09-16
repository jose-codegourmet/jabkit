import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { ScrollBasedVelocity } from "./ScrollBasedVelocity";
import { scrollBasedVelocityMocks } from "./ScrollBasedVelocity.mocks";

const meta = {
  title: "Marketing/ScrollBasedVelocity",
  component: ScrollBasedVelocity,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof ScrollBasedVelocity>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...scrollBasedVelocityMocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <ScrollBasedVelocity {...scrollBasedVelocityMocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...scrollBasedVelocityMocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <ScrollBasedVelocity {...scrollBasedVelocityMocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...scrollBasedVelocityMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <ScrollBasedVelocity {...scrollBasedVelocityMocks.default} />
      </div>
      <div className="dark bg-background">
        <ScrollBasedVelocity {...scrollBasedVelocityMocks.default} />
      </div>
    </div>
  ),
};
