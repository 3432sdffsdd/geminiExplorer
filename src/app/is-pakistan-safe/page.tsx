"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { ExternalLink, ShieldCheck } from "lucide-react";

const influencers = [
  {
    name: "Trevor James",
    handle: "The Food Ranger",
    description: "Canadian food vlogger who explored Pakistan's street food and culture.",
    youtube: "https://youtube.com/@TheFoodRanger",
    image: "/images/Trevor James.webp",
  },
  {
    name: "Eva Zu Beck",
    handle: "Eva Zu Beck",
    description: "Polish travel creator who showcased Pakistan's mountains and hospitality.",
    youtube: "https://youtube.com/@EvaZuBeck",
    image: "/images/Eva Zu Beck.jfif",
  },
  {
    name: "Drew Binsky",
    handle: "Drew Binsky",
    description: "American travel blogger who visited Pakistan and shared positive stories.",
    youtube: "https://youtube.com/@DrewBinsky",
    image: "/images/Drew Binsky.jfif",
  },
  {
    name: "Luke Damant",
    handle: "Luke Damant",
    description: "Australian traveller who documented his Pakistan adventures.",
    youtube: "https://youtube.com/@LukeDamant",
    image: "/images/Luke Damant.jfif",
  },
  {
    name: "Alex Reynolds",
    handle: "Lost With Purpose",
    description: "American travel writer who explored Pakistan independently.",
    youtube: "https://youtube.com/@LostWithPurpose",
    image: "/images/Alex Reynolds.jfif",
  },
  {
    name: "Karl Rock",
    handle: "Karl Rock",
    description: "New Zealand YouTuber who explored Pakistan's culture and people.",
    youtube: "https://youtube.com/@KarlRock",
    image: "/images/Karl Rock.jfif",
  },
];

export default function IsPakistanSafePage() {
  return (
    <>
      <Navbar />

      <main className="relative overflow-hidden bg-[#020817] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.12),transparent_35%)]" />

        <section className="relative px-6 pb-20 pt-44">
          <div className="mx-auto max-w-6xl">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="mx-auto max-w-3xl text-center"
            >
              <motion.div
                variants={fadeUp}
                className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#10B981]/30 bg-[#10B981]/10 px-5 py-2"
              >
                <ShieldCheck className="h-4 w-4 text-[#10B981]" />
                <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#A7F3D0]">
                  Safety Information
                </span>
              </motion.div>
<br/><br/>
<br/>
<br/>
<br/>
<br/>

              

              
            </motion.div>
          </div>
        </section>

        <section className="relative px-6 py-16">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2 lg:items-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportConfig}>
              <span className="text-sm font-bold uppercase tracking-[0.24em] text-[#F59E0B]">
                  Is Pakistan Safe To Travel?
              </span>

              <h2 className="mt-4 max-w-xl text-3xl font-bold leading-tight tracking-[-0.035em] sm:text-4xl">
                A misunderstood destination with unforgettable experiences.
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="rounded-[30px] border border-white/10 bg-white/[0.045] p-7 backdrop-blur-xl"
            >
              <p className="text-base leading-8 text-white/65">
                Pakistan is one of the most misunderstood travel destinations in
                the world. Travellers should always stay informed and follow
                official guidance, but thousands of local and international
                visitors explore Pakistan every year.
              </p>

              <p className="mt-5 text-base leading-8 text-white/65">
                Popular destinations such as Skardu, Hunza, Fairy Meadows,
                Deosai National Park, Swat, Naran Kaghan, Lahore, and Islamabad
                continue to welcome travellers from around the world.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="relative px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="mx-auto mb-14 max-w-3xl text-center"
            >
              <motion.span
                variants={fadeUp}
                className="text-sm font-bold uppercase tracking-[0.24em] text-[#F59E0B]"
              >
                <br/>
                <br/>  
                <br/>
                <br/>
                Global Voices
              </motion.span>

              <motion.h2
                variants={fadeUp}
                className="mt-4 text-3xl font-bold leading-tight tracking-[-0.035em] sm:text-4xl"
              >
                International travellers who{" "}
                <span className="bg-gradient-to-r from-[#F59E0B] to-[#FFD36A] bg-clip-text text-transparent">
                  visited Pakistan
                </span>
              </motion.h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
            >
              {influencers.map((person) => (
                <motion.div
                  key={person.name}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  className="group relative flex min-h-[250px] flex-col overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl transition hover:border-white/20 hover:bg-white/[0.07]"
                >
                  <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-[#F59E0B]/15 blur-3xl" />

                  <div className="relative flex h-full flex-col">
                    <div className="mb-5 h-24 w-24 overflow-hidden rounded-3xl border border-white/15 bg-white/10 shadow-[0_18px_45px_rgba(0,0,0,0.35)] ring-1 ring-[#F59E0B]/20">
                      <Image
                        src={person.image}
                        alt={person.name}
                        width={160}
                        height={160}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                      />
                    </div>

                    <h3 className="text-base font-bold text-white">
                      {person.name}
                    </h3>

                    <p className="mt-1 text-xs font-semibold text-[#F59E0B]">
                      {person.handle}
                    </p>

                    <p className="mt-3 text-xs leading-6 text-white/58">
                      {person.description}
                    </p>

                    <a
                      href={person.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center gap-2 pt-4 text-xs font-bold text-[#F59E0B] transition hover:text-[#FFD36A]"
                    >
                      YouTube Channel
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-16 text-center">
              
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}