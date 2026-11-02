import Image from "next/image";
import type { BlogImage } from "../data/types";

type BlogPostImageProps = {
  image?: BlogImage;
  /** Shown in the placeholder when `image` is missing, e.g. the feature name. */
  placeholderLabel: string;
  aspect?: "video" | "wide";
  priority?: boolean;
  sizes?: string;
  className?: string;
};

const ASPECT = {
  video: "aspect-video",
  wide: "aspect-[21/9]",
} as const;

/**
 * Consistent image frame. Renders the real image when present, otherwise a
 * clearly labelled demo placeholder, so a missing asset never breaks the page.
 */
export function BlogPostImage({
  image,
  placeholderLabel,
  aspect = "video",
  priority = false,
  sizes = "(min-width: 1024px) 768px, 100vw",
  className = "",
}: BlogPostImageProps) {
  return (
    <figure className={className}>
      <div
        className={`relative w-full overflow-hidden rounded-xl border border-[#494847]/20 bg-surface-low shadow-ambient ${ASPECT[aspect]}`}
      >
        {image ? (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes={sizes}
            priority={priority}
            className="object-cover object-top"
            loading="eager"
          />
        ) : (
          <div
            role="img"
            aria-label={`Demo image placeholder: ${placeholderLabel}`}
            className="absolute inset-3 flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-[#494847]/50 text-center"
          >
            <span className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-primary">
              Demo image
            </span>
            <span className="max-w-xs px-4 text-sm text-foreground/80">
              {placeholderLabel}
            </span>
            <span className="text-xs text-foreground/50">Coming soon</span>
          </div>
        )}
      </div>
      {image?.caption ? (
        <figcaption className="mt-3 text-center text-sm text-foreground/70">
          {image.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
