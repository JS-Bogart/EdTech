"use client";
import { PageWrap, Background, BgText } from "./StyledHomepage";
import dynamic from "next/dynamic";

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
    </PageWrap>
  );
}
