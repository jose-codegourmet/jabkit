import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { AgencyContactSection } from "./AgencyContactSection";
import { agencyContactSectionMocks } from "./AgencyContactSection.mocks";

const meta = {
  title: "Marketing/AgencyContactSection",
  component: AgencyContactSection,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof AgencyContactSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...agencyContactSectionMocks.default },
  render: () => (
    <>
      <AgencyContactSection {...agencyContactSectionMocks.default} />
    </>
  ),
};

export const Variants: Story = {
  args: { ...agencyContactSectionMocks.alternate },
  render: () => (
    <>
      <AgencyContactSection {...agencyContactSectionMocks.alternate} />
    </>
  ),
};

export const ThemeComparison: Story = {
  args: { ...agencyContactSectionMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <AgencyContactSection {...agencyContactSectionMocks.default} />
      </div>
      <div className="dark bg-background">
        <AgencyContactSection {...agencyContactSectionMocks.default} />
      </div>
    </div>
  ),
};
