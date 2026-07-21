import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: "Matthew Arvidson — Software Engineer",
  description:
    "Software engineer with 10 years of experience across AI, fintech, full-stack, and systems programming.",
  openGraph: {
    title: "Matthew Arvidson — Software Engineer",
    description:
      "AI · Fintech · Full-Stack · Systems — a portfolio that speaks for itself.",
    url: "https://matthew-arvidson.com",
    siteName: "Matthew Arvidson",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
