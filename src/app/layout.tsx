import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar/page";
import { CartProvider } from "../../context/cart-context";
import Footer from "../components/Footer/page";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TECHNEST- E-Commerce Website",
  description: "A modern e-commerce platform built with Next.js, Tailwind CSS, offering a responsive and seamless shopping experience."
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
        <Navbar/>
        {children}
        <Footer/>
        </CartProvider>
       </body>
    </html>
  );
}



