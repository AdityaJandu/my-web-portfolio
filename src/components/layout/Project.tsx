"use client";

import { ProjectType } from "@/data/project";
import { getColorVar } from "@/utils/utils";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

interface Props {
    project: ProjectType;
    index?: number;
}

export const Project = ({ project, index = 0 }: Props) => {
    return (
        <div
            className="glass-panel rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,240,255,0.08)] hover:scale-[1.01]"
        >
            {/* IMAGE */}
            <div onClick={() => project.link && window.open(project.link, "_blank")} className="relative w-full h-55 overflow-hidden rounded-lg ">
                <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    priority={index === 0} // only first image is LCP
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover scale-95 group-hover:scale-105 transition-transform duration-500 rounded-lg"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70" />

                {/* Icon */}
                <div className="absolute top-3 right-3 bg-black/50 p-2 rounded-md opacity-0 group-hover:opacity-100 transition">
                    <ExternalLink size={16} className="text-white" />
                </div>
            </div>

            {/* CONTENT */}
            <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => {
                        const tagColor = getColorVar(tag.color);

                        return (
                            <span
                                key={tag.name}
                                className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border"
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

                {/* Title */}
                <h3
                    className="text-xl md:text-2xl font-display font-bold mb-2"
                    style={{ color: getColorVar(project.color) }}
                >
                    {project.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-foreground leading-relaxed mb-4">
                    {project.description}
                </p>

                {/* Footer */}
                <div onClick={() => project.link && window.open(project.github, "_blank")} className="hover:-translate-y-1 flex items-center pt-4 gap-3 text-sm text-primary font-medium">
                    <Image
                        src="/icons/code.svg"
                        alt="code"
                        height={18}
                        width={18}

                    />
                    <span className="font-display">GITHUB</span>
                </div>
            </div>
        </div>
    );
};