import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import MainNavigation from "@/components/main-navigation/main-navigations";

export const metadata: Metadata = {
  title: "Hamfund",
  description: "Join us in making a real difference, one squeak at a time! 🚀🐹",
};

const comicNeue = localFont({
  src: [
    {
      path: "../public/fonts/ComicNeue-Bold.ttf",
      weight: "800",
    },
    {
      path: "../public/fonts/ComicNeue-Light.ttf",
      weight: "300",
    },
    {
      path: "../public/fonts/ComicNeue-Regular.ttf",
      weight: "400",
    },
  ],
  variable: "--font-comicNeue",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${comicNeue.variable} bg-off-black font-sans overflow-x-hidden`}>
        <MainNavigation />
        {children}
      </body>
    </html>
  );
}
