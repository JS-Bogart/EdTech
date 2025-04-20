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

export const VideoSectionList = styled.ul`
  padding-top: 95vh;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 10px;
  row-gap: 30px;

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

export const VideoListItem = styled.li`
  list-style: none;
`;
