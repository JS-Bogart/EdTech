"use client";
import { PageWrap, Background } from "./StyledHomepage";
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
        <DynamicOrbitingIcons />
      </Background>
    </PageWrap>
  );
}
