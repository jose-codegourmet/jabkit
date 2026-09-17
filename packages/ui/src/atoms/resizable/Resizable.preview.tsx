// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./Resizable";
import { resizableMocks } from "./Resizable.mocks";

export default {
  Default: () => (
    <ResizablePanelGroup
      className="max-w-sm rounded-lg border border-border"
      orientation="horizontal"
    >
      <ResizablePanel defaultSize="50%">
        <div className="flex h-[200px] items-center justify-center p-6">
          <span className="font-semibold">{resizableMocks.default.one}</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="50%">
        <ResizablePanelGroup orientation="vertical">
          <ResizablePanel defaultSize="25%">
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">
                {resizableMocks.default.two}
              </span>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize="75%">
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">
                {resizableMocks.default.three}
              </span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
  Vertical: () => (
    <ResizablePanelGroup
      className="min-h-[200px] max-w-sm rounded-lg border border-border"
      orientation="vertical"
    >
      <ResizablePanel defaultSize="25%">
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">
            {resizableMocks.vertical.header}
          </span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize="75%">
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">
            {resizableMocks.vertical.content}
          </span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
  Handle: () => (
    <ResizablePanelGroup
      className="min-h-[200px] max-w-sm rounded-lg border border-border"
      orientation="horizontal"
    >
      <ResizablePanel defaultSize="25%">
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">{resizableMocks.handle.sidebar}</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="75%">
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">{resizableMocks.handle.content}</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
};
