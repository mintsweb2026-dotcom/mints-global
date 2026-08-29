import type { Metadata } from "next";
import { Inter, Cairo, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const cairo = Cairo({
  variable: "--font-arabic",
  subsets: ["arabic", "latin"],
});

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Best Digital Marketing Agency Dubai | Mints Global",
    template: "%s | Mints Global",
  },
  description: "Mints Global is Dubai's best digital marketing agency delivering ROI-driven marketing, software development & cybersecurity solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cairo.variable} ${outfit.variable}`}>
      <body className="min-h-screen relative flex flex-col selection:bg-olive-500 selection:text-white bg-olive-950 font-body antialiased">
        {/* We will add Navbar and Footer here once they are ported to Next.js */}
        <main className="flex-1 flex flex-col w-full relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
