import type { Metadata } from "next";
import "./globals.css";
import { albert_sans } from "./fonts";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "Danny Graugnard",
  description:
    "My portfolio site was created with Next JS and deployed with Vercel",
  icons: {
    icon: "/static/favicon.ico",
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
        className={`${albert_sans.className} flex flex-col bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-100`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
