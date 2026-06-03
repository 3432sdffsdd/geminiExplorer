"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, Phone, Camera } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Tours", href: "/#tours" },
  { label: "Experiences", href: "/#experiences" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Transport", href: "/transport" },
  { label: "Contact", href: "https://wa.me/923003667466?text=Hi%2C%20I%20am%20interested%20in%20a%20Pakistan%20tour%20package." },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#03100f]/88 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.45)] border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <img src="/logo.png" alt="Gemini Explorer Logo" className="w-24 h-24 object-contain" />
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-white text-lg tracking-tight" style={{ fontFamily: "var(--font-poppins)" }}>
                  GEMINI EXPLORER
                </span>
                <span className="text-[9px] text-white/55 font-semibold tracking-[0.26em] uppercase -mt-0.5">
                  Dream, Discover & Explore
                </span>
              </div>
            </Link>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium tracking-wide text-white/75 hover:text-white transition-colors duration-200 group"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#159447] group-hover:w-4/5 transition-all duration-300 rounded-full" />
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+923003667466"
                className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-[#159447]" />
                <span className="hidden xl:inline" style={{ fontFamily: "var(--font-inter)" }}>+92 300 3667466</span>
              </a>
              <a
                href="https://www.instagram.com/geminiexplorer_/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/15 text-[#E1306C] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#E1306C]/45 hover:bg-[#E1306C]/10"
                aria-label="Instagram"
              >
                <Camera className="h-5 w-5" />
              </a>
              <Link
                href="https://wa.me/923003667466?text=Hi%2C%20I%20am%20interested%20in%20a%20Pakistan%20tour%20package."
                target="_blank"
                rel="noopener noreferrer"
                className="group ml-3 inline-flex items-center gap-3 rounded-full border border-white/20 bg-black/15 px-5 py-2.5 text-[12px] font-medium text-white/90 shadow-[0_12px_32px_rgba(0,0,0,0.22)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white/45 hover:bg-white/10 hover:text-white"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                <span>Plan My Trip</span>
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/25 text-white/70 transition-all duration-300 group-hover:translate-x-0.5 group-hover:border-white/55 group-hover:text-white">
                  →
                </span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl glass text-white"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#020817]/98 backdrop-blur-2xl flex flex-col items-center justify-center lg:hidden"
          >
            <div className="flex flex-col items-center gap-6 w-full px-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-2xl font-semibold text-white/80 hover:text-[#F59E0B] transition-colors"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.06 }}
                className="mt-4"
              >
                <Link
                  href="https://wa.me/923003667466?text=Hi%2C%20I%20am%20interested%20in%20a%20Pakistan%20tour%20package."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="px-8 py-3 rounded-full font-semibold text-[#020817] bg-gradient-to-r from-[#F59E0B] to-[#FBBF24] text-lg"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Plan My Trip
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
