import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { HardSwan } from "./HardSwan";
import { hardSwanMocks } from "./HardSwan.mocks";

const meta = {
  title: "Atoms/HardSwan",
  component: HardSwan,
  parameters: { layout: "centered" },
} satisfies Meta<typeof HardSwan>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...hardSwanMocks.default },
  render: () => (
    <div className="w-[28rem] bg-background p-6 text-foreground">
      <HardSwan {...hardSwanMocks.default} />
    </div>
  ),
};

export const Palettes: Story = {
  args: { ...hardSwanMocks.dusk },
  render: () => (
    <div className="flex w-[28rem] flex-col gap-4 bg-background p-6 text-foreground">
      <HardSwan {...hardSwanMocks.default} />
      <HardSwan {...hardSwanMocks.dusk} />
    </div>
  ),
};

export const WithCaption: Story = {
  args: { ...hardSwanMocks.overlay },
  render: () => (
    <div className="w-[28rem] bg-background p-6 text-foreground">
      <HardSwan {...hardSwanMocks.overlay}>
        <p className="rounded-[--radius] bg-card/90 px-4 py-2 text-sm font-medium text-card-foreground shadow-sm">
          Open studio hours
        </p>
      </HardSwan>
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...hardSwanMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border sm:grid-cols-2">
      <div className="bg-background p-8">
        <HardSwan {...hardSwanMocks.default} />
      </div>
      <div className="dark bg-background p-8">
        <HardSwan {...hardSwanMocks.default} />
      </div>
    </div>
  ),
};
