import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { Gallery31 } from "./Gallery31";
import { gallery31AlternateMocks, gallery31Mocks } from "./Gallery31.mocks";

const meta = {
  title: "Marketing/Gallery31",
  component: Gallery31,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Gallery31>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...gallery31Mocks },
  render: () => (
    <div className="bg-background text-foreground">
      <Gallery31 {...gallery31Mocks} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...gallery31AlternateMocks },
  render: () => (
    <div className="bg-background text-foreground">
      <Gallery31 {...gallery31AlternateMocks} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...gallery31Mocks },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <Gallery31 {...gallery31Mocks} />
      </div>
      <div className="dark bg-background">
        <Gallery31 {...gallery31Mocks} />
      </div>
    </div>
  ),
};
