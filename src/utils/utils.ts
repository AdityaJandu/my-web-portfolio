// Map color → CSS variable
export const getColorVar = (
    colorName: "primary" | "secondary" | "tertiary"
) => `var(--${colorName})`;

// Glow styles for icons
export const glowMap = {
    primary: "drop-shadow-[0_0_10px_#00f0ff]",
    secondary: "drop-shadow-[0_0_10px_#8a2be2]",
    tertiary: "drop-shadow-[0_0_10px_#ff5c00]",
};