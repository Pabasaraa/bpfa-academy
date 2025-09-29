import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Work_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import { Navigation } from "@/components/navigation";
import { StructuredData } from "@/components/structured-data";
import "./globals.css";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://bpfa.lk'),
  title: {
    default: "BPFA | Black Panther Fighting Academy - Premier Martial Arts Training in Sri Lanka",
    template: "%s | BPFA - Black Panther Fighting Academy",
  },
  description:
    "Black Panther Fighting Academy (BPFA) - Sri Lanka's premier martial arts training center. Master MMA, Boxing, Brazilian Jiu-Jitsu, Kickboxing, and more with world-class trainers. Join BPFA today!",
  keywords: [
    "BPFA",
    "Black Panther Fighting Academy",
    "martial arts Sri Lanka",
    "MMA training Sri Lanka",
    "boxing classes Sri Lanka",
    "Brazilian Jiu-Jitsu Sri Lanka",
    "kickboxing Sri Lanka",
    "martial arts academy",
    "fighting training",
    "self defense Sri Lanka"
  ],
  authors: [{ name: "BPFA Team" }],
  creator: "Black Panther Fighting Academy",
  publisher: "Black Panther Fighting Academy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "BPFA | Black Panther Fighting Academy - Premier Martial Arts Training",
    description: "Transform your body and mind at Sri Lanka's premier martial arts academy. Master MMA, Boxing, Jiu-Jitsu, and more with world-class trainers.",
    url: "https://bpfa.lk",
    siteName: "Black Panther Fighting Academy",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "BPFA - Black Panther Fighting Academy Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BPFA | Black Panther Fighting Academy - Premier Martial Arts Training",
    description: "Transform your body and mind at Sri Lanka's premier martial arts academy. Master MMA, Boxing, Jiu-Jitsu, and more.",
    images: ["/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add Google Search Console verification when available
    // google: "google-site-verification-code",
  },
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
        <StructuredData />
        <Analytics />
      </body>
    </html>
  );
}
