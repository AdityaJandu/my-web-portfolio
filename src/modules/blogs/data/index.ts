import { vantage } from "./posts/vantage";
import { BlogPost } from "./types";

/**
 * Post registry. To add an article:
 *   1. create `posts/<slug>.ts` exporting a `defineBlogPost({...})`
 *   2. import it above and add it to this array.
 */
const posts: readonly BlogPost[] = [vantage];

// ---------------------------------------------------------------------------
// Validation: runs once at import, so mistakes fail the build / dev server.
// ---------------------------------------------------------------------------

const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

const isValidDate = (value: string) =>
  ISO_DATE.test(value) && !Number.isNaN(Date.parse(value));

function validatePost(post: BlogPost): string[] {
  const errors: string[] = [];

  if (!SLUG.test(post.slug)) errors.push(`invalid slug "${post.slug}"`);
  if (!isValidDate(post.publishedAt)) errors.push("publishedAt must be YYYY-MM-DD");
  if (post.updatedAt) {
    if (!isValidDate(post.updatedAt)) errors.push("updatedAt must be YYYY-MM-DD");
    else if (Date.parse(post.updatedAt) < Date.parse(post.publishedAt))
      errors.push("updatedAt is earlier than publishedAt");
  }
  if (!Number.isInteger(post.readingTime) || post.readingTime < 1)
    errors.push("readingTime must be a positive whole number");
  if (post.sections.length === 0) errors.push("post has no sections");

  const ids = new Set<string>();
  for (const section of post.sections) {
    if (!SLUG.test(section.id)) errors.push(`invalid section id "${section.id}"`);
    if (ids.has(section.id)) errors.push(`duplicate section id "${section.id}"`);
    ids.add(section.id);

    if (section.kind === "feature") {
      if (section.description.length === 0 || section.whyItMatters.length === 0)
        errors.push(`feature "${section.id}" needs description and whyItMatters`);
    }
    if (
      (section.kind === "challenges" || section.kind === "roadmap") &&
      section.items.length === 0
    ) {
      errors.push(`section "${section.id}" has no items`);
    }
  }

  // Never let placeholder text reach production.
  if (post.status === "published" && /TODO/.test(JSON.stringify(post))) {
    errors.push("published posts must not contain TODO placeholders");
  }

  return errors;
}

const slugs = new Set<string>();
for (const post of posts) {
  if (slugs.has(post.slug)) throw new Error(`Duplicate blog slug: "${post.slug}"`);
  slugs.add(post.slug);

  const errors = validatePost(post);
  if (errors.length > 0) {
    throw new Error(`Invalid blog post "${post.slug}":\n - ${errors.join("\n - ")}`);
  }
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Production exposes published posts only. Drafts are previewable in
 * `next dev` so you can review them; they never appear in a build.
 */
const isVisible = (post: BlogPost) =>
  post.status === "published" || process.env.NODE_ENV === "development";

const byNewest = (a: BlogPost, b: BlogPost) =>
  Date.parse(b.publishedAt) - Date.parse(a.publishedAt);

const visiblePosts = (): BlogPost[] => posts.filter(isVisible).sort(byNewest);

export function getAllPosts(): BlogPost[] {
  return visiblePosts();
}

export function getFeaturedPosts(): BlogPost[] {
  return visiblePosts().filter((post) => post.featured);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return visiblePosts().find((post) => post.slug === slug);
}

/** For `generateStaticParams`. */
export function getAllSlugs(): string[] {
  return visiblePosts().map((post) => post.slug);
}

/** Neighbours for prev/next navigation. Both undefined when there is one post. */
export function getAdjacentPosts(slug: string): {
  newer?: BlogPost;
  older?: BlogPost;
} {
  const list = visiblePosts();
  const index = list.findIndex((post) => post.slug === slug);
  if (index === -1) return {};
  return { newer: list[index - 1], older: list[index + 1] };
}
