import "./globals.css";
import { Fraunces, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";

/* ---- Distinctive type pairing via next/font (self-hosted, no FOUT) ---- */
const display = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-display",
});

const body = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-body",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata = {
  title: "Sunil — Frontend Developer · Portfolio",
  description:
    "Frontend developer crafting performant, animated, production-grade web experiences with Next.js, React & GSAP.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body className="bg-[#0c0b0a] text-[#f3ece1]">{children}</body>
    </html>
  );
}
