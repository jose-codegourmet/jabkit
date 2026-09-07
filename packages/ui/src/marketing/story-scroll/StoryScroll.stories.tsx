import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { StoryScroll } from "./StoryScroll";
import { storyScrollMocks } from "./StoryScroll.mocks";

const meta = {
  title: "Marketing/StoryScroll",
  component: StoryScroll,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof StoryScroll>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...storyScrollMocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <StoryScroll {...storyScrollMocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...storyScrollMocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <StoryScroll {...storyScrollMocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...storyScrollMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <StoryScroll {...storyScrollMocks.default} />
      </div>
      <div className="dark bg-background">
        <StoryScroll {...storyScrollMocks.default} />
      </div>
    </div>
  ),
};
