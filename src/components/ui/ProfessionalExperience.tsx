import { getColorVar } from "@/utils/utils";
import { ExperienceCard } from "../layout/ExperienceCard";
import { WorkExpData } from "@/data/work_experience";


export default function ProfessionalExperience() {

    return (
        <section className="relative max-w-6xl mx-auto px-6 py-24">

            {/* Header */}
            <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
                    Professional <span className="text-primary">Trajectory</span>
                </h2>

                <div className="w-30 h-1 bg-linear-to-r from-primary via-[#a6c1ee] to-secondary mx-auto mt-4 rounded-full" />
            </div>


            {/* Mobile View */}
            <div className="md:hidden relative">
                <div className="flex flex-col gap-16">
                    {WorkExpData.map((exp, index) => {
                        return (
                            <div key={index}>
                                < ExperienceCard exp={exp} align={"left"} />
                            </div>
                        );
                    })}
                </div>
            </div>


            {/* Timeline */}
            {/* Desktop view */}
            <div className="hidden md:block relative">

                {/* Vertical Line */}
                <div className=" absolute left-1/2 top-0 h-full w-0.5 bg-white/10 -translate-x-1/2" />

                <div className="flex flex-col gap-16">
                    {WorkExpData.map((exp, index) => {
                        const isLeft = index % 2 === 0;
                        const color = getColorVar(exp.color);

                        return (
                            <div
                                key={index}
                                className="relative flex items-center justify-between"
                            >
                                {/* LEFT */}
                                <div className={`w-[45%] ${isLeft ? "block" : "invisible"}`}>
                                    <ExperienceCard exp={exp} align="right" />
                                </div>

                                {/* CENTER DOT */}
                                <div className="relative z-10 flex items-center justify-center">
                                    <div
                                        className="w-4 h-4 rounded-full"
                                        style={{
                                            backgroundColor: color,
                                            boxShadow: `0 0 15px ${color}`,
                                        }}
                                    />
                                </div>

                                {/* RIGHT */}
                                <div className={`w-[45%] ${!isLeft ? "block" : "invisible"}`}>
                                    <ExperienceCard exp={exp} align="left" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section >
    );
}