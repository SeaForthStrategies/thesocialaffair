import type { Metadata } from "next";
import { Playfair_Display, Inter, Great_Vibes } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";
import FloatingContact from "@/components/FloatingContact";
import ScrollToTop from "@/components/ScrollToTop";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "The Social Affair | Events Venue in East Troy WI",
    template: "%s | The Social Affair",
  },
  description:
    "The Social Affair — East Troy's rooftop events venue. Indoor space and open rooftop for private events, dinners, and celebrations. Call (262) 370-2994.",
  keywords: [
    "East Troy events venue",
    "East Troy rooftop venue",
    "Wisconsin event venue",
    "private events East Troy WI",
    "Toothpicks Catering East Troy",
  ],
  openGraph: {
    title: "The Social Affair | Events Venue in East Troy WI",
    description:
      "East Troy's rooftop events venue — intimate indoor space + open-air rooftop for private events, dinners, and celebrations.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${greatVibes.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <TopBar />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingContact />
        <ScrollToTop />
      </body>
    </html>
  );
}
