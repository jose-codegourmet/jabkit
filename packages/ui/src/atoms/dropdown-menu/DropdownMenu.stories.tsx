import type { Meta, StoryObj } from "@storybook/react";
import { DropdownMenu } from "./DropdownMenu";

const meta = {
  title: "Atoms/DropdownMenu",
  component: DropdownMenu,
} satisfies Meta<typeof DropdownMenu>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { render: () => <DropdownMenu /> };
export const Variants: Story = {
  render: () => <DropdownMenu />,
};
export const ThemeComparison: Story = {
  render: () => (
    <div className="dark bg-background p-6">
      <DropdownMenu />
    </div>
  ),
};
