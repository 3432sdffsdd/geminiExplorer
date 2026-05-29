"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Headphones, Leaf, Play, ShieldCheck, Star } from "lucide-react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=90",
    location: "Hunza Valley",
  },
  {
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=90",
    location: "Fairy Meadows",
  },
  {
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&q=90",
    location: "Skardu",
  },
  {
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1920&q=90",
    location: "Naran Kaghan",
  },
];

const trustItems = [
  { icon: Star, title: "Top Rated Tours", text: "4.9 (2k+ Reviews)" },
  { icon: Leaf, title: "Best Price Guarantee", text: "Affordable Luxury" },
  { icon: Headphones, title: "24/7 Support", text: "We are Here for You" },
  { icon: ShieldCheck, title: "Trusted Local Experts", text: "100% Professional" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-[820px] overflow-hidden bg-[#03100f]">
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        >
          <div className="ken-burns absolute inset-0">
            <Image
              src={slides[current].image}
              alt={slides[current].location}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-b from-[#03100f]/58 via-[#03100f]/18 to-[#03100f]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#03100f]/88 via-[#03100f]/43 to-transparent" />
      <div className="absolute inset-0 bg-[#03100f]/10" />

      <div className="relative z-10 mx-auto flex min-h-[820px] max-w-[1180px] flex-col justify-center px-8 pb-44 pt-10 sm:px-12">
        <div className="max-w-[720px] -translate-y-14">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-1 text-[48px] leading-none text-[#1b8c43] sm:text-[56px]"
            style={{ fontFamily: "var(--font-script)" }}
          >
            Discover the
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="mb-0 max-w-[680px] text-[50px] font-semibold leading-[0.98] tracking-[-0.045em] text-white sm:text-[68px] lg:text-[78px]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Untouched
            <br />
            Beauty of Pakistan
          </motion.h1>

          <div className="h-7 sm:h-9" />

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mb-0 max-w-[535px] text-[15px] leading-7 text-white/82"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            From majestic mountains to crystal lakes, rich culture to warm hospitality —
            Pakistan is your next unforgettable journey.
          </motion.p>

          <div className="h-9" />

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.38 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#tours"
              className="group inline-flex h-8 min-w-[128px] items-center justify-center gap-2 rounded-full bg-[#159447] px-5 text-[12px] font-medium whitespace-nowrap text-white shadow-[0_8px_22px_rgba(21,148,71,0.24)] transition-all duration-300 hover:bg-[#1aa052]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Explore Tours
              <span className="flex h-3.5 w-3.5 items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
                <ArrowRight className="h-2.5 w-2.5" />
              </span>
            </a>

            <Link
              href="/#safety"
              className="group inline-flex h-8 items-center gap-2.5 text-[12px] font-medium text-white/90 transition-colors duration-300 hover:text-white"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Is Pakistan Safe To Travel?
              <span className="flex h-3.5 w-3.5 items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
                <ArrowRight className="h-2.5 w-2.5" />
              </span>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="absolute bottom-28 left-6 right-6 mx-auto hidden max-w-[1120px] grid-cols-4 overflow-hidden rounded-xl border border-white/10 bg-[#061312]/82 px-6 py-7 shadow-[0_18px_55px_rgba(0,0,0,0.34)] backdrop-blur-xl sm:left-10 sm:right-10 lg:grid"
        >
          {trustItems.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex items-center gap-4 border-r border-white/10 px-5 py-1 last:border-r-0">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#159447]/40 bg-transparent text-[#28c76f]">
                <Icon className="h-5 w-5" strokeWidth={1.7} />
              </span>
              <div className="flex flex-col gap-3">
                <p className="block text-[13px] font-semibold leading-none text-white" style={{ fontFamily: "var(--font-inter)" }}>
                  {title}
                </p>
                <p className="block text-[11px] leading-none text-white/45" style={{ fontFamily: "var(--font-inter)" }}>
                  {text}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="absolute bottom-[245px] right-24 hidden items-center gap-2 lg:flex">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current ? "h-2 w-7 bg-[#159447]" : "h-2 w-3 bg-white/60"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
