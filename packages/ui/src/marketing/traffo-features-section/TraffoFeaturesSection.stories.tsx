import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { TraffoFeaturesSection } from "./TraffoFeaturesSection";
import { traffoFeaturesSectionMocks } from "./TraffoFeaturesSection.mocks";

const meta = {
  title: "Marketing/TraffoFeaturesSection",
  component: TraffoFeaturesSection,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof TraffoFeaturesSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...traffoFeaturesSectionMocks.default },
  render: () => (
    <>
      <TraffoFeaturesSection {...traffoFeaturesSectionMocks.default} />
    </>
  ),
};

export const Variants: Story = {
  args: { ...traffoFeaturesSectionMocks.alternate },
  render: () => (
    <>
      <TraffoFeaturesSection {...traffoFeaturesSectionMocks.alternate} />
    </>
  ),
};

export const ThemeComparison: Story = {
  args: { ...traffoFeaturesSectionMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <TraffoFeaturesSection {...traffoFeaturesSectionMocks.default} />
      </div>
      <div className="dark bg-background">
        <TraffoFeaturesSection {...traffoFeaturesSectionMocks.default} />
      </div>
    </div>
  ),
};
