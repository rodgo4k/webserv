import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import LoadingOverlay from "./loading-overlay";
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
  title: "WebServ - Soluções de Hospedagem de Alto Desempenho",
  description: "WebServ - Soluções de Hospedagem de Alto Desempenho",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <LoadingOverlay />
        {children}
      </body>
    </html>
  );
}
