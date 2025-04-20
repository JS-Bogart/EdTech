"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  ActingIcon,
  AtomIcon,
  BookIcon,
  CameraIcon,
  CodingIcon,
  DesignIcon,
  GraphIcon,
  MedicineIcon,
  MusicIcon,
  PlanetIcon,
  TubeIcon,
} from "@/app/public/icons";
import {
  Container,
  CenterWrap,
  OrbitIcon,
  OrbitWrapper,
} from "./OrbitingIconsStyles";

//An array of svg icons used by the component
const icons = [
  <ActingIcon />,
  <AtomIcon />,
  <BookIcon />,
  <CameraIcon />,
  <CodingIcon />,
  <DesignIcon />,
  <GraphIcon />,
  <MedicineIcon />,
  <MusicIcon />,
  <TubeIcon />,
];

//This component handles the animation of the background image on the homepage.
//The animations are powered by GSAP, and consist of small spinning icons orbitting
//a larger icon.
const OrbitingIcons: React.FC = () => {
  const orbitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (orbitRef.current) {
      gsap.to(orbitRef.current, {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "linear",
        transformOrigin: "50% 50%",
      });
    }
  }, []);

  const radius = 150;
  const angleStep = (2 * Math.PI) / icons.length; //Allows the icons to be evenly spaced in a circle

  return (
    <Container>
      <CenterWrap>
        <PlanetIcon />
      </CenterWrap>
      <OrbitWrapper ref={orbitRef}>
        {icons.map((icon, index) => {
          const angle = index * angleStep;
          const x = 175 + radius * Math.cos(angle) - 20;
          const y = 175 + radius * Math.sin(angle) - 20;
          return (
            <OrbitIcon key={index} style={{ top: `${y}px`, left: `${x}px` }}>
              {icon}
            </OrbitIcon>
          );
        })}
      </OrbitWrapper>
    </Container>
  );
};

export default OrbitingIcons;
