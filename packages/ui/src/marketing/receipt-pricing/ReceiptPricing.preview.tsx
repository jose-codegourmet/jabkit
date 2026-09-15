// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { ReceiptPricing } from "./ReceiptPricing";
import { receiptPricingMocks } from "./ReceiptPricing.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <ReceiptPricing {...receiptPricingMocks.default} />
    </div>
    <div className="dark bg-background">
      <ReceiptPricing {...receiptPricingMocks.default} />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="w-full">
      <ReceiptPricing {...receiptPricingMocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <ReceiptPricing {...receiptPricingMocks.alternate} />
    </div>
  ),
  ThemeComparison,
};
