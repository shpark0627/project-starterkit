import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
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
  title: "Modern Web Starter Kit",
  description: "Next.js 15 + TypeScript + Tailwind CSS v4 + shadcn/ui + lucide-react 스택을 소개하는 스타터킷 랜딩 페이지",
  keywords: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
  openGraph: {
    title: "Modern Web Starter Kit",
    description: "개발자를 위한 모던 웹 개발 스택",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-950 text-zinc-50`}
      >
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}
