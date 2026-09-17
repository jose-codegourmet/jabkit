import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { AgencyLayoutPage } from "./AgencyLayoutPage";
import { agencyLayoutPageMocks } from "./AgencyLayoutPage.mocks";

const meta = {
  title: "Marketing/AgencyLayoutPage",
  component: AgencyLayoutPage,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof AgencyLayoutPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...agencyLayoutPageMocks.default },
  render: () => (
    <>
      <AgencyLayoutPage {...agencyLayoutPageMocks.default} />
    </>
  ),
};

export const Variants: Story = {
  args: { ...agencyLayoutPageMocks.alternate },
  render: () => (
    <>
      <AgencyLayoutPage {...agencyLayoutPageMocks.alternate} />
    </>
  ),
};

export const ThemeComparison: Story = {
  args: { ...agencyLayoutPageMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <AgencyLayoutPage {...agencyLayoutPageMocks.default} />
      </div>
      <div className="dark bg-background">
        <AgencyLayoutPage {...agencyLayoutPageMocks.default} />
      </div>
    </div>
  ),
};
