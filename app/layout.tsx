import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

import "@/app/globals.css";
import "swiper/scss";
import "swiper/scss/pagination";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Embro Drip",
  description: "Embro Drip website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
