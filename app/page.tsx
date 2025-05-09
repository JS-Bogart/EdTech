"use client";
import { PageWrap, Background, BgText } from "./StyledHomepage";
import dynamic from "next/dynamic";
import { VideoSection, BlurryBackground } from "@/app/components";

//Prevents server side rendering of this component to prevent hydration issues.
const DynamicOrbitingIcons = dynamic(
  () => import("./components/OrbitingIcons"),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <PageWrap>
      <BlurryBackground>
        <Background>
          <BgText>EdTech</BgText>
          <DynamicOrbitingIcons />
          <BgText>Videos</BgText>
        </Background>
      </BlurryBackground>
      <VideoSection />
    </PageWrap>
  );
}
