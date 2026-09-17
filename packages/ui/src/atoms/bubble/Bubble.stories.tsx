import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { Bubble, BubbleContent, BubbleGroup, BubbleReactions } from "./Bubble";
import { bubbleMocks } from "./Bubble.mocks";

const meta = {
  title: "Atoms/Bubble",
  component: Bubble,
  parameters: { layout: "centered" },
} satisfies Meta<typeof Bubble>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="flex w-full max-w-sm flex-col gap-8 py-12">
      <Bubble align="end">
        <BubbleContent>{bubbleMocks.default.userHello}</BubbleContent>
      </Bubble>
      <BubbleGroup>
        <Bubble variant="muted">
          <BubbleContent>{bubbleMocks.default.assistantIntro}</BubbleContent>
        </Bubble>
        <Bubble variant="muted">
          <BubbleContent>{bubbleMocks.default.assistantExplain}</BubbleContent>
          <BubbleReactions role="img" aria-label="Reaction: thumbs up">
            <span>👍</span>
          </BubbleReactions>
        </Bubble>
      </BubbleGroup>
      <Bubble align="end">
        <BubbleContent>{bubbleMocks.default.userSure}</BubbleContent>
      </Bubble>
      <Bubble variant="muted">
        <BubbleContent>{bubbleMocks.default.assistantMeta}</BubbleContent>
        <BubbleReactions
          role="img"
          aria-label="Reactions: thumbs up, fire, eyes, and 2 more"
        >
          <span>👍</span>
          <span>🔥</span>
          <span>👀</span>
          <span>+2</span>
        </BubbleReactions>
      </Bubble>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex w-full max-w-sm flex-col gap-12 py-12">
      <Bubble>
        <BubbleContent>{bubbleMocks.variants.default}</BubbleContent>
      </Bubble>
      <Bubble variant="secondary" align="end">
        <BubbleContent>{bubbleMocks.variants.secondary}</BubbleContent>
      </Bubble>
      <Bubble variant="muted">
        <BubbleContent>{bubbleMocks.variants.muted}</BubbleContent>
        <BubbleReactions role="img" aria-label="Reaction: thumbs up">
          <span>👍</span>
        </BubbleReactions>
      </Bubble>
      <Bubble variant="tinted" align="end">
        <BubbleContent>{bubbleMocks.variants.tinted}</BubbleContent>
      </Bubble>
      <Bubble variant="outline">
        <BubbleContent>{bubbleMocks.variants.outline}</BubbleContent>
      </Bubble>
      <Bubble variant="destructive" align="end">
        <BubbleContent>{bubbleMocks.variants.destructive}</BubbleContent>
        <BubbleReactions role="img" aria-label="Reaction: fire">
          <span>🔥</span>
        </BubbleReactions>
      </Bubble>
      <Bubble variant="ghost">
        <BubbleContent>
          <div className="flex flex-col gap-4">
            <p>
              Ghost bubbles work for assistant text, <strong>markdown</strong>,
              and other content that should not be framed.
            </p>
            <p>
              This is perfect for assistant messages that should not have a
              frame and can take the full width of the container. You can also
              render <code>code</code> in it.
            </p>
            <p>{bubbleMocks.variants.ghostFull}</p>
          </div>
        </BubbleContent>
      </Bubble>
    </div>
  ),
};

export const ThemeComparison: Story = {
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border sm:grid-cols-2">
      <div className="bg-background p-8">
        <div className="flex w-full max-w-sm flex-col gap-8 py-4">
          <Bubble align="end">
            <BubbleContent>{bubbleMocks.default.userHello}</BubbleContent>
          </Bubble>
          <Bubble variant="muted">
            <BubbleContent>{bubbleMocks.default.assistantIntro}</BubbleContent>
            <BubbleReactions role="img" aria-label="Reaction: thumbs up">
              <span>👍</span>
            </BubbleReactions>
          </Bubble>
        </div>
      </div>
      <div className="dark bg-background p-8">
        <div className="flex w-full max-w-sm flex-col gap-8 py-4">
          <Bubble align="end">
            <BubbleContent>{bubbleMocks.default.userHello}</BubbleContent>
          </Bubble>
          <Bubble variant="muted">
            <BubbleContent>{bubbleMocks.default.assistantIntro}</BubbleContent>
            <BubbleReactions role="img" aria-label="Reaction: thumbs up">
              <span>👍</span>
            </BubbleReactions>
          </Bubble>
        </div>
      </div>
    </div>
  ),
};
