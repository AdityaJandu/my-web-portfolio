import { WorkExpType } from "@/data/work_experience";
import { getColorVar } from "@/utils/utils";

interface Props {
    exp: WorkExpType;
    align: string;
}

export const ExperienceCard = ({
    exp,
    align,
}: Props) => {
    const color = getColorVar(exp.color);

    return (
        <div
            className={`p-6 rounded-xl ${align === "right" ? "text-right" : "text-left"
                }`}
        >
            {/* Year */}
            <p
                className="text-xs font-bold tracking-widest mb-2"
                style={{ color }}
            >
                {exp.date}
            </p>

            {/* Title */}
            <h3 className="text-xl font-display font-bold text-white">
                {exp.role}
            </h3>

            {/* Company */}
            {exp.company && (
                <p className="text-sm mb-6" style={{ color }}>
                    {exp.company}
                </p>
            )}

            {/* Description */}
            <p className="glass-panel text-sm text-foreground/80 leading-relaxed">
                {exp.description}
            </p>
        </div>
    );
};