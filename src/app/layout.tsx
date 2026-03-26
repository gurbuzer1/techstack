import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "TechStack — Detect Technologies Behind Any Website",
  description: "Discover the frameworks, CMS, analytics, and tools powering any website. Free technology detection and stack analysis tool.",
  keywords: "tech stack detector, website technology, framework detector, CMS detector, built with, technology lookup",
  openGraph: {
    title: "TechStack — Detect Technologies Behind Any Website",
    description: "Discover the frameworks, CMS, analytics, and tools powering any website. Free technology detection tool.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechStack — Detect Technologies Behind Any Website",
    description: "Discover the frameworks, CMS, analytics, and tools powering any website.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
