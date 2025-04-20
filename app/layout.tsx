import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";
import { Header, Footer } from "./components";
import { LayoutBody } from "./StyledLayout";
import { ModalProvider, VideoListProvider } from "@/app/lib";
import "@fontsource/monofett";
import "@fontsource/bungee-shade";
import "@fontsource/orienta";

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
          <Head>
            <link
              rel="preconnect"
              href="https://take-home-assessment-423502.uc.r.appspot.com"
            />
          </Head>
          <LayoutBody>
            <Header />
            {children}
            <Footer />
          </LayoutBody>
        </html>
      </ModalProvider>
    </VideoListProvider>
  );
}
