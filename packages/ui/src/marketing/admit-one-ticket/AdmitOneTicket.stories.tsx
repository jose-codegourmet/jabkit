import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { AdmitOneTicket } from "./AdmitOneTicket";
import { admitOneTicketMocks } from "./AdmitOneTicket.mocks";

const meta = {
  title: "Marketing/AdmitOneTicket",
  component: AdmitOneTicket,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof AdmitOneTicket>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...admitOneTicketMocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <AdmitOneTicket {...admitOneTicketMocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...admitOneTicketMocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <AdmitOneTicket {...admitOneTicketMocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...admitOneTicketMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <AdmitOneTicket {...admitOneTicketMocks.default} />
      </div>
      <div className="dark bg-background">
        <AdmitOneTicket {...admitOneTicketMocks.default} />
      </div>
    </div>
  ),
};
