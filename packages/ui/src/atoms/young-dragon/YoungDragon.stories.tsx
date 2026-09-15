import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { YoungDragon } from "./YoungDragon";
import { youngDragonMocks } from "./YoungDragon.mocks";

const meta = {
  title: "Atoms/YoungDragon",
  component: YoungDragon,
  parameters: { layout: "centered" },
} satisfies Meta<typeof YoungDragon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...youngDragonMocks.default },
  render: () => (
    <YoungDragon {...youngDragonMocks.default} />
  ),
};

export const Sizes: Story = {
  args: { ...youngDragonMocks.labeled },
  render: () => (
    <div className="flex flex-wrap items-end gap-8 bg-background p-10 text-foreground">
      <YoungDragon {...youngDragonMocks.compact} showLabel />
      <YoungDragon {...youngDragonMocks.default} showLabel />
      <YoungDragon label="Almost ready" showLabel size="lg" />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...youngDragonMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border sm:grid-cols-2">
      <div className="bg-background p-10">
        <YoungDragon {...youngDragonMocks.labeled} />
      </div>
      <div className="dark bg-background p-10">
        <YoungDragon {...youngDragonMocks.labeled} />
      </div>
    </div>
  ),
};
