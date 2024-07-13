import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.scss";
import Navbar from "@/components/ui/navbar/Navbar";
import Cart from "@/components/ui/cart/Cart";

const inter = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Carhartt WIP",
    description: "Carhartt wip shop",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar />
                <Cart />
                <div className="pt-20">
                    {children}
                </div>
            </body>
        </html>
    );
}
