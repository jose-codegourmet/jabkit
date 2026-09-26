import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { CatalogueCard } from "./CatalogueCard";

const preview = (
  <img
    src="/previews/hero307.Default.dark.webp"
    alt="Hero307"
    className="h-full w-full object-cover object-top"
  />
);

const meta = {
  title: "Chrome/CatalogueCard",
  component: CatalogueCard,
  args: {
    name: "hero307",
    href: "/marketing/hero307",
    displayName: "Hero307",
    kind: "block",
    description: "Fullscreen hero with an admin preview underneath.",
    preview,
  },
  parameters: { layout: "padded" },
  decorators: [
    (Story) => (
      <div className="max-w-sm">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof CatalogueCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Compact: Story = { args: { compact: true } };

export const BestMatch: Story = {
  args: { copyable: false, label: "block · best match" },
};
