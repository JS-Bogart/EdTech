"use client";
import styled from "styled-components";

export const PageWrap = styled.div`
  background-color: #a0dcff;
  width: 100vw;
  height: 100%;
`;

export const Background = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  @media only screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const BgText = styled.span`
  font-family: "Bungee Shade", system-ui;
  color: #5a003c;
  font-size: 5vw;
  @media only screen and (max-width: 800px) {
    font-size: 32px;
    margin: 2rem;
  }
`;
