"use client";
import { PageWrap, Background, BgText } from "./StyledHomepage";
import dynamic from "next/dynamic";
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
