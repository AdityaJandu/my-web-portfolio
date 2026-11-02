import type { BlogStatus } from "../data/types";

const STATUS: Record<BlogStatus, { label: string; classes: string; dot: string }> = {
  implemented: {
    label: "Implemented",
    classes: "text-primary border-primary/30",
    dot: "bg-primary",
  },
  partial: {
    label: "Partial",
    classes: "text-secondary border-secondary/30",
    dot: "bg-secondary",
  },
  "in-progress": {
    label: "In progress",
    classes: "text-tertiary border-tertiary/30",
    dot: "bg-tertiary",
  },
  planned: {
    label: "Planned",
    classes: "text-foreground border-[#494847]/60",
    dot: "bg-foreground/60",
  },
};

/** Small status pill. Colour is paired with a text label, never colour alone. */
export function BlogStatusBadge({ status }: { status: BlogStatus }) {
  const { label, classes, dot } = STATUS[status];
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 font-display text-[0.7rem] font-semibold uppercase tracking-widest ${classes}`}
    >
      <span aria-hidden className={`h-1.5 w-1.5 rounded-full ${dot}`} />
      {label}
    </span>
  );
}
