import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { KanbanBoard } from "./KanbanBoard";
import { kanbanBoardMocks } from "./KanbanBoard.mocks";

const meta = {
  title: "Dashboard/KanbanBoard",
  component: KanbanBoard,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof KanbanBoard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...kanbanBoardMocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <KanbanBoard {...kanbanBoardMocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...kanbanBoardMocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <KanbanBoard {...kanbanBoardMocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...kanbanBoardMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <KanbanBoard {...kanbanBoardMocks.default} />
      </div>
      <div className="dark bg-background">
        <KanbanBoard {...kanbanBoardMocks.default} />
      </div>
    </div>
  ),
};
