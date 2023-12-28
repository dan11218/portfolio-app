import type { Metadata } from "next";
import "./globals.css";
import { albertSans } from "./fonts";
import Navbar from "./navbar";
import Footer from "./components/footer";

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
      <body
        className={`${albertSans.className} flex h-screen flex-col bg-slate-50 dark:bg-slate-950`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
