"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Mail, MapPin, Share2, Globe2, MessageCircle, ArrowRight, Send } from "lucide-react";
import { useState } from "react";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";

const quickLinks = [
  { label: "Destinations", href: "#destinations" },
  { label: "Tour Packages", href: "#tours" },
  { label: "Experiences", href: "#experiences" },
  { label: "Gallery", href: "#gallery" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "https://wa.me/923001234567?text=Hi%2C%20I%20am%20interested%20in%20a%20Pakistan%20tour%20package." },
];

const destinations = [
  { label: "Hunza Valley", href: "#destinations" },
  { label: "Skardu", href: "#destinations" },
  { label: "Swat Valley", href: "#destinations" },
  { label: "Naran Kaghan", href: "#destinations" },
  { label: "Azad Kashmir", href: "#destinations" },
  { label: "Fairy Meadows", href: "#destinations" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer id="contact" className="relative bg-[#020817] border-t border-white/10">
      {/* Main Footer */}

                <br />
          <br />
          <br />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.25fr]"
        >
          {/* Column 1: Brand */}
          
          <motion.div variants={fadeUp} className="lg:col-span-1">
            <Link href="#home" className="flex items-center gap-3 mb-5 group">
              <img src="/logo.png" alt="Gemini Explorer Logo" className="h-14 w-14 object-contain" />
              <div>
                <div className="font-bold text-white text-lg leading-none tracking-tight" style={{ fontFamily: "var(--font-poppins)" }}>
                  GEMINI EXPLORER
                </div>
                <div className="text-[10px] text-[#F59E0B] tracking-[0.16em] uppercase mt-1" style={{ fontFamily: "var(--font-inter)" }}>
                  Dream, Discover & Explore
                </div>
              </div>
            </Link>
            <p className="max-w-sm text-white/50 text-sm leading-7 mb-6" style={{ fontFamily: "var(--font-inter)" }}>
              Your trusted partner for unforgettable journeys through Pakistan&apos;s
              mountains, valleys, and cultures. Local expertise, global standards.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/923003667466"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 hover:bg-emerald-500/20 transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#E1306C]/10 border border-[#E1306C]/20 flex items-center justify-center text-[#E1306C] hover:bg-[#E1306C]/20 transition-all duration-300"
                aria-label="Instagram"
              >
                <Share2 className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#1877F2]/10 border border-[#1877F2]/20 flex items-center justify-center text-[#1877F2] hover:bg-[#1877F2]/20 transition-all duration-300"
                aria-label="Facebook"
              >
                <Globe2 className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div variants={fadeUp}>
            <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-6" style={{ fontFamily: "var(--font-poppins)" }}>
              Quick Links
            </h3>
            <ul className="space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-white/50 hover:text-[#F59E0B] text-sm transition-colors duration-200 group"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Destinations */}
          <motion.div variants={fadeUp}>
            <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-6" style={{ fontFamily: "var(--font-poppins)" }}>
              Top Destinations
            </h3>
            <ul className="space-y-3.5">
              {destinations.map((dest) => (
                <li key={dest.label}>
                  <Link
                    href={dest.href}
                    className="flex items-center gap-2 text-white/50 hover:text-[#F59E0B] text-sm transition-colors duration-200 group"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200" />
                    {dest.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Contact + Newsletter */}
          <motion.div variants={fadeUp}>
            <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-6" style={{ fontFamily: "var(--font-poppins)" }}>
              Get In Touch
            </h3>
            <ul className="space-y-4 mb-7">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#F59E0B] mt-0.5 shrink-0" />
                <a href="tel:+923003667466" className="text-white/55 hover:text-white text-sm transition-colors" style={{ fontFamily: "var(--font-inter)" }}>
                  +92 300 3667466
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#F59E0B] mt-0.5 shrink-0" />
                <span className="text-white/55 text-sm" style={{ fontFamily: "var(--font-inter)" }}>
                  Karachi, Pakistan
                </span>
              </li>
            </ul>

            {/* Newsletter */}
            <div>
              <p className="text-white/60 text-xs mb-3" style={{ fontFamily: "var(--font-inter)" }}>
                Get travel tips & exclusive deals
              </p>
              {subscribed ? (
                <div className="flex items-center gap-2 text-[#10B981] text-sm" style={{ fontFamily: "var(--font-inter)" }}>
                  ✓ Subscribed! Welcome aboard.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex max-w-xs gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="min-w-0 flex-1 px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs placeholder:text-white/25 outline-none focus:border-[#F59E0B]/40 transition-colors"
                    style={{ fontFamily: "var(--font-inter)" }}
                    required
                  />
                  <button
                    type="submit"
                    className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#F59E0B] to-[#FBBF24] flex items-center justify-center text-[#020817] hover:shadow-[0_0_15px_rgba(245,158,11,0.4)] transition-all duration-300 shrink-0"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs" style={{ fontFamily: "var(--font-inter)" }}>
            © {new Date().getFullYear()} GEMINI EXPLORER. All rights reserved.
          </p>
          <p className="text-white/20 text-xs" style={{ fontFamily: "var(--font-inter)" }}>
            Crafted with ❤️ for Pakistan
          </p>
        </div>
      </div>
    </footer>
  );
}
