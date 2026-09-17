"use client";

import { CheckIcon } from "lucide-react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import { Button } from "@/atoms/button";
import { cn } from "@/lib/cn";
import type {
  QuestionnaireActionsProps,
  QuestionnaireChoiceDescriptionProps,
  QuestionnaireChoiceProps,
  QuestionnaireChoicesProps,
  QuestionnaireDescriptionProps,
  QuestionnaireErrorProps,
  QuestionnaireInputProps,
  QuestionnaireItemDefinition,
  QuestionnaireItemProps,
  QuestionnaireItemStatus,
  QuestionnaireNavButtonProps,
  QuestionnaireProgressProps,
  QuestionnaireProps,
  QuestionnaireShortcutMode,
  QuestionnaireTitleProps,
} from "./Questionnaire.types";

type RegisteredItem = {
  disabled: boolean;
  element: HTMLFieldSetElement | null;
  focus: () => void;
  focusInvalid: () => void;
  name: string;
  required: boolean;
  reset: () => void;
  skip: () => void;
  status: QuestionnaireItemStatus;
  validate: () => boolean;
};

type QuestionnaireContextValue = {
  activeName: string | null;
  activeRequired: boolean | null;
  current: number;
  first: boolean;
  goNext: () => void;
  goPrevious: () => void;
  last: boolean;
  registerAnswerShortcut: (
    name: string,
    shortcut: string,
    element: HTMLInputElement,
  ) => () => void;
  registerItem: (item: RegisteredItem) => () => void;
  requiredByName: ReadonlyMap<string, boolean>;
  shortcuts: QuestionnaireShortcutMode | null;
  skipCurrent: () => void;
  total: number;
};

type ItemContextValue = {
  active: boolean;
  disabled: boolean;
  invalid: boolean;
  markAnswered: () => void;
  multiple: boolean;
  name: string;
  registerInput: (element: HTMLInputElement | null) => void;
  required: boolean;
  shortcutFor: (value: string) => string | null;
  status: QuestionnaireItemStatus;
};

const QuestionnaireContext = createContext<QuestionnaireContextValue | null>(
  null,
);
const ItemContext = createContext<ItemContextValue | null>(null);
const ChoiceIndexContext = createContext<(() => string | null) | null>(null);

function useQuestionnaire(part: string) {
  const context = useContext(QuestionnaireContext);
  if (!context) {
    throw new Error(`${part} must be used within Questionnaire`);
  }
  return context;
}

function useQuestionnaireItem(part: string) {
  const context = useContext(ItemContext);
  if (!context) {
    throw new Error(`${part} must be used within QuestionnaireItem`);
  }
  return context;
}

function shortcutGlyph(index: number, mode: QuestionnaireShortcutMode | null) {
  if (mode === "letters") {
    return String.fromCharCode(97 + index);
  }
  if (mode === "numbers") {
    return String(index + 1);
  }
  return null;
}

export function Questionnaire({
  className,
  defaultItem,
  item: controlledItem,
  items: itemDefinitions,
  onItemChange,
  onKeyDown,
  onSubmit,
  shortcuts = undefined,
  ...props
}: QuestionnaireProps) {
  const itemsRef = useRef<RegisteredItem[]>([]);
  const [, setRegistryVersion] = useState(0);
  const shortcutTargets = useRef(
    new Map<string, Map<string, HTMLInputElement>>(),
  );
  const [uncontrolledItem, setUncontrolledItem] = useState<string | null>(
    () => defaultItem ?? itemDefinitions?.[0]?.name ?? null,
  );
  const activeName =
    controlledItem !== undefined ? controlledItem : uncontrolledItem;

  const definitionByName = useMemo(() => {
    const map = new Map<string, QuestionnaireItemDefinition>();
    for (const definition of itemDefinitions ?? []) {
      map.set(definition.name, definition);
    }
    return map;
  }, [itemDefinitions]);

  const requiredByName = useMemo(() => {
    const map = new Map<string, boolean>();
    for (const definition of itemDefinitions ?? []) {
      map.set(definition.name, Boolean(definition.required));
    }
    return map;
  }, [itemDefinitions]);

  const orderedNames = useMemo(() => {
    if (itemDefinitions?.length) {
      return itemDefinitions
        .filter((definition) => !definition.disabled)
        .map((definition) => definition.name);
    }
    return itemsRef.current
      .filter((item) => !item.disabled)
      .map((item) => item.name);
  }, [itemDefinitions]);

  const currentIndex = orderedNames.indexOf(activeName ?? "");
  const total = orderedNames.length;
  const current = currentIndex < 0 ? 0 : currentIndex + 1;
  const first = total > 0 && currentIndex === 0;
  const last = total > 0 && currentIndex === total - 1;
  const activeRequired =
    currentIndex < 0 || !activeName
      ? null
      : (definitionByName.get(activeName)?.required ??
        itemsRef.current.find((item) => item.name === activeName)?.required ??
        false);

  const setActive = useCallback(
    (name: string) => {
      if (controlledItem === undefined) {
        setUncontrolledItem(name);
      }
      onItemChange?.(name);
    },
    [controlledItem, onItemChange],
  );

  const registerItem = useCallback((item: RegisteredItem) => {
    itemsRef.current = [
      ...itemsRef.current.filter(
        (currentItem) => currentItem.name !== item.name,
      ),
      item,
    ];
    setRegistryVersion((version) => version + 1);
    return () => {
      itemsRef.current = itemsRef.current.filter(
        (currentItem) => currentItem !== item,
      );
      setRegistryVersion((version) => version + 1);
    };
  }, []);

  const registerAnswerShortcut = useCallback(
    (name: string, shortcut: string, element: HTMLInputElement) => {
      const byItem = shortcutTargets.current.get(name) ?? new Map();
      byItem.set(shortcut, element);
      shortcutTargets.current.set(name, byItem);
      return () => {
        const currentMap = shortcutTargets.current.get(name);
        if (currentMap?.get(shortcut) === element) {
          currentMap.delete(shortcut);
        }
      };
    },
    [],
  );

  const findItem = useCallback(
    (name: string | null) =>
      itemsRef.current.find((item) => item.name === name) ?? null,
    [],
  );

  const goPrevious = useCallback(() => {
    if (currentIndex <= 0) return;
    setActive(orderedNames[currentIndex - 1] ?? "");
  }, [currentIndex, orderedNames, setActive]);

  const goNext = useCallback(() => {
    const active = findItem(activeName);
    if (!active || currentIndex >= total - 1) return;
    if (!active.validate()) {
      active.focusInvalid();
      return;
    }
    setActive(orderedNames[currentIndex + 1] ?? "");
  }, [activeName, currentIndex, findItem, orderedNames, setActive, total]);

  const skipCurrent = useCallback(() => {
    const active = findItem(activeName);
    const required =
      (activeName ? definitionByName.get(activeName)?.required : undefined) ??
      active?.required;
    if (!active || required) return;
    active.skip();
    if (currentIndex < total - 1) {
      setActive(orderedNames[currentIndex + 1] ?? "");
    }
  }, [
    activeName,
    currentIndex,
    definitionByName,
    findItem,
    orderedNames,
    setActive,
    total,
  ]);

  useEffect(() => {
    if (!activeName) return;
    const frame = window.requestAnimationFrame(() => {
      findItem(activeName)?.focus();
    });
    return () => window.cancelAnimationFrame(frame);
  }, [activeName, findItem]);

  const context = useMemo<QuestionnaireContextValue>(
    () => ({
      activeName,
      activeRequired,
      current,
      first,
      goNext,
      goPrevious,
      last,
      registerAnswerShortcut,
      registerItem,
      requiredByName,
      shortcuts: shortcuts ?? null,
      skipCurrent,
      total,
    }),
    [
      activeName,
      activeRequired,
      current,
      first,
      goNext,
      goPrevious,
      last,
      registerAnswerShortcut,
      registerItem,
      requiredByName,
      shortcuts,
      skipCurrent,
      total,
    ],
  );

  return (
    <QuestionnaireContext.Provider value={context}>
      <form
        className={cn("flex w-full min-w-0 flex-col gap-4", className)}
        data-shortcuts={shortcuts}
        data-slot="questionnaire"
        noValidate
        onKeyDown={(event) => {
          onKeyDown?.(event);
          if (event.defaultPrevented || event.nativeEvent.isComposing) return;
          if (event.key === "Enter" && !event.metaKey && !event.ctrlKey) {
            const target = event.target;
            if (target instanceof HTMLInputElement && target.type === "text") {
              if (target.value.trim()) {
                event.preventDefault();
                if (last) {
                  event.currentTarget.requestSubmit();
                } else {
                  goNext();
                }
              }
              return;
            }
          }
          if (!shortcuts || !(event.target instanceof Element)) return;
          if (
            event.target instanceof HTMLInputElement &&
            (event.target.type === "text" ||
              event.target.type === "search" ||
              event.target.type === "email")
          ) {
            return;
          }
          const key = event.key.toLowerCase();
          const target = activeName
            ? shortcutTargets.current.get(activeName)?.get(key)
            : undefined;
          if (!target) return;
          event.preventDefault();
          target.focus();
          target.click();
        }}
        onSubmit={(event) => {
          const firstInvalid = (itemDefinitions ?? itemsRef.current)
            .map((entry) =>
              "validate" in entry
                ? entry
                : itemsRef.current.find((item) => item.name === entry.name),
            )
            .find((item) => item && !item.validate());
          if (firstInvalid) {
            event.preventDefault();
            setActive(firstInvalid.name);
            firstInvalid.focusInvalid();
            return;
          }
          onSubmit?.(event);
        }}
        {...props}
      />
    </QuestionnaireContext.Provider>
  );
}

export function QuestionnaireProgress({
  children,
  className,
  ...props
}: QuestionnaireProgressProps) {
  const { current, total } = useQuestionnaire("QuestionnaireProgress");
  const label = total ? `Question ${current} of ${total}` : undefined;

  return (
    <div
      aria-label="Questionnaire progress"
      aria-live="polite"
      aria-valuemax={total || undefined}
      aria-valuemin={total ? 1 : undefined}
      aria-valuenow={total ? current : undefined}
      aria-valuetext={label}
      className={cn(
        "min-h-[1lh] w-fit min-w-[14ch] text-xs font-medium text-muted-foreground tabular-nums",
        className,
      )}
      data-slot="questionnaire-progress"
      role="progressbar"
      {...props}
    >
      {children ?? label}
    </div>
  );
}

export function QuestionnaireItem({
  children,
  className,
  disabled = false,
  invalid: invalidProp,
  multiple = false,
  name,
  required = false,
  ...props
}: QuestionnaireItemProps) {
  const { activeName, registerItem, requiredByName, shortcuts } =
    useQuestionnaire("QuestionnaireItem");
  const fieldsetRef = useRef<HTMLFieldSetElement>(null);
  const firstControlRef = useRef<HTMLInputElement | null>(null);
  const [status, setStatus] = useState<QuestionnaireItemStatus>("unanswered");
  const [invalidInternal, setInvalidInternal] = useState(false);
  const answeredRef = useRef(false);
  const isRequired = requiredByName.get(name) ?? required;
  const active = activeName === name;
  const invalid = invalidProp ?? invalidInternal;
  const shortcutByValue = useRef(new Map<string, string>());
  const shortcutCursor = useRef(0);

  const validate = useCallback(() => {
    if (!isRequired || answeredRef.current || status === "skipped") {
      setInvalidInternal(false);
      return true;
    }
    setInvalidInternal(true);
    return false;
  }, [isRequired, status]);

  const skip = useCallback(() => {
    setStatus("skipped");
    setInvalidInternal(false);
  }, []);

  const reset = useCallback(() => {
    answeredRef.current = false;
    setStatus("unanswered");
    setInvalidInternal(false);
  }, []);

  const focus = useCallback(() => {
    fieldsetRef.current?.focus();
  }, []);

  const focusInvalid = useCallback(() => {
    firstControlRef.current?.focus();
    fieldsetRef.current
      ?.querySelector<HTMLInputElement>("input:not([disabled])")
      ?.focus();
  }, []);

  useEffect(() => {
    return registerItem({
      disabled,
      element: fieldsetRef.current,
      focus,
      focusInvalid,
      name,
      required: isRequired,
      reset,
      skip,
      status,
      validate,
    });
  }, [
    disabled,
    focus,
    focusInvalid,
    isRequired,
    name,
    registerItem,
    reset,
    skip,
    status,
    validate,
  ]);

  const markAnswered = useCallback(() => {
    answeredRef.current = true;
    setStatus("answered");
    setInvalidInternal(false);
  }, []);

  const registerInput = useCallback((element: HTMLInputElement | null) => {
    if (element && !firstControlRef.current) {
      firstControlRef.current = element;
    }
  }, []);

  const shortcutFor = useCallback(
    (value: string) => {
      const existing = shortcutByValue.current.get(value);
      if (existing) return existing;
      const next = shortcutGlyph(shortcutCursor.current, shortcuts);
      shortcutCursor.current += 1;
      if (next) shortcutByValue.current.set(value, next);
      return next;
    },
    [shortcuts],
  );

  const nextChoiceShortcut = useCallback(() => {
    const next = shortcutGlyph(shortcutCursor.current, shortcuts);
    shortcutCursor.current += 1;
    return next;
  }, [shortcuts]);

  return (
    <ItemContext.Provider
      value={{
        active,
        disabled,
        invalid,
        markAnswered,
        multiple,
        name,
        registerInput,
        required: isRequired,
        shortcutFor,
        status,
      }}
    >
      <ChoiceIndexContext.Provider value={nextChoiceShortcut}>
        <fieldset
          aria-invalid={invalid || undefined}
          className={cn(
            "flex min-w-0 flex-col gap-4 border-0 p-0 outline-none",
            className,
          )}
          data-active={active ? "" : undefined}
          data-slot="questionnaire-item"
          disabled={disabled}
          hidden={!active}
          inert={!active}
          name={name}
          ref={fieldsetRef}
          tabIndex={active ? -1 : undefined}
          {...props}
        >
          {children}
        </fieldset>
      </ChoiceIndexContext.Provider>
    </ItemContext.Provider>
  );
}

export function QuestionnaireTitle({
  className,
  ...props
}: QuestionnaireTitleProps) {
  useQuestionnaireItem("QuestionnaireTitle");
  return (
    <legend
      className={cn(
        "text-pretty text-base leading-snug font-medium [&:not(:has(~[data-slot=questionnaire-description]))]:mb-4",
        className,
      )}
      data-slot="questionnaire-title"
      {...props}
    />
  );
}

export function QuestionnaireDescription({
  className,
  id,
  ...props
}: QuestionnaireDescriptionProps) {
  useQuestionnaireItem("QuestionnaireDescription");
  const generatedId = useId();
  return (
    <p
      className={cn("text-pretty text-sm text-muted-foreground", className)}
      data-slot="questionnaire-description"
      id={id ?? generatedId}
      {...props}
    />
  );
}

export function QuestionnaireChoices({
  className,
  ...props
}: QuestionnaireChoicesProps) {
  useQuestionnaireItem("QuestionnaireChoices");
  const { shortcuts } = useQuestionnaire("QuestionnaireChoices");
  return (
    <div
      className={cn("grid min-w-0 gap-2", className)}
      data-slot="questionnaire-choices"
      data-shortcuts={shortcuts ?? undefined}
      {...props}
    />
  );
}

export function QuestionnaireChoice({
  checked,
  children,
  className,
  defaultChecked,
  disabled = false,
  onChange,
  value,
  ...props
}: QuestionnaireChoiceProps) {
  const {
    disabled: itemDisabled,
    invalid,
    markAnswered,
    multiple,
    name,
    registerInput,
    shortcutFor,
  } = useQuestionnaireItem("QuestionnaireChoice");
  const { registerAnswerShortcut } = useQuestionnaire("QuestionnaireChoice");
  const inputRef = useRef<HTMLInputElement>(null);
  const [uncontrolledChecked, setUncontrolledChecked] = useState(
    defaultChecked ?? false,
  );
  const isChecked = checked ?? uncontrolledChecked;
  const type = multiple ? "checkbox" : "radio";
  const shortcut = shortcutFor(value);
  const isDisabled = disabled || itemDisabled;

  useEffect(() => {
    registerInput(inputRef.current);
    const node = inputRef.current;
    if (!node || !shortcut) return;
    return registerAnswerShortcut(name, shortcut, node);
  }, [name, registerAnswerShortcut, registerInput, shortcut]);

  return (
    <label
      className={cn(
        "group/questionnaire-choice relative flex min-h-11 cursor-pointer items-start gap-2.5 rounded-lg border border-input bg-transparent px-3 py-2.5 text-start text-sm outline-none select-none",
        "transition-colors motion-reduce:transition-none",
        "hover:bg-muted/50 dark:bg-input/20",
        "data-[checked]:border-primary/40 data-[checked]:bg-muted dark:data-[checked]:bg-muted",
        "data-[invalid]:border-destructive",
        "has-[>input:focus-visible]:border-ring has-[>input:focus-visible]:ring-[3px] has-[>input:focus-visible]:ring-ring/50",
        "data-[disabled]:pointer-events-none data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
        className,
      )}
      data-checked={isChecked ? "" : undefined}
      data-disabled={isDisabled ? "" : undefined}
      data-invalid={invalid ? "" : undefined}
      data-shortcut={shortcut ?? undefined}
      data-slot="questionnaire-choice"
      data-type={type}
      data-unchecked={isChecked ? undefined : ""}
      {...props}
    >
      <input
        checked={checked}
        className="absolute inset-0 z-10 size-full cursor-pointer opacity-0"
        data-slot="questionnaire-choice-input"
        defaultChecked={checked === undefined ? defaultChecked : undefined}
        disabled={isDisabled}
        name={name}
        onChange={(event) => {
          if (checked === undefined) {
            setUncontrolledChecked(event.currentTarget.checked);
          }
          if (event.currentTarget.checked || multiple) {
            markAnswered();
          }
          onChange?.(event);
        }}
        ref={inputRef}
        type={type}
        value={value}
      />
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none relative flex size-4 shrink-0 translate-y-[0.1125rem] items-center justify-center rounded-[4px] border border-input dark:bg-input/30",
          "group-has-[[data-slot=questionnaire-choice-description]]/questionnaire-choice:translate-y-0.5",
          "group-data-[type=radio]/questionnaire-choice:rounded-full",
          "group-data-[checked]/questionnaire-choice:border-primary group-data-[checked]/questionnaire-choice:bg-primary group-data-[checked]/questionnaire-choice:text-primary-foreground",
          "dark:group-data-[checked]/questionnaire-choice:bg-primary",
        )}
        data-slot="questionnaire-choice-indicator"
      >
        <span
          className="hidden size-2 rounded-full bg-primary-foreground group-data-[type=checkbox]/questionnaire-choice:hidden group-data-[checked]/questionnaire-choice:block"
          data-slot="questionnaire-choice-indicator-dot"
        />
        <CheckIcon
          className="hidden size-3.5 group-data-[type=radio]/questionnaire-choice:hidden group-data-[checked]/questionnaire-choice:block"
          data-slot="questionnaire-choice-indicator-check"
        />
      </span>
      <span
        className="flex min-w-0 flex-1 flex-col gap-0.5 leading-snug"
        data-slot="questionnaire-choice-label"
      >
        {children}
      </span>
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none ms-auto hidden size-5 shrink-0 translate-y-[0.1125rem] items-center justify-center rounded-md border border-input bg-background font-mono text-[0.625rem] leading-none font-medium text-muted-foreground",
          "group-has-[[data-slot=questionnaire-choice-description]]/questionnaire-choice:translate-y-0.5",
          "group-data-[shortcut]/questionnaire-choice:inline-flex",
        )}
        data-slot="questionnaire-choice-shortcut"
        hidden={!shortcut}
      >
        {shortcut}
      </span>
    </label>
  );
}

export function QuestionnaireChoiceDescription({
  className,
  ...props
}: QuestionnaireChoiceDescriptionProps) {
  return (
    <span
      className={cn("text-muted-foreground", className)}
      data-slot="questionnaire-choice-description"
      {...props}
    />
  );
}

export function QuestionnaireInput({
  className,
  disabled = false,
  onChange,
  type = "text",
  ...props
}: QuestionnaireInputProps) {
  const {
    disabled: itemDisabled,
    invalid,
    markAnswered,
    name,
    registerInput,
  } = useQuestionnaireItem("QuestionnaireInput");
  const { registerAnswerShortcut, shortcuts } =
    useQuestionnaire("QuestionnaireInput");
  const takeShortcut = useContext(ChoiceIndexContext);
  const inputRef = useRef<HTMLInputElement>(null);
  const [filled, setFilled] = useState(
    Boolean(props.defaultValue ?? props.value),
  );
  const shortcut = takeShortcut?.() ?? null;

  useEffect(() => {
    registerInput(inputRef.current);
    const node = inputRef.current;
    if (!node || !shortcut) return;
    return registerAnswerShortcut(name, shortcut, node);
  }, [name, registerAnswerShortcut, registerInput, shortcut]);

  return (
    <div
      className="group/questionnaire-input relative min-w-0 w-full"
      data-shortcut={shortcut && shortcuts ? shortcut : undefined}
      data-slot="questionnaire-input-wrapper"
    >
      <input
        aria-invalid={invalid || undefined}
        className={cn(
          "min-h-11 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base outline-none md:h-8 md:min-h-0 md:text-sm",
          "transition-[color,box-shadow,background-color] motion-reduce:transition-none",
          "placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground",
          "dark:bg-input/30",
          "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
          "aria-invalid:border-destructive aria-invalid:ring-[3px] aria-invalid:ring-destructive/20",
          "dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
          "disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 dark:disabled:bg-input/80",
          className,
        )}
        data-empty={filled ? undefined : ""}
        data-filled={filled ? "" : undefined}
        data-slot="questionnaire-input"
        disabled={disabled || itemDisabled}
        name={name}
        onChange={(event) => {
          const nextFilled = event.currentTarget.value.trim().length > 0;
          setFilled(nextFilled);
          if (nextFilled) markAnswered();
          onChange?.(event);
        }}
        ref={inputRef}
        type={type}
        {...props}
      />
    </div>
  );
}

export function QuestionnaireError({
  children,
  className,
  id,
  ...props
}: QuestionnaireErrorProps) {
  const { invalid, required } = useQuestionnaireItem("QuestionnaireError");
  const generatedId = useId();
  return (
    <p
      className={cn("mt-2 text-sm text-destructive", className)}
      data-slot="questionnaire-error"
      hidden={!invalid}
      id={id ?? generatedId}
      role={invalid ? "alert" : undefined}
      {...props}
    >
      {children ??
        (required
          ? "Choose an answer to continue."
          : "Choose an answer or skip this question.")}
    </p>
  );
}

export function QuestionnaireActions({
  className,
  ...props
}: QuestionnaireActionsProps) {
  return (
    <div
      className={cn(
        "grid min-h-11 w-full grid-cols-[minmax(0,1fr)_auto_auto] items-center gap-2 sm:min-h-8",
        className,
      )}
      data-slot="questionnaire-actions"
      {...props}
    />
  );
}

function NavButton({
  children,
  className,
  size = "md",
  variant = "primary",
  visible,
  ...props
}: QuestionnaireNavButtonProps & { visible: boolean }) {
  return (
    <Button asChild size={size} variant={variant}>
      <button
        aria-hidden={!visible || undefined}
        className={cn("sm:min-h-0", !visible && "hidden", className)}
        hidden={!visible}
        inert={!visible}
        tabIndex={visible ? props.tabIndex : -1}
        type={props.type ?? "button"}
        {...props}
      >
        {children}
      </button>
    </Button>
  );
}

export function QuestionnairePrevious({
  children = "Previous",
  className,
  onClick,
  size = "md",
  variant = "secondary",
  ...props
}: QuestionnaireNavButtonProps) {
  const { first, goPrevious, total } = useQuestionnaire(
    "QuestionnairePrevious",
  );
  const visible = total > 1 && !first;
  return (
    <NavButton
      className={cn(
        "col-start-1 row-start-1 min-h-11 justify-self-start",
        className,
      )}
      data-slot="questionnaire-previous"
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) goPrevious();
      }}
      size={size}
      variant={variant}
      visible={visible}
      {...props}
    >
      {children}
    </NavButton>
  );
}

export function QuestionnaireSkip({
  children = "Skip",
  className,
  onClick,
  size = "md",
  variant = "secondary",
  ...props
}: QuestionnaireNavButtonProps) {
  const { activeRequired, skipCurrent } = useQuestionnaire("QuestionnaireSkip");
  const visible = activeRequired === false;
  return (
    <NavButton
      className={cn(
        "col-start-2 row-start-1 min-h-11 justify-self-end",
        className,
      )}
      data-slot="questionnaire-skip"
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) skipCurrent();
      }}
      size={size}
      variant={variant}
      visible={visible}
      {...props}
    >
      {children}
    </NavButton>
  );
}

export function QuestionnaireNext({
  children = "Next",
  className,
  onClick,
  size = "md",
  variant = "primary",
  ...props
}: QuestionnaireNavButtonProps) {
  const { goNext, last, total } = useQuestionnaire("QuestionnaireNext");
  const visible = total > 1 && !last;
  return (
    <NavButton
      className={cn(
        "col-start-3 row-start-1 min-h-11 justify-self-end",
        className,
      )}
      data-slot="questionnaire-next"
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) goNext();
      }}
      size={size}
      variant={variant}
      visible={visible}
      {...props}
    >
      {children}
    </NavButton>
  );
}

export function QuestionnaireSubmit({
  children = "Submit",
  className,
  size = "md",
  variant = "primary",
  ...props
}: QuestionnaireNavButtonProps) {
  const { last, total } = useQuestionnaire("QuestionnaireSubmit");
  const visible = total > 0 && last;
  return (
    <NavButton
      className={cn(
        "col-start-3 row-start-1 min-h-11 justify-self-end",
        className,
      )}
      data-slot="questionnaire-submit"
      size={size}
      type="submit"
      variant={variant}
      visible={visible}
      {...props}
    >
      {children}
    </NavButton>
  );
}
