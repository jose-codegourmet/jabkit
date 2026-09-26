import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SiteFooter } from "./SiteFooter";

const meta = {
  title: "Chrome/SiteFooter",
  component: SiteFooter,
  args: { componentCount: 214 },
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof SiteFooter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithoutCount: Story = { args: { componentCount: undefined } };

export const Mobile: Story = {
  globals: { viewport: { value: "mobile1" } },
};
