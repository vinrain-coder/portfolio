import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

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
      <body
        className={`${inter.className} bg-[#030014] overflow-x-hidden`} 
      >
        <Navbar />
        <div className="w-full max-w-full"> 
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
