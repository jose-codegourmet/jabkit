import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { Team17 } from "./Team17";
import { team17Mocks } from "./Team17.mocks";

const meta = {
  title: "Marketing/Team17",
  component: Team17,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Team17>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...team17Mocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <Team17 {...team17Mocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...team17Mocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <Team17 {...team17Mocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...team17Mocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <Team17 {...team17Mocks.default} />
      </div>
      <div className="dark bg-background">
        <Team17 {...team17Mocks.default} />
      </div>
    </div>
  ),
};
