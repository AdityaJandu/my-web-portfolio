import Link from "next/link";
import GridBackground from "../layout/GridBackground";


export default function HeroCard() {
    return (
        // The "relative" class here is what traps the absolute background
        <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden pt-20 border-b border-white/5">

            {/* 1. The Scoped Background */}
            <GridBackground />

            {/* 2. Hero Content (Ensure z-10 so it sits on top) */}
            <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center mt-12">
                <h2 className="uppercase tracking-[0.2em] text-primary text-xs md:text-sm font-bold mb-8 font-display">
                    Full Stack Developer & Data Scientist
                </h2>

                <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold font-display leading-[1.1] mb-8 text-white tracking-tight">
                    Crafting <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-[#a6c1ee] to-secondary">Digital Artifacts</span> <br className="hidden md:block" /> from the Future.
                </h1>

                <p className="text-base md:text-lg text-foreground max-w-2xl mb-12 font-body leading-relaxed">
                    Building high-performance applications with a focus on immersive UX
                    and data-driven insights. Currently exploring the intersection of AI and
                    Scalable Web Architecture.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-6">
                    <Link href={"#projects"} scroll={true} >
                        <button className="btn-primary w-full sm:w-auto">View My Work</button>
                    </Link>
                    <Link href={"#contact"} scroll={true} >
                        <button className="btn-secondary w-full sm:w-auto">Contact Me</button>
                    </Link>
                </div>
            </div>

        </section>
    );
}