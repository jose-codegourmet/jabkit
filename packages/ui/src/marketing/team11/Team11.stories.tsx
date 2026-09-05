import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { Team11 } from "./Team11";
import { team11Mocks } from "./Team11.mocks";

const meta = {
  title: "Marketing/Team11",
  component: Team11,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Team11>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...team11Mocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <Team11 {...team11Mocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...team11Mocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <Team11 {...team11Mocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...team11Mocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <Team11 {...team11Mocks.default} />
      </div>
      <div className="dark bg-background">
        <Team11 {...team11Mocks.default} />
      </div>
    </div>
  ),
};
