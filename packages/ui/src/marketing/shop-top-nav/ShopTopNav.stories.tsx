import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { ShopTopNav } from "./ShopTopNav";
import { shopTopNavMocks } from "./ShopTopNav.mocks";

const meta = {
  title: "Marketing/ShopTopNav",
  component: ShopTopNav,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof ShopTopNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...shopTopNavMocks.default },
  render: () => (
    <>
      <ShopTopNav {...shopTopNavMocks.default} />
    </>
  ),
};

export const Variants: Story = {
  args: { ...shopTopNavMocks.alternate },
  render: () => (
    <>
      <ShopTopNav {...shopTopNavMocks.alternate} />
    </>
  ),
};

export const ThemeComparison: Story = {
  args: { ...shopTopNavMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <ShopTopNav {...shopTopNavMocks.default} />
      </div>
      <div className="dark bg-background">
        <ShopTopNav {...shopTopNavMocks.default} />
      </div>
    </div>
  ),
};
