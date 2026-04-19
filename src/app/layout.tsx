import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import { Header } from "@/components/sections/header";
import "./globals.css";
import { Footer } from "@/components/sections/footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eien Global |  Export Partner",
  description:
    "Eien Global helps importers with reliable sourcing, quality assurance, and export operations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#FFFFFF] font-[family-name:var(--font-manrope)] text-[#020617]">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
