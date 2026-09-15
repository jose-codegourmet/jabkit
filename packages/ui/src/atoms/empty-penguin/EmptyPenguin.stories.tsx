import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { EmptyPenguin } from "./EmptyPenguin";
import { emptyPenguinMocks } from "./EmptyPenguin.mocks";

const meta = {
  title: "Atoms/EmptyPenguin",
  component: EmptyPenguin,
  parameters: { layout: "centered" },
} satisfies Meta<typeof EmptyPenguin>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...emptyPenguinMocks.default },
  render: () => (
    <EmptyPenguin {...emptyPenguinMocks.default} />
  ),
};

export const On: Story = {
  args: { ...emptyPenguinMocks.alternate },
  render: () => (
    <div className="flex flex-wrap items-center gap-4 bg-background p-8 text-foreground">
      <EmptyPenguin {...emptyPenguinMocks.alternate} />
      <EmptyPenguin {...emptyPenguinMocks.compact} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...emptyPenguinMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border sm:grid-cols-2">
      <div className="flex items-center justify-center bg-background p-8">
        <EmptyPenguin {...emptyPenguinMocks.alternate} />
      </div>
      <div className="dark flex items-center justify-center bg-background p-8">
        <EmptyPenguin {...emptyPenguinMocks.alternate} />
      </div>
    </div>
  ),
};
