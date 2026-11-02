import type { Metadata } from "next";
import { BlogIndexView } from "@/modules/blogs/ui/blog-index-view";


export const metadata: Metadata = {
  title: "Blog",
  description:
    "Long-form write-ups on projects: the problems, the engineering decisions and what is still being worked out.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return <BlogIndexView />;
}
