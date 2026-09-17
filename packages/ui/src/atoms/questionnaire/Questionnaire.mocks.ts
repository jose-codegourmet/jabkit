export const questionnaireMocks = {
  defaultItems: [
    {
      choices: [
        {
          description: "Show what the agent ran and what came back.",
          label: "Tool call timeline",
          value: "tool-calls",
        },
        {
          description: "Ask before sensitive or destructive actions.",
          label: "Approval checkpoints",
          value: "approvals",
        },
        {
          description: "Make delegated work and results easier to follow.",
          label: "Sub-agent handoffs",
          value: "handoffs",
        },
      ],
      description: "Choose a direction or describe another task.",
      input: {
        label: "Another agent feature",
        placeholder: "Describe another feature...",
      },
      name: "direction",
      required: true,
      title: "What should the agent build next?",
    },
    {
      choices: [
        { label: "Progress", value: "progress" },
        { label: "Decisions", value: "decisions" },
        { label: "Risks", value: "risks" },
        { label: "Next step", value: "next-step" },
      ],
      description: "Select all that apply, or skip this question.",
      multiple: true,
      name: "signals",
      required: false,
      title: "What should every progress update include?",
    },
    {
      choices: [
        { label: "Start now", value: "now" },
        { label: "Next development cycle", value: "next-cycle" },
        { label: "Add it to the backlog", value: "backlog" },
      ],
      description: "Choose when the agent should begin the work.",
      name: "timing",
      required: true,
      title: "When should work begin?",
    },
  ],
  skipItems: [
    {
      choices: [
        { label: "Feature work", value: "feature" },
        { label: "Bug fix", value: "bug" },
        { label: "Chore", value: "chore" },
      ],
      description: "Choose the category that best describes the work.",
      name: "kind",
      required: true,
      title: "What kind of change is this?",
    },
    {
      choices: [
        { label: "Must stay in TypeScript", value: "typescript" },
        { label: "No new dependencies", value: "no-deps" },
      ],
      description: "Answer if needed, or intentionally skip this question.",
      name: "constraints",
      required: false,
      title: "Are there any implementation constraints?",
    },
  ],
} as const;
