import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VinRain Web Developer",
  description: "Next.js and MERN Full-Stack Website Developer and Designer",
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
        <StarsCanvas/>
        <div className="w-full max-w-full">
          {children}
        </div>
       
      </body>
    </html>
  );
}

