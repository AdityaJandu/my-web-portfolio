import type { BlogContentBlock as Block } from "../data/types";
import { BlogPostImage } from "./blog-post-image";

const CALLOUT_STYLES = {
  note: "border-primary/60",
  info: "border-secondary/60",
  warning: "border-tertiary/60",
  hypothetical: "border-secondary/60 border-dashed",
} as const;

const CALLOUT_LABEL = {
  note: "Note",
  info: "Info",
  warning: "Heads up",
  hypothetical: "Hypothetical example",
} as const;

/** Renders one content block. Switches on `type`; exhaustive by construction. */
export function BlogContentBlock({ block }: { block: Block }) {
  switch (block.type) {
    case "paragraph":
      return <p className="text-[1.0625rem] leading-8">{block.text}</p>;

    case "heading": {
      const Tag = block.level === 2 ? "h2" : block.level === 3 ? "h3" : "h4";
      const size =
        block.level === 2 ? "text-2xl" : block.level === 3 ? "text-xl" : "text-lg";
      return <Tag className={`${size} mt-4 font-semibold`}>{block.text}</Tag>;
    }

    case "list": {
      const List = block.ordered ? "ol" : "ul";
      return (
        <List
          className={`space-y-2 pl-6 text-[1.0625rem] leading-8 marker:text-primary ${
            block.ordered ? "list-decimal" : "list-disc"
          }`}
        >
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </List>
      );
    }

    case "quote":
      return (
        <blockquote className="border-l-2 border-primary pl-6">
          <p className="font-display text-xl leading-relaxed text-white md:text-2xl">
            {block.text}
          </p>
          {block.attribution ? (
            <footer className="mt-3 text-sm text-foreground/70">
              {block.attribution}
            </footer>
          ) : null}
        </blockquote>
      );

    case "callout":
      return (
        <aside
          className={`rounded-lg border-l-2 bg-surface-low px-5 py-4 ${CALLOUT_STYLES[block.tone]}`}
        >
          <p className="mb-1 font-display text-xs font-semibold uppercase tracking-widest text-white">
            {block.title ?? CALLOUT_LABEL[block.tone]}
          </p>
          <p className="leading-7">{block.text}</p>
        </aside>
      );

    case "image":
      return (
        <BlogPostImage
          image={block.image}
          placeholderLabel={block.image.alt}
          className="my-2"
        />
      );

    case "code":
      return (
        <figure>
          {block.filename ? (
            <figcaption className="mb-2 font-mono text-xs text-foreground/60">
              {block.filename}
            </figcaption>
          ) : null}
          <pre
            className="overflow-x-auto rounded-lg border border-[#494847]/20 bg-surface-low p-5 font-mono text-sm leading-6 text-white"
            data-language={block.language}
          >
            <code>{block.code}</code>
          </pre>
        </figure>
      );
  }
}
