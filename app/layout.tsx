import type { Metadata } from "next";
import { jwtDecode } from "jwt-decode";
import { Inter } from "next/font/google";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { Toaster } from "@/app/components/ui/Toaster";
import { StoreInitializer } from "@/app/components/StoreInitializer";
import { useUserStore } from "@/app/hooks/store/useUserStore";
import { createSupabaseServerComponentClient } from "@/app/lib/supabase/server";

import "swiper/scss";
import "swiper/scss/pagination";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Embro Drip",
  description: "Embro Drip website",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = createSupabaseServerComponentClient();

  const { data } = await supabase.auth.getSession();

  // if (data.session?.access_token) {
  //   const jwtDecoded = jwtDecode(data.session.access_token);
  //   useUserStore.setState({ user: jwtDecoded });
  // }

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar session={data.session} />
        <main className="py-12">{children}</main>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}

