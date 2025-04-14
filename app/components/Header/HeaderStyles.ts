"use client";
import styled from "styled-components";

export const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  /* background-color: black; */
`;
export const HeaderIconWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover span {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const TextBox = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  width: 150px;
  overflow: hidden;
  /* background-color: white; */
`;

export const SideText = styled.span<{ $position: "left" | "right" }>`
  position: relative;
  white-space: nowrap;
  font-size: 40px;
  color: #5a003c;
  transition: all 0.9s ease;
  /* font-family: "Bungee Shade", system-ui; */
  font-family: "Monofett", monospace;
  /* opacity: 0; */
  ${(props) => (props.$position === "left" ? "left: 5px;" : "left: 7px;")}
  transform: translateX(
    ${(props) => (props.$position === "left" ? "150px" : "-150px")}
  );
`;

export const StyledSVG = styled.div`
  svg {
    position: relative;
    width: 50px;
    height: 50px;
    fill: #5a003c;
    left: 2px;
    top: 2px;
  }
`;
