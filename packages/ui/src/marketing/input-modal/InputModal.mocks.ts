import type { InputModalProps } from "./InputModal.types";

export const inputModalMocks = {
  default: {
    triggerLabel: "Create audio show",
    title: "Create your audio show",
    description:
      "Drop a document or paste a link. Fieldcast turns it into a voiced episode you can preview, edit, and download.",
    defaultOpen: true,
    presentation: "dialog",
  },
  alternate: {
    triggerLabel: "Import a briefing",
    title: "Turn a briefing into a show",
    description:
      "Paste an article, pick a saved file, or drop a PDF. Choose voices, then generate a studio-quality cut.",
    defaultTab: "url",
    defaultUrl: "https://fieldcast.studio/notes/harbor-briefing",
    defaultFormatId: "narrative",
    defaultHostVoiceId: "rowan",
    defaultGuestVoiceId: "priya",
    defaultEngineId: "fieldcast-v2",
    defaultLanguageId: "english",
    defaultQualityId: "high",
    defaultSourceId: "2",
    defaultOpen: true,
    presentation: "dialog",
  },
} as const satisfies Record<string, InputModalProps>;
