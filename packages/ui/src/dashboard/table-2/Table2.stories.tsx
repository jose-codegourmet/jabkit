import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { Table2 } from "./Table2";
import { table2Mocks } from "./Table2.mocks";

const meta = {
  title: "Dashboard/Table2",
  component: Table2,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Table2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...table2Mocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <Table2 {...table2Mocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...table2Mocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <Table2 {...table2Mocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...table2Mocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <Table2 {...table2Mocks.default} />
      </div>
      <div className="dark bg-background">
        <Table2 {...table2Mocks.default} />
      </div>
    </div>
  ),
};
