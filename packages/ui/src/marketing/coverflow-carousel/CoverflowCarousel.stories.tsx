import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { CoverflowCarousel } from "./CoverflowCarousel";
import { coverflowCarouselMocks } from "./CoverflowCarousel.mocks";

const meta = {
  title: "Marketing/CoverflowCarousel",
  component: CoverflowCarousel,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof CoverflowCarousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...coverflowCarouselMocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <CoverflowCarousel {...coverflowCarouselMocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...coverflowCarouselMocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <CoverflowCarousel {...coverflowCarouselMocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...coverflowCarouselMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <CoverflowCarousel {...coverflowCarouselMocks.default} />
      </div>
      <div className="dark bg-background">
        <CoverflowCarousel {...coverflowCarouselMocks.default} />
      </div>
    </div>
  ),
};
