"use client";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BlurWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
  overflow: hidden;
`;

const BlurContent = styled.div`
  width: 100%;
  height: 100%;
  transition: filter 0.2s ease;
  will-change: filter;
`;

type BlurryBackgroundProps = {
  children: React.ReactNode;
};

const BlurryBackground: React.FC<BlurryBackgroundProps> = ({ children }) => {
  const blurRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (blurRef.current) {
      gsap.to(blurRef.current, {
        filter: "blur(20px)",
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <BlurWrapper>
      <BlurContent ref={blurRef}>{children}</BlurContent>
    </BlurWrapper>
  );
};

export default BlurryBackground;
