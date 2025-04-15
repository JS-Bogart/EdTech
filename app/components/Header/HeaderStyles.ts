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
  cursor: pointer;

  @media only screen and (min-width: 800px) {
    &:hover span {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @media only screen and (max-width: 800px) {
    margin: 0px 15px;
  }
`;

export const TextBox = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  width: 150px;
  overflow: hidden;
`;

export const SideText = styled.span<{ $position: "left" | "right" }>`
  position: relative;
  white-space: nowrap;
  font-size: 40px;
  color: #5a003c;
  transition: all 0.9s ease;
  font-family: "Monofett", monospace;
  ${(props) => (props.$position === "left" ? "left: 5px;" : "left: 7px;")}
  transform: translateX(
    ${(props) => (props.$position === "left" ? "150px" : "-150px")}
  );
`;

export const SideTextMobile = styled.span<{ $position: "left" | "right" }>`
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

export const ModalButton = styled.button`
  background-color: #a0dcff;
  color: #5a003c;
  border: 3px solid #5a003c;
  border-radius: 50px;
  height: 50px;
  padding: 4px 15px 3.5px;
  margin: 0px 15px;
  cursor: pointer;
`;
