import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import StarsBackground from "@/components/main/StarBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VinRain Portfolio",
  description: "Full-Stack Website Developer and Designer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#030014] overflow-x-hidden relative`}>
        
        <StarsBackground />
        <div className="relative z-10">
          <Navbar />
          <main className="w-full max-w-full">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
