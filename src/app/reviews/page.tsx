"use client";

import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Star, Search, MapPin, Calendar, Package, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollProgress from "@/components/ScrollProgress";
import ReviewForm from "@/components/ReviewForm";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { reviewsUrl } from "@/lib/reviewsApi";

interface Review {
  id: number;
  name: string;
  location: string;
  tourPackage: string;
  rating: number;
  review: string;
  travelDate: string;
  approved: boolean;
  featured: boolean;
  createdAt: string;
}

function StarRating({ rating, size = 16 }: { rating: number; size?: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={size}
          className={s <= rating ? "text-[#F59E0B] fill-[#F59E0B]" : "text-slate-300"}
        />
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{
        y: -4,
        transition: {
          duration: 0.3,
          ease: [0.16, 1, 0.3, 1],
        },
      }}
      className="
        group
        flex
        h-full
        min-h-[200px]
        flex-col
        rounded-2xl
        border-2
        border-[#10B981]
        bg-white
        p-5
        shadow-sm
        transition-all
        duration-300
        hover:border-[#047857]
        hover:shadow-lg
      "
    >
      {/* Header */}
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-emerald-500 text-sm font-bold text-white">
          {review.name.charAt(0).toUpperCase()}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3
              className="truncate text-base font-semibold text-slate-900"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              {review.name}
            </h3>

            <StarRating rating={review.rating} size={13} />
          </div>

          <div className="mt-1 flex items-center gap-1 text-xs text-slate-500">
            <MapPin size={12} />
            <span>{review.location}</span>
          </div>
        </div>
      </div>

      {/* Review */}
      <div className="mt-4 flex-1">
        <p
          className="text-sm leading-6 text-slate-600"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          "{review.review}"
        </p>
      </div>

      {/* Footer */}
      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-3">
        {review.tourPackage ? (
          <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700">
            <Package size={12} />
            <span>{review.tourPackage}</span>
          </div>
        ) : (
          <div />
        )}

        {review.travelDate && (
          <div className="flex items-center gap-1 text-xs text-slate-400">
            <Calendar size={12} />
            <span>
              {new Date(review.travelDate).toLocaleDateString("en-US", {
                month: "short",
                year: "numeric",
              })}
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [ratingFilter, setRatingFilter] = useState(0);
  const [sortBy, setSortBy] = useState<"newest" | "highest">("newest");

  useEffect(() => {
    fetch(reviewsUrl())
      .then((r) => r.json())
      .then((data) => { setReviews(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const featured = useMemo(() => reviews.filter((r) => r.featured), [reviews]);

  const filtered = useMemo(() => {
    let list = reviews.filter((r) => !r.featured);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (r) =>
          r.name.toLowerCase().includes(q) ||
          r.review.toLowerCase().includes(q) ||
          r.tourPackage.toLowerCase().includes(q) ||
          r.location.toLowerCase().includes(q)
      );
    }
    if (ratingFilter > 0) list = list.filter((r) => r.rating === ratingFilter);
    if (sortBy === "newest") list = [...list].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    else list = [...list].sort((a, b) => b.rating - a.rating);
    return list;
  }, [reviews, search, ratingFilter, sortBy]);

  const avgRating = reviews.length > 0 ? (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1) : "—";
  const totalTravelers = reviews.length;
  const featuredCount = featured.length;

  const stats = [
    { label: "Average Rating", value: avgRating, suffix: "/ 5" },
    { label: "Total Reviews", value: reviews.length, suffix: "" },
    { label: "Happy Travelers", value: totalTravelers, suffix: "+" },
    { label: "Featured Reviews", value: featuredCount, suffix: "" },
  ];

  return (
    <>
      <ScrollProgress />
      <main className="relative bg-[#f8fafc] text-slate-900 min-h-screen">
        <Navbar />

        {/* Hero */}
        <section className="relative pt-56 pb-32 overflow-hidden bg-gradient-to-br from-[#065f46] via-[#047857] to-[#0f766e]">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center"
            >
             <br/>
             <br/>
             <br/> <br/>
             <br/>
              <motion.h1
                variants={fadeUp}
                className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white leading-tight tracking-tight mb-5"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Traveler Reviews &{" "}
                <span className="text-gold-gradient">Experiences</span>
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="text-base text-white/80 max-w-2xl font-light leading-relaxed"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                See what our travelers say about their journeys with us. Real stories from real adventurers who explored Pakistan with Gemini Explorer.
              </motion.p>
            </motion.div>
          </div>
        </section>
<br/>
        {/* Stats */}
        <section className="relative -mt-20 pb-20 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-[0_8px_30px_rgba(15,23,42,0.08)]"
                >
                  <p className="text-3xl font-bold text-[#047857]" style={{ fontFamily: "var(--font-poppins)" }}>
                    {stat.value}<span className="text-base text-slate-400 ml-1">{stat.suffix}</span>
                  </p>
                  <p className="text-sm text-slate-500 mt-1" style={{ fontFamily: "var(--font-inter)" }}>{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Featured Reviews */}
        {featured.length > 0 && (
          <section className="pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
              >
                <motion.div variants={fadeUp} className="mb-10">
                  <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase text-[#047857] bg-[#10B981]/10 border border-[#10B981]/20 mb-3">
                    Featured
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900" style={{ fontFamily: "var(--font-poppins)" }}>
                  </h2>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {featured.map((r) => (
                    <ReviewCard key={r.id} review={r} />
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        )}
<br/>
        {/* All Reviews */}
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Filters */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.6 }}
              className="mb-10 flex flex-col sm:flex-row gap-4"
            >
              <div className="relative flex-1">
                <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search reviews, destinations, packages…"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white pl-10 pr-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none shadow-sm focus:border-[#10B981] focus:ring-2 focus:ring-[#10B981]/20 transition-all"
                  style={{ fontFamily: "var(--font-inter)" }}
                />
              </div>
              <div className="relative">
                <select
                  value={ratingFilter}
                  onChange={(e) => setRatingFilter(Number(e.target.value))}
                  className="appearance-none rounded-xl border border-slate-200 bg-white px-4 py-3 pr-9 text-sm text-slate-600 outline-none shadow-sm focus:border-[#10B981] focus:ring-2 focus:ring-[#10B981]/20 transition-all cursor-pointer"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  <option value={0}>All Ratings</option>
                  {[5, 4, 3, 2, 1].map((n) => (
                    <option key={n} value={n}>{n} Star{n !== 1 ? "s" : ""}</option>
                  ))}
                </select>
                <ChevronDown size={14} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
              </div>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as "newest" | "highest")}
                  className="appearance-none rounded-xl border border-slate-200 bg-white px-4 py-3 pr-9 text-sm text-slate-600 outline-none shadow-sm focus:border-[#10B981] focus:ring-2 focus:ring-[#10B981]/20 transition-all cursor-pointer"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  <option value="newest">Newest First</option>
                  <option value="highest">Highest Rating</option>
                </select>
                <ChevronDown size={14} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
              </div>
            </motion.div>
<br/>
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-56 rounded-3xl border border-slate-200 bg-white animate-pulse" />
                ))}
              </div>
            ) : filtered.length === 0 ? (
              <div className="py-20 text-center text-slate-400 text-sm">
                No reviews found matching your filters.
              </div>
            ) : (
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filtered.map((r) => (
                  <ReviewCard key={r.id} review={r} />
                ))}
              </motion.div>
            )}
          </div>
        </section>

        {/* Submit Form */}
        <ReviewForm />

        <Footer />
        <FloatingWhatsApp />
      </main>
    </>
  );
}
