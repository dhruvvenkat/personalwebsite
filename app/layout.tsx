import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
    title: "Dhruv Venkat | Portfolio",
    description:
        "A premium liquid-glass portfolio for a software engineer focused on AI systems, developer tooling, automation, and infrastructure.",
    applicationName: "Dhruv Venkat Portfolio"
};

export const viewport: Viewport = {
    themeColor: "#0B1020",
    colorScheme: "dark"
};

type RootLayoutProps = Readonly<{
    children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
