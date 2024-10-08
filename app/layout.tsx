import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/Homepage/Footer";
import { CartProvider } from "./context/CartContext";
import Head from "next/head";

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
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </Head>
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
