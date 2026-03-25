export default function GridBackground() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-background">

            {/* Layer 1: The Ambient Center Glow (The "Power Source") */}
            {/* We use a wide, flattened ellipse with a massive blur to simulate a spotlight hitting a dark wall */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-250 h-150 bg-primary opacity-[0.04] blur-[130px] rounded-[100%]"></div>

            {/* Layer 2: The 2x2 Crosshairs (The Quadrants) */}
            <div className="absolute inset-0 flex items-center justify-center">
                {/* Horizontal Line */}
                <div className="w-full h-px bg-linear-to-r from-transparent via-white/5 to-transparent"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
                {/* Vertical Line */}
                <div className="h-full w-px bg-linear-to-b from-transparent via-white/5 to-transparent"></div>
            </div>

            {/* Layer 3: Subtle Quadrant Tonal Shifts */}
            {/* This mimics the image where the top-left and bottom-right feel slightly differently lit */}
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-linear-to-br from-white/1.5 to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-linear-to-tl from-white/1.5 to-transparent"></div>

            {/* Layer 4: The Dot Matrix Texture (Optional but highly recommended) */}
            {/* This creates that microscopic tech-grid texture seen in high-end interfaces */}
            <div
                className="absolute inset-0 opacity-[0.15]"
                style={{
                    backgroundImage: `radial-gradient(circle at center, #ffffff 1px, transparent 1px)`,
                    backgroundSize: `32px 32px`
                }}
            ></div>

            {/* Layer 5: Vignette (Darkens the outer edges to force focus to the center) */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_100%)]"></div>

        </div>
    );
}