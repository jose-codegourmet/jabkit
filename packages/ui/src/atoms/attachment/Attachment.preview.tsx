import {
  CheckIcon,
  ClockIcon,
  FileCodeIcon,
  FileTextIcon,
  FileWarningIcon,
  LoaderCircleIcon,
  RefreshCwIcon,
  XIcon,
} from "lucide-react";
// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentTitle,
} from "./Attachment";
import { attachmentMocks } from "./Attachment.mocks";

export default {
  Default: () => (
    <div className="mx-auto flex w-full max-w-sm flex-col gap-3 py-4">
      <AttachmentGroup>
        {attachmentMocks.images.map((image) => (
          <Attachment key={image.name} orientation="vertical">
            <AttachmentMedia variant="image">
              <img src={image.src} alt={image.alt} />
            </AttachmentMedia>
            <AttachmentContent>
              <AttachmentTitle>{image.name}</AttachmentTitle>
              <AttachmentDescription>{image.meta}</AttachmentDescription>
            </AttachmentContent>
          </Attachment>
        ))}
      </AttachmentGroup>
      <Attachment state="uploading" className="w-full">
        <AttachmentMedia>
          <LoaderCircleIcon
            data-slot="spinner"
            className="animate-spin motion-reduce:animate-none"
          />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>{attachmentMocks.uploading.title}</AttachmentTitle>
          <AttachmentDescription>
            {attachmentMocks.uploading.description}
          </AttachmentDescription>
        </AttachmentContent>
        <AttachmentActions>
          <AttachmentAction aria-label="Cancel upload">
            <XIcon />
          </AttachmentAction>
        </AttachmentActions>
      </Attachment>
      <Attachment className="w-full">
        <AttachmentMedia>
          <FileCodeIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>{attachmentMocks.file.title}</AttachmentTitle>
          <AttachmentDescription>
            {attachmentMocks.file.description}
          </AttachmentDescription>
        </AttachmentContent>
        <AttachmentActions>
          <AttachmentAction aria-label={`Remove ${attachmentMocks.file.title}`}>
            <XIcon />
          </AttachmentAction>
        </AttachmentActions>
      </Attachment>
    </div>
  ),
  Variants: () => (
    <div className="mx-auto flex w-full max-w-sm flex-col gap-2 py-4">
      <Attachment state="idle" className="w-full">
        <AttachmentMedia>
          <ClockIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>{attachmentMocks.idle.title}</AttachmentTitle>
          <AttachmentDescription>
            {attachmentMocks.idle.description}
          </AttachmentDescription>
        </AttachmentContent>
        <AttachmentActions>
          <AttachmentAction aria-label={`Remove ${attachmentMocks.idle.title}`}>
            <XIcon />
          </AttachmentAction>
        </AttachmentActions>
      </Attachment>
      <Attachment state="uploading" className="w-full">
        <AttachmentMedia>
          <LoaderCircleIcon
            data-slot="spinner"
            className="animate-spin motion-reduce:animate-none"
          />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>design-system.zip</AttachmentTitle>
          <AttachmentDescription>Uploading · 64%</AttachmentDescription>
        </AttachmentContent>
        <AttachmentActions>
          <AttachmentAction aria-label="Cancel upload">
            <XIcon />
          </AttachmentAction>
        </AttachmentActions>
      </Attachment>
      <Attachment state="processing" className="w-full">
        <AttachmentMedia>
          <FileTextIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>{attachmentMocks.processing.title}</AttachmentTitle>
          <AttachmentDescription>
            {attachmentMocks.processing.description}
          </AttachmentDescription>
        </AttachmentContent>
        <AttachmentActions>
          <AttachmentAction
            aria-label={`Remove ${attachmentMocks.processing.title}`}
          >
            <XIcon />
          </AttachmentAction>
        </AttachmentActions>
      </Attachment>
      <Attachment state="error" className="w-full">
        <AttachmentMedia>
          <FileWarningIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>{attachmentMocks.error.title}</AttachmentTitle>
          <AttachmentDescription>
            {attachmentMocks.error.description}
          </AttachmentDescription>
        </AttachmentContent>
        <AttachmentActions>
          <AttachmentAction aria-label="Retry upload">
            <RefreshCwIcon />
          </AttachmentAction>
          <AttachmentAction
            aria-label={`Remove ${attachmentMocks.error.title}`}
          >
            <XIcon />
          </AttachmentAction>
        </AttachmentActions>
      </Attachment>
      <Attachment state="done" className="w-full">
        <AttachmentMedia>
          <CheckIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>{attachmentMocks.done.title}</AttachmentTitle>
          <AttachmentDescription>
            {attachmentMocks.done.description}
          </AttachmentDescription>
        </AttachmentContent>
        <AttachmentActions>
          <AttachmentAction aria-label={`Remove ${attachmentMocks.done.title}`}>
            <XIcon />
          </AttachmentAction>
        </AttachmentActions>
      </Attachment>
    </div>
  ),
};
