import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { EasterEgg } from "@/components/easter-egg";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dhruv Venkat — Engineering, Building, Learning",
  description: "Personal website of Dhruv Venkat, a Computer Engineering student at the University of Waterloo. Software Engineering Intern at Scotiabank.",
  keywords: ["Dhruv Venkat", "Computer Engineering", "University of Waterloo", "Software Developer", "Portfolio", "Scotiabank"],
  authors: [{ name: "Dhruv Venkat" }],
  openGraph: {
    title: "Dhruv Venkat — Engineering, Building, Learning",
    description: "Personal website of Dhruv Venkat, a Computer Engineering student at the University of Waterloo",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
          <EasterEgg />
        </ThemeProvider>
      </body>
    </html>
  );
}

