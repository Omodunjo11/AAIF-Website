import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FadeInObserver from "./components/FadeInObserver";

export const metadata: Metadata = {
  title: "AAIF — Africa AI Fellowship",
  description:
    "A continental platform for applied AI leadership.",
};

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cormorant.className}>
        <Navbar />
        <FadeInObserver />
        {children}
        <Footer />
      </body>
    </html>
  );
}
