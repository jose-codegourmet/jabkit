import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { Announcement4 } from "./Announcement4";
import { announcement4Mocks } from "./Announcement4.mocks";

const meta = {
  title: "Marketing/Announcement4",
  component: Announcement4,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Announcement4>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...announcement4Mocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <Announcement4 {...announcement4Mocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...announcement4Mocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <Announcement4 {...announcement4Mocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...announcement4Mocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <Announcement4 {...announcement4Mocks.default} />
      </div>
      <div className="dark bg-background">
        <Announcement4 {...announcement4Mocks.default} />
      </div>
    </div>
  ),
};
