"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, UserRound, Compass, FileText } from "lucide-react";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";

const cards = [
  {
    icon: ShieldCheck,
    title: "Is Pakistan Safe?",
    description: "Safety guidance, trusted routes, and real travel confidence for Pakistan.",
    link: "/is-pakistan-safe",
    color: "#10B981",
  },
  {
    icon: UserRound,
    title: "Solo Female Travel",
    description: "Local female guidance, safe planning, and comfortable travel support.",
    link: "/solo-female-travel",
    color: "#EC4899",
  },
  {
    icon: Compass,
    title: "Foreign Visitor Guide",
    description: "Culture, currency, SIM cards, transport, seasons, and travel tips.",
    link: "/travel-guide",
    color: "#F59E0B",
  },
  {
    icon: FileText,
    title: "Visa Information",
    description: "Visa process, documents, application tips, and travel preparation.",
    link: "/visa-information",
    color: "#3B82F6",
  },
];

export default function FinalCTA() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);

  return (
    <section
      id="safety"
      ref={ref}
      className="relative overflow-hidden bg-[#020817] px-6 py-28 text-white"
    >
      <motion.div className="absolute inset-0 scale-110" style={{ y }}>
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=90"
          alt="Pakistan mountains"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      <div className="absolute inset-0 bg-[#020817]/80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.22),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.18),transparent_35%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <br />

                    <br />

          <motion.h2
            variants={fadeUp}
            className="mt-7 text-4xl font-bold leading-[1.1] tracking-[-0.04em] text-white sm:text-5xl md:text-4xl"
          >
            Explore Pakistan With Confidence
          </motion.h2>

          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-col items-start gap-4 sm:flex-row"
          >
            <a
              href="https://wa.me/923003667466"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.06] px-7 py-4 text-sm font-bold text-white backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/[0.1]"
            >
              Chat With A Local Expert
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mt-16 grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="group relative min-h-[230px] overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl transition-all duration-300 hover:border-white/25 hover:bg-white/[0.1]"
              >
                <div
                  className="absolute -right-16 -top-16 h-36 w-36 rounded-full opacity-20 blur-3xl transition group-hover:opacity-40"
                  style={{ background: card.color }}
                />

                <div
                  className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/30"
                  style={{ boxShadow: `0 0 30px ${card.color}40` }}
                >
                  <Icon className="h-5 w-5" style={{ color: card.color }} />
                </div>

                <h3 className="relative text-lg font-bold tracking-[-0.02em] text-white">
                  {card.title}
                </h3>

                <p className="relative mt-3 text-sm leading-7 text-white/60">
                  {card.description}
                </p>

                <Link
                  href={card.link}
                  className="relative mt-6 inline-flex items-center gap-2 text-sm font-bold transition group-hover:gap-3"
                  style={{ color: card.color }}
                >
                  Explore Details
                  <ArrowRight className="h-4 w-4" />
                </Link>
                
              </motion.div>
              
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}