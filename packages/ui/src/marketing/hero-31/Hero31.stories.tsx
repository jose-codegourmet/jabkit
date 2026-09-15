import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { Hero31 } from "./Hero31";
import { hero31Mocks } from "./Hero31.mocks";

const meta = {
  title: "Marketing/Hero31",
  component: Hero31,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Hero31>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...hero31Mocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <Hero31 {...hero31Mocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...hero31Mocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <Hero31 {...hero31Mocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...hero31Mocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <Hero31 {...hero31Mocks.default} />
      </div>
      <div className="dark bg-background">
        <Hero31 {...hero31Mocks.default} />
      </div>
    </div>
  ),
};
