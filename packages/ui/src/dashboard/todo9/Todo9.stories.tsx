import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { Todo9 } from "./Todo9";
import { todo9Mocks } from "./Todo9.mocks";

const meta = {
  title: "Dashboard/Todo9",
  component: Todo9,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Todo9>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...todo9Mocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <Todo9 {...todo9Mocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...todo9Mocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <Todo9 {...todo9Mocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...todo9Mocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <Todo9 {...todo9Mocks.default} />
      </div>
      <div className="dark bg-background">
        <Todo9 {...todo9Mocks.default} />
      </div>
    </div>
  ),
};
