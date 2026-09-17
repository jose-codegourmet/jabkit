import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { InfographicNode } from "./InfographicNode";
import { infographicNodeMocks } from "./InfographicNode.mocks";

const meta = {
  title: "Atoms/InfographicNode",
  component: InfographicNode,
  parameters: { layout: "centered" },
} satisfies Meta<typeof InfographicNode>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...infographicNodeMocks.default },
  render: () => (
    <div className="bg-background p-8">
      <InfographicNode {...infographicNodeMocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...infographicNodeMocks.alternate },
  render: () => (
    <div className="flex items-end gap-4 bg-background p-8">
      <InfographicNode {...infographicNodeMocks.alternate} />
      <InfographicNode
        label="Hub"
        value="DB"
        state="active"
        tone="ink"
        shape="hub"
      />
      <InfographicNode {...infographicNodeMocks.default} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...infographicNodeMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border sm:grid-cols-2">
      <div className="bg-background p-8">
        <InfographicNode {...infographicNodeMocks.default} />
      </div>
      <div className="dark bg-background p-8">
        <InfographicNode {...infographicNodeMocks.default} />
      </div>
    </div>
  ),
};
