import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "./components";
import { LayoutBody } from "./StyledLayout";
import "@fontsource/monofett";
import "@fontsource/bungee-shade";
import "@fontsource/orienta";
import { ModalProvider } from "./lib/ModalContext";
import { VideoListProvider } from "./lib/VideoListContext";

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
          </LayoutBody>
        </html>
      </ModalProvider>
    </VideoListProvider>
  );
}
