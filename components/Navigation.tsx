"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-dark/92 backdrop-blur-xl border-b border-line"
            : "bg-gradient-to-b from-dark/70 to-transparent"
        }`}
      >
        <div className="container-shell flex items-center justify-between h-[4.5rem] md:h-[5.25rem]">
          <Link
            href="/"
            className="font-heading text-xl md:text-2xl tracking-[0.16em] text-cream z-50 relative hover:text-stone transition-colors"
          >
            CAMERON GRAHAM
          </Link>

          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-[12px] tracking-[0.22em] uppercase font-body pb-1 transition-colors duration-300 after:absolute after:left-0 after:bottom-0 after:h-px after:bg-cream after:transition-all after:duration-300 ${
                  pathname === link.href
                    ? "text-cream after:w-full"
                    : "text-silver hover:text-cream after:w-0 hover:after:w-full"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden z-50 relative w-10 h-10 flex items-center justify-center border border-line/70 bg-dark/30"
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
          >
            <span
              className={`absolute w-5 h-px bg-cream transition-all duration-300 ${
                mobileOpen ? "rotate-45" : "-translate-y-1"
              }`}
            />
            <span
              className={`absolute w-5 h-px bg-cream transition-all duration-300 ${
                mobileOpen ? "-rotate-45" : "translate-y-1"
              }`}
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-dark/98 backdrop-blur-md flex flex-col justify-center items-center gap-6 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {links.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 + i * 0.08, duration: 0.4 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`font-heading text-[2.35rem] sm:text-5xl tracking-[0.12em] transition-colors ${
                    pathname === link.href
                      ? "text-cream"
                      : "text-silver hover:text-cream"
                  }`}
                >
                  {link.label.toUpperCase()}
                </Link>
              </motion.div>
            ))}
            <motion.p
              className="eyebrow mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.4 }}
            >
              Los Angeles, California
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
