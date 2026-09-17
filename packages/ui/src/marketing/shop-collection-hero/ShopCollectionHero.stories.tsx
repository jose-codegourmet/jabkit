import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { ShopCollectionHero } from "./ShopCollectionHero";
import { shopCollectionHeroMocks } from "./ShopCollectionHero.mocks";

const meta = {
  title: "Marketing/ShopCollectionHero",
  component: ShopCollectionHero,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof ShopCollectionHero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...shopCollectionHeroMocks.default },
  render: () => (
    <>
      <ShopCollectionHero {...shopCollectionHeroMocks.default} />
    </>
  ),
};

export const Variants: Story = {
  args: { ...shopCollectionHeroMocks.alternate },
  render: () => (
    <>
      <ShopCollectionHero {...shopCollectionHeroMocks.alternate} />
    </>
  ),
};

export const ThemeComparison: Story = {
  args: { ...shopCollectionHeroMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <ShopCollectionHero {...shopCollectionHeroMocks.default} />
      </div>
      <div className="dark bg-background">
        <ShopCollectionHero {...shopCollectionHeroMocks.default} />
      </div>
    </div>
  ),
};
