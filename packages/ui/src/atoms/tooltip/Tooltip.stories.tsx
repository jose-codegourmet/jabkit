import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "./Tooltip";

const meta = { title: "Atoms/Tooltip", component: Tooltip } satisfies Meta<
  typeof Tooltip
>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { render: () => <Tooltip /> };
export const Variants: Story = { render: () => <Tooltip /> };
export const ThemeComparison: Story = {
  render: () => (
    <div className="dark bg-background p-6">
      <Tooltip />
    </div>
  ),
};
