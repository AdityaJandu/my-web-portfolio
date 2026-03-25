"use client";

import Image from "next/image";
import { tools, masteryCards } from "@/data/tech_stack";

export default function TechnicalEcosystem() {
    // Map color → CSS variable
    const getColorVar = (
        colorName: "primary" | "secondary" | "tertiary"
    ) => `var(--${colorName})`;

    // Glow styles for icons
    const glowMap = {
        primary: "drop-shadow-[0_0_10px_#00f0ff]",
        secondary: "drop-shadow-[0_0_10px_#8a2be2]",
        tertiary: "drop-shadow-[0_0_10px_#ff5c00]",
    };

    return (
        <section
            id="skills"
            className="relative max-w-7xl mx-auto px-6 md:px-12 py-24"
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

            {/* 🔲 Grid 1: Tools */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mb-4 md:mb-6">
                {tools.map((tool) => (
                    <div
                        key={tool.name}
                        className="glass-panel flex flex-col items-center justify-center py-10 md:py-0 md:h-40 group cursor-default transition hover:shadow-[0_0_25px_rgba(0,240,255,0.08)]"
                    >
                        {/* Icon */}
                        <Image
                            src={tool.icon}
                            alt={tool.name}
                            width={40}
                            height={40}
                            className="mb-4 transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1"
                        />

                        {/* Name */}
                        <p className="text-xs tracking-widest text-white uppercase font-bold font-display text-center">
                            {tool.name}
                        </p>
                    </div>
                ))}
            </div>

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
                        <div className="flex flex-wrap gap-3 z-10">
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
        </section>
    );
}