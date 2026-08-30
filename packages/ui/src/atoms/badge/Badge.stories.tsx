import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta = { title: "Atoms/Badge", component: Badge } satisfies Meta<
  typeof Badge
>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { render: () => <Badge /> };
export const Variants: Story = { render: () => <Badge className="w-full" /> };
export const ThemeComparison: Story = {
  render: () => (
    <div className="dark bg-background p-6">
      <Badge />
    </div>
  ),
};
