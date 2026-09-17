import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { AgencyIndexSection } from "./AgencyIndexSection";
import { agencyIndexSectionMocks } from "./AgencyIndexSection.mocks";

const meta = {
  title: "Marketing/AgencyIndexSection",
  component: AgencyIndexSection,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof AgencyIndexSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...agencyIndexSectionMocks.default },
  render: () => (
    <>
      <AgencyIndexSection {...agencyIndexSectionMocks.default} />
    </>
  ),
};

export const Variants: Story = {
  args: { ...agencyIndexSectionMocks.alternate },
  render: () => (
    <>
      <AgencyIndexSection {...agencyIndexSectionMocks.alternate} />
    </>
  ),
};

export const ThemeComparison: Story = {
  args: { ...agencyIndexSectionMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <AgencyIndexSection {...agencyIndexSectionMocks.default} />
      </div>
      <div className="dark bg-background">
        <AgencyIndexSection {...agencyIndexSectionMocks.default} />
      </div>
    </div>
  ),
};
