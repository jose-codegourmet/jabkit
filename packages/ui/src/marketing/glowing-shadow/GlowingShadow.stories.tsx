import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { GlowingShadow } from "./GlowingShadow";
import { glowingShadowMocks } from "./GlowingShadow.mocks";

const meta = {
  title: "Marketing/GlowingShadow",
  component: GlowingShadow,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof GlowingShadow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...glowingShadowMocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <GlowingShadow {...glowingShadowMocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...glowingShadowMocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <GlowingShadow {...glowingShadowMocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...glowingShadowMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <GlowingShadow {...glowingShadowMocks.default} />
      </div>
      <div className="dark bg-background">
        <GlowingShadow {...glowingShadowMocks.default} />
      </div>
    </div>
  ),
};
