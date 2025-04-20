"use client";
import styled from "styled-components";

export const BlurWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
  overflow: hidden;
`;

export const BlurContent = styled.div`
  width: 100%;
  height: 100%;
  transition: filter 0.2s ease;
  will-change: filter;
`;
