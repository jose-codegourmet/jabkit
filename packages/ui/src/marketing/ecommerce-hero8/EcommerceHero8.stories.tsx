import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { EcommerceHero8 } from "./EcommerceHero8";
import { ecommerceHero8Mocks } from "./EcommerceHero8.mocks";

const meta = {
  title: "Marketing/EcommerceHero8",
  component: EcommerceHero8,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof EcommerceHero8>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...ecommerceHero8Mocks.default },
  render: () => <EcommerceHero8 {...ecommerceHero8Mocks.default} />,
};

export const Variants: Story = {
  args: { ...ecommerceHero8Mocks.alternate },
  render: () => <EcommerceHero8 {...ecommerceHero8Mocks.alternate} />,
};

export const ThemeComparison: Story = {
  args: { ...ecommerceHero8Mocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <EcommerceHero8 {...ecommerceHero8Mocks.default} autoplay={false} />
      </div>
      <div className="dark bg-background">
        <EcommerceHero8 {...ecommerceHero8Mocks.default} autoplay={false} />
      </div>
    </div>
  ),
};
