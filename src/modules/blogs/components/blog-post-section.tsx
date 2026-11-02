import type {
  BlogSection,
  FeatureSection,
  ChallengesSection,
  RoadmapSection,
} from "../data/types";
import { BlogPostContent } from "./blog-post-content";
import { BlogPostImage } from "./blog-post-image";
import { BlogStatusBadge } from "./blog-status-badge";

const SECTION_SPACING = "scroll-mt-24 border-t border-[#494847]/20 pt-14";

function Paragraphs({ items }: { items: string[] }) {
  return (
    <div className="space-y-4">
      {items.map((text) => (
        <p key={text} className="text-[1.0625rem] leading-8">
          {text}
        </p>
      ))}
    </div>
  );
}

function Labelled({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-3">
      <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-primary">
        {label}
      </h3>
      {children}
    </div>
  );
}

/**
 * Feature order: name -> demo image -> description -> why it matters ->
 * how it works -> challenges -> currently working on -> status.
 */
function FeatureBody({ section }: { section: FeatureSection }) {
  return (
    <section id={section.id} className={SECTION_SPACING}>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
        <h2 className="text-3xl font-semibold md:text-4xl">{section.title}</h2>
        <BlogStatusBadge status={section.status} />
      </div>
      <p className="mt-3 text-lg text-foreground/80">{section.tagline}</p>

      <BlogPostImage
        image={section.image}
        placeholderLabel={`${section.title} in the Vantage product`}
        className="mt-8"
      />

      <div className="mt-10 space-y-10">
        <Paragraphs items={section.description} />

        <Labelled label="Why it matters">
          <Paragraphs items={section.whyItMatters} />
        </Labelled>

        <Labelled label="How it works">
          <Paragraphs items={section.howItWorks} />
        </Labelled>

        {section.blocks && section.blocks.length > 0 ? (
          <BlogPostContent blocks={section.blocks} />
        ) : null}

        {section.challenges.length > 0 ? (
          <Labelled label="Challenges">
            <ul className="space-y-4">
              {section.challenges.map((challenge) => (
                <li key={challenge.title} className="leading-7">
                  <strong className="font-semibold text-white">
                    {challenge.title}.
                  </strong>{" "}
                  {challenge.detail}
                </li>
              ))}
            </ul>
          </Labelled>
        ) : null}

        {section.currentWork.length > 0 ? (
          <Labelled label="Currently working on">
            <ul className="list-disc space-y-2 pl-6 leading-7 marker:text-tertiary">
              {section.currentWork.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Labelled>
        ) : null}

        {section.statusNote ? (
          <p className="text-sm italic text-foreground/70">{section.statusNote}</p>
        ) : null}
      </div>
    </section>
  );
}

function ChallengesBody({ section }: { section: ChallengesSection }) {
  return (
    <section id={section.id} className={SECTION_SPACING}>
      <h2 className="text-3xl font-semibold md:text-4xl">{section.title}</h2>
      {section.intro ? (
        <p className="mt-4 text-[1.0625rem] leading-8">{section.intro}</p>
      ) : null}

      {section.image ? (
        <BlogPostImage
          image={section.image}
          placeholderLabel="Architecture diagram"
          className="mt-8"
        />
      ) : null}

      <div className="mt-10 divide-y divide-[#494847]/20">
        {section.items.map((item) => (
          <article key={item.title} className="py-8 first:pt-0">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <BlogStatusBadge status={item.status} />
            </div>
            <dl className="mt-5 space-y-4 leading-7">
              <div>
                <dt className="font-display text-xs font-semibold uppercase tracking-widest text-primary">
                  Why it's hard
                </dt>
                <dd className="mt-1">{item.whyHard}</dd>
              </div>
              <div>
                <dt className="font-display text-xs font-semibold uppercase tracking-widest text-primary">
                  Decision
                </dt>
                <dd className="mt-1">{item.decision}</dd>
              </div>
              <div>
                <dt className="font-display text-xs font-semibold uppercase tracking-widest text-primary">
                  Trade-off
                </dt>
                <dd className="mt-1">{item.tradeoff}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </section>
  );
}

function RoadmapBody({ section }: { section: RoadmapSection }) {
  return (
    <section id={section.id} className={SECTION_SPACING}>
      <h2 className="text-3xl font-semibold md:text-4xl">{section.title}</h2>
      {section.intro ? (
        <p className="mt-4 text-[1.0625rem] leading-8">{section.intro}</p>
      ) : null}
      <ul className="mt-8 divide-y divide-[#494847]/20 border-y border-[#494847]/20">
        {section.items.map((item) => (
          <li
            key={item.title}
            className="flex flex-col gap-3 py-5 sm:flex-row sm:items-start sm:justify-between"
          >
            <div>
              <p className="font-display font-semibold text-white">{item.title}</p>
              {item.description ? (
                <p className="mt-1 leading-7">{item.description}</p>
              ) : null}
            </div>
            <div className="shrink-0">
              <BlogStatusBadge status={item.status} />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

/** Renders one article section. Switches on `kind`. */
export function BlogPostSection({ section }: { section: BlogSection }) {
  switch (section.kind) {
    case "prose":
      return (
        <section id={section.id} className={SECTION_SPACING}>
          <h2 className="text-3xl font-semibold md:text-4xl">{section.title}</h2>
          {section.image ? (
            <BlogPostImage
              image={section.image}
              placeholderLabel={section.title}
              className="mt-8"
            />
          ) : null}
          <div className="mt-6">
            <BlogPostContent blocks={section.blocks} />
          </div>
        </section>
      );

    case "feature":
      return <FeatureBody section={section} />;

    case "challenges":
      return <ChallengesBody section={section} />;

    case "roadmap":
      return <RoadmapBody section={section} />;

    case "takeaways":
      return (
        <section id={section.id} className={SECTION_SPACING}>
          <h2 className="text-3xl font-semibold md:text-4xl">{section.title}</h2>
          <ul className="mt-6 list-disc space-y-3 pl-6 text-[1.0625rem] leading-8 marker:text-primary">
            {section.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      );
  }
}
