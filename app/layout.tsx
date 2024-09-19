import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/Homepage/Footer";

const helvaSans = localFont({
  src: "./fonts/HelveticaNeueMedium.otf",
  variable: "--font-helva-sans",
  weight: "500",
});
const aeonikMono = localFont({
  src: "./fonts/AeonikTRIAL-Regular.otf",
  variable: "--font-aeonik-mono",
  weight: "100 500"
});

const spaceGrotesk = localFont({
  src: "./fonts/SpaceGrotesk-Light.ttf",
  variable: "--font-space-grotesk",
  weight: "300",
});

export const metadata: Metadata = {
  title: "Luxela",
  description: "Decentralized fashion app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${helvaSans.variable} ${aeonikMono.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
        <Footer/>
      </body>
    </html>
  );
}
