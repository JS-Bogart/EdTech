"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button, ButtonFill, ButtonText } from "./ButtonComponentStyles";
import gsap from "gsap";

interface ButtonProps {
  buttonText: string;
  buttonClick(): any;
}

const ButtonComponent: React.FC<ButtonProps> = ({
  buttonText,
  buttonClick,
}) => {
  const waterFillRef = useRef(null);
  const ctaRef = useRef(null);
  const [tl, setTimeline] = useState<any>(null);

  useEffect(() => {
    const waterFillElement = waterFillRef.current;

    const waterFillAnimation = gsap
      .timeline({ paused: true })
      .to(waterFillElement, {
        duration: 0.5,
        scaleX: 1,
        ease: "power2.out",
        x: -48,
      });
    setTimeline(waterFillAnimation);
  }, []);

  const handleMouseOver = () => {
    if (tl) {
      tl.timeScale(1).play();
    }
  };

  const handleMouseLeave = () => {
    if (tl) {
      tl.timeScale(2).reverse();
    }
  };

  return (
    <Button
      ref={ctaRef}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      onClick={() => buttonClick()}
    >
      <ButtonText>{buttonText}</ButtonText>
      <ButtonFill
        ref={waterFillRef}
        className="db-cta__water-fill"
      ></ButtonFill>
    </Button>
  );
};

export default ButtonComponent;
