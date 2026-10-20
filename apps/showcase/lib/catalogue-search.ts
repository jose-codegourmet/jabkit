import type { parseToolArguments } from "@jabkit/mcp";
import type { RegistryIndexItem } from "./registry";

type SearchArguments = ReturnType<
  typeof parseToolArguments<"search_components">
>;

const normalize = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim();
const words = (value: string) => [
  ...new Set(normalize(value).split(" ").filter(Boolean)),
];
const contains = (text: string, phrase: string) =>
  ` ${normalize(text)} `.includes(` ${normalize(phrase)} `);

/** Lexical evidence only; source/preview review remains the agent's responsibility. */
export function searchCatalogue(
  items: RegistryIndexItem[],
  args: SearchArguments,
) {
  const queryWords = words(args.query);
  const toneWords = [...new Set(args.tone.map(normalize))];
  return items
    .filter(
      (item) =>
        (!args.category || item.category === args.category) &&
        (!args.sectionCategory ||
          normalize(item.sectionCategory ?? "") ===
            normalize(args.sectionCategory)),
    )
    .flatMap((item) => {
      const fields: Array<[string, string[], number]> = [
        ["name", [item.name, item.displayName], 6],
        ["sectionCategory", [item.sectionCategory ?? ""], 6],
        ["tags", item.tags, 4],
        ["description", [item.description, item.purpose ?? ""], 1],
        ["bestFor", item.bestFor ?? [], 3],
        ["tone", item.tone ?? [], 3],
        ["industries", item.industries ?? [], 2],
      ];
      const matches: string[] = [];
      let queryScore = 0;
      let matchedTerms = 0;
      for (const word of queryWords) {
        const hits = fields.filter(([, values]) =>
          values.some((value) => contains(value, word)),
        );
        if (!hits.length) continue;
        matchedTerms++;
        queryScore += Math.max(...hits.map(([, , weight]) => weight));
        matches.push(
          `query "${word}": ${hits.map(([field]) => field).join(", ")}`,
        );
      }
      if (queryWords.length && !matchedTerms) return [];
      // Prefer candidates covering the intent over one incidental keyword hit.
      queryScore += queryWords.length
        ? (matchedTerms / queryWords.length) * 10
        : 0;
      if (
        normalize(args.query) &&
        normalize(item.name) === normalize(args.query)
      )
        queryScore += 100;

      let brandScore = 0;
      for (const tone of toneWords) {
        if (!item.tone?.some((value) => normalize(value) === tone)) continue;
        brandScore += 6;
        matches.push(`tone: ${tone}`);
      }
      const useCaseWords = words(args.useCase ?? "");
      for (const word of useCaseWords) {
        if (!(item.bestFor ?? []).some((value) => contains(value, word)))
          continue;
        brandScore += 3;
        matches.push(`bestFor: ${word}`);
      }
      if (args.visualWeight && item.visualWeight === args.visualWeight) {
        brandScore += 4;
        matches.push(`visualWeight: ${item.visualWeight}`);
      }
      // Match the whole warning phrase, not incidental words such as "pages".
      // Unmatched warnings are still returned as metadata for semantic review.
      const context = [args.query, args.useCase ?? "", ...args.tone].join(" ");
      const conflicts = (item.avoidFor ?? []).filter((value) =>
        contains(context, value),
      );
      if (
        args.visualWeight &&
        item.visualWeight &&
        item.visualWeight !== args.visualWeight
      )
        conflicts.push(
          `visualWeight: ${item.visualWeight} (requested ${args.visualWeight})`,
        );
      brandScore -= conflicts.length * 12;
      return [
        {
          ...item,
          match: {
            score: queryScore + brandScore,
            matches,
            conflicts,
            missingMetadata: (
              ["tone", "bestFor", "avoidFor", "visualWeight"] as const
            ).filter((field) => !item[field]?.length),
          },
        },
      ];
    })
    .sort(
      (a, b) => b.match.score - a.match.score || a.name.localeCompare(b.name),
    )
    .slice(args.offset, args.offset + args.limit);
}
