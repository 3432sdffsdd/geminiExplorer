"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ShieldCheck,
  Users,
  Car,
  PlaneTakeoff,
  Headphones,
} from "lucide-react";

const cards = [
  {
    title: "English Speaking Guides",
    text: "Friendly guides for international travelers.",
    icon: Users,
  },
  {
    title: "Comfortable Transport",
    text: "Clean vehicles with experienced drivers.",
    icon: Car,
  },
  {
    title: "Airport Pickup",
    text: "Stress-free pickup from airport to hotel.",
    icon: PlaneTakeoff,
  },
  {
    title: "Verified Local Experts",
    text: "Trusted guides for safe and smooth travel.",
    icon: ShieldCheck,
  },
  {
    title: "24/7 Support",
    text: "WhatsApp help throughout your journey.",
    icon: Headphones,
  },
  {
    title: "Private Family Tours",
    text: "Tours for families, couples and groups.",
    icon: Users,
  },
];

export default function TrustSection() {
  return (
    <section className="bg-[#f4f4f4] p-4 md:p-8">
      <div
        className="relative overflow-hidden rounded-[32px] bg-cover bg-center shadow-2xl"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(1,12,13,.97) 0%, rgba(1,12,13,.88) 36%, rgba(1,12,13,.62) 65%, rgba(1,12,13,.80) 100%), url('/images/bg.jpeg')",
          backgroundSize: "auto, 70%",
          backgroundPosition: "center, center",
          backgroundRepeat: "no-repeat, no-repeat",
        }}
      >
        <div className="grid min-h-[720px] grid-cols-1 gap-14 px-8 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:px-24 xl:px-28">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative z-10 flex flex-col justify-center"
          >
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-green-400/30 bg-green-500/10 px-4 py-2 text-[14px] font-bold uppercase tracking-[0.22em] text-green-400 backdrop-blur-sm">
              <ShieldCheck size={18} />
              Why should you choose Us?
            </div>

            <h1 className="max-w-[480px] font-serif text-[34px] font-bold leading-[1.08] text-white md:text-[44px] xl:text-[50px]">
              Travel Pakistan <br />
              With <span className="text-green-500">Comfort &</span> <br />
              <span className="text-green-500">Confidence</span>
            </h1>

            <p className="mt-6 max-w-[500px] text-base leading-7 text-white/78">
              From airport pickup to guided mountain journeys, we ensure every
              experience feels safe, smooth, and unforgettable.
            </p>

            <Link
              href="/#safety"
              className="mt-8 inline-flex w-fit items-center rounded-full bg-green-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-green-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-400"
            >
              Is Pakistan Safe To Travel?
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative z-20 flex items-center"
          >
            <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {cards.map((card, index) => {
                const Icon = card.icon;

                return (
                  <motion.div
                    key={index}
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{
                      type: "spring",
                      stiffness: 220,
                      damping: 18,
                    }}
className="group relative min-h-[190px] overflow-hidden rounded-[24px] border border-white/10 bg-black/10 p-5 backdrop-blur-[4px] transition duration-300 hover:border-green-400/40"                  >


                    <div className="relative z-10">
                      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-green-600 shadow-lg shadow-green-500/30 ring-1 ring-white/20">
                        <Icon size={22} className="text-white" />
                      </div>

                      <h3 className="max-w-[180px] text-lg font-bold leading-snug text-white">
                        {card.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-white/70">
                        {card.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}