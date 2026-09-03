import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { CaseStudies11 } from "./CaseStudies11";
import { caseStudies11Mocks } from "./CaseStudies11.mocks";

const meta = {
  title: "Marketing/CaseStudies11",
  component: CaseStudies11,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof CaseStudies11>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...caseStudies11Mocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <CaseStudies11 {...caseStudies11Mocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...caseStudies11Mocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <CaseStudies11 {...caseStudies11Mocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...caseStudies11Mocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <CaseStudies11 {...caseStudies11Mocks.default} />
      </div>
      <div className="dark bg-background">
        <CaseStudies11 {...caseStudies11Mocks.default} />
      </div>
    </div>
  ),
};
