import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { AgencyServicesSection } from "./AgencyServicesSection";
import { agencyServicesSectionMocks } from "./AgencyServicesSection.mocks";

const meta = {
  title: "Marketing/AgencyServicesSection",
  component: AgencyServicesSection,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof AgencyServicesSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...agencyServicesSectionMocks.default },
  render: () => (
    <>
      <AgencyServicesSection {...agencyServicesSectionMocks.default} />
    </>
  ),
};

export const Variants: Story = {
  args: { ...agencyServicesSectionMocks.alternate },
  render: () => (
    <>
      <AgencyServicesSection {...agencyServicesSectionMocks.alternate} />
    </>
  ),
};

export const ThemeComparison: Story = {
  args: { ...agencyServicesSectionMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <AgencyServicesSection {...agencyServicesSectionMocks.default} />
      </div>
      <div className="dark bg-background">
        <AgencyServicesSection {...agencyServicesSectionMocks.default} />
      </div>
    </div>
  ),
};
