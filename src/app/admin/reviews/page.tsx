"use client";

import { useEffect, useState } from "react";
import { Star, Check, X, Trash2, Award, StarOff, LogOut, Eye, Clock } from "lucide-react";
import { reviewsUrl } from "@/lib/reviewsApi";

// ⚠️ CHANGE THIS before deploying! Must match $ADMIN_PASSWORD in reviews.php
const ADMIN_PASSWORD = "gemini2026"; // <-- CHANGE THIS

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

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={13}
          className={s <= rating ? "text-[#F59E0B] fill-[#F59E0B]" : "text-white/15"}
        />
      ))}
    </div>
  );
}

type TabType = "pending" | "approved";

export default function AdminReviews() {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(false);
  const [tab, setTab] = useState<TabType>("pending");
  const [actionLoading, setActionLoading] = useState<number | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setAuthed(true);
      setLoginError("");
    } else {
      setLoginError("Incorrect password. Please try again.");
    }
  };

  const fetchReviews = async () => {
    setLoading(true);
    const res = await fetch(reviewsUrl({ all: "true" }), {
      headers: { "X-Admin-Password": ADMIN_PASSWORD },
    });
    const data = await res.json();
    setReviews(data);
    setLoading(false);
  };

  useEffect(() => {
    if (authed) fetchReviews();
  }, [authed]);

  const patch = async (id: number, updates: Partial<Review>) => {
    setActionLoading(id);
    await fetch(reviewsUrl({ id }), {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "X-Admin-Password": ADMIN_PASSWORD,
      },
      body: JSON.stringify(updates),
    });
    await fetchReviews();
    setActionLoading(null);
  };

  const remove = async (id: number) => {
    if (!confirm("Delete this review permanently?")) return;
    setActionLoading(id);
    await fetch(reviewsUrl({ id }), {
      method: "DELETE",
      headers: { "X-Admin-Password": ADMIN_PASSWORD },
    });
    await fetchReviews();
    setActionLoading(null);
  };

  const pending = reviews.filter((r) => !r.approved);
  const approved = reviews.filter((r) => r.approved);
  const listed = tab === "pending" ? pending : approved;

  const btnClass = "inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed";

  if (!authed) {
    return (
      <div className="min-h-screen bg-[#020817] flex items-center justify-center px-4">
        <div className="w-full max-w-sm">
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F59E0B]/15 border border-[#F59E0B]/30">
              <Star className="text-[#F59E0B]" size={24} />
            </div>
            <h1 className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-poppins)" }}>Admin Panel</h1>
            <p className="text-sm text-white/40 mt-1">Reviews Management</p>
          </div>
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-[#F59E0B]/50 transition-colors"
            />
            {loginError && (
              <p className="text-xs text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
                {loginError}
              </p>
            )}
            <button
              type="submit"
              className="rounded-xl bg-[#F59E0B] py-3 text-sm font-bold text-[#020817] hover:bg-[#FBBF24] transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020817] text-white">
      {/* Header */}
      <header className="border-b border-white/8 bg-[#020817]/80 backdrop-blur-xl sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-[#F59E0B]/15 flex items-center justify-center">
              <Star size={16} className="text-[#F59E0B]" />
            </div>
            <span className="font-bold text-white text-sm" style={{ fontFamily: "var(--font-poppins)" }}>
              Reviews Admin
            </span>
          </div>
          <button
            onClick={() => setAuthed(false)}
            className="inline-flex items-center gap-1.5 text-xs text-white/40 hover:text-white transition-colors"
          >
            <LogOut size={14} /> Logout
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Stats bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total Reviews", value: reviews.length },
            { label: "Pending Approval", value: pending.length },
            { label: "Approved", value: approved.length },
            { label: "Featured", value: reviews.filter((r) => r.featured).length },
          ].map((s, i) => (
            <div key={i} className="rounded-2xl border border-white/8 bg-white/[0.03] p-5 text-center">
              <p className="text-2xl font-bold text-[#F59E0B]">{s.value}</p>
              <p className="text-xs text-white/40 mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          {(["pending", "approved"] as TabType[]).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold capitalize transition-all ${
                tab === t
                  ? "bg-[#F59E0B] text-[#020817]"
                  : "border border-white/10 bg-white/[0.03] text-white/50 hover:text-white"
              }`}
            >
              {t === "pending" ? <Clock size={14} /> : <Eye size={14} />}
              {t} ({t === "pending" ? pending.length : approved.length})
            </button>
          ))}
        </div>

        {loading ? (
          <div className="space-y-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-28 rounded-2xl border border-white/8 bg-white/[0.02] animate-pulse" />
            ))}
          </div>
        ) : listed.length === 0 ? (
          <div className="py-20 text-center text-white/30 text-sm">
            No {tab} reviews.
          </div>
        ) : (
          <div className="space-y-4">
            {listed.map((r) => (
              <div
                key={r.id}
                className="rounded-2xl border border-white/8 bg-white/[0.03] p-6 flex flex-col sm:flex-row gap-4"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="font-semibold text-white text-sm">{r.name}</span>
                    {r.location && <span className="text-xs text-white/35">{r.location}</span>}
                    <StarRating rating={r.rating} />
                    {r.featured && (
                      <span className="rounded-full bg-[#F59E0B]/15 border border-[#F59E0B]/30 px-2 py-0.5 text-[10px] font-semibold text-[#F59E0B] uppercase tracking-wider">
                        Featured
                      </span>
                    )}
                  </div>
                  {r.tourPackage && (
                    <p className="text-xs text-[#F59E0B]/70 mb-1.5">{r.tourPackage}</p>
                  )}
                  <p className="text-sm text-white/55 leading-relaxed line-clamp-3">&ldquo;{r.review}&rdquo;</p>
                  <p className="text-xs text-white/25 mt-2">
                    Submitted: {new Date(r.createdAt).toLocaleDateString("en-US", { dateStyle: "medium" })}
                    {r.travelDate && ` · Traveled: ${new Date(r.travelDate).toLocaleDateString("en-US", { month: "long", year: "numeric" })}`}
                  </p>
                </div>

                <div className="flex sm:flex-col flex-row flex-wrap gap-2 shrink-0">
                  {!r.approved ? (
                    <>
                      <button
                        onClick={() => patch(r.id, { approved: true })}
                        disabled={actionLoading === r.id}
                        className={`${btnClass} bg-[#10B981]/15 border border-[#10B981]/30 text-[#10B981] hover:bg-[#10B981]/25`}
                      >
                        <Check size={13} /> Approve
                      </button>
                      <button
                        onClick={() => remove(r.id)}
                        disabled={actionLoading === r.id}
                        className={`${btnClass} bg-red-500/10 border border-red-500/25 text-red-400 hover:bg-red-500/20`}
                      >
                        <X size={13} /> Reject
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => patch(r.id, { featured: !r.featured })}
                        disabled={actionLoading === r.id}
                        className={`${btnClass} ${
                          r.featured
                            ? "bg-[#F59E0B]/20 border border-[#F59E0B]/40 text-[#F59E0B] hover:bg-[#F59E0B]/10"
                            : "bg-white/5 border border-white/15 text-white/60 hover:text-white"
                        }`}
                      >
                        {r.featured ? <><StarOff size={13} /> Unfeature</> : <><Award size={13} /> Feature</>}
                      </button>
                      <button
                        onClick={() => patch(r.id, { approved: false })}
                        disabled={actionLoading === r.id}
                        className={`${btnClass} bg-white/5 border border-white/15 text-white/50 hover:text-white`}
                      >
                        <X size={13} /> Unapprove
                      </button>
                    </>
                  )}
                  <button
                    onClick={() => remove(r.id)}
                    disabled={actionLoading === r.id}
                    className={`${btnClass} bg-red-500/8 border border-red-500/20 text-red-400/70 hover:bg-red-500/15 hover:text-red-400`}
                  >
                    <Trash2 size={13} /> Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
