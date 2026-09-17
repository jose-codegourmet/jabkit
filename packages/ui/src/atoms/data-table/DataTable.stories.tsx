import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { DataTable } from "./DataTable";
import { dataTableMocks } from "./DataTable.mocks";

const meta = {
  title: "Atoms/DataTable",
  component: DataTable,
  parameters: { layout: "centered" },
} satisfies Meta<typeof DataTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: () => (
    <div className="w-[800px] bg-background p-4 text-foreground">
      <DataTable />
    </div>
  ),
};

export const Empty: Story = {
  args: { data: [...dataTableMocks.empty] },
  render: () => (
    <div className="w-[800px] bg-background p-4 text-foreground">
      <DataTable data={[...dataTableMocks.empty]} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: {},
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background p-4">
        <DataTable />
      </div>
      <div className="dark bg-background p-4">
        <DataTable />
      </div>
    </div>
  ),
};
