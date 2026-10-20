export type TopicId = "tickets" | "access" | "press" | "other";

export const contactTopics: { id: TopicId; label: string }[] = [
  { id: "tickets", label: "Tickets" },
  { id: "access", label: "Access and accessibility" },
  { id: "press", label: "Press" },
  { id: "other", label: "Something else" },
];

export function isTopicId(value: unknown): value is TopicId {
  return contactTopics.some((topic) => topic.id === value);
}

export function contactHref(topic?: TopicId): string {
  return topic ? `/contact?topic=${topic}` : "/contact";
}

export const responseTimePlaceholder = "[Response time — client to confirm]";
