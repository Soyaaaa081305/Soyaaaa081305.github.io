import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  metadataBase: new URL("https://soyaaaa081305.github.io"),
  title: "Isaiah Andrei Noda — Full-Stack Developer",
  description:
    "Portfolio of Isaiah Andrei Noda: full-stack, mobile, web, desktop, database, and real-time software projects.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  },
  openGraph: {
    title: "Isaiah Andrei Noda — Full-Stack Developer",
    description:
      "Explore full-stack systems, mobile applications, desktop software, algorithms, and automation projects.",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Isaiah Andrei Noda — Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Isaiah Andrei Noda — Full-Stack Developer",
    description:
      "Full-stack software portfolio: mobile, web, desktop, data, and real-time systems.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
