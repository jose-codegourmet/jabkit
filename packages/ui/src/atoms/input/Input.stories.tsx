import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta = { title: "Atoms/Input", component: Input } satisfies Meta<
  typeof Input
>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { render: () => <Input /> };
export const Variants: Story = { render: () => <Input className="w-full" /> };
export const ThemeComparison: Story = {
  render: () => (
    <div className="dark bg-background p-6">
      <Input />
    </div>
  ),
};
