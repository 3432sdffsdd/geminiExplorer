"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";

const destinations = [
  {
    name: "Hunza Valley",
    tagline: "The Shangri-La of Pakistan",
    description:
      "Ancient forts, terraced fields, turquoise Attabad Lake, and the backdrop of Rakaposhi peak. Hunza will take your breath away at every turn.",
    image: "https://images.unsplash.com/photo-1571401835393-8c5f35328320?w=800&q=80",
    season: "Apr – Oct",
    duration: "4–6 Days",
    badge: "Most Popular",
    badgeColor: "#F59E0B",
    href: "#tours",
  },
  {
    name: "Skardu",
    tagline: "Gateway to K2",
    description:
      "Gateway to K2 and the Baltoro Glacier, Skardu offers dramatic desert landscapes, deep gorges, and ancient Buddhist carvings etched into time.",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80",
    season: "May – Sep",
    duration: "5–7 Days",
    badge: "Adventure",
    badgeColor: "#3B82F6",
    href: "#tours",
  },
  {
    name: "Swat Valley",
    tagline: "Switzerland of the East",
    description:
      "Lush green meadows, snow-capped peaks, crystal rivers, and rich Buddhist heritage. Swat's beauty is the kind that poets write about.",
    image: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=800&q=80",
    season: "Mar – Nov",
    duration: "3–5 Days",
    badge: "Family Friendly",
    badgeColor: "#10B981",
    href: "#tours",
  },
  {
    name: "Naran Kaghan",
    tagline: "Land of Cascading Waterfalls",
    description:
      "Saiful Muluk Lake, Lulusar Lake, Babusar Pass — Naran Kaghan is a road trip through paradise with every mile more stunning than the last.",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80",
    season: "Jun – Sep",
    duration: "3–4 Days",
    badge: "Scenic Drive",
    badgeColor: "#8B5CF6",
    href: "#tours",
  },
  {
    name: "Azad Kashmir",
    tagline: "Heaven on Earth",
    description:
      "Neelum Valley, Ratti Gali Lake, and lush alpine forests make Kashmir a dreamland you'll want to return to season after season.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    season: "Apr – Oct",
    duration: "4–5 Days",
    badge: "Romantic",
    badgeColor: "#EC4899",
    href: "#tours",
  },
  {
    name: "Fairy Meadows",
    tagline: "Below the Killer Mountain",
    description:
      "Camp beneath Nanga Parbat — the 9th highest peak in the world. Fairy Meadows at dusk, with alpenglow on the summit, is a once-in-a-lifetime sight.",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80",
    season: "May – Oct",
    duration: "2–3 Days",
    badge: "Bucket List",
    badgeColor: "#F97316",
    href: "#tours",
  },
];

export default function Destinations() {
  return (
    <section id="destinations" className="relative overflow-hidden bg-[#03100f] py-24">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-[#159447]/8 rounded-full blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-[1180px] px-8 sm:px-12">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mb-0 text-left"
        >
          <motion.span
            variants={fadeUp}
            className="mb-3 inline-block text-[11px] font-semibold uppercase tracking-[0.28em] text-[#159447]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Explore Pakistan
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-[40px] font-bold leading-none tracking-[-0.035em] text-white sm:text-[48px]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Top Destinations
          </motion.h2>
          <motion.div variants={fadeUp} className="mt-4 h-px w-36 bg-gradient-to-r from-[#159447] via-[#159447]/60 to-transparent" />
        </motion.div>

        <div className="h-8" />

        {/* Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mx-auto grid w-full grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6"
        >
          {destinations.map((dest) => (
            <motion.div
              key={dest.name}
              variants={fadeUp}
              className="group relative w-full overflow-hidden rounded-xl border border-white/8 bg-[#071716] cursor-pointer shadow-[0_18px_45px_rgba(0,0,0,0.22)]"
              whileHover={{ y: -6, transition: { duration: 0.35 } }}
            >
              <div className="relative h-[280px] overflow-hidden">
                <motion.div
                  className="absolute inset-0"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 16vw"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#03100f] via-[#03100f]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3.5">
                  <h3 className="text-sm font-semibold text-white leading-tight" style={{ fontFamily: "var(--font-inter)" }}>
                    {dest.name}
                  </h3>
                  <div className="mt-2.5 flex items-center justify-between">
                    <span className="text-xs text-white/60" style={{ fontFamily: "var(--font-inter)" }}>
                      {dest.duration.replace("–", "-")}
                    </span>
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#159447] text-white">
                      <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportConfig} className="mt-9 text-center">
          <a href="#tours" className="inline-flex items-center gap-3 rounded-md border border-[#159447]/40 px-7 py-3 text-sm font-medium text-white/80 transition-all duration-300 hover:bg-[#159447] hover:text-white" style={{ fontFamily: "var(--font-inter)" }}>
            View All Destinations
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
