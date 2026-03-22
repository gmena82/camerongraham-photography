import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="section-divider">
      <div className="container-shell py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">
          <div className="space-y-3">
            <h3 className="font-heading text-2xl tracking-[0.12em]">
              CAMERON GRAHAM
            </h3>
            <p className="font-serif text-[1.15rem] text-stone italic">
              Photography
            </p>
          </div>

          <div className="space-y-4">
            <p className="eyebrow">Navigation</p>
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-silver text-sm tracking-[0.08em] uppercase hover:text-cream transition-colors duration-300 w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <p className="eyebrow">Connect</p>
            <div className="flex flex-col gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-silver text-sm tracking-[0.08em] uppercase hover:text-cream transition-colors duration-300 w-fit"
              >
                Instagram
              </a>
              <a
                href="mailto:hello@camerongraham.com"
                className="text-silver text-sm tracking-[0.08em] uppercase hover:text-cream transition-colors duration-300 w-fit"
              >
                hello@camerongraham.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-line flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted text-[11px] tracking-[0.2em] uppercase">
            &copy; 2026 Cameron Graham Photography
          </p>
          <p className="text-muted text-[11px] tracking-[0.2em] uppercase">
            All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
