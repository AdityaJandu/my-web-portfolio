import type { BlogPost } from "../data/types";
import { BlogPostImage } from "./blog-post-image";
import { BlogPostMeta } from "./blog-post-meta";

export function BlogPostHeader({ post }: { post: BlogPost }) {
  return (
    <header className="space-y-8">
      <div className="space-y-5">
        <p className="flex items-center gap-3 font-display text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          {post.category}
          {post.status === "draft" ? (
            <span className="rounded-full border border-tertiary/40 px-2.5 py-0.5 text-[0.65rem] tracking-widest text-tertiary">
              Draft preview
            </span>
          ) : null}
        </p>
        <h1 className="max-w-4xl text-4xl font-semibold leading-[1.1] md:text-6xl">
          {post.title}
        </h1>
        <p className="max-w-3xl text-lg leading-8 text-foreground md:text-xl">
          {post.excerpt}
        </p>
        <BlogPostMeta
          publishedAt={post.publishedAt}
          readingTime={post.readingTime}
          tags={post.tags}
        />
      </div>

      <BlogPostImage
        image={post.coverImage}
        placeholderLabel={`${post.title}: product overview`}
        aspect="wide"
        priority
        sizes="(min-width: 1280px) 1152px, 100vw"
      />
    </header>
  );
}
