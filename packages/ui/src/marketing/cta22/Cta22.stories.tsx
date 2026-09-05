import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { Cta22 } from "./Cta22";
import { cta22Mocks } from "./Cta22.mocks";

const meta = {
  title: "Marketing/Cta22",
  component: Cta22,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Cta22>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...cta22Mocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <Cta22 {...cta22Mocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...cta22Mocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <Cta22 {...cta22Mocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...cta22Mocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <Cta22 {...cta22Mocks.default} />
      </div>
      <div className="dark bg-background">
        <Cta22 {...cta22Mocks.default} />
      </div>
    </div>
  ),
};
