"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";

const experiences = [
  {
    title: "Bonfire Nights Under the Stars",
    description: "Gather around a crackling fire at 3,500m, watch the Milky Way unfold above Fairy Meadows.",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&q=80",
    size: "large",
    tag: "✨ Stargazing",
  },
  {
    title: "Off-Road Jeep Adventures",
    description: "Tackle raw mountain passes that most roads don't dare touch.",
    image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=800&q=80",
    size: "small",
    tag: "🚙 Adventure",
  },
  {
    title: "Lakeside Breakfast",
    description: "Sip green chai as the morning mist rises off Saiful Muluk Lake.",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80",
    size: "small",
    tag: "☕ Serene",
  },
  {
    title: "Ancient Culture & Bazaars",
    description: "Wander centuries-old trade routes where every alley tells a Silk Road story.",
    image: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800&q=80",
    size: "medium",
    tag: "🏛️ Culture",
  },
  {
    title: "Waking Up to Snowfall",
    description: "Open your guesthouse window to a world blanketed in fresh white silence.",
    image: "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?w=800&q=80",
    size: "medium",
    tag: "❄️ Winter Magic",
  },
  {
    title: "Traditional Pakistani Food",
    description: "Chapshuro, Diram Phitti, freshly made Roti — mountain flavours you'll dream about.",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&q=80",
    size: "small",
    tag: "🍛 Cuisine",
  },
  {
    title: "Epic Mountain Road Trips",
    description: "The Karakoram Highway: 1,300 km of the most dramatic road on Earth.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    size: "large-wide",
    tag: "🛣️ Road Trip",
  },
];

const sizeClass: Record<string, string> = {
  large: "md:col-span-2 md:row-span-2",
  "large-wide": "md:col-span-3",
  medium: "md:col-span-1 md:row-span-1",
  small: "md:col-span-1",
};

const heightClass: Record<string, string> = {
  large: "h-80 md:h-full min-h-[400px]",
  "large-wide": "h-64",
  medium: "h-64",
  small: "h-52",
};

export default function Experiences() {
  return (
    <section id="experiences" className="relative py-28 bg-[#020817] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F59E0B]/3 rounded-full blur-[150px]" />
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
          <br/><br/>
          <motion.span
            variants={fadeUp}
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase text-[#10B981] bg-[#10B981]/10 border border-[#10B981]/20 mb-4"
            style={{ fontFamily: "var(--font-inter)" }}
          >
           

            Live the Moment
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5 tracking-tight"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Experiences That{" "}
            <span className="text-gold-gradient">Stay With You</span>
            <br />Forever
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-base text-white/45 max-w-xl mx-auto font-light"
            style={{ fontFamily: "var(--font-inter)" }}
          >
          </motion.p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-auto"
        >
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.title}
              variants={fadeUp}
              custom={idx}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              className={`relative rounded-3xl overflow-hidden group cursor-pointer ${sizeClass[exp.size]}`}
            >
              <div className={`relative w-full ${heightClass[exp.size]}`}>
                <Image
                  src={exp.image}
                  alt={exp.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020817]/90 via-[#020817]/30 to-transparent" />

                {/* Tag */}
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full glass border border-white/10 text-xs font-semibold text-white">
                  {exp.tag}
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3
                    className="text-white font-bold mb-1.5 leading-tight"
                    style={{
                      fontFamily: "var(--font-poppins)",
                      fontSize: exp.size === "large" ? "1.25rem" : "1rem",
                    }}
                  >
                    {exp.title}
                  </h3>
                  <p
                    className="text-white/60 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
