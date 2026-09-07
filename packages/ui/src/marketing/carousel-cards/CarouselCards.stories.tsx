import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { CarouselCards } from "./CarouselCards";
import { carouselCardsMocks } from "./CarouselCards.mocks";

const meta = {
  title: "Marketing/CarouselCards",
  component: CarouselCards,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof CarouselCards>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...carouselCardsMocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <CarouselCards {...carouselCardsMocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...carouselCardsMocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <CarouselCards {...carouselCardsMocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...carouselCardsMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <CarouselCards {...carouselCardsMocks.default} />
      </div>
      <div className="dark bg-background">
        <CarouselCards {...carouselCardsMocks.default} />
      </div>
    </div>
  ),
};
