import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { EmberFooterCta } from "./EmberFooterCta";
import { emberFooterCtaMocks } from "./EmberFooterCta.mocks";

const meta = {
  title: "Marketing/EmberFooterCta",
  component: EmberFooterCta,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof EmberFooterCta>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...emberFooterCtaMocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <EmberFooterCta {...emberFooterCtaMocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...emberFooterCtaMocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <EmberFooterCta {...emberFooterCtaMocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...emberFooterCtaMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <EmberFooterCta {...emberFooterCtaMocks.default} />
      </div>
      <div className="dark bg-background">
        <EmberFooterCta {...emberFooterCtaMocks.default} />
      </div>
    </div>
  ),
};
