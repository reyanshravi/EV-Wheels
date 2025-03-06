import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

const geist = Geist({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "EvWheels | Buy EV Batteries & Accessories",
  description: "Shop high-quality EV batteries and bicycle accessories at the best prices.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geist.className} bg-gray-100 dark:bg-gray-900`}>
        <Navbar />
        <main className="container mx-auto min-h-screen p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

