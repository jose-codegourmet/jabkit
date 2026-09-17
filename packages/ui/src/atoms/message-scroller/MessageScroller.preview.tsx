// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { Avatar, AvatarFallback } from "@/atoms/avatar/Avatar";
import { Bubble, BubbleContent } from "@/atoms/bubble/Bubble";
import { Marker, MarkerContent } from "@/atoms/marker/Marker";
import {
  Message,
  MessageAvatar,
  MessageContent,
} from "@/atoms/message/Message";
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "./MessageScroller";
import { messageScrollerMocks } from "./MessageScroller.mocks";

const frameClass =
  "h-96 w-full max-w-sm overflow-hidden rounded-[--radius] border border-border bg-background";

export default {
  Default: () => (
    <div className={frameClass}>
      <MessageScrollerProvider autoScroll defaultScrollPosition="end">
        <MessageScroller>
          <MessageScrollerViewport>
            <MessageScrollerContent className="px-4 py-6">
              <MessageScrollerItem messageId="user-1" scrollAnchor>
                <Message align="end">
                  <MessageAvatar>
                    <Avatar>
                      <AvatarFallback>
                        {messageScrollerMocks.default.meInitials}
                      </AvatarFallback>
                    </Avatar>
                  </MessageAvatar>
                  <MessageContent>
                    <Bubble>
                      <BubbleContent>
                        {messageScrollerMocks.default.morning}
                      </BubbleContent>
                    </Bubble>
                  </MessageContent>
                </Message>
              </MessageScrollerItem>
              <MessageScrollerItem messageId="assistant-1">
                <Message>
                  <MessageAvatar>
                    <Avatar>
                      <AvatarFallback>
                        {messageScrollerMocks.default.otherInitials}
                      </AvatarFallback>
                    </Avatar>
                  </MessageAvatar>
                  <MessageContent>
                    <Bubble variant="muted">
                      <BubbleContent>
                        {messageScrollerMocks.default.workingOn}
                      </BubbleContent>
                    </Bubble>
                  </MessageContent>
                </Message>
              </MessageScrollerItem>
              <MessageScrollerItem messageId="user-2" scrollAnchor>
                <Message align="end">
                  <MessageAvatar>
                    <Avatar>
                      <AvatarFallback>
                        {messageScrollerMocks.default.meInitials}
                      </AvatarFallback>
                    </Avatar>
                  </MessageAvatar>
                  <MessageContent>
                    <Bubble>
                      <BubbleContent>
                        {messageScrollerMocks.default.scrollJump}
                      </BubbleContent>
                    </Bubble>
                  </MessageContent>
                </Message>
              </MessageScrollerItem>
              <MessageScrollerItem messageId="assistant-2">
                <Message>
                  <MessageAvatar>
                    <Avatar>
                      <AvatarFallback>
                        {messageScrollerMocks.default.otherInitials}
                      </AvatarFallback>
                    </Avatar>
                  </MessageAvatar>
                  <MessageContent>
                    <Bubble variant="muted">
                      <BubbleContent>
                        {messageScrollerMocks.default.followLive}
                      </BubbleContent>
                    </Bubble>
                  </MessageContent>
                </Message>
              </MessageScrollerItem>
              <MessageScrollerItem messageId="user-3" scrollAnchor>
                <Message align="end">
                  <MessageAvatar>
                    <Avatar>
                      <AvatarFallback>
                        {messageScrollerMocks.default.meInitials}
                      </AvatarFallback>
                    </Avatar>
                  </MessageAvatar>
                  <MessageContent>
                    <Bubble>
                      <BubbleContent>
                        {messageScrollerMocks.default.newTurn}
                      </BubbleContent>
                    </Bubble>
                  </MessageContent>
                </Message>
              </MessageScrollerItem>
            </MessageScrollerContent>
          </MessageScrollerViewport>
          <MessageScrollerButton />
        </MessageScroller>
      </MessageScrollerProvider>
    </div>
  ),
  GroupChat: () => (
    <div className={frameClass}>
      <MessageScrollerProvider
        autoScroll
        defaultScrollPosition="last-anchor"
        scrollPreviousItemPeek={64}
      >
        <MessageScroller>
          <MessageScrollerViewport>
            <MessageScrollerContent className="px-4 py-6">
              <MessageScrollerItem messageId="marcus-joined" scrollAnchor>
                <Marker variant="separator">
                  <MarkerContent>
                    {messageScrollerMocks.group.joined}
                  </MarkerContent>
                </Marker>
              </MessageScrollerItem>
              <MessageScrollerItem messageId="user-mention">
                <Message>
                  <MessageAvatar>
                    <Avatar>
                      <AvatarFallback>
                        {messageScrollerMocks.group.initials}
                      </AvatarFallback>
                    </Avatar>
                  </MessageAvatar>
                  <MessageContent>
                    <Bubble variant="muted">
                      <BubbleContent>
                        {messageScrollerMocks.group.mention}
                      </BubbleContent>
                    </Bubble>
                  </MessageContent>
                </Message>
              </MessageScrollerItem>
              <MessageScrollerItem messageId="user-ping">
                <Message>
                  <MessageAvatar>
                    <Avatar>
                      <AvatarFallback>
                        {messageScrollerMocks.group.initials}
                      </AvatarFallback>
                    </Avatar>
                  </MessageAvatar>
                  <MessageContent>
                    <Bubble variant="muted">
                      <BubbleContent>
                        {messageScrollerMocks.group.ping}
                      </BubbleContent>
                    </Bubble>
                  </MessageContent>
                </Message>
              </MessageScrollerItem>
              <MessageScrollerItem messageId="assistant-reply">
                <Message>
                  <MessageAvatar>
                    <Avatar>
                      <AvatarFallback>
                        {messageScrollerMocks.group.assistant}
                      </AvatarFallback>
                    </Avatar>
                  </MessageAvatar>
                  <MessageContent>
                    <Bubble variant="muted">
                      <BubbleContent>
                        {messageScrollerMocks.default.followLive}
                      </BubbleContent>
                    </Bubble>
                  </MessageContent>
                </Message>
              </MessageScrollerItem>
            </MessageScrollerContent>
          </MessageScrollerViewport>
          <MessageScrollerButton />
        </MessageScroller>
      </MessageScrollerProvider>
    </div>
  ),
};
