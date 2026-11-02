export default function AboutCard() {
    return (
        <section id="about" className=" font-display relative max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-24">
            <div className="max-w-4xl mx-auto flex flex-col justify-center items-center text-center">
                {/* Headline */}
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-8 tracking-tight">
                    Hello, I&apos;m <span className="text-primary">Aditya.</span>
                </h2>

                {/* Bio Text */}
                <div className="space-y-6 text-base md:text-lg text-foreground font-body leading-relaxed">
                    <p>
                        Based in the digital ether, I am a developer who views code as a medium for artistic and functional expression. With a deep foundation in Full Stack development and a growing passion for Data Science, I bridge the gap between complex algorithms and human-centric design.
                    </p>
                    <p>
                        I specialize in building scalable systems using modern frameworks like Next.js and Flutter, ensuring every pixel and every query is optimized for the best possible performance.
                    </p>
                </div>

                {/* Stat Cards Container */}
                <div className="grid grid-cols-1 gap-4 md:gap-6 mt-12 w-full max-w-2xl">

                    {/* <div className="glass-panel hover:border-(--primary)/30 transition-colors flex flex-col items-center justify-center">
                        <h3 className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">
                            3+
                        </h3>
                        <p className="text-xs tracking-widest text-foreground uppercase font-semibold text-center">
                            Years Experience
                        </p>
                    </div> */}


                    {/* <div className="glass-panel hover:border-(--secondary)/30 transition-colors flex flex-col items-center justify-center">
                        <h3 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-2">
                            20+
                        </h3>
                        <p className="text-xs tracking-widest text-foreground uppercase font-semibold text-center">
                            Projects Completed
                        </p>
                    </div> */}
                </div>
            </div>
        </section>
    );
}