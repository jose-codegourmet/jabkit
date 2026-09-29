import type { Member } from "./types";

export const members: Member[] = [
  { id: "maya", firstName: "Maya", initial: "M", tone: "primary" },
  { id: "leo", firstName: "Leo", initial: "L", tone: "secondary" },
  { id: "dad", firstName: "Dad", initial: "D", tone: "accent" },
  {
    id: "grandmaRosa",
    firstName: "Grandma Rosa",
    initial: "G",
    tone: "warning",
  },
];

export function getMember(id: string): Member | undefined {
  return members.find((member) => member.id === id);
}
