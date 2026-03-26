export default function AboutCard() {
    return (
        <section id="about" className="relative max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                {/* Left Column: The Portrait */}
                <div className="relative w-full aspect-4/5 max-w-md mx-auto lg:mx-0 group">
                    {/* Ambient Backlight Glow */}
                    <div className="absolute inset-0 bg-linear-to-tr from-(--primary)/20 to-(--secondary)/20 blur-3xl -z-10 transition-all duration-700 group-hover:blur-[60px] group-hover:opacity-70"></div>

                    {/* Image Container */}
                    <div className="w-full h-full rounded-2xl overflow-hidden border border-white/8 bg-white/2 relative z-10 p-1">
                        <div className="w-full h-full rounded-xl overflow-hidden bg-surface-low">
                            {/* TODO: Replace with your Next.js <Image /> component */}


                            {/* Fallback placeholder if image is missing so you can see the layout */}
                            <div className="absolute inset-0 flex items-center justify-center text-white/20 font-display -z-10">
                                Image Placeholder
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Bio & Stats */}
                <div className="flex flex-col justify-center">

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
                    <div className="grid grid-cols-2 gap-4 md:gap-6 mt-12">

                        {/* Stat Card 1 */}
                        <div className="glass-panel hover:border-(--primary)/30 transition-colors">
                            <h3 className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">
                                3+
                            </h3>
                            <p className="text-xs tracking-widest text-foreground uppercase font-semibold">
                                Years Experience
                            </p>
                        </div>

                        {/* Stat Card 2 */}
                        <div className="glass-panel hover:border-(--secondary)/30 transition-colors">
                            <h3 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-2">
                                20+
                            </h3>
                            <p className="text-xs tracking-widest text-foreground uppercase font-semibold">
                                Projects Completed
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}