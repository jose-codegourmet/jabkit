import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { Waitlist3 } from "./Waitlist3";
import { waitlist3Mocks } from "./Waitlist3.mocks";

const meta = {
  title: "Marketing/Waitlist3",
  component: Waitlist3,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Waitlist3>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...waitlist3Mocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <Waitlist3 {...waitlist3Mocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...waitlist3Mocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <Waitlist3 {...waitlist3Mocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...waitlist3Mocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <Waitlist3 {...waitlist3Mocks.default} />
      </div>
      <div className="dark bg-background">
        <Waitlist3 {...waitlist3Mocks.default} />
      </div>
    </div>
  ),
};
