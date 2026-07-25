import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE } from "./lib/constants";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: `${SITE.name} – ${SITE.title}`,
  description: SITE.description,
  openGraph: {
    title: `${SITE.name} – ${SITE.title}`,
    description: SITE.description,
    url: SITE.url,
    images: [{ url: SITE.image }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-background text-text">
        <Navbar />
        <main>{children}</main>
        <Footer />
        {/* Glow orbs */}
        <div className="fixed top-[-200px] right-[-150px] w-[500px] h-[500px] bg-accent/30 rounded-full blur-[100px] pointer-events-none z-0" />
        <div className="fixed bottom-[-150px] left-[-150px] w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-[100px] pointer-events-none z-0" />
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-400/10 rounded-full blur-[100px] pointer-events-none z-0" />
      </body>
    </html>
  );
}
