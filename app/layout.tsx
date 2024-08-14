import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./navbar";
import Footer from "./footer";
import { inter } from "./fonts";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Danny Graugnard",
  description:
    "My portfolio site was created with Next JS and deployed with Vercel",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`bg-stone-50 text-stone-700 dark:bg-stone-900 dark:text-slate-50 ${inter.className}`}
      >
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
