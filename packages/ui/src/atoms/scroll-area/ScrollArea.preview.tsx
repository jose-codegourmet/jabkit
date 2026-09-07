import {
  FileArchiveIcon,
  FileCodeIcon,
  FileTextIcon,
  FolderIcon,
  ImageIcon,
  MusicIcon,
} from "lucide-react";
// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { ScrollArea } from "./ScrollArea";
import { scrollAreaMocks } from "./ScrollArea.mocks";

const kindIcon = {
  folder: FolderIcon,
  document: FileTextIcon,
  archive: FileArchiveIcon,
  image: ImageIcon,
  code: FileCodeIcon,
  media: MusicIcon,
};

function FileExplorer() {
  return (
    <div className="w-[320px] overflow-hidden rounded-[--radius] border border-border bg-card text-card-foreground">
      <div className="border-b border-border px-3 py-2.5">
        <p className="text-sm font-medium">Library</p>
        <p className="text-xs text-muted-foreground">12 items</p>
      </div>
      <ScrollArea aria-label="Library files" className="h-64">
        <div className="sticky top-0 z-10 grid grid-cols-[1fr_auto] gap-3 border-b border-border bg-card px-3 py-2 text-xs font-medium text-muted-foreground">
          <span>Name</span>
          <span>Size</span>
        </div>
        <ul className="p-1">
          {scrollAreaMocks.files.map((file) => {
            const Icon = kindIcon[file.kind];
            return (
              <li key={file.name}>
                <div className="grid grid-cols-[1fr_auto] items-center gap-3 rounded-[calc(var(--radius)-4px)] px-2 py-1.5 text-sm hover:bg-accent">
                  <span className="flex min-w-0 items-center gap-2">
                    <Icon className="size-4 shrink-0 text-muted-foreground" />
                    <span className="truncate">{file.name}</span>
                  </span>
                  <span className="rounded-full bg-secondary px-2 py-0.5 text-xs text-secondary-foreground">
                    {file.size}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </ScrollArea>
    </div>
  );
}

function TagRow() {
  return (
    <div className="w-[320px] overflow-hidden rounded-[--radius] border border-border bg-card p-3 text-card-foreground">
      <p className="mb-2 text-sm font-medium">Collections</p>
      <ScrollArea
        aria-label="Collection tags"
        className="w-full"
        orientation="horizontal"
      >
        <div className="flex w-max gap-2 pb-1">
          {scrollAreaMocks.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-secondary px-3 py-1 text-xs text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}

export default {
  Default: () => <FileExplorer />,
  Variants: () => <TagRow />,
};
