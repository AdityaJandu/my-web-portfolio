import { WorkExpType } from "@/data/work_experience";
import { getColorVar } from "@/utils/utils";

interface Props {
    exp: WorkExpType
};

export const ExperienceCardMobile = ({ exp }: Props) => {
    const color = getColorVar(exp.color);

    return (
        <div className="p-6 rounded-xl px-2">
            {/* Year */}
            < p
                className="text-xs font-bold tracking-widest mb-2"
                style={{ color }}
            >
                {exp.date}
            </p >

            {/* Title */}
            < h3 className="text-xl font-display font-bold text-white" >
                {exp.role}
            </h3 >

            {/* Company */}
            {
                exp.company && (
                    <p className="text-sm mb-6" style={{ color }}>
                        {exp.company}
                    </p>
                )
            }

            {/* Description */}
            <p className="glass-panel text-sm text-foreground/80 leading-relaxed">
                {exp.description}
            </p>
        </div >
    );
};