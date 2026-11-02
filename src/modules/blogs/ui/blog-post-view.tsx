import Link from "next/link";
import type { BlogPost } from "../data/types";
import { getAdjacentPosts } from "../data";
import { BlogPostHeader } from "../components/blog-post-header";
import { BlogPostSection } from "../components/blog-post-section";
import { BlogPostNavigation } from "../components/blog-post-navigation";
import { BlogTableOfContents } from "../components/blog-table-of-contents";

export function BlogPostView({ post }: { post: BlogPost }) {
  const { newer, older } = getAdjacentPosts(post.slug);
  const tocItems = post.sections.map((section) => ({
    id: section.id,
    label: section.tocLabel ?? section.title,
  }));

  return (
    <main className="mx-auto w-full max-w-6xl px-4 pb-24 pt-28 sm:px-6 lg:px-8">
      <Link
        href="/blog"
        className="mb-10 inline-block font-display text-sm font-semibold uppercase tracking-widest text-primary"
      >
        ← All articles
      </Link>

      <BlogPostHeader post={post} />

      <div className="mt-14 grid gap-10 lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-16">
        <aside>
          <BlogTableOfContents items={tocItems} />
        </aside>

        <article className="min-w-0 max-w-3xl space-y-14">
          {post.sections.map((section) => (
            <BlogPostSection key={section.id} section={section} />
          ))}
          <BlogPostNavigation newer={newer} older={older} />
        </article>
      </div>
    </main>
  );
}
