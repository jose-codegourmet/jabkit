"use client";

import {
  ChevronDownIcon,
  ClockIcon,
  FileTextIcon,
  FolderOpenIcon,
  GlobeIcon,
  HeadphonesIcon,
  ImageIcon,
  LinkIcon,
  PlayIcon,
  SearchIcon,
  UploadIcon,
} from "lucide-react";
import {
  type ChangeEvent,
  type DragEvent,
  type FormEvent,
  type KeyboardEvent,
  type ReactNode,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/atoms/avatar/Avatar";
import { Badge } from "@/atoms/badge";
import { Button } from "@/atoms/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/atoms/dialog/Dialog";
import { Input } from "@/atoms/input";
import { Label } from "@/atoms/label";
import { cn } from "@/lib/cn";
import type {
  InputModalOption,
  InputModalProps,
  InputModalSource,
  InputModalSourceKind,
  InputModalSourceStatus,
  InputModalTabId,
  InputModalUrlKind,
  InputModalVoice,
} from "./InputModal.types";

const DEFAULT_URL_KINDS: InputModalUrlKind[] = [
  { id: "articles", label: "Articles" },
  { id: "video", label: "Video" },
  { id: "blogs", label: "Blogs" },
  { id: "news", label: "News" },
];

const DEFAULT_FORMATS: InputModalOption[] = [
  { id: "interview", label: "Interview mode", hint: "Default" },
  { id: "narrative", label: "Narrative style" },
  { id: "discussion", label: "Panel discussion" },
  { id: "monologue", label: "Solo monologue" },
];

const DEFAULT_HOST_VOICES: InputModalVoice[] = [
  {
    id: "mira",
    name: "Mira Cole",
    fallback: "MC",
    src: "/assets/bd48582e630a15fa.webp",
    alt: "Portrait of Mira Cole",
  },
  {
    id: "rowan",
    name: "Rowan Hale",
    fallback: "RH",
    src: "/assets/8e9489842d5e2cdf.webp",
    alt: "Portrait of Rowan Hale",
  },
  {
    id: "eli",
    name: "Eli Voss",
    fallback: "EV",
    src: "/assets/8c18989537b833e8.webp",
    alt: "Portrait of Eli Voss",
  },
];

const DEFAULT_GUEST_VOICES: InputModalVoice[] = [
  {
    id: "priya",
    name: "Priya Nair",
    fallback: "PN",
    src: "/assets/4132445424a19cc6.webp",
    alt: "Portrait of Priya Nair",
  },
  {
    id: "mira",
    name: "Mira Cole",
    fallback: "MC",
    src: "/assets/bd48582e630a15fa.webp",
    alt: "Portrait of Mira Cole",
  },
  {
    id: "rowan",
    name: "Rowan Hale",
    fallback: "RH",
    src: "/assets/8e9489842d5e2cdf.webp",
    alt: "Portrait of Rowan Hale",
  },
];

const DEFAULT_ENGINES: InputModalOption[] = [
  { id: "fieldcast-v2", label: "Fieldcast Voice v2", hint: "Multilingual" },
  { id: "fieldcast-v1", label: "Fieldcast Voice v1" },
  { id: "studio-lite", label: "Studio Lite" },
];

const DEFAULT_LANGUAGES: InputModalOption[] = [
  { id: "auto", label: "Auto-detect" },
  { id: "english", label: "English" },
  { id: "spanish", label: "Spanish" },
  { id: "french", label: "French" },
  { id: "german", label: "German" },
];

const DEFAULT_QUALITIES: InputModalOption[] = [
  { id: "studio", label: "Studio quality" },
  { id: "high", label: "High quality" },
  { id: "standard", label: "Standard quality" },
];

const DEFAULT_SOURCES: InputModalSource[] = [
  {
    id: "1",
    name: "Harbor thinking talk.pdf",
    kind: "pdf",
    size: "45.4 KB",
    createdAt: "2 hours ago",
    status: "completed",
  },
  {
    id: "2",
    name: "Studio tools article",
    kind: "url",
    duration: "12:34",
    createdAt: "1 day ago",
    status: "completed",
  },
  {
    id: "3",
    name: "Field notes 2026",
    kind: "audio",
    duration: "8:45",
    createdAt: "3 days ago",
    status: "processing",
  },
  {
    id: "4",
    name: "Climate briefing",
    kind: "pdf",
    size: "2.1 MB",
    createdAt: "1 week ago",
    status: "draft",
  },
];

const TABS: { id: InputModalTabId; icon: typeof UploadIcon }[] = [
  { id: "upload", icon: UploadIcon },
  { id: "url", icon: LinkIcon },
  { id: "existing", icon: FolderOpenIcon },
];

function firstId<T extends { id: string }>(items: T[], preferred?: string) {
  if (preferred && items.some((item) => item.id === preferred))
    return preferred;
  return items[0]?.id ?? "";
}

function sourceIcon(kind: InputModalSourceKind) {
  if (kind === "url") return GlobeIcon;
  if (kind === "audio") return HeadphonesIcon;
  return FileTextIcon;
}

function statusBadge(status: InputModalSourceStatus) {
  if (status === "completed") return "bg-success/15 text-success";
  if (status === "processing") return "bg-warning/20 text-warning-foreground";
  return "bg-muted text-muted-foreground";
}

function urlKindIcon(id: string) {
  if (id === "video") return PlayIcon;
  if (id === "news") return ImageIcon;
  if (id === "blogs") return FileTextIcon;
  return GlobeIcon;
}

function FieldSelect({
  id,
  label,
  value,
  options,
  onChange,
  leading,
}: {
  id: string;
  label: string;
  value: string;
  options: InputModalOption[];
  onChange: (value: string) => void;
  leading?: ReactNode;
}) {
  const selected = options.find((option) => option.id === value);

  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <div className="relative flex items-center gap-3 rounded-[--radius] border border-input bg-background px-3 focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/50">
        {leading}
        <select
          className="h-12 w-full min-w-0 appearance-none bg-transparent text-sm font-medium text-foreground outline-none"
          id={id}
          onChange={(event) => onChange(event.target.value)}
          value={value}
        >
          {options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.label}
            </option>
          ))}
        </select>
        {selected?.hint ? (
          <span className="pointer-events-none hidden shrink-0 rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground sm:inline">
            {selected.hint}
          </span>
        ) : null}
        <ChevronDownIcon
          aria-hidden="true"
          className="pointer-events-none size-4 shrink-0 text-muted-foreground"
        />
      </div>
    </div>
  );
}

function VoiceMark({ voice }: { voice?: InputModalVoice }) {
  if (!voice) return null;
  return (
    <Avatar size="sm">
      {voice.src ? <AvatarImage alt={voice.alt ?? ""} src={voice.src} /> : null}
      <AvatarFallback>{voice.fallback}</AvatarFallback>
    </Avatar>
  );
}

function InputModalPanel({
  title,
  description,
  uploadTabLabel,
  urlTabLabel,
  existingTabLabel,
  uploadHeading,
  uploadHint,
  browseLabel,
  urlLabel,
  urlPlaceholder,
  urlReadyLabel,
  searchPlaceholder,
  formatLabel,
  hostVoiceLabel,
  guestVoiceLabel,
  engineLabel,
  languageLabel,
  qualityLabel,
  recentLabel,
  generateLabel,
  accept,
  urlKinds,
  formats,
  hostVoices,
  guestVoices,
  engines,
  languages,
  qualities,
  sources,
  tab,
  url,
  search,
  sourceId,
  formatId,
  hostVoiceId,
  guestVoiceId,
  engineId,
  languageId,
  qualityId,
  fileName,
  dragging,
  inDialog,
  onTabChange,
  onUrlChange,
  onSearchChange,
  onSourceChange,
  onFormatChange,
  onHostVoiceChange,
  onGuestVoiceChange,
  onEngineChange,
  onLanguageChange,
  onQualityChange,
  onFileChange,
  onDragOver,
  onDragLeave,
  onDrop,
  onSubmit,
}: {
  title: string;
  description: string;
  uploadTabLabel: string;
  urlTabLabel: string;
  existingTabLabel: string;
  uploadHeading: string;
  uploadHint: string;
  browseLabel: string;
  urlLabel: string;
  urlPlaceholder: string;
  urlReadyLabel: string;
  searchPlaceholder: string;
  formatLabel: string;
  hostVoiceLabel: string;
  guestVoiceLabel: string;
  engineLabel: string;
  languageLabel: string;
  qualityLabel: string;
  recentLabel: string;
  generateLabel: string;
  accept: string;
  urlKinds: InputModalUrlKind[];
  formats: InputModalOption[];
  hostVoices: InputModalVoice[];
  guestVoices: InputModalVoice[];
  engines: InputModalOption[];
  languages: InputModalOption[];
  qualities: InputModalOption[];
  sources: InputModalSource[];
  tab: InputModalTabId;
  url: string;
  search: string;
  sourceId: string;
  formatId: string;
  hostVoiceId: string;
  guestVoiceId: string;
  engineId: string;
  languageId: string;
  qualityId: string;
  fileName?: string;
  dragging: boolean;
  inDialog: boolean;
  onTabChange: (tab: InputModalTabId) => void;
  onUrlChange: (value: string) => void;
  onSearchChange: (value: string) => void;
  onSourceChange: (id: string) => void;
  onFormatChange: (id: string) => void;
  onHostVoiceChange: (id: string) => void;
  onGuestVoiceChange: (id: string) => void;
  onEngineChange: (id: string) => void;
  onLanguageChange: (id: string) => void;
  onQualityChange: (id: string) => void;
  onFileChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onDragOver: (event: DragEvent<HTMLDivElement>) => void;
  onDragLeave: () => void;
  onDrop: (event: DragEvent<HTMLDivElement>) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}) {
  const fileRef = useRef<HTMLInputElement>(null);
  const headingId = useId();
  const tablistId = useId();
  const urlId = useId();
  const searchId = useId();
  const formatIdAttr = useId();
  const hostId = useId();
  const guestId = useId();
  const engineIdAttr = useId();
  const languageIdAttr = useId();
  const qualityIdAttr = useId();
  const fileId = useId();
  const Title = inDialog ? DialogTitle : "h2";
  const Description = inDialog ? DialogDescription : "p";
  const tabLabels: Record<InputModalTabId, string> = {
    upload: uploadTabLabel,
    url: urlTabLabel,
    existing: existingTabLabel,
  };
  const filteredSources = useMemo(
    () =>
      sources.filter((source) =>
        source.name.toLowerCase().includes(search.trim().toLowerCase()),
      ),
    [search, sources],
  );
  const hostVoice = hostVoices.find((voice) => voice.id === hostVoiceId);
  const guestVoice = guestVoices.find((voice) => voice.id === guestVoiceId);

  function onTabKeyDown(
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const next =
      TABS[
        (index + (event.key === "ArrowRight" ? 1 : -1) + TABS.length) %
          TABS.length
      ];
    if (next) onTabChange(next.id);
  }

  return (
    <form className="flex flex-col gap-6 p-5 sm:p-7" onSubmit={onSubmit}>
      <div className="flex items-start gap-3 pr-8">
        <span
          aria-hidden="true"
          className="grid size-11 shrink-0 place-items-center rounded-[--radius] bg-foreground text-background"
        >
          <HeadphonesIcon className="size-5" />
        </span>
        <div className="min-w-0 space-y-1.5">
          <Title
            className="text-base font-semibold tracking-tight sm:text-lg"
            id={headingId}
          >
            {title}
          </Title>
          <Description className="text-sm leading-6 text-muted-foreground">
            {description}
          </Description>
        </div>
      </div>

      <div
        aria-label="Source"
        className="grid grid-cols-3 gap-1 rounded-[--radius] bg-muted p-1"
        id={tablistId}
        role="tablist"
      >
        {TABS.map((item, index) => {
          const Icon = item.icon;
          const selected = tab === item.id;
          return (
            <button
              aria-controls={`${tablistId}-${item.id}`}
              aria-selected={selected}
              className={cn(
                "inline-flex items-center justify-center gap-1.5 rounded-[calc(var(--radius)-0.2rem)] px-2 py-2 text-xs font-medium outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring sm:text-sm",
                selected
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground",
              )}
              id={`${tablistId}-tab-${item.id}`}
              key={item.id}
              onClick={() => onTabChange(item.id)}
              onKeyDown={(event) => onTabKeyDown(event, index)}
              role="tab"
              tabIndex={selected ? 0 : -1}
              type="button"
            >
              <Icon aria-hidden="true" className="size-3.5" />
              <span className="truncate">{tabLabels[item.id]}</span>
            </button>
          );
        })}
      </div>

      <div
        aria-labelledby={`${tablistId}-tab-${tab}`}
        id={`${tablistId}-${tab}`}
        role="tabpanel"
      >
        {tab === "upload" ? (
          <div>
            <input
              accept={accept}
              className="sr-only"
              id={fileId}
              onChange={onFileChange}
              ref={fileRef}
              type="file"
            />
            <button
              className={cn(
                "w-full rounded-[--radius] border border-dashed border-border bg-muted/40 px-6 py-8 text-center outline-none focus-visible:ring-2 focus-visible:ring-ring",
                dragging && "border-primary bg-accent",
              )}
              onClick={() => fileRef.current?.click()}
              onDragLeave={onDragLeave}
              onDragOver={onDragOver}
              onDrop={onDrop}
              type="button"
            >
              <span
                aria-hidden="true"
                className="mx-auto mb-4 grid size-12 place-items-center rounded-full bg-secondary text-muted-foreground"
              >
                <UploadIcon className="size-5" />
              </span>
              <span className="block text-base font-medium">
                {uploadHeading}
              </span>
              <span className="mt-1 block text-sm text-muted-foreground">
                {uploadHint}
              </span>
              {fileName ? (
                <span className="mt-2 block truncate text-sm text-foreground">
                  {fileName}
                </span>
              ) : null}
              <span className="mt-4 inline-flex h-11 items-center justify-center rounded-[--radius] border border-border bg-secondary px-4 text-sm font-medium text-secondary-foreground">
                {browseLabel}
              </span>
            </button>
          </div>
        ) : null}

        {tab === "url" ? (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor={urlId}>{urlLabel}</Label>
              <Input
                className="h-12 rounded-[--radius] bg-background"
                id={urlId}
                onChange={(event) => onUrlChange(event.target.value)}
                placeholder={urlPlaceholder}
                type="url"
                value={url}
              />
            </div>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {urlKinds.map((kind) => {
                const Icon = urlKindIcon(kind.id);
                return (
                  <div
                    className="flex items-center gap-2 rounded-[--radius] border border-border bg-muted/40 px-3 py-3 text-xs text-muted-foreground"
                    key={kind.id}
                  >
                    <Icon aria-hidden="true" className="size-4 shrink-0" />
                    <span>{kind.label}</span>
                  </div>
                );
              })}
            </div>
            {url.trim() ? (
              <div className="flex items-center gap-3 rounded-[--radius] border border-border bg-muted/40 p-3">
                <span
                  aria-hidden="true"
                  className="grid size-8 shrink-0 place-items-center rounded-[calc(var(--radius)-0.25rem)] bg-secondary text-muted-foreground"
                >
                  <GlobeIcon className="size-4" />
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">
                    {urlReadyLabel}
                  </p>
                  <p className="truncate text-xs text-muted-foreground">
                    {url}
                  </p>
                </div>
              </div>
            ) : null}
          </div>
        ) : null}

        {tab === "existing" ? (
          <div className="space-y-3">
            <div className="relative">
              <SearchIcon
                aria-hidden="true"
                className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
              />
              <Input
                aria-label={searchPlaceholder}
                className="h-12 rounded-[--radius] bg-background pl-9"
                id={searchId}
                onChange={(event) => onSearchChange(event.target.value)}
                placeholder={searchPlaceholder}
                type="search"
                value={search}
              />
            </div>
            <ul className="max-h-60 space-y-2 overflow-y-auto">
              {filteredSources.map((source) => {
                const Icon = sourceIcon(source.kind);
                const selected = source.id === sourceId;
                return (
                  <li key={source.id}>
                    <button
                      aria-pressed={selected}
                      className={cn(
                        "flex w-full items-center gap-3 rounded-[--radius] border p-3 text-left outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring",
                        selected
                          ? "border-primary bg-accent"
                          : "border-border bg-background hover:bg-muted/60",
                      )}
                      onClick={() => onSourceChange(source.id)}
                      type="button"
                    >
                      <span
                        aria-hidden="true"
                        className="grid size-8 shrink-0 place-items-center rounded-[calc(var(--radius)-0.25rem)] bg-secondary text-muted-foreground"
                      >
                        <Icon className="size-4" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="flex flex-wrap items-center gap-2">
                          <span className="truncate text-sm font-medium">
                            {source.name}
                          </span>
                          <Badge
                            className={cn(
                              "capitalize",
                              statusBadge(source.status),
                            )}
                            variant="ghost"
                          >
                            {source.status}
                          </Badge>
                        </span>
                        <span className="mt-1 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                          <span className="inline-flex items-center gap-1">
                            <ClockIcon className="size-3" />
                            {source.createdAt}
                          </span>
                          {source.size ? <span>{source.size}</span> : null}
                          {source.duration ? (
                            <span className="inline-flex items-center gap-1">
                              <PlayIcon className="size-3" />
                              {source.duration}
                            </span>
                          ) : null}
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : null}
      </div>

      <div className="space-y-4">
        <FieldSelect
          id={formatIdAttr}
          label={formatLabel}
          onChange={onFormatChange}
          options={formats}
          value={formatId}
        />
        <div className="grid gap-4 sm:grid-cols-2">
          <FieldSelect
            id={hostId}
            label={hostVoiceLabel}
            leading={<VoiceMark voice={hostVoice} />}
            onChange={onHostVoiceChange}
            options={hostVoices.map((voice) => ({
              id: voice.id,
              label: voice.name,
            }))}
            value={hostVoiceId}
          />
          <FieldSelect
            id={guestId}
            label={guestVoiceLabel}
            leading={<VoiceMark voice={guestVoice} />}
            onChange={onGuestVoiceChange}
            options={guestVoices.map((voice) => ({
              id: voice.id,
              label: voice.name,
            }))}
            value={guestVoiceId}
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <FieldSelect
            id={engineIdAttr}
            label={engineLabel}
            onChange={onEngineChange}
            options={engines}
            value={engineId}
          />
          <FieldSelect
            id={languageIdAttr}
            label={languageLabel}
            onChange={onLanguageChange}
            options={languages}
            value={languageId}
          />
        </div>
        <FieldSelect
          id={qualityIdAttr}
          label={qualityLabel}
          onChange={onQualityChange}
          options={qualities}
          value={qualityId}
        />
      </div>

      <div className="flex flex-col-reverse gap-3 border-t border-border pt-5 sm:flex-row sm:justify-end">
        <Button
          className="gap-2"
          onClick={() => onTabChange("existing")}
          type="button"
          variant="secondary"
        >
          {recentLabel}
          <ChevronDownIcon aria-hidden="true" className="size-4" />
        </Button>
        <Button type="submit">{generateLabel}</Button>
      </div>
    </form>
  );
}

export function InputModal({
  className,
  triggerLabel = "Create audio show",
  title = "Create your audio show",
  description = "Drop a document or paste a link. Fieldcast turns it into a voiced episode you can preview, edit, and download.",
  uploadTabLabel = "Upload",
  urlTabLabel = "URL",
  existingTabLabel = "Existing",
  uploadHeading = "Drop your file here",
  uploadHint = "PDF, DOCX, or TXT up to 10 MB",
  browseLabel = "Browse files",
  urlLabel = "Content URL",
  urlPlaceholder = "https://example.com/article",
  urlReadyLabel = "Ready to import",
  searchPlaceholder = "Search sources",
  formatLabel = "Format style",
  hostVoiceLabel = "Host voice",
  guestVoiceLabel = "Guest voice",
  engineLabel = "Voice engine",
  languageLabel = "Language",
  qualityLabel = "Audio quality",
  recentLabel = "Recent",
  generateLabel = "Generate",
  accept = ".pdf,.doc,.docx,.txt,application/pdf,text/plain",
  defaultTab = "upload",
  defaultUrl = "",
  defaultSourceId,
  defaultFormatId,
  defaultHostVoiceId,
  defaultGuestVoiceId,
  defaultEngineId,
  defaultLanguageId,
  defaultQualityId,
  defaultOpen = false,
  presentation = "dialog",
  urlKinds = DEFAULT_URL_KINDS,
  formats = DEFAULT_FORMATS,
  hostVoices = DEFAULT_HOST_VOICES,
  guestVoices = DEFAULT_GUEST_VOICES,
  engines = DEFAULT_ENGINES,
  languages = DEFAULT_LANGUAGES,
  qualities = DEFAULT_QUALITIES,
  sources = DEFAULT_SOURCES,
  onGenerate,
  onSubmit,
  ...props
}: InputModalProps) {
  const [tab, setTab] = useState<InputModalTabId>(defaultTab);
  const [url, setUrl] = useState(defaultUrl);
  const [search, setSearch] = useState("");
  const [sourceId, setSourceId] = useState(() =>
    firstId(sources, defaultSourceId),
  );
  const [formatId, setFormatId] = useState(() =>
    firstId(formats, defaultFormatId),
  );
  const [hostVoiceId, setHostVoiceId] = useState(() =>
    firstId(hostVoices, defaultHostVoiceId),
  );
  const [guestVoiceId, setGuestVoiceId] = useState(() =>
    firstId(guestVoices, defaultGuestVoiceId),
  );
  const [engineId, setEngineId] = useState(() =>
    firstId(engines, defaultEngineId),
  );
  const [languageId, setLanguageId] = useState(() =>
    firstId(languages, defaultLanguageId),
  );
  const [qualityId, setQualityId] = useState(() =>
    firstId(qualities, defaultQualityId),
  );
  const [fileName, setFileName] = useState<string | undefined>();
  const [dragging, setDragging] = useState(false);

  const applyFile = (file?: File) => {
    setFileName(file?.name);
    if (file) setTab("upload");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    onSubmit?.(event);
    if (event.defaultPrevented) return;
    event.preventDefault();
    onGenerate?.({
      tab,
      url: url.trim(),
      fileName,
      sourceId: tab === "existing" ? sourceId : undefined,
      formatId,
      hostVoiceId,
      guestVoiceId,
      engineId,
      languageId,
      qualityId,
    });
  };

  const panel = (
    <InputModalPanel
      accept={accept}
      browseLabel={browseLabel}
      description={description}
      dragging={dragging}
      engineId={engineId}
      engineLabel={engineLabel}
      engines={engines}
      existingTabLabel={existingTabLabel}
      fileName={fileName}
      formatId={formatId}
      formatLabel={formatLabel}
      formats={formats}
      generateLabel={generateLabel}
      guestVoiceId={guestVoiceId}
      guestVoiceLabel={guestVoiceLabel}
      guestVoices={guestVoices}
      hostVoiceId={hostVoiceId}
      hostVoiceLabel={hostVoiceLabel}
      hostVoices={hostVoices}
      inDialog={presentation === "dialog"}
      languageId={languageId}
      languageLabel={languageLabel}
      languages={languages}
      onDragLeave={() => setDragging(false)}
      onDragOver={(event) => {
        event.preventDefault();
        setDragging(true);
      }}
      onDrop={(event) => {
        event.preventDefault();
        setDragging(false);
        applyFile(event.dataTransfer.files[0]);
      }}
      onEngineChange={setEngineId}
      onFileChange={(event) => applyFile(event.target.files?.[0])}
      onFormatChange={setFormatId}
      onGuestVoiceChange={setGuestVoiceId}
      onHostVoiceChange={setHostVoiceId}
      onLanguageChange={setLanguageId}
      onQualityChange={setQualityId}
      onSearchChange={setSearch}
      onSourceChange={setSourceId}
      onSubmit={handleSubmit}
      onTabChange={setTab}
      onUrlChange={setUrl}
      qualities={qualities}
      qualityId={qualityId}
      qualityLabel={qualityLabel}
      recentLabel={recentLabel}
      search={search}
      searchPlaceholder={searchPlaceholder}
      sourceId={sourceId}
      sources={sources}
      tab={tab}
      title={title}
      uploadHeading={uploadHeading}
      uploadHint={uploadHint}
      uploadTabLabel={uploadTabLabel}
      url={url}
      urlKinds={urlKinds}
      urlLabel={urlLabel}
      urlPlaceholder={urlPlaceholder}
      urlReadyLabel={urlReadyLabel}
      urlTabLabel={urlTabLabel}
    />
  );

  return (
    <section
      className={cn("bg-background text-foreground", className)}
      data-slot="input-modal"
      {...props}
    >
      <div className="mx-auto flex min-h-[28rem] max-w-5xl items-center justify-center px-5 py-16 sm:px-8 sm:py-20">
        {presentation === "inline" ? (
          <div className="w-full max-w-xl overflow-hidden rounded-[calc(var(--radius)+0.35rem)] border border-border bg-popover text-popover-foreground shadow-sm">
            {panel}
          </div>
        ) : (
          <Dialog defaultOpen={defaultOpen}>
            <DialogTrigger render={<Button>{triggerLabel}</Button>} />
            <DialogContent
              className="max-h-[min(90dvh,52rem)] overflow-y-auto p-0 sm:max-w-xl"
              showCloseButton
            >
              {panel}
            </DialogContent>
          </Dialog>
        )}
      </div>
    </section>
  );
}
