"use client";
import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 350px;
  height: 350px;
`;

export const CenterWrap = styled.div`
  width: 175px;
  height: 175px;
  border-radius: 50%;
  position: absolute;
  top: 52%;
  left: 52%;
  transform: translate(-50%, -50%);
  svg {
    width: 100%;
    height: 100%;
  }
`;

const spinCCW = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg); 
  }
`;

export const OrbitIcon = styled.div`
  width: 40px;
  height: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(calc(-50% + 20px), calc(-50% + 20px));
  animation: ${spinCCW} 4s linear infinite;
  transform-origin: center center;

  svg {
    width: 100%;
    height: 100%;
    fill: #5a003c;
  }
`;

export const OrbitWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform-origin: center center;
`;
