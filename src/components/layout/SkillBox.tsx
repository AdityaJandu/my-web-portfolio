"use client";

import { useState } from "react";
import Image from "next/image";
import { Tool } from "@/data/tech_stack";
import { ChevronDown } from "lucide-react";

interface SkillBoxProps {
    tools: Tool[];
}

export const SkillBox = ({ tools }: SkillBoxProps) => {
    const [expanded, setExpanded] = useState<boolean>(false);

    if (!tools || tools.length === 0) return null;

    const INITIAL_COUNT = 6;
    const visibleTools = expanded ? tools : tools.slice(0, INITIAL_COUNT);

    return (
        <div>
            {/* GRID */}
            <div className="grid grid-cols-2 mb-6 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
                {visibleTools.map((tool) => (
                    <div
                        key={tool.name}
                        className="glass-panel flex flex-col items-center justify-center py-8 md:py-0 md:h-36 group cursor-default transition-all duration-300 hover:border-(--primary)/30 hover:shadow-[0_0_25px_rgba(0,240,255,0.05)]"
                    >
                        <Image
                            src={tool.icon}
                            alt={tool.name}
                            width={36}
                            height={36}
                            className="mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1 drop-shadow-md"
                        />

                        <p className="text-[10px] md:text-xs tracking-widest text-foreground group-hover:text-white uppercase font-bold font-display text-center transition-colors">
                            {tool.name}
                        </p>
                    </div>
                ))}
            </div>

            {/* TOGGLE BUTTON */}
            {tools.length > INITIAL_COUNT && (
                <div className="flex justify-center h-1 mb-12">
                    <button
                        onClick={() => setExpanded(!expanded)}
                        className=" glass-panel flex items-center gap-2 text-xs text-white/70 hover:text-primary transition group"
                    >
                        <span >{expanded ? "Show Less" : "Show More"}</span>

                        <ChevronDown
                            size={14}
                            className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""
                                }`}
                        />
                    </button>
                </div>
            )}
        </div>
    );
};