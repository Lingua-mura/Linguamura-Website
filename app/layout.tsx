import type { Metadata } from "next";
import { Geist, Geist_Mono, Nunito } from "next/font/google";
import "./globals.css";
import { Header } from "./(landing)/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Welcome to Lingua mura",
  description: "Your Education, Health, Travel, and Entertainment in One Place",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={`${font.className}`}
      >
        {children}
      </body>
    </html>
  );
}
