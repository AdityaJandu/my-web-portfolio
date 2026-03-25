// src/app/layout.tsx

import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

// Configure the fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body", // Matches the variable we want for standard text
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display", // Matches the variable we want for headings
});

export const metadata: Metadata = {
  title: "Aditya Jandu | Portfolio",
  description: "Full Stack Developer & Data Science Student",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Inject the font variables into the body tag */}
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}