import type { Metadata } from "next";
import { Bebas_Neue, Cormorant_Garamond, Outfit } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  style: ["normal", "italic"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cameron Graham Photography",
  description:
    "Premium photography portfolio - skateboarding, portraits, lifestyle, and editorial work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${cormorantGaramond.variable} ${outfit.variable}`}
    >
      <body className="bg-dark text-cream font-body antialiased">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
