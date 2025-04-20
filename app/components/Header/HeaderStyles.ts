"use client";
import styled from "styled-components";

export const HeaderWrap = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  height: 70px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  grid-template-columns: [first] 225px [second] 350px [third] 225px;
  justify-content: space-between;
  background-image: linear-gradient(
    rgba(160, 220, 255, 1),
    rgba(160, 220, 255, 0.9),
    rgba(160, 220, 255, 0.8),
    rgba(160, 220, 255, 0.7),
    rgba(160, 220, 255, 0.6),
    rgba(160, 220, 255, 0.4),
    rgba(160, 220, 255, 0.2),
    rgba(160, 220, 255, 0)
  );
  @media only screen and (max-width: 800px) {
    grid-template-columns: [first] auto [second] auto;
  }
`;

export const LinkWrap = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  @media only screen and (max-width: 800px) {
    grid-column-start: 1;
    grid-column-end: 2;
  }
`;

export const HeaderIconWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 54px;
  width: 350px;
  cursor: pointer;

  @media only screen and (min-width: 800px) {
    &:hover span {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @media only screen and (max-width: 800px) {
    margin: 0px 15px;
    justify-content: start;
    width: 200px;
  }
`;

export const TextBox = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  width: 150px;
  overflow: hidden;
  @media only screen and (max-width: 800px) {
    width: 105px;
  }
`;

export const SideText = styled.span<{ $position: "left" | "right" }>`
  position: relative;
  white-space: nowrap;
  font-size: 40px;
  color: #5a003c;
  transition: all 0.9s ease;
  font-family: "Monofett", monospace;
  line-height: 1;
  display: inline-block;
  ${(props) => (props.$position === "left" ? "left: 5px;" : "left: 7px;")}
  transform: translateX(
    ${(props) => (props.$position === "left" ? "150px" : "-150px")}
  );
`;

export const SideTextMobile = styled.span`
  position: relative;
  white-space: nowrap;
  font-size: 40px;
  color: #5a003c;
  font-family: "Monofett", monospace;
  margin: 0px 10px;
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

export const HeaderRight = styled.div`
  grid-column-start: 3;
  display: flex;
  justify-content: end;
  @media only screen and (max-width: 800px) {
    grid-column-start: 3;
  }
`;
