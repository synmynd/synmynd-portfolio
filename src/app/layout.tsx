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
  title: "SynMynd | AI-First Development Studio",
  description:
    "SynMynd is a high-performance AI studio specializing in n8n orchestration, custom Python automation, and LLM-integrated SaaS solutions built for the global market.",
  icons: {
    icon: "/favicon.png",
  },
  keywords: [
    "AI automation",
    "n8n",
    "Python automation",
    "SaaS development",
    "AI agents",
    "web scraping",
    "intelligent automation",
  ],
  openGraph: {
    title: "SynMynd | AI-First Development Studio",
    description:
      "High-performance AI studio. Intelligent automation, custom Python engines, AI agents, and SaaS engineering.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
