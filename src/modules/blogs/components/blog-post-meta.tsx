import type { BlogPost } from "../data/types";

type BlogPostMetaProps = Pick<BlogPost, "publishedAt" | "readingTime" | "tags"> & {
  showTags?: boolean;
};

export function formatBlogDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

/** Date, reading time and (optionally) tags. */
export function BlogPostMeta({
  publishedAt,
  readingTime,
  tags,
  showTags = true,
}: BlogPostMetaProps) {
  return (
    <div className="space-y-3 text-sm">
      <p className="flex flex-wrap items-center gap-x-3 text-foreground/80">
        <time dateTime={publishedAt}>{formatBlogDate(publishedAt)}</time>
        <span aria-hidden>·</span>
        <span>{readingTime} min read</span>
      </p>
      {showTags && tags.length > 0 ? (
        <ul className="flex flex-wrap gap-2" aria-label="Tags">
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-[#494847]/40 px-3 py-1 text-xs text-foreground"
            >
              {tag}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
