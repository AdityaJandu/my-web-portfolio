import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative z-50 w-full border-t border-white/5 bg-[#0a0a0a]">
            <div className="px-6 md:px-8  py-8 md:py-12 flex flex-col md:flex-row items-center justify-between gap-6">

                {/* Logo */}
                <Link href="/" className="text-lg font-bold text-primary font-display tracking-tighter hover:text-primary-container transition-colors">
                    AJ
                </Link>

                {/* Copyright */}
                <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/40">
                    &copy; {currentYear}. Built for the future.
                </p>

                {/* Social Links */}
                <div className="flex items-center gap-8">
                    {["Github", "LinkedIn", "Email"].map((link) => (
                        <Link
                            key={link}
                            href="#" // Add your actual URLs here
                            className="text-[10px] font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors"
                        >
                            {link}
                        </Link>
                    ))}
                </div>

            </div>
        </footer>
    );
}
