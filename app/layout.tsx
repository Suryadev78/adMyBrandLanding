import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import 'keen-slider/keen-slider.min.css';
import "./globals.css";
import { ThemeScript } from "@/components/ui/ThemeScript";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ADmyBRAND AI Suite",
  description: "AI-powered SaaS landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head />
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeScript />
        {children}
      </body>
    </html>
  );
}
