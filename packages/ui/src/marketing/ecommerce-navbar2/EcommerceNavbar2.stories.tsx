import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { EcommerceNavbar2 } from "./EcommerceNavbar2";
import { ecommerceNavbar2Mocks } from "./EcommerceNavbar2.mocks";

const meta = {
  title: "Marketing/EcommerceNavbar2",
  component: EcommerceNavbar2,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof EcommerceNavbar2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...ecommerceNavbar2Mocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <EcommerceNavbar2 {...ecommerceNavbar2Mocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...ecommerceNavbar2Mocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <EcommerceNavbar2 {...ecommerceNavbar2Mocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...ecommerceNavbar2Mocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <EcommerceNavbar2 {...ecommerceNavbar2Mocks.default} />
      </div>
      <div className="dark bg-background">
        <EcommerceNavbar2 {...ecommerceNavbar2Mocks.default} />
      </div>
    </div>
  ),
};
