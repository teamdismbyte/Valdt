import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Valdt",
  description: "Launch it before you spend it. Built by founders, for founders.",
  metadataBase: new URL("https://valdt.app"),
  openGraph: {
    title: "Valdt",
    description: "Launch it before you spend it. Built by founders, for founders.",
    url: "https://valdt.app",
    siteName: "Valdt",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Valdt",
    description: "Launch it before you spend it. Built by founders, for founders.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
