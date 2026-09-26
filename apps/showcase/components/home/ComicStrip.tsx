const panels = [
  {
    step: "01 · Describe",
    image: "/art/jk-describe.webp",
    title: "Say what you need",
    copy: "Search by intent, tag, or category. Metadata makes a component findable before you know its name.",
  },
  {
    step: "02 · Add",
    image: "/art/jk-add.webp",
    title: "Copy it into your tree",
    copy: "One CLI command drops source files into your project. Dependencies resolve with the install plan.",
  },
  {
    step: "03 · Own",
    image: "/art/jk-own.webp",
    title: "Shape it for your product",
    copy: "The files are yours. Edit tokens, props, and markup without fighting a locked package.",
  },
] as const;

/** "A short path from idea to code" as a three-panel comic strip. */
export function ComicStrip() {
  return (
    <section className="mx-auto max-w-[1280px] px-5 py-14 tab:px-8 tab:py-24">
      <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-3">
        <div>
          <h2 className="vd-h2">A short path from idea to code.</h2>
          <p className="mt-4 max-w-[40rem] leading-7 text-muted-foreground">
            The catalogue is a working interface for people and agents, not a
            gallery that ends at the browser.
          </p>
        </div>
        <span className="vd-script text-[22px]">in three panels</span>
      </div>
      <ol className="mt-12 grid gap-[3px] border-3 border-ink bg-ink shadow-[6px_6px_0_var(--vd-shadow)] tab:grid-cols-2 desk:grid-cols-3">
        {panels.map((panel) => (
          <li key={panel.step} className="flex flex-col bg-card">
            <div className="relative">
              <img
                src={panel.image}
                alt=""
                width={960}
                height={960}
                loading="lazy"
                decoding="async"
                className="block aspect-square w-full object-cover"
              />
              <span className="absolute top-3.5 left-3.5 border-2 border-ink bg-mustard px-3 py-1 font-display text-[15px] text-ink">
                {panel.step}
              </span>
            </div>
            <div className="border-t-3 border-ink px-[22px] pt-5 pb-6">
              <h3 className="vd-h3">{panel.title}</h3>
              <p className="mt-2 leading-[26px] text-muted-foreground">
                {panel.copy}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
