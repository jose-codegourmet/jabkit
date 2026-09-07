import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { MotionLoadingProgressBar } from "./MotionLoadingProgressBar";
import { motionLoadingProgressBarMocks } from "./MotionLoadingProgressBar.mocks";

const meta = {
  title: "Marketing/MotionLoadingProgressBar",
  component: MotionLoadingProgressBar,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof MotionLoadingProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...motionLoadingProgressBarMocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <MotionLoadingProgressBar {...motionLoadingProgressBarMocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...motionLoadingProgressBarMocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <MotionLoadingProgressBar {...motionLoadingProgressBarMocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...motionLoadingProgressBarMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <MotionLoadingProgressBar {...motionLoadingProgressBarMocks.default} />
      </div>
      <div className="dark bg-background">
        <MotionLoadingProgressBar {...motionLoadingProgressBarMocks.default} />
      </div>
    </div>
  ),
};
