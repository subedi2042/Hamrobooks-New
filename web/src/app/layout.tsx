import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Hamrobooks - Authentic Nepali Literature",
    description: "Discover curated collections and hard-to-find classics stocked in and shipped from the USA with free shipping.",
};

import { AuthProvider } from "@/context/AuthContext";
import { BannerProvider } from "@/context/BannerContext";
import { PromoProvider } from "@/context/PromoContext";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                    rel="stylesheet"
                />
            </head>
            <body
                className={`${inter.className} bg-bg-light text-slate-dark antialiased`}
            >
                <AuthProvider>
                    <PromoProvider>
                        <BannerProvider>
                            <CartProvider>{children}</CartProvider>
                        </BannerProvider>
                    </PromoProvider>
                </AuthProvider>
            </body>
        </html>
    );
}
