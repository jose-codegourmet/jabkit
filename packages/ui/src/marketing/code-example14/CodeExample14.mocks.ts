import type { CodeExample14Props } from "./CodeExample14.types";

export const codeExample14Mocks = {
  default: {
    kicker: "File operations",
    title: "One client for create, update, and delete.",
    description:
      "Walk a file through its full lifecycle with a single TypeScript SDK. Open a flow on the left to load the matching snippet.",
    primaryAction: { label: "Start with files", href: "#start" },
    secondaryAction: { label: "Read the SDK", href: "#docs" },
    defaultItemId: "create",
    items: [
      {
        id: "create",
        title: "Create a file",
        description:
          "Write a new object with a path, mime type, and body. The client returns a durable id you can pass to later calls.",
        icon: "create",
        fileName: "create-file.ts",
        language: "TypeScript",
        code: `import { Files } from "@northline/storage";

const files = new Files({ token: process.env.NORTHLINE_TOKEN });

const created = await files.create({
  path: "briefs/q3-launch.md",
  mime: "text/markdown",
  body: "# Q3 launch\\nDraft the customer email first.",
});

console.log(created.id);`,
      },
      {
        id: "update",
        title: "Update a file",
        description:
          "Patch the path or body in place. Each write bumps a revision so you can audit what changed.",
        icon: "update",
        fileName: "update-file.ts",
        language: "TypeScript",
        code: `import { Files } from "@northline/storage";

const files = new Files({ token: process.env.NORTHLINE_TOKEN });

const revised = await files.update("file_18c2", {
  path: "briefs/q3-launch.md",
  body: "# Q3 launch\\nReady for legal review.",
});

console.log(revised.revision);`,
      },
      {
        id: "delete",
        title: "Delete a file",
        description:
          "Remove an object with a reason code. Set purge when the bytes should leave the vault immediately.",
        icon: "delete",
        fileName: "delete-file.ts",
        language: "TypeScript",
        code: `import { Files } from "@northline/storage";

const files = new Files({ token: process.env.NORTHLINE_TOKEN });

await files.remove("file_18c2", {
  reason: "superseded",
  purge: true,
});`,
      },
    ],
  },
  alternate: {
    kicker: "Workspace notes",
    title: "Show the API beside the story you are telling.",
    description:
      "Same accordion-and-code pattern, pointed at notes instead of files. Useful when docs and marketing share one example surface.",
    primaryAction: { label: "Open the notes API", href: "#notes" },
    secondaryAction: { label: "See auth", href: "#auth" },
    defaultItemId: "create",
    items: [
      {
        id: "create",
        title: "Create a note",
        description:
          "Drop a titled note into a workspace. Tags stay optional so drafts can start messy.",
        icon: "create",
        fileName: "create-note.ts",
        language: "TypeScript",
        code: `import { Notes } from "@harbor/workspace";

const notes = new Notes({ token: process.env.HARBOR_TOKEN });

const note = await notes.create({
  workspaceId: "ws_kindred",
  title: "Launch checklist",
  tags: ["q3", "legal"],
});

console.log(note.id);`,
      },
      {
        id: "update",
        title: "Update a note",
        description:
          "Rewrite the body or retitle the note. The client keeps the same id across edits.",
        icon: "update",
        fileName: "update-note.ts",
        language: "TypeScript",
        code: `import { Notes } from "@harbor/workspace";

const notes = new Notes({ token: process.env.HARBOR_TOKEN });

const note = await notes.update("note_9f0", {
  title: "Launch checklist — locked",
  body: "Legal signed off. Schedule send.",
});

console.log(note.updatedAt);`,
      },
      {
        id: "delete",
        title: "Archive a note",
        description:
          "Archive instead of hard-delete when a note still belongs in the audit trail.",
        icon: "delete",
        fileName: "archive-note.ts",
        language: "TypeScript",
        code: `import { Notes } from "@harbor/workspace";

const notes = new Notes({ token: process.env.HARBOR_TOKEN });

await notes.archive("note_9f0", {
  keepHistory: true,
});`,
      },
    ],
  },
} satisfies Record<string, CodeExample14Props>;
