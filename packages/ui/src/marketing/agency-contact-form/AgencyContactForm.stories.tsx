import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { AgencyContactForm } from "./AgencyContactForm";
import { agencyContactFormMocks } from "./AgencyContactForm.mocks";

const meta = {
  title: "Marketing/AgencyContactForm",
  component: AgencyContactForm,
  parameters: { layout: "centered" },
} satisfies Meta<typeof AgencyContactForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...agencyContactFormMocks.default },
  render: () => (
    <div className="w-[min(880px,92vw)] bg-background p-8">
      <AgencyContactForm {...agencyContactFormMocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...agencyContactFormMocks.alternate },
  render: () => (
    <div className="w-[min(880px,92vw)] bg-background p-8">
      <AgencyContactForm {...agencyContactFormMocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...agencyContactFormMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background p-8">
        <AgencyContactForm {...agencyContactFormMocks.default} />
      </div>
      <div className="dark bg-background p-8">
        <AgencyContactForm {...agencyContactFormMocks.default} />
      </div>
    </div>
  ),
};
