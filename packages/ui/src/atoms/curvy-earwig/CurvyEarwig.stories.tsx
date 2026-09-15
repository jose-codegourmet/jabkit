import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { CurvyEarwig } from "./CurvyEarwig";
import { curvyEarwigMocks } from "./CurvyEarwig.mocks";

const meta = {
  title: "Atoms/CurvyEarwig",
  component: CurvyEarwig,
  parameters: { layout: "centered" },
} satisfies Meta<typeof CurvyEarwig>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...curvyEarwigMocks.default },
  render: () => (
    <CurvyEarwig {...curvyEarwigMocks.default} />
  ),
};

export const Expanded: Story = {
  args: { ...curvyEarwigMocks.expanded },
  render: () => (
    <CurvyEarwig {...curvyEarwigMocks.expanded} />
  ),
};

export const ThemeComparison: Story = {
  args: { ...curvyEarwigMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border sm:grid-cols-2">
      <div className="flex items-center justify-center bg-background p-8">
        <CurvyEarwig {...curvyEarwigMocks.expanded} />
      </div>
      <div className="dark flex items-center justify-center bg-background p-8">
        <CurvyEarwig {...curvyEarwigMocks.expanded} />
      </div>
    </div>
  ),
};
