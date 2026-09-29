import type { Metadata } from "next";
import { Button } from "@/atoms/button";
import { ClayImage } from "./_components/ClayImage";
import { ClaySurface } from "./_components/ClaySurface";

export const notFoundSeo = {
  title: "Page not found — Pillo",
  description:
    "This page could not be found. Head back to Pillo's home page or see how Pillo works.",
} as const;

export const metadata: Metadata = {
  title: { absolute: notFoundSeo.title },
  description: notFoundSeo.description,
};

const notFoundStyles = `
.pillo-not-found {
  display: grid;
  justify-items: center;
  gap: 1rem;
  width: min(100%, 40rem);
  min-width: 0;
  margin-inline: auto;
  padding: clamp(1.25rem, 3vw, 2.25rem);
  text-align: center;
}

.pillo-not-found h1,
.pillo-not-found p {
  margin: 0 auto;
}

.pillo-not-found-figure {
  width: min(100%, 16rem);
  margin: 0;
}

.pillo-not-found-figure img {
  display: block;
  width: 100%;
  max-width: 100%;
  height: auto;
  border-radius: var(--jk-radius-surface);
  background: var(--jk-clay-cream);
}

.pillo-not-found-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
  max-width: 100%;
}

.pillo-not-found-actions a {
  width: auto;
  max-width: 100%;
}

@media (prefers-reduced-motion: reduce) {
  .pillo-not-found-actions a {
    transition: none;
  }
}
`;

const notFoundCopy = {
  title: "This page wandered off.",
  body: "Let's get you back to today's next step.",
  home: "Go to home",
  homeHref: "/",
  how: "See how it works",
  howHref: "/how-it-works",
} as const;

export default function NotFound() {
  return (
    <>
      <style href="pillo-not-found" precedence="default">
        {notFoundStyles}
      </style>
      <ClaySurface
        aria-labelledby="not-found-title"
        className="pillo-not-found"
      >
        <figure className="pillo-not-found-figure">
          <ClayImage
            alt=""
            decorative
            fluid
            id="cla-404"
            sizes="(min-width: 768px) 16rem, 70vw"
          />
        </figure>
        <h1 className="jk-heading" id="not-found-title">
          {notFoundCopy.title}
        </h1>
        <p className="jk-body">{notFoundCopy.body}</p>
        <div className="pillo-not-found-actions">
          <Button asChild>
            <a href={notFoundCopy.homeHref}>{notFoundCopy.home}</a>
          </Button>
          <Button asChild variant="secondary">
            <a href={notFoundCopy.howHref}>{notFoundCopy.how}</a>
          </Button>
        </div>
      </ClaySurface>
    </>
  );
}
