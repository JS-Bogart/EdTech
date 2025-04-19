import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "./components";
import { LayoutBody } from "./StyledLayout";
import "@fontsource/monofett";
import "@fontsource/bungee-shade";
import "@fontsource/orienta";
import { ModalProvider, VideoListProvider } from "@/app/lib";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EdTech Videos",
  description: "Site by Jeffrey Bogart",
  icons: {
    icon: "/icon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <VideoListProvider>
      <ModalProvider>
        <html lang="en">
          <LayoutBody className={`${geistSans.variable} ${geistMono.variable}`}>
            <Header />
            {children}
            <Footer />
          </LayoutBody>
        </html>
      </ModalProvider>
    </VideoListProvider>
  );
}
