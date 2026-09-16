import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { FisheyeInfiniteGrid } from "./FisheyeInfiniteGrid";
import { fisheyeInfiniteGridMocks } from "./FisheyeInfiniteGrid.mocks";

const meta = {
  title: "Marketing/FisheyeInfiniteGrid",
  component: FisheyeInfiniteGrid,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof FisheyeInfiniteGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...fisheyeInfiniteGridMocks.default },
  render: () => (
    <div className="h-[720px] w-full overflow-hidden bg-background text-foreground">
      <FisheyeInfiniteGrid {...fisheyeInfiniteGridMocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...fisheyeInfiniteGridMocks.alternate },
  render: () => (
    <div className="h-[720px] w-full overflow-hidden bg-background text-foreground">
      <FisheyeInfiniteGrid {...fisheyeInfiniteGridMocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...fisheyeInfiniteGridMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="h-[620px] bg-background">
        <FisheyeInfiniteGrid {...fisheyeInfiniteGridMocks.default} />
      </div>
      <div className="dark h-[620px] bg-background">
        <FisheyeInfiniteGrid {...fisheyeInfiniteGridMocks.default} />
      </div>
    </div>
  ),
};
