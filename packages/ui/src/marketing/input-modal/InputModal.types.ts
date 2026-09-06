import type { FormEventHandler, HTMLAttributes } from "react";

export type InputModalPresentation = "dialog" | "inline";

export type InputModalTabId = "upload" | "url" | "existing";

export type InputModalSourceKind = "pdf" | "url" | "audio";

export type InputModalSourceStatus = "completed" | "processing" | "draft";

export interface InputModalOption {
  id: string;
  label: string;
  hint?: string;
}

export interface InputModalVoice {
  id: string;
  name: string;
  fallback: string;
  src?: string;
  alt?: string;
}

export interface InputModalSource {
  id: string;
  name: string;
  kind: InputModalSourceKind;
  status: InputModalSourceStatus;
  createdAt: string;
  size?: string;
  duration?: string;
}

export interface InputModalUrlKind {
  id: string;
  label: string;
}

export interface InputModalSubmitPayload {
  tab: InputModalTabId;
  url: string;
  fileName?: string;
  sourceId?: string;
  formatId: string;
  hostVoiceId: string;
  guestVoiceId: string;
  engineId: string;
  languageId: string;
  qualityId: string;
}

export interface InputModalProps
  extends Omit<HTMLAttributes<HTMLElement>, "title" | "onSubmit"> {
  triggerLabel?: string;
  title?: string;
  description?: string;
  uploadTabLabel?: string;
  urlTabLabel?: string;
  existingTabLabel?: string;
  uploadHeading?: string;
  uploadHint?: string;
  browseLabel?: string;
  urlLabel?: string;
  urlPlaceholder?: string;
  urlReadyLabel?: string;
  searchPlaceholder?: string;
  formatLabel?: string;
  hostVoiceLabel?: string;
  guestVoiceLabel?: string;
  engineLabel?: string;
  languageLabel?: string;
  qualityLabel?: string;
  recentLabel?: string;
  generateLabel?: string;
  accept?: string;
  defaultTab?: InputModalTabId;
  defaultUrl?: string;
  defaultSourceId?: string;
  defaultFormatId?: string;
  defaultHostVoiceId?: string;
  defaultGuestVoiceId?: string;
  defaultEngineId?: string;
  defaultLanguageId?: string;
  defaultQualityId?: string;
  defaultOpen?: boolean;
  presentation?: InputModalPresentation;
  urlKinds?: InputModalUrlKind[];
  formats?: InputModalOption[];
  hostVoices?: InputModalVoice[];
  guestVoices?: InputModalVoice[];
  engines?: InputModalOption[];
  languages?: InputModalOption[];
  qualities?: InputModalOption[];
  sources?: InputModalSource[];
  onGenerate?: (payload: InputModalSubmitPayload) => void;
  onSubmit?: FormEventHandler<HTMLFormElement>;
}
