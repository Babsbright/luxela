import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/Homepage/Footer";
import { CartProvider } from "./context/CartContext";

// Import fonts
const helvaSans = localFont({
  src: "./fonts/HelveticaNeueMedium.otf",
  variable: "--font-helva-sans",
  weight: "500",
});
const aeonikMono = localFont({
  src: "./fonts/AeonikTRIAL-Regular.otf",
  variable: "--font-aeonik-mono",
  weight: "100 500",
});
const spaceGrotesk = localFont({
  src: "./fonts/SpaceGrotesk-Light.ttf",
  variable: "--font-space-grotesk",
  weight: "300",
});

// Metadata for the application
export const metadata: Metadata = {
  title: "Luxela",
  description: "Decentralized fashion app",
};

// Root layout for the app
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${helvaSans.variable} ${aeonikMono.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {/* Wrapping the entire app with CartProvider */}
        <CartProvider>
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
