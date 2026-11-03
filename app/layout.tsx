import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "John Vince Key Dumaguit (NyeowZ) | Software Developer",
  description: "Portfolio of John Vince Key Dumaguit (NyeowZ) — Software Developer specializing in responsive web applications, REST APIs, and automated tools.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-white text-slate-900 bg-dot-grid selection:bg-blue-100 selection:text-blue-700">
        {children}
      </body>
    </html>
  );
}
