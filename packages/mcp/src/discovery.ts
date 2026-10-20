import { z } from "zod";

export const discoveryQuestions = [
  {
    field: "intent",
    question:
      "What are you building, for whom, and what should visitors do? Include the required sections or interactions and any functional constraints.",
  },
  {
    field: "visualDirection",
    question:
      "What should this brand look and feel like? Include desired tone or references, available imagery/content, and styles or patterns to avoid.",
  },
] as const;

export const briefSchema = z
  .strictObject({
    intent: z
      .string()
      .trim()
      .describe(discoveryQuestions[0].question)
      .optional(),
    visualDirection: z
      .string()
      .trim()
      .describe(discoveryQuestions[1].question)
      .optional(),
  })
  .optional()
  .describe(
    "Answer JabKit's two discovery questions from the current task. Reuse both answers on every call; missing or blank answers return needs_brief instead of catalogue data.",
  );

export const discoveryInstructions =
  "Before choosing components, answer the two discovery questions in brief.intent and brief.visualDirection. Use the user's existing brief and project context; ask the user only for missing details that affect selection. Reuse the brief for this task and update it when requirements change.";

export function getDiscoveryRequest(brief: z.output<typeof briefSchema>) {
  const questions = discoveryQuestions.filter(
    ({ field }) => !brief?.[field]?.trim(),
  );
  if (!questions.length) return null;
  return {
    status: "needs_brief" as const,
    questions,
    brief: {
      intent: brief?.intent ?? "",
      visualDirection: brief?.visualDirection ?? "",
    },
    nextStep:
      "Repeat the same tool call with both brief fields answered, retaining its other arguments. " +
      discoveryInstructions +
      " For a small component task, a concise intent and 'follow the existing project design' with known constraints are sufficient. State assumptions if the user delegates design choices; do not invent brand facts. Translate the answers into section queries and tone/useCase/visualWeight preferences, then review candidate metadata and source against the full brief.",
  };
}
