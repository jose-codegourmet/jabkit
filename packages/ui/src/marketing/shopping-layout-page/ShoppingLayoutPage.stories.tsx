import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { ShoppingLayoutPage } from "./ShoppingLayoutPage";
import { shoppingLayoutPageMocks } from "./ShoppingLayoutPage.mocks";

const meta = {
  title: "Marketing/ShoppingLayoutPage",
  component: ShoppingLayoutPage,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof ShoppingLayoutPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...shoppingLayoutPageMocks.default },
  render: () => (
    <>
      <ShoppingLayoutPage {...shoppingLayoutPageMocks.default} />
    </>
  ),
};

export const Variants: Story = {
  args: { ...shoppingLayoutPageMocks.alternate },
  render: () => (
    <>
      <ShoppingLayoutPage {...shoppingLayoutPageMocks.alternate} />
    </>
  ),
};

export const ThemeComparison: Story = {
  args: { ...shoppingLayoutPageMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <ShoppingLayoutPage {...shoppingLayoutPageMocks.default} />
      </div>
      <div className="dark bg-background">
        <ShoppingLayoutPage {...shoppingLayoutPageMocks.default} />
      </div>
    </div>
  ),
};
