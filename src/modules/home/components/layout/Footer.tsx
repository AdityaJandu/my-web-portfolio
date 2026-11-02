import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            name: "Github",
            url: "https://github.com/AdityaJandu",
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/aditya-84278234a/",
        },
        {
            name: "Email",
            url: "janduaditay@gmail.com",
        },
    ];
    return (
        <footer className="relative z-50 font-display w-full border-t border-white/5 bg-[#0a0a0a]">
            <div className="px-6 md:px-8  py-8 md:py-12 flex flex-col md:flex-row items-center justify-between gap-6">

                {/* Logo */}
                <Link href="/" className="text-lg font-bold text-primary font-display tracking-tighter hover:text-primary-container transition-colors">
                    AJ
                </Link>

                {/* Copyright */}
                <div className="flex flex-col items-center justify-center">
                    <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/40">
                        &copy; {currentYear}. Built for the future.
                    </p>

                    <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/40">
                        Built by AJ using Next.JS
                    </p>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-8">
                    {socialLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            className="text-[10px] font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

            </div>
        </footer>
    );
}
