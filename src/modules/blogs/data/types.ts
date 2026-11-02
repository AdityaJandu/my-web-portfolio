/**
 * Blog data model.
 *
 * Everything here is plain, serializable data: no JSX, no React imports.
 * Components decide HOW things render; these types decide WHAT can exist.
 */

// ---------------------------------------------------------------------------
// Primitives
// ---------------------------------------------------------------------------

export type BlogImage = {
  src: string; // e.g. "/images/blog/vantage/overview.png"
  alt: string; // describe what the screenshot actually shows
  caption?: string;
};

/**
 * Honest implementation status. Used on features, challenges and roadmap items
 * so the article never overclaims.
 */
export type BlogStatus =
  | "implemented" // working in the codebase
  | "partial" // works, but incomplete
  | "in-progress" // actively being built
  | "planned"; // not started / vision only

/** Only `published` posts are exposed in production. */
export type BlogPostStatus = "draft" | "published";

// ---------------------------------------------------------------------------
// Content blocks (low-level building bricks, discriminated by `type`)
// ---------------------------------------------------------------------------

export type ParagraphBlock = {
  type: "paragraph";
  text: string;
};

export type HeadingBlock = {
  type: "heading";
  level: 2 | 3 | 4;
  text: string;
};

export type ListBlock = {
  type: "list";
  ordered: boolean;
  items: string[];
};

export type QuoteBlock = {
  type: "quote";
  text: string;
  attribution?: string;
};

export type CalloutBlock = {
  type: "callout";
  /** `hypothetical` is for illustrative scenarios, never real results. */
  tone: "note" | "info" | "warning" | "hypothetical";
  title?: string;
  text: string;
};

export type ImageBlock = {
  type: "image";
  image: BlogImage;
};

export type CodeBlock = {
  type: "code";
  language: string; // "ts", "bash", "text" (use "text" for ASCII diagrams)
  code: string;
  filename?: string;
};

export type BlogContentBlock =
  | ParagraphBlock
  | HeadingBlock
  | ListBlock
  | QuoteBlock
  | CalloutBlock
  | ImageBlock
  | CodeBlock;

// ---------------------------------------------------------------------------
// Reusable sub-structures
// ---------------------------------------------------------------------------

/** A challenge inside one feature: short and specific. */
export type BlogFeatureChallenge = {
  title: string;
  detail: string;
};

/** A challenge in the dedicated engineering section: problem, decision, trade-off. */
export type BlogChallenge = {
  title: string;
  whyHard: string;
  decision: string;
  tradeoff: string;
  status: BlogStatus;
};

export type BlogRoadmapItem = {
  title: string;
  description?: string;
  status: BlogStatus;
};

// ---------------------------------------------------------------------------
// Sections (top-level article parts, discriminated by `kind`)
// ---------------------------------------------------------------------------

type SectionBase = {
  /** Unique within the post, URL-safe. Used for #anchors and the table of contents. */
  id: string;
  title: string;
  /** Short label for the table of contents. Falls back to `title`. */
  tocLabel?: string;
};

/** Free-form prose: overview, problem, philosophy, closing... */
export type ProseSection = SectionBase & {
  kind: "prose";
  /** Optional image slot, rendered above the text. */
  image?: BlogImage;
  blocks: BlogContentBlock[];
};

/**
 * One product feature. Render order:
 * name -> demo image -> description -> why it matters -> how it works
 * -> challenges -> currently working on -> status.
 */
export type FeatureSection = SectionBase & {
  kind: "feature";
  /** Demo image slot. Optional: the UI shows a labelled placeholder when absent. */
  image?: BlogImage;
  /** One-line summary under the title. */
  tagline: string;
  /** Each text field is an array of short paragraphs. */
  description: string[];
  whyItMatters: string[];
  howItWorks: string[];
  /** Extra supporting content (callouts, additional images) after "how it works". */
  blocks?: BlogContentBlock[];
  challenges: BlogFeatureChallenge[];
  /** What is being improved, completed or investigated right now. */
  currentWork: string[];
  status: BlogStatus;
  statusNote?: string;
};

/** Dedicated engineering and architecture challenges. */
export type ChallengesSection = SectionBase & {
  kind: "challenges";
  intro?: string;
  /** Optional architecture diagram slot. */
  image?: BlogImage;
  items: BlogChallenge[];
};

/** What's next. */
export type RoadmapSection = SectionBase & {
  kind: "roadmap";
  intro?: string;
  items: BlogRoadmapItem[];
};

/** Key takeaways list. */
export type TakeawaysSection = SectionBase & {
  kind: "takeaways";
  items: string[];
};

export type BlogSection =
  | ProseSection
  | FeatureSection
  | ChallengesSection
  | RoadmapSection
  | TakeawaysSection;

export type BlogSectionKind = BlogSection["kind"];

// ---------------------------------------------------------------------------
// Post
// ---------------------------------------------------------------------------

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];

  /** `draft` posts are hidden in production. Flip to `published` when ready. */
  status: BlogPostStatus;

  /** ISO date, YYYY-MM-DD. */
  publishedAt: string;
  updatedAt?: string;
  /** Whole minutes. */
  readingTime: number;

  featured: boolean;
  coverImage?: BlogImage;

  sections: BlogSection[];
};

/**
 * Identity helper: full type-checking and autocomplete for post files.
 * Usage: `export const post = defineBlogPost({...})`.
 */
export function defineBlogPost<const T extends BlogPost>(post: T): T {
  return post;
}
