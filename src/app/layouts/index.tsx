import type { Metadata, Viewport } from "next";

import React from "react";

import { Urbanist } from "next/font/google";

import { HomeHeader } from "@/pages/home/components/HomeHeader/ui";
import "@/shared/styles/index.css";
import { Menu } from "@/shared/ui/Menu/ui";

import "../styles";

const urbanistSans = Urbanist({
  variable: "--font-urbanist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Telegram Banking App",
  description: "Banking App for Telegram",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
  },
  other: {
    "telegram:viewport":
      "width=device-width, initial-scale=1.0, user-scalable=no",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 1.0,
  userScalable: false,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body className={`${urbanistSans.variable} antialiased md:hidden`}>
        <HomeHeader className="my-16" />
        {children}
        <Menu />
      </body>
    </html>
  );
}
