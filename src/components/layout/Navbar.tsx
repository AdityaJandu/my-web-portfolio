import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-8 py-3 bg-background/60 backdrop-blur-md border-b border-white/5">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold text-primary font-display tracking-tighter hover:text-primary-container transition-colors">
                AJ
            </Link>

            <div className="flex gap-10">
                {/* Desktop Links */}
                <ul className="hidden md:flex items-center font-display gap-8 text-sm font-medium text-foreground">
                    {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                        <li key={item}>
                            <Link
                                href={`#${item.toLowerCase()}`}
                                className="hover:text-primary transition-colors "
                            >
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* CTA Button */}
                <Link
                    href="/files/Aditya_Resume.pdf"
                    className="hidden md:block"
                    target="_blank"
                >
                    <button className="btn-primary ">
                        <p className="text-[0.8rem] font-display font-bold">RESUME</p>
                    </button>
                </Link>
            </div>
        </nav>
    );
}