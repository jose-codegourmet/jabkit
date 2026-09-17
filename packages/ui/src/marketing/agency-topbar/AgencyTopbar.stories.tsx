import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { AgencyTopbar } from "./AgencyTopbar";
import { agencyTopbarMocks } from "./AgencyTopbar.mocks";

const meta = {
  title: "Marketing/AgencyTopbar",
  component: AgencyTopbar,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof AgencyTopbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...agencyTopbarMocks.default },
  render: () => (
    <>
      <AgencyTopbar {...agencyTopbarMocks.default} />
    </>
  ),
};

export const Variants: Story = {
  args: { ...agencyTopbarMocks.alternate },
  render: () => (
    <>
      <AgencyTopbar {...agencyTopbarMocks.alternate} />
    </>
  ),
};

export const ThemeComparison: Story = {
  args: { ...agencyTopbarMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <AgencyTopbar {...agencyTopbarMocks.default} />
      </div>
      <div className="dark bg-background">
        <AgencyTopbar {...agencyTopbarMocks.default} />
      </div>
    </div>
  ),
};
