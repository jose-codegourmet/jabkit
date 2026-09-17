import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { InfographicNodeGraph } from "./InfographicNodeGraph";
import { infographicNodeGraphMocks } from "./InfographicNodeGraph.mocks";

const meta = {
  title: "Marketing/InfographicNodeGraph",
  component: InfographicNodeGraph,
  parameters: { layout: "centered" },
} satisfies Meta<typeof InfographicNodeGraph>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...infographicNodeGraphMocks.default },
  render: () => (
    <div className="bg-background p-8">
      <InfographicNodeGraph {...infographicNodeGraphMocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...infographicNodeGraphMocks.alternate },
  render: () => (
    <div className="bg-background p-8">
      <InfographicNodeGraph {...infographicNodeGraphMocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...infographicNodeGraphMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background p-8">
        <InfographicNodeGraph {...infographicNodeGraphMocks.default} />
      </div>
      <div className="dark bg-background p-8">
        <InfographicNodeGraph {...infographicNodeGraphMocks.default} />
      </div>
    </div>
  ),
};
