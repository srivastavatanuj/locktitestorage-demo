import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SocialSidebar } from "@/components/social-sidebar";
import { Phone } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LOCK-TITE Storage Center - Secure Storage Solutions",
  description:
    "Professional storage solutions with 24/7 security, individual drive-up units, and excellent customer service.",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=" p-3 mb-10" style={{ backgroundColor: "#000000cc" }}>
          <div className="w-4/5 mx-auto flex gap-4 justify-end items-center text-white text-3xl font-medium">
            <Phone className="h-8 w-8" />
            <span>Call us: (530) 742 2508</span>
          </div>
        </div>
        <div className="w-4/5 mx-auto border rounded-lg shadow-lg">
          <Header />
          <SocialSidebar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
