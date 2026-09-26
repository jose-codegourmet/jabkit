import type { Route } from "next";
import Link from "next/link";

export type TagSticker = { tag: string; count: number };

const stickerStyles = [
  "bg-tomato text-primary-foreground -rotate-4",
  "bg-card text-foreground rotate-3",
  "bg-slate text-cream -rotate-2",
  "bg-card text-foreground rotate-5",
  "bg-mustard text-ink -rotate-3",
  "bg-tomato text-primary-foreground rotate-2",
  "bg-card text-foreground -rotate-5",
  "bg-slate text-cream rotate-4",
] as const;

/** "Findable by intent": catalogue search plus tag stickers with counts. */
export function FindableSection({ tags }: { tags: TagSticker[] }) {
  return (
    <section className="vd-halftone border-y-3 border-ink bg-mustard text-ink">
      <div className="mx-auto grid max-w-[1280px] items-center gap-12 px-5 py-14 tab:px-8 tab:py-24 desk:grid-cols-[5fr_6fr] desk:gap-14">
        <div className="mx-auto w-full max-w-[520px] -rotate-[1.5deg] rounded-2xl border-3 border-ink bg-card p-3.5 shadow-[8px_8px_0_var(--vd-shadow)]">
          <img
            src="/art/jk-find.webp"
            alt="JabKit pulling index cards from a card catalogue"
            width={900}
            height={672}
            loading="lazy"
            decoding="async"
            className="block w-full rounded-[10px]"
          />
        </div>
        <div className="min-w-0">
          <p className="vd-script text-2xl">the card catalogue</p>
          <h2 className="vd-h2 mt-1.5">Findable by intent.</h2>
          <p className="mt-4 max-w-[44ch] leading-7">
            Tags are part of the contract. Filter the catalogue before you know
            a component name.
          </p>
          <search>
            <form
              action="/components"
              className="mt-8 flex items-center gap-3 rounded-full border-3 border-ink bg-card py-2.5 pr-2.5 pl-6 text-foreground shadow-[4px_4px_0_var(--vd-shadow)]"
            >
              <label htmlFor="findable-search" className="sr-only">
                Search the catalogue
              </label>
              <input
                id="findable-search"
                name="q"
                placeholder="a pricing table with a monthly toggle"
                className="min-w-0 flex-1 bg-transparent font-mono text-[15px] outline-none placeholder:text-muted-foreground"
              />
              <button
                type="submit"
                className="vd-btn vd-btn-primary min-h-10 shrink-0"
              >
                Search
              </button>
            </form>
          </search>
          <ul className="mt-8 grid grid-cols-2 gap-x-3 gap-y-3.5 tab:flex tab:flex-wrap">
            {tags.map((item, index) => (
              <li key={item.tag}>
                <Link
                  href={
                    `/components?tag=${encodeURIComponent(item.tag)}` as Route
                  }
                  className={`inline-flex items-center gap-2.5 rounded-lg border-2 border-ink px-3.5 py-2 font-display text-lg shadow-[3px_3px_0_var(--vd-shadow)] transition-transform hover:rotate-0 hover:-translate-y-0.5 ${stickerStyles[index % stickerStyles.length]}`}
                >
                  #{item.tag}
                  <span className="rounded-full bg-ink px-[7px] py-0.5 font-mono text-xs text-cream">
                    {item.count}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
