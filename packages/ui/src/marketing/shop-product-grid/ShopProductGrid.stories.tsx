import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { ShopProductGrid } from "./ShopProductGrid";
import { shopProductGridMocks } from "./ShopProductGrid.mocks";

const meta = {
  title: "Marketing/ShopProductGrid",
  component: ShopProductGrid,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof ShopProductGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...shopProductGridMocks.default },
  render: () => (
    <div className="bg-background px-5 py-10 text-foreground">
      <ShopProductGrid {...shopProductGridMocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...shopProductGridMocks.alternate },
  render: () => (
    <div className="bg-background px-5 py-10 text-foreground">
      <ShopProductGrid {...shopProductGridMocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...shopProductGridMocks.alternate },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background px-5 py-8">
        <ShopProductGrid {...shopProductGridMocks.alternate} />
      </div>
      <div className="dark bg-background px-5 py-8">
        <ShopProductGrid {...shopProductGridMocks.alternate} />
      </div>
    </div>
  ),
};
