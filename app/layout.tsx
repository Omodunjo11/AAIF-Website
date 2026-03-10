import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FadeInObserver from "./components/FadeInObserver";

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
        {children}
        <Footer />
      </body>
    </html>
  );
}
