import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { ComingSoon3 } from "./ComingSoon3";
import { comingSoon3Mocks } from "./ComingSoon3.mocks";

const meta = {
  title: "Marketing/ComingSoon3",
  component: ComingSoon3,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof ComingSoon3>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...comingSoon3Mocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <ComingSoon3 {...comingSoon3Mocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...comingSoon3Mocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <ComingSoon3 {...comingSoon3Mocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...comingSoon3Mocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <ComingSoon3 {...comingSoon3Mocks.default} />
      </div>
      <div className="dark bg-background">
        <ComingSoon3 {...comingSoon3Mocks.default} />
      </div>
    </div>
  ),
};
