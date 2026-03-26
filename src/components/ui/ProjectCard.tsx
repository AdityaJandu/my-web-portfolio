"use client";

import { useState } from "react";
import { ProjectData } from "@/data/project";
import { Project } from "../layout/Project";
import { ChevronDown } from "lucide-react";

export default function ProjectCard() {
    const [expanded, setExpanded] = useState(false);

    const INITIAL_COUNT = 2;

    const visibleProjects = expanded
        ? ProjectData
        : ProjectData.slice(0, INITIAL_COUNT);

    return (
        <section
            id="projects"
            className="relative max-w-7xl mx-auto px-6 md:px-12 py-24"
        >
            {/* Header */}
            <div className="mb-12">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-2 tracking-tight">
                    Featured <span className="text-primary">Projects</span>
                </h2>

                <p className="text-xs md:text-sm tracking-widest text-foreground uppercase font-semibold font-display">
                    Building the bridge between idea and reality
                </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                {visibleProjects.map((project, index) => (
                    <Project project={project} key={index} index={index} />
                ))}
            </div>

            {/* Toggle */}
            {ProjectData.length > INITIAL_COUNT && (
                <div className="flex justify-center h-1 mb-8 mt-8">
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
        </section>
    );
}