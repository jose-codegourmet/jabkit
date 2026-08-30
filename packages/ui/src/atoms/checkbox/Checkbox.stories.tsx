import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";

const meta = { title: "Atoms/Checkbox", component: Checkbox } satisfies Meta<
  typeof Checkbox
>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { render: () => <Checkbox /> };
export const Variants: Story = {
  render: () => <Checkbox className="w-full" />,
};
export const ThemeComparison: Story = {
  render: () => (
    <div className="dark bg-background p-6">
      <Checkbox />
    </div>
  ),
};
