import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/homePageLeCrap/navbar";
import { openSans } from "./ui/homePageLeCrap/fonts";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Site le Crap",
  description: "Site le Crap is meant to lift up spirts. Whenever you feel down, Site le Crap will be there.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${openSans.variable} antialiased`}>
        <nav> <Navbar /> </nav>
        {children}
      </body>
    </html>
  );
}
