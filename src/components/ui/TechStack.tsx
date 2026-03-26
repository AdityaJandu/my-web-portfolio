

import { allTools, masteryCards } from "@/data/tech_stack";
import { SkillBox } from "../layout/SkillBox";
import { getColorVar } from "@/utils/utils";


export default function TechStack() {
    return (
        <section
            id="skills"
            className="relative max-w-7xl mx-auto px-6 md:px-12"
        >
            {/* Header */}
            <div className="mb-12">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-2 tracking-tight">
                    Technical{" "}
                    <span className="text-secondary">Ecosystem</span>
                </h2>
                <p className="text-xs md:text-sm tracking-widest text-foreground uppercase font-semibold font-display">
                    Tools I use to create the future
                </p>
            </div>

            <SkillBox tools={allTools} />




            {/* <SkillsStack /> */}

            {/* 🧠 Grid 2: Mastery Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                {masteryCards.map((card) => (
                    <div
                        key={card.title}
                        className="glass-panel relative overflow-hidden flex flex-col justify-between p-8 md:p-10 min-h-75 transition hover:shadow-[0_0_40px_rgba(138,43,226,0.08)]"
                    >
                        {/* Background watermark */}
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="0.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="absolute -bottom-12 -right-12 w-64 h-64 text-white/3 pointer-events-none -z-10"
                            dangerouslySetInnerHTML={{ __html: card.bgSvgPaths }}
                        />

                        {/* Content */}
                        <div className="z-10">
                            <h3
                                className="text-2xl md:text-3xl font-display font-bold mb-4"
                                style={{ color: getColorVar(card.titleColor) }}
                            >
                                {card.title}
                            </h3>

                            <p className="text-foreground font-body text-sm md:text-base leading-relaxed mb-8 max-w-md">
                                {card.description}
                            </p>
                        </div>

                        {/* Tags */}
                        <div className=" flex flex-wrap gap-3 z-10">
                            {card.tags.map((tag) => {
                                const tagColor = getColorVar(tag.color);

                                return (
                                    <span
                                        key={tag.name}
                                        className="text-[10px] md:text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border backdrop-blur-sm transition hover:scale-105"
                                        style={{
                                            color: tagColor,
                                            borderColor: `color-mix(in srgb, ${tagColor} 30%, transparent)`,
                                            backgroundColor: `color-mix(in srgb, ${tagColor} 8%, transparent)`,
                                        }}
                                    >
                                        {tag.name}
                                    </span>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </section >
    );
}