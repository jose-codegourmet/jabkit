import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { type ReactNode, useEffect, useState } from "react";
import { PreviewImage } from "./PreviewImage";

function PreviewImageClient(props: Parameters<typeof PreviewImage>[0]) {
  const [node, setNode] = useState<ReactNode>(
    <div className="grid h-full w-full place-items-center text-sm text-muted-foreground">
      Loading preview
    </div>,
  );
  useEffect(() => {
    let cancelled = false;
    void PreviewImage(props).then((next) => {
      if (!cancelled) setNode(next);
    });
    return () => {
      cancelled = true;
    };
  }, [props]);
  return node;
}

const meta = {
  title: "Chrome/PreviewImage",
  component: PreviewImage,
  parameters: { layout: "padded" },
} satisfies Meta<typeof PreviewImage>;

export default meta;
type Story = StoryObj<typeof meta>;

function previewStory(props: Parameters<typeof PreviewImage>[0]): Story {
  return {
    args: props,
    render: (args) => (
      <div className="h-64 w-full overflow-hidden rounded-[--radius] border border-border">
        <PreviewImageClient {...args} />
      </div>
    ),
  };
}

export const Webp: Story = previewStory({
  name: "button",
  displayName: "Button",
  theme: "dark",
});

export const Gif: Story = previewStory({
  name: "hero228",
  displayName: "Hero 228",
  theme: "dark",
});

export const Unavailable: Story = previewStory({
  name: "missing-component",
  displayName: "Missing",
  theme: "dark",
});
