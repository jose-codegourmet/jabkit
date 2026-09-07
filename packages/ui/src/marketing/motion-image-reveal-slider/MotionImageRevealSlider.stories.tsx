import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { MotionImageRevealSlider } from "./MotionImageRevealSlider";
import { motionImageRevealSliderMocks } from "./MotionImageRevealSlider.mocks";

const meta = {
  title: "Marketing/MotionImageRevealSlider",
  component: MotionImageRevealSlider,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof MotionImageRevealSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...motionImageRevealSliderMocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <MotionImageRevealSlider {...motionImageRevealSliderMocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...motionImageRevealSliderMocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <MotionImageRevealSlider {...motionImageRevealSliderMocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...motionImageRevealSliderMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <MotionImageRevealSlider {...motionImageRevealSliderMocks.default} />
      </div>
      <div className="dark bg-background">
        <MotionImageRevealSlider {...motionImageRevealSliderMocks.default} />
      </div>
    </div>
  ),
};
