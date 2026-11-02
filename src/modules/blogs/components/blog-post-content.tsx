import type { BlogContentBlock as Block } from "../data/types";
import { BlogContentBlock } from "./blog-content-block";

/** Renders a list of content blocks with consistent vertical rhythm. */
export function BlogPostContent({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, index) => (
        <BlogContentBlock key={index} block={block} />
      ))}
    </div>
  );
}
