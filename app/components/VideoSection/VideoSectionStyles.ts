"use client";
import styled from "styled-components";

export const VideoSectionWrap = styled.div`
  position: relative;
  background-color: transparent;
  z-index: 2;
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
`;

export const VideoSectionList = styled.div`
  padding-top: 95vh;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;

  @media only screen and (max-width: 1260px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 740px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

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
