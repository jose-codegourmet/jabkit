import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { CursorGrid } from "./CursorGrid";
import { cursorGridMocks } from "./CursorGrid.mocks";

const meta = {
  title: "Marketing/CursorGrid",
  component: CursorGrid,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof CursorGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...cursorGridMocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <CursorGrid {...cursorGridMocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...cursorGridMocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <CursorGrid {...cursorGridMocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...cursorGridMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <CursorGrid {...cursorGridMocks.default} />
      </div>
      <div className="dark bg-background">
        <CursorGrid {...cursorGridMocks.default} />
      </div>
    </div>
  ),
};
