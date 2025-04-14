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
} from "../../public/icons";
import {
  Container,
  CenterWrap,
  OrbitIcon,
  OrbitWrapper,
} from "./OrbitingIconsStyles";

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
  const angleStep = (2 * Math.PI) / icons.length;

  return (
    <Container>
      <CenterWrap>
        <PlanetIcon />
      </CenterWrap>
      <OrbitWrapper ref={orbitRef}>
        {icons.map((icon, index) => {
          const angle = index * angleStep;
          const x = 175 + radius * Math.cos(angle) - 20; // 150 = center of container, 20 = half icon size
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
