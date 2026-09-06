import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { ShapeGrid } from "./ShapeGrid";
import { shapeGridMocks } from "./ShapeGrid.mocks";

const meta = {
  title: "Marketing/ShapeGrid",
  component: ShapeGrid,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof ShapeGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...shapeGridMocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <ShapeGrid {...shapeGridMocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...shapeGridMocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <ShapeGrid {...shapeGridMocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...shapeGridMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <ShapeGrid {...shapeGridMocks.default} />
      </div>
      <div className="dark bg-background">
        <ShapeGrid {...shapeGridMocks.default} />
      </div>
    </div>
  ),
};
