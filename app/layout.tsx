import type { Metadata } from "next";
import { Kode_Mono } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from 'geist/font/mono';


const KodeMono = Kode_Mono({ 
  subsets: ["latin"],
  variable: "--font-caption",
 });

export const metadata: Metadata = {
  title: "Mai's Portfolio - Computer School Student",
  description: "2nd Year student, in search for an internship.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={cn(
        GeistSans.variable, 
        KodeMono.variable,
        GeistMono.variable,
        "font-sans h-full bg-background text-foreground")}>{children}</body>
    </html>
  );
}
