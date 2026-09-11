import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { Kanban } from "./Kanban";
import { kanbanMocks } from "./Kanban.mocks";

const meta = {
  title: "Dashboard/Kanban",
  component: Kanban,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Kanban>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...kanbanMocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <Kanban {...kanbanMocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...kanbanMocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <Kanban {...kanbanMocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...kanbanMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <Kanban {...kanbanMocks.default} />
      </div>
      <div className="dark bg-background">
        <Kanban {...kanbanMocks.default} />
      </div>
    </div>
  ),
};
