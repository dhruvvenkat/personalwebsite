import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PointerTrail } from "./components/pointer-trail";
import { ThemeToggle } from "./components/theme-toggle";

const themeInitializerScript = `
(() => {
  try {
    const theme = window.sessionStorage.getItem("dhruvs-site-theme");

    if (theme === "light" || theme === "dark") {
      document.documentElement.dataset.theme = theme;
      document.documentElement.style.colorScheme = theme;
    }
  } catch {
  }
})();
`;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "dhruv venkat",
  description: "hi im dhruv",
  openGraph: {
    title: "dhruv venkat",
    description: "hi im dhruv",
    url: "https://dhruvvenkat.com",
    siteName: "dhruv venkat",
    images: [
      {
        url: "dhruvs-site/public/icons/SP-Studio (1).png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: themeInitializerScript }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PointerTrail />
        <ThemeToggle />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
