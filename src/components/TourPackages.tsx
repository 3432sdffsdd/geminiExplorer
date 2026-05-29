"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Clock, Star } from "lucide-react";
import {
  fadeUp,
  staggerContainer,
  viewportConfig,
} from "@/lib/animations";

const packages = [
  {
    name: "Hunza Valley Luxury Tour",
    duration: "5 Days",
    image:
      "https://images.unsplash.com/photo-1571401835393-8c5f35328320?w=700&q=80",
    price: "From PKR 45,000",
    rating: "4.9",
  },
  {
    name: "Skardu Adventure Escape",
    duration: "7 Days",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=700&q=80",
    price: "From PKR 85,000",
    rating: "5.0",
  },
  {
    name: "Naran Kaghan Road Trip",
    duration: "4 Days",
    image:
      "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=700&q=80",
    price: "From PKR 35,000",
    rating: "4.8",
  },
  {
    name: "Swat Valley Family Escape",
    duration: "3 Days",
    image:
      "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=700&q=80",
    price: "From PKR 28,000",
    rating: "4.9",
  },
];

export default function TourPackages() {
  return (
    <section
      id="tours"
      className="relative overflow-hidden bg-[#03100f] py-28"
    >
      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#159447]/10 blur-[140px]" />
      </div>

      <div className="relative mx-auto mt-24 max-w-[1320px] px-6 sm:px-10 lg:px-14">
        
        {/* HEADER */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mb-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <motion.span
              variants={fadeUp}
              className="inline-block text-xs font-bold uppercase tracking-[0.28em] text-[#16c25f]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              <br /> <br />
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="mt-6 text-4xl font-medium tracking-[-0.04em] text-white sm:text-4xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Handpicked Tour Packages
            </motion.h2>
          </div>

          <motion.a
            variants={fadeUp}
            href="https://wa.me/923001234567?text=Hi%2C%20I%20am%20interested%20in%20a%20Pakistan%20tour%20package."
            className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-7 py-4 text-sm font-medium text-white/80 backdrop-blur-xl transition-all duration-300 hover:border-[#16c25f]/40 hover:bg-[#16c25f] hover:text-white"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            View All Tours
            <ArrowRight className="h-4 w-4" />
          </motion.a>
        </motion.div>

        {/* CARDS */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4"
        >
          {packages.map((pkg) => (
            <motion.article
              key={pkg.name}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.35 }}
              className="group overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.03] shadow-[0_20px_70px_rgba(0,0,0,0.22)] backdrop-blur-xl transition-all duration-500 hover:border-[#16c25f]/40"
            >
              {/* IMAGE */}
              <div className="relative h-[240px] overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width:768px)100vw,25vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#03100f] via-transparent to-transparent" />

                {/* DURATION */}
                <span
                  className="absolute left-4 top-4 rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-[11px] font-medium text-white backdrop-blur-md"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {pkg.duration}
                </span>
              </div>

              {/* CONTENT */}
              <div className="p-5">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <h3
                    className="text-[20px] font-medium leading-[1.35] tracking-[-0.02em] text-white"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {pkg.name}
                  </h3>

                  <span
                    className="mt-1 flex items-center gap-1 rounded-full border border-[#16c25f]/20 bg-[#16c25f]/8 px-2.5 py-1 text-[11px] font-medium text-[#4ade80]"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    <Star className="h-3.5 w-3.5 fill-[#16c25f]" />
                    {pkg.rating}
                  </span>
                </div>

                {/* INFO */}
                <div
                  className="flex items-center gap-2 text-[13px] font-light tracking-wide text-white/50"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  <Clock className="h-4 w-4 text-[#16c25f]" />
                  Private guided trip · Hotels · Transport
                </div>

                {/* FOOTER */}
                <div className="mt-6 flex items-center justify-between border-t border-white/8 pt-5">
                  <span
                    className="text-[17px] font-medium tracking-wide text-white"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {pkg.price}
                  </span>

                  <a
                    href="https://wa.me/923001234567?text=Hi%2C%20I%20am%20interested%20in%20a%20Pakistan%20tour%20package."
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#16c25f] text-white shadow-lg shadow-[#16c25f]/30 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}