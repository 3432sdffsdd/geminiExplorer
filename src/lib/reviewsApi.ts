// Base URL for the PHP reviews backend.
// In production (static export on Linux hosting) this defaults to a same-domain
// PHP file at /api/reviews.php. For local development against a PHP server, set
// NEXT_PUBLIC_REVIEWS_API in .env.local, e.g. http://localhost:8000/reviews.php
export const REVIEWS_API =
  process.env.NEXT_PUBLIC_REVIEWS_API || "/api/reviews.php";

// Build a URL to the reviews endpoint with optional query params.
export function reviewsUrl(params?: Record<string, string | number>): string {
  if (!params || Object.keys(params).length === 0) return REVIEWS_API;
  const qs = new URLSearchParams(
    Object.entries(params).map(([k, v]) => [k, String(v)])
  ).toString();
  return `${REVIEWS_API}?${qs}`;
}
