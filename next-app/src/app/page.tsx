import { Home } from "./HomeClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Digital Marketing Agency Dubai | Mints Global",
  description: "Mints Global is Dubai's best digital marketing agency delivering ROI-driven marketing, software & cybersecurity solutions. Get a free consultation today!",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Best Digital Marketing Agency Dubai | Mints Global",
    description: "Mints Global is Dubai's best digital marketing agency delivering ROI-driven marketing, software & cybersecurity solutions. Get a free consultation today!",
    images: [{ url: "https://www.mintsglobal.ae/images/og-mintsglobal-1200x630.jpg" }],
  },
  twitter: {
    title: "Best Digital Marketing Agency Dubai | Mints Global",
    description: "Dubai's best digital marketing agency. ROI-driven marketing, software & cybersecurity for global brands. Book your free consultation now!",
    images: ["https://www.mintsglobal.ae/images/twitter-mintsglobal-1200x628.jpg"],
  }
};

export default function Page() {
  return <Home />;
}
