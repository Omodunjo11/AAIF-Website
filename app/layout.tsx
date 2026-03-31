import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FadeInObserver from "./components/FadeInObserver";

export const metadata: Metadata = {
  title: "AAIF — Africa AI Fellowship",
  description:
    "Africa AI Fellowship is CADER's applied leadership platform for AI, digital justice, and economic rights.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <FadeInObserver />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
