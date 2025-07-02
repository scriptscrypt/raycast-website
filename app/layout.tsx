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

const appUrl = "https://raycast.sendai.fun";

export const metadata: Metadata = {
  title: "SendAI Raycast",
  authors: [{ name: "SendAI", url: appUrl }],
  description: "Solana shortcuts right in your command bar",
  openGraph: {
    title: "SendAI Raycast",
    description: "Solana shortcuts right in your command bar",
    siteName: "SendAI Raycast",
    images: [
      {
        url: `${appUrl}/og.png`,
        width: 1200,
        height: 630,
        alt: "SendAI Raycast",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SendAI Raycast",
    description: "Solana shortcuts right in your command bar",
    images: [`${appUrl}/og.png`],
  },
  metadataBase: new URL(appUrl),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
