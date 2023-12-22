import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { albertSans } from "./fonts";
import Navbar from "./navbar";

export const metadata: Metadata = {
  title: "Danny Graugnard",
  description: "My portfolio site created with Nextjs",
  icons: {
    icon: "/icons/favicon",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${albertSans.className} flex flex-col`}>
        <SpeedInsights />
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
