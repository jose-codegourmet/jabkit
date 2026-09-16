import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { OrbitCardStack } from "./OrbitCardStack";
import { orbitCardStackMocks } from "./OrbitCardStack.mocks";

const meta = {
  title: "Marketing/OrbitCardStack",
  component: OrbitCardStack,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof OrbitCardStack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...orbitCardStackMocks.default },
  render: () => <OrbitCardStack {...orbitCardStackMocks.default} />,
};

export const Variants: Story = {
  args: { ...orbitCardStackMocks.alternate },
  render: () => <OrbitCardStack {...orbitCardStackMocks.alternate} />,
};

export const ThemeComparison: Story = {
  args: { ...orbitCardStackMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <OrbitCardStack {...orbitCardStackMocks.default} />
      </div>
      <div className="dark bg-background">
        <OrbitCardStack {...orbitCardStackMocks.default} />
      </div>
    </div>
  ),
};
