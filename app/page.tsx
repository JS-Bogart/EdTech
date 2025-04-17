"use client";
// import React, { useEffect } from "react";
import { PageWrap, Background, BgText } from "./StyledHomepage";
import dynamic from "next/dynamic";
// import { useVideoList } from "./lib/VideoListContext";
import { VideoSection } from "./components";

const DynamicOrbitingIcons = dynamic(
  () => import("./components/OrbitingIcons"),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <PageWrap>
      <Background>
        <BgText>EdTech</BgText>
        <DynamicOrbitingIcons />
        <BgText>Videos</BgText>
      </Background>
      <VideoSection />
    </PageWrap>
  );
}
