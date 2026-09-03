import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { CaseStudies13 } from "./CaseStudies13";
import {
  caseStudies13EditorialMocks,
  caseStudies13Mocks,
} from "./CaseStudies13.mocks";

const meta = {
  title: "Marketing/CaseStudies13",
  component: CaseStudies13,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof CaseStudies13>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { title: caseStudies13Mocks.title },
  render: () => (
    <CaseStudies13
      title={caseStudies13Mocks.title}
      description={caseStudies13Mocks.description}
      allWork={caseStudies13Mocks.allWork}
      studies={caseStudies13Mocks.studies}
    />
  ),
};

export const Variants: Story = {
  args: { title: caseStudies13EditorialMocks.title },
  render: () => (
    <CaseStudies13
      title={caseStudies13EditorialMocks.title}
      description={caseStudies13EditorialMocks.description}
      allWork={caseStudies13EditorialMocks.allWork}
      studies={caseStudies13EditorialMocks.studies}
    />
  ),
};

export const ThemeComparison: Story = {
  args: { title: caseStudies13Mocks.title },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <CaseStudies13 {...caseStudies13Mocks} />
      </div>
      <div className="dark bg-background">
        <CaseStudies13 {...caseStudies13Mocks} />
      </div>
    </div>
  ),
};
