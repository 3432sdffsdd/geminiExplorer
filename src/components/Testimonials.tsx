"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";

const testimonials = [
  {
    name: "Wojciech Kopec",
    country: "Poland",
    flag: "��",
    role: "Solo Traveller",
    image: "/images/foreigner1.jpeg",
    rating: 5,
    text: "Pakistan was one of the most breathtaking and welcoming countries I have ever visited. Visiting Gilgit and Karachi was an incredible experience. Our guide Fatima Ali was exceptional — knowledgeable, warm, and always went the extra mile. I felt completely at ease from day one.",
    tour: "Gilgit & Karachi Tour",
  },
  {
    name: "Syed Areeb Akhtar",
    country: "Pakistan",
    flag: "��",
    role: "Group Traveller",
    image: "/images/local1.jpg",
    rating: 5,
    text: "I had a chance to go on a group trip with Fatima and without any doubt it was the best experience I've ever had. Food, accommodations, rates everything was perfect and value for money. I personally recommend everyone to go on a trip with Fatima it'll be a wholesome experience.",
    tour: "Group Tour",
  },
  {
    name: "Mnr R",
    country: "",
    flag: "",
    role: "Group Traveller",
    image: "/images/ab.avif",
    rating: 5,
    text: "Did a group tour with Fatima. Honestly, it was the best tour I have ever been on. Well managed, budget-friendly, and full of fun!",
    tour: "Group Tour",
  },
  {
    name: "Basma Farooq",
    country: "Pakistan",
    flag: "��",
    role: "Travel Enthusiast",
    image: "/images/ab.avif",
    rating: 5,
    text: "Great service. Everything was perfectly organised. Highly recommended!",
    tour: "Pakistan Tour",
  },
  {
    name: "Michàel's Thóughts",
    country: "Pakistan",
    flag: "��",
    role: "Travel Enthusiast",
    image: "/images/ab.avif",
    rating: 5,
    text: "I highly recommend Gemini Explorer for tour because they organize everything perfectly from transport to food each and everything.",
    tour: "Lahore Tour",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  return (
    <section className="relative py-28 bg-[#0A0F1E] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#F59E0B]/4 rounded-full blur-[130px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-16"
        >
          <motion.span
            variants={fadeUp}
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase text-[#F59E0B] bg-[#F59E0B]/10 border border-[#F59E0B]/20 mb-4"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Traveller Stories
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5 tracking-tight"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Stories From{" "}
            <span className="text-gold-gradient">Pakistan & Beyond</span>
          </motion.h2>
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="relative"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#0D1B2A] rounded-3xl p-8 md:p-12 border border-white/5 mb-8"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Left: Quote */}
                <div className="flex-1">
                  <Quote className="w-10 h-10 text-[#F59E0B]/30 mb-6" />
                  <p
                    className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 italic"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    &ldquo;{testimonials[active].text}&rdquo;
                  </p>

                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: testimonials[active].rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[#F59E0B] fill-[#F59E0B]" />
                    ))}
                  </div>

                  <div
                    className="inline-block px-3 py-1.5 rounded-full text-xs font-medium text-[#10B981] bg-[#10B981]/10 border border-[#10B981]/20"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {testimonials[active].tour}
                  </div>
                </div>

                {/* Right: Person */}
                <div className="flex flex-row md:flex-col items-center md:items-center gap-4 md:gap-3 md:min-w-[160px]">
                  <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden ring-2 ring-[#F59E0B]/30">
                    <Image
                      src={testimonials[active].image}
                      alt={testimonials[active].name}
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  </div>
                  <div className="text-center md:text-center">
                    <div className="text-white font-bold text-base" style={{ fontFamily: "var(--font-poppins)" }}>
                      {testimonials[active].name}
                    </div>
                    <div className="flex items-center justify-center gap-1.5 mt-1">
                      <span className="text-xl">{testimonials[active].flag}</span>
                      <span className="text-white/50 text-sm" style={{ fontFamily: "var(--font-inter)" }}>
                        {testimonials[active].country}
                      </span>
                    </div>
                    <div className="text-white/30 text-xs mt-1" style={{ fontFamily: "var(--font-inter)" }}>
                      {testimonials[active].role}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === active ? "w-8 h-2 bg-[#F59E0B]" : "w-2 h-2 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={prev}
                className="w-11 h-11 rounded-full glass border border-white/10 flex items-center justify-center text-white hover:border-[#F59E0B]/40 hover:text-[#F59E0B] transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="w-11 h-11 rounded-full glass border border-white/10 flex items-center justify-center text-white hover:border-[#F59E0B]/40 hover:text-[#F59E0B] transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Mini Cards Row */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-4"
        >
          {testimonials.map((t, i) => (
            <motion.button
              key={t.name}
              variants={fadeUp}
              onClick={() => setActive(i)}
              className={`p-4 rounded-2xl border text-left transition-all duration-300 ${
                i === active
                  ? "bg-[#0D1B2A] border-[#F59E0B]/40"
                  : "bg-[#0D1B2A]/50 border-white/5 hover:border-white/15"
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="relative w-8 h-8 rounded-full overflow-hidden">
                  <Image src={t.image} alt={t.name} fill className="object-cover" sizes="32px" />
                </div>
                <span className="text-sm">{t.flag}</span>
              </div>
              <div className="text-white text-xs font-semibold leading-tight" style={{ fontFamily: "var(--font-poppins)" }}>
                {t.name}
              </div>
              <div className="text-white/35 text-[10px] mt-0.5" style={{ fontFamily: "var(--font-inter)" }}>
                {t.country}
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
