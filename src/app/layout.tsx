import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Paradigm Website",
  description: "Building the future of open source and venture capital.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <Header />
        <main className="min-h-screen pt-[70px] lg:pt-[80px] px-[20px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
