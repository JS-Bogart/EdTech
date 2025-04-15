"use client";
import styled from "styled-components";

export const Button = styled.button`
  position: relative;
  background-color: #a0dcff;
  border: 3px solid #5a003c;
  border-radius: 50px;
  height: 50px;
  padding: 4px 15px 3.5px;
  margin: 0px 15px;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    background-color: #5a003c;
    transition-delay: 0.2s;
  }

  &:hover span {
    color: #a0dcff;
  }
`;

export const ButtonText = styled.span`
  position: relative;
  color: #5a003c;
  z-index: 2;
  font-family: "Orienta", sans-serif;
  font-weight: bold;
  font-size: 16px;
`;

export const ButtonFill = styled.div`
  position: absolute;
  top: -18px;
  left: 10px;
  right: 0;
  bottom: 0;
  transform: scaleX(0);
  transform-origin: left;
  background-color: #5a003c;
  z-index: 1;
  border-radius: 50px;
  width: 160%;
  height: 80px;
`;
