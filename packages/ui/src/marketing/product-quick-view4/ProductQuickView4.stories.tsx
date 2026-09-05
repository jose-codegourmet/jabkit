import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { ProductQuickView4 } from "./ProductQuickView4";
import { productQuickView4Mocks } from "./ProductQuickView4.mocks";

const meta = {
  title: "Marketing/ProductQuickView4",
  component: ProductQuickView4,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof ProductQuickView4>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...productQuickView4Mocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <ProductQuickView4 {...productQuickView4Mocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...productQuickView4Mocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <ProductQuickView4 {...productQuickView4Mocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...productQuickView4Mocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <ProductQuickView4
          {...productQuickView4Mocks.default}
          presentation="inline"
        />
      </div>
      <div className="dark bg-background">
        <ProductQuickView4
          {...productQuickView4Mocks.default}
          presentation="inline"
        />
      </div>
    </div>
  ),
};
