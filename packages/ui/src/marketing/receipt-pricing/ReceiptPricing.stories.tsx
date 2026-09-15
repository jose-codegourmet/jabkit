import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { ReceiptPricing } from "./ReceiptPricing";
import { receiptPricingMocks } from "./ReceiptPricing.mocks";

const meta = {
  title: "Marketing/ReceiptPricing",
  component: ReceiptPricing,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof ReceiptPricing>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...receiptPricingMocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <ReceiptPricing {...receiptPricingMocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...receiptPricingMocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <ReceiptPricing {...receiptPricingMocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...receiptPricingMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <ReceiptPricing {...receiptPricingMocks.default} />
      </div>
      <div className="dark bg-background">
        <ReceiptPricing {...receiptPricingMocks.default} />
      </div>
    </div>
  ),
};
