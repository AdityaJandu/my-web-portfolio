import { getAllPosts } from "../data";
import { BlogPostCard } from "../components/blog-post-card";

export function BlogIndexView() {
  const posts = getAllPosts();
  const featured = posts.find((post) => post.featured);
  const rest = posts.filter((post) => post !== featured);

  return (
    <main className="mx-auto w-full max-w-6xl px-4 pb-24 pt-28 sm:px-6 lg:px-8">
      <header className="max-w-2xl space-y-4">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Blog
        </p>
        <h1 className="text-4xl font-semibold md:text-6xl">
          Notes on what I&apos;m building
        </h1>
        <p className="text-lg leading-8">
          Long-form write-ups on projects: the problems, the engineering
          decisions and what is still being worked out.
        </p>
      </header>

      {posts.length === 0 ? (
        <p className="mt-16 rounded-xl border border-dashed border-[#494847]/50 p-10 text-center">
          The first article is on its way.
        </p>
      ) : (
        <div className="mt-14 space-y-10">
          {featured ? <BlogPostCard post={featured} variant="featured" /> : null}

          {rest.length > 0 ? (
            <section aria-label="All articles">
              <h2 className="mb-6 font-display text-sm font-semibold uppercase tracking-widest text-white">
                All articles
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {rest.map((post) => (
                  <BlogPostCard key={post.slug} post={post} />
                ))}
              </div>
            </section>
          ) : null}
        </div>
      )}
    </main>
  );
}
