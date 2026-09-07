import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { SterlingGateKineticNavigation } from "./SterlingGateKineticNavigation";
import { sterlingGateKineticNavigationMocks } from "./SterlingGateKineticNavigation.mocks";

const meta = {
  title: "Marketing/SterlingGateKineticNavigation",
  component: SterlingGateKineticNavigation,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof SterlingGateKineticNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...sterlingGateKineticNavigationMocks.default },
  render: () => (
    <SterlingGateKineticNavigation
      {...sterlingGateKineticNavigationMocks.default}
    />
  ),
};

export const Variants: Story = {
  args: { ...sterlingGateKineticNavigationMocks.alternate },
  render: () => (
    <SterlingGateKineticNavigation
      {...sterlingGateKineticNavigationMocks.alternate}
    />
  ),
};

export const ThemeComparison: Story = {
  args: { ...sterlingGateKineticNavigationMocks.alternate },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <SterlingGateKineticNavigation
          {...sterlingGateKineticNavigationMocks.alternate}
        />
      </div>
      <div className="dark bg-background">
        <SterlingGateKineticNavigation
          {...sterlingGateKineticNavigationMocks.alternate}
        />
      </div>
    </div>
  ),
};
