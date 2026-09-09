import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { FallingText } from "./FallingText";
import { fallingTextMocks } from "./FallingText.mocks";

const meta = {
  title: "Marketing/FallingText",
  component: FallingText,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof FallingText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...fallingTextMocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <FallingText {...fallingTextMocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...fallingTextMocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <FallingText {...fallingTextMocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...fallingTextMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <FallingText {...fallingTextMocks.default} />
      </div>
      <div className="dark bg-background">
        <FallingText {...fallingTextMocks.default} />
      </div>
    </div>
  ),
};
