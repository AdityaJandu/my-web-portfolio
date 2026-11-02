import Link from "next/link";
import type { BlogPost } from "../data/types";
import { BlogPostImage } from "./blog-post-image";
import { BlogPostMeta } from "./blog-post-meta";

type BlogPostCardProps = {
  post: BlogPost;
  variant?: "default" | "featured";
};

export function BlogPostCard({ post, variant = "default" }: BlogPostCardProps) {
  const featured = variant === "featured";

  return (
    <article
      className={`glass-panel group relative !p-5 md:!p-6 ${
        featured ? "grid gap-8 lg:grid-cols-2 lg:items-center" : "flex h-full flex-col gap-6"
      }`}
    >
      <BlogPostImage
        image={post.coverImage}
        placeholderLabel={post.title}
        sizes={
          featured ? "(min-width: 1024px) 560px, 100vw" : "(min-width: 768px) 400px, 100vw"
        }
      />

      <div className="flex flex-1 flex-col gap-4">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          {featured ? "Featured · " : ""}
          {post.category}
        </p>

        <h2
          className={`font-semibold leading-tight ${
            featured ? "text-3xl md:text-4xl" : "text-2xl"
          }`}
        >
          {/* The link stretches over the whole card so the card is one click target. */}
          <Link
            href={`/blog/${post.slug}`}
            className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none focus-visible:after:ring-2 focus-visible:after:ring-primary focus-visible:after:rounded-xl"
          >
            {post.title}
          </Link>
        </h2>

        <p className="leading-7">{post.excerpt}</p>

        <div className="mt-auto pt-2">
          <BlogPostMeta
            publishedAt={post.publishedAt}
            readingTime={post.readingTime}
            tags={post.tags}
          />
        </div>

        <span className="font-display text-sm font-semibold uppercase tracking-widest text-primary transition-transform duration-300 [transition-timing-function:var(--ease-haptic)] group-hover:translate-x-1">
          Read the case study →
        </span>
      </div>
    </article>
  );
}
