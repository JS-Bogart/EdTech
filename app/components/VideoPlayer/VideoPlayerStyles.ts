"use client";
import styled from "styled-components";
import ReactPlayer from "react-player/youtube";

interface SliderProps {
  value: number;
}

export const VPComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80vw;
  padding-bottom: 20px;

  @media only screen and (max-width: 1000px) {
    padding-bottom: 15px;
  }
  @media only screen and (max-width: 800px) {
    width: 85vw;
  }
  @media only screen and (max-width: 500px) {
    width: 90vw;
  }
`;

export const VideoTitle = styled.h2`
  width: 100%;
  text-align: start;
  color: #5a003c;
  padding-bottom: 20px;
  font-size: 4vw;

  @media only screen and (max-width: 1000px) {
    font-size: 5vw;
    padding-bottom: 15px;
  }
  @media only screen and (max-width: 500px) {
    font-size: 25px;
  }
`;

export const VideoDescription = styled.p`
  width: 100%;
  text-align: start;
  color: #5a003c;
  font-size: 1.5vw;
  padding-bottom: 20px;

  @media only screen and (max-width: 1000px) {
    font-size: 2vw;
    padding-bottom: 15px;
  }
  @media only screen and (max-width: 800px) {
    font-size: 3vw;
  }
  @media only screen and (max-width: 800px) {
    font-size: 14px;
  }
`;

export const SRWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledReactPlayer = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
`;

export const PlayerWrapper = styled.div`
  position: relative;
  background: black;
  border-radius: 12px;
  overflow: hidden;

  &:-webkit-full-screen,
  &:-moz-full-screen,
  &:-ms-fullscreen,
  &:fullscreen {
    width: 100vw;
    height: 100vh;
    max-width: none;
    max-height: none;
    margin: 0;
    border-radius: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const FilterWrap = styled.div<{ $filter: boolean }>`
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  background: black;

  ${PlayerWrapper}:fullscreen & {
    padding-top: 0;
    width: 100%;
    height: 100%;
  }

  background-color: transparent;
  transition: filter 0.1s ease;
  filter: ${(props) =>
    props.$filter ? "brightness(100%)" : "brightness(50%)"};
`;

export const PlayerInner = styled.div``;

export const Controls = styled.div<{ $visible: boolean }>`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 1rem;
  background: rgba(90, 0, 60, 0.9);
  display: ${({ $visible }) => ($visible ? "flex" : "none")};
  flex-wrap: wrap;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  transition: opacity 0.3s ease;
  @media only screen and (max-width: 800px) {
    padding: 0.5rem;
  }
`;

export const ControlsTop = styled.div`
  width: 100%;
`;

export const ControlsBottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const ControlsSides = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  color: #a0dcff;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    color: white;
  }
  &:hover svg g path {
    fill: white;
  }
`;

export const IconTextWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover svg g path {
    fill: white;
  }
`;

export const VolumeSlider = styled.input.attrs({
  type: "range",
})<SliderProps>`
  width: 100px;
  height: 6px;
  border-radius: 3px;
  border: 1px solid #a0dcff;
  appearance: none;
  background: ${({ value }) =>
    `linear-gradient(to right, #a0dcff 0%, #a0dcff ${value * 100}%, #5a003c ${
      value * 100
    }%, #5a003c 100%)`};
  cursor: pointer;

  @media only screen and (max-width: 800px) {
    width: 75px;
  }

  &:hover {
    background: ${({ value }) =>
      `linear-gradient(to right, white 0%, white ${value * 100}%, #5a003c ${
        value * 100
      }%, #5a003c 100%)`};

    &::-webkit-slider-thumb {
      background: white;
    }
    &::-moz-range-thumb {
      background: white;
    }
  }

  &::-webkit-slider-thumb {
    appearance: none;
    height: 16px;
    width: 16px;
    background: #a0dcff;
    border: 1px solid #5a003c;
    border-radius: 50%;
  }

  &::-moz-range-thumb {
    height: 16px;
    width: 16px;
    background: #a0dcff;
    border: 1px solid #5a003c;
    border-radius: 50%;
  }
`;

export const Progress = styled.input.attrs({ type: "range" })<SliderProps>`
  flex: 1;
  height: 6px;
  width: 100%;
  border-radius: 3px;
  border: 1px solid #a0dcff;
  appearance: none;
  background: ${({ value }) =>
    `linear-gradient(to right, #a0dcff 0%, #a0dcff ${value * 100}%, #5a003c ${
      value * 100
    }%, #5a003c 100%)`};
  cursor: pointer;

  &:hover {
    background: ${({ value }) =>
      `linear-gradient(to right, white 0%, white ${value * 100}%, #5a003c ${
        value * 100
      }%, #5a003c 100%)`};
    &::-webkit-slider-thumb {
      background: white;
    }
    &::-moz-range-thumb {
      background: white;
    }
  }

  &::-webkit-slider-thumb {
    appearance: none;
    height: 16px;
    width: 16px;
    background: #a0dcff;
    border: 1px solid #5a003c;
    border-radius: 50%;
  }

  &::-moz-range-thumb {
    height: 16px;
    width: 16px;
    background: #a0dcff;
    border: 1px solid #5a003c;
    border-radius: 50%;
  }
`;

export const SpeedSelect = styled.select`
  background: #a0dcff;
  color: #5a003c;
  border: 2px solid #5a003c;
  padding: 0.25rem;
  border-radius: 4px;
  cursor: pointer;
  margin: 0px 10px;
  @media only screen and (max-width: 800px) {
    margin: 0px 5px;
    width: 50px;
  }
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
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #a0dcff;
    background: #5a003c;
  }
`;

export const OverlayInner = styled.span`
  position: absolute;
  top: 15%;
  left: 27%;
`;

export const TimeTracker = styled.div`
  font-size: 14px;
  color: #ffffff;
  margin-left: 8px;
  white-space: nowrap;
`;
