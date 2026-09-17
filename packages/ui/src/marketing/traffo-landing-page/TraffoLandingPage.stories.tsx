import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { TraffoLandingPage } from "./TraffoLandingPage";
import { traffoLandingPageMocks } from "./TraffoLandingPage.mocks";

const meta = {
  title: "Marketing/TraffoLandingPage",
  component: TraffoLandingPage,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof TraffoLandingPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...traffoLandingPageMocks.default },
  render: () => (
    <>
      <TraffoLandingPage {...traffoLandingPageMocks.default} />
    </>
  ),
};

export const Variants: Story = {
  args: { ...traffoLandingPageMocks.alternate },
  render: () => (
    <>
      <TraffoLandingPage {...traffoLandingPageMocks.alternate} />
    </>
  ),
};

export const ThemeComparison: Story = {
  args: { ...traffoLandingPageMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <TraffoLandingPage {...traffoLandingPageMocks.default} />
      </div>
      <div className="dark bg-background">
        <TraffoLandingPage {...traffoLandingPageMocks.default} />
      </div>
    </div>
  ),
};
