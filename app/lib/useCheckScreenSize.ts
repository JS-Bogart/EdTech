"use client";
import { useState, useEffect } from "react";

//Checks whether the screensize is above or below a specified breakpoint
const useCheckScreenSize = (breakpoint: number) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= breakpoint);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, [breakpoint]);

  return isMobile;
};

export { useCheckScreenSize };
