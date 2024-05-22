import type { Metadata } from "next";
import "./globals.css";
import { albert_sans } from "./fonts";
import Navbar from "./navbar";
import Footer from "./footer";

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
        className={`${albert_sans.className} bg-slate-100 text-stone-800 dark:bg-stone-900 dark:text-slate-50`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
