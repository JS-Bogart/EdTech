"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BlurWrapper, BlurContent } from "./BlurryBackgroundStyles";

gsap.registerPlugin(ScrollTrigger);

type BlurryBackgroundProps = {
  children: React.ReactNode;
};

//This components creates the blur effect on the homepage background when the
//user scrolls up.
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
