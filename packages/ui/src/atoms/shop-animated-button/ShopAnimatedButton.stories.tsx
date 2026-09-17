import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { ShopAnimatedButton } from "./ShopAnimatedButton";
import { shopAnimatedButtonMocks } from "./ShopAnimatedButton.mocks";

const meta = {
  title: "Atoms/ShopAnimatedButton",
  component: ShopAnimatedButton,
  parameters: { layout: "centered" },
} satisfies Meta<typeof ShopAnimatedButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...shopAnimatedButtonMocks.default },
  render: () => (
    <>
      <ShopAnimatedButton {...shopAnimatedButtonMocks.default} />
    </>
  ),
};

export const Variants: Story = {
  args: { ...shopAnimatedButtonMocks.alternate },
  render: () => (
    <div className="flex flex-wrap items-center gap-3 bg-background p-8 text-foreground">
      <ShopAnimatedButton {...shopAnimatedButtonMocks.default} />
      <ShopAnimatedButton {...shopAnimatedButtonMocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...shopAnimatedButtonMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border sm:grid-cols-2">
      <div className="bg-background p-8">
        <ShopAnimatedButton {...shopAnimatedButtonMocks.default} />
      </div>
      <div className="dark bg-background p-8">
        <ShopAnimatedButton {...shopAnimatedButtonMocks.default} />
      </div>
    </div>
  ),
};
