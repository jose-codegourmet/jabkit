import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { Avatar, AvatarFallback } from "@/atoms/avatar/Avatar";
import {
  Bubble,
  BubbleContent,
  BubbleGroup,
  BubbleReactions,
} from "@/atoms/bubble/Bubble";
import { Marker, MarkerContent } from "@/atoms/marker/Marker";
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageFooter,
  MessageGroup,
} from "./Message";
import { messageMocks } from "./Message.mocks";

const meta = {
  title: "Atoms/Message",
  component: Message,
  parameters: { layout: "centered" },
} satisfies Meta<typeof Message>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="flex w-full max-w-sm flex-col gap-6 py-12">
      <Message align="end">
        <MessageAvatar>
          <Avatar>
            <AvatarFallback>{messageMocks.default.meInitials}</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <Bubble>
            <BubbleContent>{messageMocks.default.deploy}</BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
      <Message>
        <MessageAvatar>
          <Avatar>
            <AvatarFallback>
              {messageMocks.default.otherInitials}
            </AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <Bubble variant="muted">
            <BubbleContent>{messageMocks.default.friday}</BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
      <Message align="end">
        <MessageAvatar>
          <Avatar>
            <AvatarFallback>{messageMocks.default.meInitials}</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <Bubble>
            <BubbleContent>{messageMocks.default.oneLine}</BubbleContent>
          </Bubble>
          <MessageFooter>{messageMocks.default.delivered}</MessageFooter>
        </MessageContent>
      </Message>
      <Message>
        <MessageAvatar>
          <Avatar>
            <AvatarFallback>
              {messageMocks.default.otherInitials}
            </AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <BubbleGroup>
            <Bubble variant="muted">
              <BubbleContent>
                {messageMocks.default.alwaysOneLine}
              </BubbleContent>
            </Bubble>
            <Bubble variant="muted">
              <BubbleContent>{messageMocks.default.takeALook}</BubbleContent>
              <BubbleReactions aria-label="Reactions: thumbs up">
                <span>👍</span>
              </BubbleReactions>
            </Bubble>
          </BubbleGroup>
        </MessageContent>
      </Message>
      <Marker role="status">
        <MarkerContent className="shimmer">
          {messageMocks.default.typing}
        </MarkerContent>
      </Marker>
    </div>
  ),
};

export const Group: Story = {
  render: () => (
    <div className="flex w-full max-w-sm flex-col gap-6 py-12">
      <MessageGroup>
        <Message>
          <MessageAvatar />
          <MessageContent>
            <Bubble variant="muted">
              <BubbleContent>{messageMocks.group.first}</BubbleContent>
            </Bubble>
          </MessageContent>
        </Message>
        <Message>
          <MessageAvatar>
            <Avatar>
              <AvatarFallback>{messageMocks.group.initials}</AvatarFallback>
            </Avatar>
          </MessageAvatar>
          <MessageContent>
            <Bubble variant="muted">
              <BubbleContent>{messageMocks.group.second}</BubbleContent>
            </Bubble>
          </MessageContent>
        </Message>
      </MessageGroup>
    </div>
  ),
};

export const ThemeComparison: Story = {
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border sm:grid-cols-2">
      <div className="bg-background p-8">
        <div className="flex w-full max-w-sm flex-col gap-6">
          <Message align="end">
            <MessageAvatar>
              <Avatar>
                <AvatarFallback>
                  {messageMocks.default.meInitials}
                </AvatarFallback>
              </Avatar>
            </MessageAvatar>
            <MessageContent>
              <Bubble>
                <BubbleContent>{messageMocks.default.oneLine}</BubbleContent>
              </Bubble>
              <MessageFooter>{messageMocks.default.delivered}</MessageFooter>
            </MessageContent>
          </Message>
          <Message>
            <MessageAvatar>
              <Avatar>
                <AvatarFallback>
                  {messageMocks.default.otherInitials}
                </AvatarFallback>
              </Avatar>
            </MessageAvatar>
            <MessageContent>
              <Bubble variant="muted">
                <BubbleContent>{messageMocks.default.takeALook}</BubbleContent>
              </Bubble>
            </MessageContent>
          </Message>
        </div>
      </div>
      <div className="dark bg-background p-8">
        <div className="flex w-full max-w-sm flex-col gap-6">
          <Message align="end">
            <MessageAvatar>
              <Avatar>
                <AvatarFallback>
                  {messageMocks.default.meInitials}
                </AvatarFallback>
              </Avatar>
            </MessageAvatar>
            <MessageContent>
              <Bubble>
                <BubbleContent>{messageMocks.default.oneLine}</BubbleContent>
              </Bubble>
              <MessageFooter>{messageMocks.default.delivered}</MessageFooter>
            </MessageContent>
          </Message>
          <Message>
            <MessageAvatar>
              <Avatar>
                <AvatarFallback>
                  {messageMocks.default.otherInitials}
                </AvatarFallback>
              </Avatar>
            </MessageAvatar>
            <MessageContent>
              <Bubble variant="muted">
                <BubbleContent>{messageMocks.default.takeALook}</BubbleContent>
              </Bubble>
            </MessageContent>
          </Message>
        </div>
      </div>
    </div>
  ),
};
