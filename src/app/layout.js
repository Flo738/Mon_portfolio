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

export const metadata = {
    title: "Florian Pacard - Développeur Full-Stack ",
    description: "Portfolio de Florian Pacard, développeur Full-Stack. Découvrez mes projets web modernes et mes compétences techniques.",
    keywords: "développeur web, full-stack, React, Next.js, Node.js, portfolio",
    icons: {
        icon: '/portfolioicon.svg',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="fr">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        {children}
        </body>
        </html>
    );
}