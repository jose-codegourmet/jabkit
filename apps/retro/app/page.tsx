import {
  ArrowRightIcon as ArrowRight,
  ArrowTopRightIcon as ArrowUpRight,
} from "@radix-ui/react-icons";
import type { Metadata } from "next";
import { Button } from "@/atoms/button";
import { Faq12 } from "@/marketing/faq12";
import { ArtImage } from "./_components/ArtImage";
import { StudioPreview } from "./_components/StudioPreview";
import { TactileLink } from "./_components/TactileLink";
import { collectionHref, collections, studioHref } from "./content";
import s from "./home.module.css";
export const metadata: Metadata = {
  title: "Keep the good bits",
  description:
    "A small creative tool for your favorite pictures. Choose a photograph, find the frame, and keep a crop.",
};
export default function RetroHomePage() {
  return (
    <main id="top" className={s.home}>
      <section data-motion-hero className={s.hero}>
        <div className={s.heroCopy}>
          <p className={s.small}>A little home for your pictures</p>
          <h1 data-motion-title>
            Your pictures.
            <br />A little closer.
          </h1>
          <p>
            Good days, small details, places you loved. Find the frame you want
            to keep.
          </p>
          <div className={s.actions}>
            <Button asChild>
              <a href={studioHref({ asset: "postcard-pier", aspect: "4:3" })}>
                Open studio <ArrowUpRight width={18} height={18} />
              </a>
            </Button>
            <a href="/collections" className={s.textLink}>
              Browse collections
            </a>
          </div>
        </div>
        <div className={s.heroArt} data-motion-paper>
          <ArtImage
            id="ret-collection-sleeves"
            alt="Three paper sleeves holding prints of places worth remembering"
            priority
          />
          <p>
            Something small.
            <br />
            Something worth keeping.
          </p>
        </div>
      </section>
      <div className={s.toolNote}>
        <span>Pick a picture.</span>
        <ArrowRight width={17} height={17} />
        <span>Find your frame.</span>
        <ArrowRight width={17} height={17} />
        <span>Keep a little piece.</span>
      </div>
      <section data-motion-reveal className={s.packs} aria-labelledby="packs">
        <h2 id="packs">Start with a small collection.</h2>
        <p>A few ready-to-use favorites, gathered by mood.</p>
        <div className={s.packGrid}>
          {collections.map((c, i) => (
            <TactileLink
              href={collectionHref(c.slug)}
              key={c.slug}
              className={s.pack}
            >
              <ArtImage id={c.coverId} alt={c.coverAlt} />
              <div>
                <span>Collection 0{i + 1}</span>
                <h3>{c.title}</h3>
                <p>
                  {c.theme} · {c.assetIds.length} keeps
                </p>
                <ArrowUpRight width={22} height={22} />
              </div>
            </TactileLink>
          ))}
        </div>
      </section>
      <section
        data-motion-reveal
        className={s.studio}
        aria-labelledby="studio-home"
      >
        <div className={s.studioCopy}>
          <h2 id="studio-home">
            A small studio.
            <br />
            All yours.
          </h2>
          <p>
            Drag to find the composition. Change the shape. Download the part
            you love.
          </p>
          <p>Your pictures stay in this browser.</p>
          <a href="/studio" className={s.textLink}>
            Open the full studio <ArrowUpRight width={17} height={17} />
          </a>
        </div>
        <div className={s.editor}>
          <div className={s.editorLabel}>
            <span>Pocket Keeps / workspace</span>
            <span>Local session</span>
          </div>
          <StudioPreview />
        </div>
      </section>
      <section
        data-motion-reveal
        className={s.process}
        aria-labelledby="steps-home"
      >
        <div className={s.processTitle}>
          <h2 id="steps-home">
            From a picture
            <br />
            to a little keepsake.
          </h2>
          <ArtImage
            id="ret-process-cutout"
            alt="Two instant-photo frames and a short orange pencil"
          />
        </div>
        <ol>
          {[
            {
              title: "Find your starting point",
              body: "Pick a keep from the collections, or upload a picture of your own.",
            },
            {
              title: "Make it your frame",
              body: "Choose a square, a wide frame, or something in between. Pan and zoom until it feels right.",
            },
            {
              title: "Take it with you",
              body: "Download a PNG. A small file for a print, a message, or whatever comes next.",
            },
          ].map((step, i) => (
            <li key={step.title}>
              <span>0{i + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      </section>
      <section
        data-motion-reveal
        className={s.close}
        aria-labelledby="keep-title"
      >
        <ArtImage
          id="ret-cta"
          mobile="ret-cta-mobile"
          alt="A teal paper sleeve, favorite photographic prints, and an orange pencil"
        />
        <div className={s.closeCopy}>
          <h2 id="keep-title">
            Keep the
            <br />
            good bits.
          </h2>
          <p>
            Start with one picture.
            <br />
            See where it takes you.
          </p>
          <Button asChild>
            <a href="/studio">
              Make a keep <ArrowUpRight width={18} height={18} />
            </a>
          </Button>
        </div>
      </section>
      <Faq12
        className={s.faq}
        kicker=""
        title="A few things to know"
        description="A simple tool, with clear limits."
        categories={[
          {
            id: "using",
            label: "Using Pocket Keeps",
            items: [
              {
                question: "Do my pictures leave this browser?",
                answer:
                  "No. Cropping and downloads happen locally in your browser. Uploads are not sent to a server, and reloading clears your session.",
              },
              {
                question: "Do I need an account?",
                answer:
                  "No account is needed to use the studio. The plans page explores a possible product; it does not take payments or create subscriptions.",
              },
            ],
          },
        ]}
      />
    </main>
  );
}
