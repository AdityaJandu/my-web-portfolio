import Link from "next/link";
import type { BlogPost } from "../data/types";

type BlogPostNavigationProps = {
  newer?: BlogPost;
  older?: BlogPost;
};

/** Previous/next links. Renders nothing when there is nowhere to go. */
export function BlogPostNavigation({ newer, older }: BlogPostNavigationProps) {
  if (!newer && !older) return null;

  return (
    <nav
      aria-label="More articles"
      className="grid gap-4 border-t border-[#494847]/20 pt-10 sm:grid-cols-2"
    >
      {older ? (
        <Link href={`/blog/${older.slug}`} className="glass-panel !p-5 block">
          <span className="font-display text-xs font-semibold uppercase tracking-widest text-primary">
            ← Older
          </span>
          <span className="mt-2 block font-display text-lg text-white">
            {older.title}
          </span>
        </Link>
      ) : (
        <span aria-hidden className="hidden sm:block" />
      )}

      {newer ? (
        <Link
          href={`/blog/${newer.slug}`}
          className="glass-panel !p-5 block sm:text-right"
        >
          <span className="font-display text-xs font-semibold uppercase tracking-widest text-primary">
            Newer →
          </span>
          <span className="mt-2 block font-display text-lg text-white">
            {newer.title}
          </span>
        </Link>
      ) : null}
    </nav>
  );
}
