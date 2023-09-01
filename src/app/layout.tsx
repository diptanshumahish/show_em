import { ContextProvider } from "@/context/ContextProvider";
import "./styles.scss";
import "./globals.css";

import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

const inter = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Show'em",
    description: "The Markdown Board",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <ContextProvider>
                <body>{children}</body>
            </ContextProvider>
        </html>
    );
}
