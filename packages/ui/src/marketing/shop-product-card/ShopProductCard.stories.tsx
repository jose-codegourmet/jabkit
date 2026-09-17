import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { ShopProductCard } from "./ShopProductCard";
import { shopProductCardMocks } from "./ShopProductCard.mocks";

const meta = {
  title: "Marketing/ShopProductCard",
  component: ShopProductCard,
  parameters: { layout: "centered" },
} satisfies Meta<typeof ShopProductCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...shopProductCardMocks.default },
  render: () => (
    <div className="w-[22rem] bg-background p-6 text-foreground">
      <ShopProductCard {...shopProductCardMocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...shopProductCardMocks.alternate },
  render: () => (
    <div className="grid w-[44rem] max-w-full gap-6 bg-background p-6 text-foreground sm:grid-cols-2">
      <ShopProductCard {...shopProductCardMocks.default} />
      <ShopProductCard {...shopProductCardMocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...shopProductCardMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border sm:grid-cols-2">
      <div className="bg-background p-6">
        <ShopProductCard {...shopProductCardMocks.default} />
      </div>
      <div className="dark bg-background p-6">
        <ShopProductCard {...shopProductCardMocks.default} />
      </div>
    </div>
  ),
};
