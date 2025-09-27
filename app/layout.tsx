import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Work_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import { Navigation } from "@/components/navigation";
import "./globals.css";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "BPFA | Martial Arts Training in Sri Lanka",
  description:
    "Unleash the Fighter in You at BPFA. Premier martial arts training including MMA, Boxing, Jiu-Jitsu, and Kickboxing in Sri Lanka.",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${workSans.variable}`}
      >
        <Navigation />
        <div>
          <Suspense fallback={null}>{children}</Suspense>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
