"use client";
import styled from "styled-components";

export const VideoWrap = styled.div`
  border-radius: 10px;
`;

export const ImageWrap = styled.div`
  position: relative;
  width: 24vw;
  height: 14vw;

  @media only screen and (max-width: 1260px) {
    width: 32vw;
    height: 18vw;
  }
  @media only screen and (max-width: 1000px) {
    width: 48vw;
    height: 27vw;
  }

  @media only screen and (max-width: 740px) {
    width: 95vw;
    height: 54vw;
  }

  & img {
    object-fit: cover;
  }
`;

export const TextWrap = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  &:hover {
    background-color: rgb(0, 0, 0, 0.8);
  }

  &:hover span {
    opacity: 1;
  }
`;

export const VideoText = styled.span`
  opacity: 0;
  font-family: "Orienta", sans-serif;
  font-size: 20px;
  text-align: center;
`;

export const Fallback = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: #5a003c;
`;

export const OverlayPlayButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3rem;
  color: #5a003c;
  background: #a0dcff;
  border: none;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const OverlayInner = styled.span`
  position: absolute;
  top: 15%;
  left: 27%;
`;
