import type { Metadata } from "next";
import { Poppins, Inter, Great_Vibes, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const greatVibes = Great_Vibes({
  variable: "--font-script",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GEMINI EXPLORER — Dream, Discover & Explore",
  description:
    "Dream, Discover & Explore with Gemini Explorer. Experience world-class mountains, crystal lakes, rich culture and warm hospitality. Private tours, mountain adventures and unforgettable road trips across Pakistan.",
  keywords: "Pakistan tourism, Hunza Valley, Skardu, Swat Valley, Fairy Meadows, Northern Pakistan tours, K2, Karakoram, Gemini Explorer",
  openGraph: {
    title: "GEMINI EXPLORER — Dream, Discover & Explore",
    description: "Dream, Discover & Explore. Private tours, mountain adventures, cultural journeys across Pakistan.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable} ${cormorant.variable} ${greatVibes.variable}`}>
      <body className="bg-[#020817] text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
